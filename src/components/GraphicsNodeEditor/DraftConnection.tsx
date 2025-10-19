import React from 'react';
import { useGraphicsContext } from './GraphicsContext';
import { useTheme } from '../../core';

// Function to generate a simple cubic bezier path
const getPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = Math.abs(start.x - end.x);
    const c1 = { x: start.x + dx * 0.5, y: start.y };
    const c2 = { x: end.x - dx * 0.5, y: end.y };
    return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
};

export const DraftConnection: React.FC = () => {
    const { draftConnection, pan } = useGraphicsContext();
    const { theme } = useTheme();

    if (!draftConnection) return null;

    // The draft connection's start and end points are in client coordinates.
    // We need to convert them to be relative to the SVG canvas, accounting for pan.
    const editorEl = document.querySelector('.graphics-editor');
    const editorRect = editorEl?.getBoundingClientRect();
    
    if (!editorRect) return null;
    
    const start = {
        x: draftConnection.start.x - editorRect.left - pan.x,
        y: draftConnection.start.y - editorRect.top - pan.y
    };
    const end = {
        x: draftConnection.end.x - editorRect.left - pan.x,
        y: draftConnection.end.y - editorRect.top - pan.y
    };
    
    return (
        <path
            d={getPath(start, end)}
            stroke={theme.colors.primary}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
            style={{ pointerEvents: 'none' }}
        />
    );
};
