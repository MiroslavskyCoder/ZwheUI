import React, { useRef } from 'react';
import { useGraphicsContext } from './GraphicsContext';
import { useStyles, useTheme } from '../../core';

interface NodeProps {
    id: string;
    label: string;
    position: { x: number; y: number };
    inputs: { id: string; label: string }[];
    outputs: { id: string; label: string }[];
    children?: React.ReactNode;
}

export const Node: React.FC<NodeProps> = ({ id, label, position, inputs, outputs, children }) => {
    const { startConnecting, stopConnecting, setNodes, zoom } = useGraphicsContext();
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-node');
    const dragState = useRef({ isDragging: false, startPos: { x: 0, y: 0 }, startMouse: { x: 0, y: 0 } });

    const handleMouseDown = (e: React.MouseEvent) => {
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

    const nodeClass = createStyle({
        position: 'absolute',
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        minWidth: '180px',
        userSelect: 'none',
        cursor: 'grab',
        pointerEvents: 'auto', // Capture mouse events on the node
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
    });
    
    const bodyClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
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

    return (
        <div
            className={nodeClass}
            style={{ left: position.x, top: position.y }}
            onMouseDown={handleMouseDown}
            data-node-id={id}
        >
            <div className={headerClass}>{label}</div>
            <div className={bodyClass}>
                <div className={socketsContainerClass(false)}>
                    {inputs.map(socket => (
                        <div key={socket.id} data-socket-id={socket.id} data-socket-type="input" className={socketClass(false)}>
                            <div 
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