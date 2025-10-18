import React from 'react';
import { useCharts } from './ChartsHook';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ChartLineProps {
    color?: string;
    strokeWidth?: number;
    // FIX: Add optional yAccessor to support multi-series charts where each series has its own accessor.
    yAccessor?: (d: any, i: number) => any;
}

export const ChartLine: React.FC<ChartLineProps> = ({ color, strokeWidth = 2, yAccessor: localYAccessor }) => {
    const { data, xAccessor, yAccessor: contextYAccessor, xScale, yScale } = useCharts();
    const { theme } = useTheme();

    const yAccessor = localYAccessor || contextYAccessor;

    if (!data || data.length === 0) return null;

    const linePath = data
        .map((d, i) => {
            // FIX: Pass index to accessors to support index-based lookups.
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