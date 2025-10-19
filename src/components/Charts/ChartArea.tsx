
import React from 'react';
import { useCharts } from './ChartsHook';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

interface ChartAreaProps {
    color?: string;
    opacity?: number;
    yAccessor: (d: any, i: number) => any;
}

export const ChartArea: React.FC<ChartAreaProps> = ({ color, opacity = 0.3, yAccessor }) => {
    const { dataset, xAccessor, xScale, yScale, dimensions } = useCharts();
    const { theme } = useTheme();

    if (!dataset || dataset.length < 2) return null; // Area needs at least 2 points

    const areaColor = color || theme.colors.primary;

    const areaPath = [
        ...dataset.map((d, i) => {
            const x = xScale(xAccessor(d, i));
            const y = yScale(yAccessor(d, i));
            return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`;
        }),
        `L ${xScale(xAccessor(dataset[dataset.length - 1], dataset.length - 1)).toFixed(2)},${dimensions.boundedHeight}`,
        `L ${xScale(xAccessor(dataset[0], 0)).toFixed(2)},${dimensions.boundedHeight}`,
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