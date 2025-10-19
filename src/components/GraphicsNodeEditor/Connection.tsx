import React, { useState, useLayoutEffect } from 'react';
import { useGraphicsContext, ConnectionData } from './GraphicsContext';
import { useTheme } from '../../core';

interface ConnectionProps {
    connection: ConnectionData;
    onContextMenu: (e: React.MouseEvent, connection: ConnectionData) => void;
}

const getPath = (start: { x: number; y: number }, end: { x: number; y: number }, type: 'curved' | 'straight' = 'curved') => {
    if (type === 'straight') {
        return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
    }
    const dx = Math.abs(start.x - end.x);
    const c1 = { x: start.x + dx * 0.6, y: start.y };
    const c2 = { x: end.x - dx * 0.6, y: end.y };
    return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
};

export const Connection: React.FC<ConnectionProps> = ({ connection, onContextMenu }) => {
    const { nodes, pan, zoom, editorRef } = useGraphicsContext();
    const { theme } = useTheme();
    const [pathProps, setPathProps] = useState<{ d: string, stroke: string } | null>(null);

    const { sourceNodeId, sourceSocketId, targetNodeId, targetSocketId, color: connectionColor, type } = connection;

    useLayoutEffect(() => {
        const sourceNode = nodes.find(n => n.id === sourceNodeId);
        const editorEl = editorRef.current;
        
        if (!sourceNode || !editorEl) {
            setPathProps(null);
            return;
        }

        const sourceSocketEl = document.querySelector(`[data-node-id="${sourceNodeId}"] [data-socket-id="${sourceSocketId}"][data-socket-type="output"] > div`);
        const targetSocketEl = document.querySelector(`[data-node-id="${targetNodeId}"] [data-socket-id="${targetSocketId}"][data-socket-type="input"] > div`);

        if (!sourceSocketEl || !targetSocketEl) {
            setPathProps(null);
            return;
        }

        const sourceRect = sourceSocketEl.getBoundingClientRect();
        const targetRect = targetSocketEl.getBoundingClientRect();
        const editorRect = editorEl.getBoundingClientRect();

        const getLocalPos = (rect: DOMRect) => {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            return {
                x: (centerX - editorRect.left - pan.x) / zoom,
                y: (centerY - editorRect.top - pan.y) / zoom,
            };
        };

        const startPos = getLocalPos(sourceRect);
        const endPos = getLocalPos(targetRect);

        const sourceSocket = sourceNode.outputs.find(s => s.id === sourceSocketId);
        const finalColor = connectionColor || sourceSocket?.color || theme.colors.secondary;

        setPathProps({
            d: getPath(startPos, endPos, type),
            stroke: finalColor
        });

    }, [nodes, pan, zoom, connection, editorRef, theme.colors.secondary]);

    if (!pathProps) return null;

    return (
        <g onContextMenu={(e) => onContextMenu(e, connection)}>
            <path
                d={pathProps.d}
                stroke="transparent"
                strokeWidth="12"
                fill="none"
                style={{ pointerEvents: 'stroke' }}
            />
            <path
                d={pathProps.d}
                stroke={pathProps.stroke}
                strokeWidth="2"
                fill="none"
                style={{ pointerEvents: 'none' }}
            />
        </g>
    );
};
