
import React from 'react';
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
    const { startConnecting, stopConnecting, setNodes } = useGraphicsContext();
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-node');

    const handleDragStart = (e: React.DragEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        e.dataTransfer.setData('text/plain', JSON.stringify({ nodeId: id, offsetX, offsetY }));
        e.dataTransfer.effectAllowed = 'move';
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
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    const headerClass = createStyle({
        padding: '8px 12px',
        borderBottom: `1px solid ${theme.colors.border}`,
        fontWeight: 600,
        fontSize: '14px',
    });
    
    const bodyClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    });

    const contentClass = createStyle({
        padding: children ? '8px 12px' : '0',
        gridColumn: '1 / -1', // Span across both columns
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
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
        }
    });

    return (
        <div
            className={nodeClass}
            style={{ left: position.x, top: position.y }}
            draggable
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()} // Necessary for drop to work
        >
            <div className={headerClass}>{label}</div>
            <div className={bodyClass}>
                <div className={socketsContainerClass(false)}>
                    {inputs.map(socket => (
                        <div key={socket.id} className={socketClass(false)}>
                            <div 
                                className={socketHandleClass}
                                onMouseDown={(e) => startConnecting(id, socket.id, 'input', e)}
                                onMouseUp={() => stopConnecting(id, socket.id, 'input')}
                            />
                            <span style={{ fontSize: '12px' }}>{socket.label}</span>
                        </div>
                    ))}
                </div>
                 <div className={socketsContainerClass(true)}>
                    {outputs.map(socket => (
                        <div key={socket.id} className={socketClass(true)}>
                            <div 
                                className={socketHandleClass} 
                                onMouseDown={(e) => startConnecting(id, socket.id, 'output', e)}
                                onMouseUp={() => stopConnecting(id, socket.id, 'output')}
                            />
                            <span style={{ fontSize: '12px' }}>{socket.label}</span>
                        </div>
                    ))}
                </div>
                {children && <div className={contentClass}>{children}</div>}
            </div>
        </div>
    );
};
