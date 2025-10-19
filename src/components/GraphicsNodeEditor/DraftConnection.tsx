import React from 'react';
import { useGraphicsContext } from './GraphicsContext';
import { useTheme } from '../../core';

const getPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = Math.abs(start.x - end.x);
    const c1 = { x: start.x + dx * 0.5, y: start.y };
    const c2 = { x: end.x - dx * 0.5, y: end.y };
    return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
};

export const DraftConnection: React.FC = () => {
    const { draftConnection } = useGraphicsContext();
    const { theme } = useTheme();

    if (!draftConnection) return null;
    
    return (
        <path
            d={getPath(draftConnection.start, draftConnection.end)}
            stroke={theme.colors.primary}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
            style={{ pointerEvents: 'none' }}
        />
    );
};