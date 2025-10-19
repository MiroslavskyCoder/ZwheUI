
import React from 'react';
import { useCharts } from './ChartsHook';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ChartBarProps {
    color?: string;
    barWidthRatio?: number;
    yAccessor: (d: any, i: number) => any;
}

export const ChartBar: React.FC<ChartBarProps> = ({ color, barWidthRatio = 0.6, yAccessor }) => {
    const { dataset, xAccessor, xScale, yScale, dimensions } = useCharts();
    const { theme } = useTheme();
    
    if (!dataset || dataset.length === 0) return null;

    const barColor = color || theme.colors.primary;
    // Calculate bandwidth based on the domain extent and number of data points
    const xDomain = xScale.domain();
    const bandWidth = (xScale(xDomain[1]) - xScale(xDomain[0])) / (dataset.length > 1 ? (dataset.length -1) : 1);
    const barWidth = bandWidth * barWidthRatio;


    return (
        <g>
            {dataset.map((d, i) => {
                const xValue = xAccessor(d, i);
                const yValue = yAccessor(d, i);

                if (yValue === null || yValue === undefined) return null;
                
                const x = xScale(xValue);
                const y = yScale(yValue);
                const height = dimensions.boundedHeight - y;

                return (
                    <rect
                        key={i}
                        x={x - barWidth / 2}
                        y={y}
                        width={barWidth}
                        height={Math.max(0, height)}
                        fill={barColor}
                        rx="2"
                        ry="2"
                    />
                );
            })}
        </g>
    );
};