import React from 'react';
import { useGraphics, ConnectionData } from './GraphicsContext';
import { useTheme } from '../../core';

interface ConnectionProps {
    connection: ConnectionData;
}

// Calculate Bezier curve points for the connection
const getCurvePath = (fromPos: {x: number, y: number}, toPos: {x: number, y: number}) => {
    const dx = Math.abs(fromPos.x - toPos.x) * 0.6;
    return `M ${fromPos.x},${fromPos.y} C ${fromPos.x + dx},${fromPos.y} ${toPos.x - dx},${toPos.y} ${toPos.x},${toPos.y}`;
};

export const Connection: React.FC<ConnectionProps> = ({ connection }) => {
    const { state } = useGraphics();
    const { theme } = useTheme();
    const { nodes } = state;

    const fromNode = nodes[connection.fromNode];
    const toNode = nodes[connection.toNode];

    if (!fromNode || !toNode) return null;

    // Simplified socket position calculation
    const fromPos = { x: fromNode.position.x + 200, y: fromNode.position.y + 50 };
    const toPos = { x: toNode.position.x, y: toNode.position.y + 50 };

    const pathData = getCurvePath(fromPos, toPos);

    return (
        <path
            d={pathData}
            stroke={theme.colors.primary}
            strokeWidth="2"
            fill="none"
        />
    );
};
