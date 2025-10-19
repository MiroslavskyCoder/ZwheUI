import React, { useMemo } from 'react';
import { useGraphicsContext } from './GraphicsContext';
import { useTheme } from '../../core';

interface ConnectionProps {
    sourceNodeId: string;
    sourceSocketId: string;
    targetNodeId: string;
    targetSocketId: string;
}

// Function to generate a simple cubic bezier path
const getPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = Math.abs(start.x - end.x);
    const c1 = { x: start.x + dx * 0.5, y: start.y };
    const c2 = { x: end.x - dx * 0.5, y: end.y };
    return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
};

export const Connection: React.FC<ConnectionProps> = ({
    sourceNodeId,
    sourceSocketId,
    targetNodeId,
    targetSocketId,
}) => {
    const { nodes, pan } = useGraphicsContext();
    const { theme } = useTheme();

    const { startPos, endPos } = useMemo(() => {
        const sourceNode = nodes.find(n => n.id === sourceNodeId);
        const targetNode = nodes.find(n => n.id === targetNodeId);

        if (!sourceNode || !targetNode) return { startPos: null, endPos: null };
        
        const sourceSocketEl = document.querySelector(`[data-node-id="${sourceNodeId}"] [data-socket-id="${sourceSocketId}"][data-socket-type="output"]`);
        const targetSocketEl = document.querySelector(`[data-node-id="${targetNodeId}"] [data-socket-id="${targetSocketId}"][data-socket-type="input"]`);

        if (!sourceSocketEl || !targetSocketEl) return { startPos: null, endPos: null };

        const sourceRect = sourceSocketEl.getBoundingClientRect();
        const targetRect = targetSocketEl.getBoundingClientRect();
        const containerRect = sourceSocketEl.closest('.graphics-editor')?.getBoundingClientRect();
        
        if (!containerRect) return { startPos: null, endPos: null };
        
        return {
            startPos: {
                x: sourceRect.left + sourceRect.width / 2 - containerRect.left,
                y: sourceRect.top + sourceRect.height / 2 - containerRect.top
            },
            endPos: {
                x: targetRect.left + targetRect.width / 2 - containerRect.left,
                y: targetRect.top + targetRect.height / 2 - containerRect.top
            },
        };
    }, [nodes, sourceNodeId, sourceSocketId, targetNodeId, targetSocketId]);

    if (!startPos || !endPos) return null;

    // Adjust for pan
    const pannedStart = { x: startPos.x - pan.x, y: startPos.y - pan.y };
    const pannedEnd = { x: endPos.x - pan.x, y: endPos.y - pan.y };

    return (
        <path
            d={getPath(pannedStart, pannedEnd)}
            stroke={theme.colors.secondary}
            strokeWidth="2"
            fill="none"
        />
    );
};
