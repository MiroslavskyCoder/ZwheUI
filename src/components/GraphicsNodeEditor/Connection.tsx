import React from 'react';
import { ConnectionData, Position } from './GraphicsContext';

interface ConnectionProps {
    startPos: Position;
    endPos: Position;
    color: string;
    type?: 'curved' | 'straight';
    onContextMenu: (e: React.MouseEvent) => void;
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

export const Connection: React.FC<ConnectionProps> = ({ startPos, endPos, color, type, onContextMenu }) => {
    const d = getPath(startPos, endPos, type);

    return (
        <g onContextMenu={onContextMenu}>
            <path
                d={d}
                stroke="transparent"
                strokeWidth="12"
                fill="none"
                style={{ pointerEvents: 'stroke' }}
            />
            <path
                d={d}
                stroke={color}
                strokeWidth="2"
                fill="none"
                style={{ pointerEvents: 'none' }}
            />
        </g>
    );
};