import React from 'react';
import { useCharts } from './ChartsHook';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

interface ChartAreaProps {
    color?: string;
    opacity?: number;
    // FIX: Add optional yAccessor to support multi-series charts where each series has its own accessor.
    yAccessor?: (d: any, i: number) => any;
}

export const ChartArea: React.FC<ChartAreaProps> = ({ color, opacity = 0.3, yAccessor: localYAccessor }) => {
    const { data, xAccessor, yAccessor: contextYAccessor, xScale, yScale, dimensions } = useCharts();
    const { theme } = useTheme();

    const yAccessor = localYAccessor || contextYAccessor;

    if (!data || data.length < 2) return null; // Area needs at least 2 points

    const areaColor = color || theme.colors.primary;

    const areaPath = [
        ...data.map((d, i) => {
            // FIX: Pass index to accessors to support index-based lookups.
            const x = xScale(xAccessor(d, i));
            const y = yScale(yAccessor(d, i));
            return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`;
        }),
        // FIX: Pass index to accessors for path closing points.
        `L ${xScale(xAccessor(data[data.length - 1], data.length - 1)).toFixed(2)},${dimensions.boundedHeight}`,
        `L ${xScale(xAccessor(data[0], 0)).toFixed(2)},${dimensions.boundedHeight}`,
        'Z'
    ].join(' ');

    return (
        <path
            d={areaPath}
            fill={hexToRgba(areaColor, opacity)}
            stroke="none"
        />
    );
};