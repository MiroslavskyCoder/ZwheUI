import React, { useRef, useLayoutEffect, useState } from 'react';
import { useGraphicsContext, Position } from './GraphicsContext';
import { useStyles, useTheme } from '../../core';

interface NodeProps {
    id: string;
    label: string;
    position: { x: number; y: number };
    size?: { width: number, height: number };
    inputs: { id: string; label: string }[];
    outputs: { id: string; label: string }[];
    children?: React.ReactNode;
    onContextMenu?: (event: React.MouseEvent, nodeId: string) => void;
}

export const Node: React.FC<NodeProps> = ({ id, label, position, size, inputs, outputs, children, onContextMenu }) => {
    const { startConnecting, stopConnecting, setNodes, zoom, registerSocketPositions } = useGraphicsContext();
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-node');
    const dragState = useRef({ isDragging: false, startPos: { x: 0, y: 0 }, startMouse: { x: 0, y: 0 } });
    const nodeRef = useRef<HTMLDivElement>(null);
    const socketRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const resizeState = useRef<{
        isResizing: boolean;
        handle: string;
        startPos: Position;
        startSize: { width: number; height: number };
        startMouse: Position;
    } | null>(null);
    const [nodeDimensions, setNodeDimensions] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const element = nodeRef.current;
        if (!element) return;

        const observer = new ResizeObserver(() => {
            setNodeDimensions({ width: element.offsetWidth, height: element.offsetHeight });
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        if (!nodeRef.current) return;
        const nodeRect = nodeRef.current.getBoundingClientRect();
        const positions: Record<string, Position> = {};
    
        Object.entries(socketRefs.current).forEach(([socketId, socketEl]) => {
            if (socketEl) {
                const socketRect = socketEl.getBoundingClientRect();
                // Position of socket center relative to node top-left, adjusted for zoom
                positions[socketId] = {
                    x: (socketRect.left - nodeRect.left + socketRect.width / 2) / zoom,
                    y: (socketRect.top - nodeRect.top + socketRect.height / 2) / zoom,
                };
            }
        });
    
        if (Object.keys(positions).length > 0) {
            registerSocketPositions(id, positions);
        }
    }, [id, inputs.length, outputs.length, registerSocketPositions, zoom, size, nodeDimensions]); // Rerun if sockets change, zoom, size, or content-driven dimensions change

    const handleDragMouseDown = (e: React.MouseEvent) => {
        // Prevent pan from starting when dragging a node
        e.stopPropagation();
        
        dragState.current = {
            isDragging: true,
            startPos: { ...position },
            startMouse: { x: e.clientX, y: e.clientY },
        };

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!dragState.current.isDragging) return;
            const dx = (moveEvent.clientX - dragState.current.startMouse.x) / zoom;
            const dy = (moveEvent.clientY - dragState.current.startMouse.y) / zoom;
            setNodes(prev =>
                prev.map(node =>
                    node.id === id
                        ? { ...node, position: { x: dragState.current.startPos.x + dx, y: dragState.current.startPos.y + dy } }
                        : node
                )
            );
        };

        const handleMouseUp = () => {
            dragState.current.isDragging = false;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleResizeMouseDown = (e: React.MouseEvent, handle: string) => {
        e.stopPropagation();
        const initialWidth = size?.width ?? nodeRef.current?.offsetWidth ?? 180;
        const initialHeight = size?.height ?? nodeRef.current?.offsetHeight ?? 100;

        resizeState.current = {
            isResizing: true,
            handle,
            startPos: { ...position },
            startSize: { width: initialWidth, height: initialHeight },
            startMouse: { x: e.clientX, y: e.clientY },
        };

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!resizeState.current?.isResizing) return;

            const dx = (moveEvent.clientX - resizeState.current.startMouse.x) / zoom;
            const dy = (moveEvent.clientY - resizeState.current.startMouse.y) / zoom;

            let newWidth = resizeState.current.startSize.width;
            let newHeight = resizeState.current.startSize.height;
            let newX = resizeState.current.startPos.x;
            let newY = resizeState.current.startPos.y;

            const minWidth = 180;
            const minHeight = 120;

            if (handle.includes('right')) {
                newWidth = Math.max(minWidth, resizeState.current.startSize.width + dx);
            }
            if (handle.includes('bottom')) {
                newHeight = Math.max(minHeight, resizeState.current.startSize.height + dy);
            }
            if (handle.includes('left')) {
                const calculatedWidth = resizeState.current.startSize.width - dx;
                if (calculatedWidth >= minWidth) {
                    newWidth = calculatedWidth;
                    newX = resizeState.current.startPos.x + dx;
                }
            }
            if (handle.includes('top')) {
                 const calculatedHeight = resizeState.current.startSize.height - dy;
                 if (calculatedHeight >= minHeight) {
                    newHeight = calculatedHeight;
                    newY = resizeState.current.startPos.y + dy;
                 }
            }

            setNodes(prev =>
                prev.map(node =>
                    node.id === id
                        ? { ...node, position: { x: newX, y: newY }, size: { width: newWidth, height: newHeight } }
                        : node
                )
            );
        };
        
        const handleMouseUp = () => {
            resizeState.current = null;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const nodeClass = createStyle({
        position: 'absolute',
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        userSelect: 'none',
        pointerEvents: 'auto', // Capture mouse events on the node
        display: 'flex',
        flexDirection: 'column',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    const headerClass = createStyle({
        padding: '8px 12px',
        borderBottom: `1px solid ${theme.colors.border}`,
        fontWeight: 600,
        fontSize: '14px',
        color: theme.colors.text,
        cursor: 'grab',
    });
    
    const bodyClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        flex: 1,
        minHeight: 0,
    });

    const contentClass = createStyle({
        padding: children ? '8px 12px' : '0',
        gridColumn: '1 / -1',
    });

    const socketsContainerClass = (isOutput: boolean) => createStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '8px 12px',
        alignItems: isOutput ? 'flex-end' : 'flex-start',
        justifyContent: 'space-around',
        height: '100%',
    });

    const socketClass = (isOutput: boolean) => createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexDirection: isOutput ? 'row-reverse' : 'row',
    });
    
    const socketHandleClass = createStyle({
        width: '12px',
        height: '12px',
        backgroundColor: theme.colors.background,
        border: `2px solid ${theme.colors.secondary}`,
        borderRadius: '50%',
        cursor: 'crosshair',
        transition: 'background-color 0.2s, border-color 0.2s',
        '&:hover': {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
        }
    });

    const resizeHandleBase = {
        position: 'absolute' as 'absolute',
        backgroundColor: 'transparent',
        zIndex: 10,
    };
    
    const handleClasses: Record<string, string> = {
        'top-left': createStyle({...resizeHandleBase, top: '-5px', left: '-5px', width: '10px', height: '10px', cursor: 'nwse-resize'}),
        'top-right': createStyle({...resizeHandleBase, top: '-5px', right: '-5px', width: '10px', height: '10px', cursor: 'nesw-resize'}),
        'bottom-left': createStyle({...resizeHandleBase, bottom: '-5px', left: '-5px', width: '10px', height: '10px', cursor: 'nesw-resize'}),
        'bottom-right': createStyle({...resizeHandleBase, bottom: '-5px', right: '-5px', width: '10px', height: '10px', cursor: 'nwse-resize'}),
        'top': createStyle({...resizeHandleBase, top: '-5px', left: '5px', right: '5px', height: '10px', cursor: 'ns-resize'}),
        'bottom': createStyle({...resizeHandleBase, bottom: '-5px', left: '5px', right: '5px', height: '10px', cursor: 'ns-resize'}),
        'left': createStyle({...resizeHandleBase, top: '5px', bottom: '5px', left: '-5px', width: '10px', cursor: 'ew-resize'}),
        'right': createStyle({...resizeHandleBase, top: '5px', bottom: '5px', right: '-5px', width: '10px', cursor: 'ew-resize'}),
    };

    return (
        <div
            ref={nodeRef}
            className={nodeClass}
            style={{ 
                left: position.x, 
                top: position.y,
                width: size ? `${size.width}px` : 'auto',
                minWidth: '180px',
                height: size ? `${size.height}px` : 'auto',
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onContextMenu?.(e, id);
            }}
            data-node-id={id}
        >
            {Object.entries(handleClasses).map(([handleName, className]) => (
                <div 
                    key={handleName}
                    className={className}
                    onMouseDown={(e) => handleResizeMouseDown(e, handleName)}
                />
            ))}
            <div className={headerClass} onMouseDown={handleDragMouseDown}>{label}</div>
            <div className={bodyClass}>
                <div className={socketsContainerClass(false)}>
                    {inputs.map(socket => (
                        <div key={socket.id} data-socket-id={socket.id} data-socket-type="input" className={socketClass(false)}>
                            <div 
                                // FIX: The ref callback function was implicitly returning the element, which is not a valid return type for a ref. By wrapping the assignment in curly braces, the arrow function now returns `void`, resolving the TypeScript error.
                                ref={el => { socketRefs.current[socket.id] = el; }}
                                className={socketHandleClass}
                                onMouseDown={(e) => { e.stopPropagation(); startConnecting(id, socket.id, 'input', e); }}
                                onMouseUp={() => stopConnecting(id, socket.id, 'input')}
                            />
                            <span style={{ fontSize: '12px', color: theme.colors.textSecondary }}>{socket.label}</span>
                        </div>
                    ))}
                </div>
                 <div className={socketsContainerClass(true)}>
                    {outputs.map(socket => (
                        <div key={socket.id} data-socket-id={socket.id} data-socket-type="output" className={socketClass(true)}>
                            <div 
                                // FIX: The ref callback function was implicitly returning the element, which is not a valid return type for a ref. By wrapping the assignment in curly braces, the arrow function now returns `void`, resolving the TypeScript error.
                                ref={el => { socketRefs.current[socket.id] = el; }}
                                className={socketHandleClass} 
                                onMouseDown={(e) => { e.stopPropagation(); startConnecting(id, socket.id, 'output', e); }}
                                onMouseUp={() => stopConnecting(id, socket.id, 'output')}
                            />
                            <span style={{ fontSize: '12px', color: theme.colors.textSecondary }}>{socket.label}</span>
                        </div>
                    ))}
                </div>
                {children && <div className={contentClass}>{children}</div>}
            </div>
        </div>
    );
};