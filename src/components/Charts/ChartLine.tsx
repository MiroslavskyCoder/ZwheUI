
import React from 'react';
import { useCharts } from './ChartsHook';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ChartLineProps {
    color?: string;
    strokeWidth?: number;
    yAccessor: (d: any, i: number) => any;
}

export const ChartLine: React.FC<ChartLineProps> = ({ color, strokeWidth = 2, yAccessor }) => {
    const { dataset, xAccessor, xScale, yScale } = useCharts();
    const { theme } = useTheme();

    if (!dataset || dataset.length === 0) return null;

    const linePath = dataset
        .map((d, i) => {
            const x = xScale(xAccessor(d, i));
            const y = yScale(yAccessor(d, i));
            return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(' ');
        
    return (
        <path
            d={linePath}
            fill="none"
            stroke={color || theme.colors.primary}
            strokeWidth={strokeWidth}
            style={{ vectorEffect: 'non-scaling-stroke' }}
        />
    );
};