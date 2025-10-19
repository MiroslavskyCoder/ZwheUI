import React, { useMemo } from 'react';
import { useGraphicsContext } from './GraphicsContext';
import { useTheme } from '../../core';

interface ConnectionProps {
    sourceNodeId: string;
    sourceSocketId: string;
    targetNodeId: string;
    targetSocketId: string;
}

const getPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = Math.abs(start.x - end.x);
    const c1 = { x: start.x + dx * 0.6, y: start.y };
    const c2 = { x: end.x - dx * 0.6, y: end.y };
    return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
};

export const Connection: React.FC<ConnectionProps> = ({
    sourceNodeId,
    sourceSocketId,
    targetNodeId,
    targetSocketId,
}) => {
    const { nodes, pan, zoom } = useGraphicsContext();
    const { theme } = useTheme();

    const { startPos, endPos, color } = useMemo(() => {
        const sourceNode = nodes.find(n => n.id === sourceNodeId);
        const targetNode = nodes.find(n => n.id === targetNodeId);

        if (!sourceNode || !targetNode) return {};
        
        const sourceSocket = sourceNode.outputs.find(s => s.id === sourceSocketId);
        
        const sourceSocketEl = document.querySelector(`[data-node-id="${sourceNodeId}"] [data-socket-id="${sourceSocketId}"][data-socket-type="output"] > div`);
        const targetSocketEl = document.querySelector(`[data-node-id="${targetNodeId}"] [data-socket-id="${targetSocketId}"][data-socket-type="input"] > div`);

        if (!sourceSocketEl || !targetSocketEl) return {};

        const sourceRect = sourceSocketEl.getBoundingClientRect();
        const targetRect = targetSocketEl.getBoundingClientRect();
        
        const containerEl = document.querySelector('.graphics-editor > div:first-child');
        const containerRect = containerEl?.getBoundingClientRect();
        
        if (!containerRect) return {};
        
        return {
            startPos: {
                x: sourceRect.left + sourceRect.width / 2 - containerRect.left,
                y: sourceRect.top + sourceRect.height / 2 - containerRect.top
            },
            endPos: {
                x: targetRect.left + targetRect.width / 2 - containerRect.left,
                y: targetRect.top + targetRect.height / 2 - containerRect.top
            },
            color: sourceSocket?.color || theme.colors.secondary,
        };
    }, [nodes, sourceNodeId, sourceSocketId, targetNodeId, targetSocketId, theme.colors.secondary]);

    if (!startPos || !endPos) return null;

    return (
        <path
            d={getPath(startPos, endPos)}
            stroke={color}
            strokeWidth="2"
            fill="none"
        />
    );
};