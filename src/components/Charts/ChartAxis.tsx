import React from 'react';
import { useCharts } from './ChartsHook';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ChartAxisProps {
    dimension: 'x' | 'y';
    label?: string;
    numberOfTicks?: number;
}

const generateTicks = (domain: [number, number], count: number): number[] => {
    if (domain[0] === domain[1]) return [domain[0]];
    const [min, max] = domain;
    if (count < 2) return [min];
    
    const step = (max - min) / (count - 1);
    if (step === 0) return [min];

    return Array.from({ length: count }, (_, i) => min + i * step);
};


export const ChartAxis: React.FC<ChartAxisProps> = ({ dimension, label, numberOfTicks = 5 }) => {
    const { xScale, yScale, dimensions, data, xAccessor, yAccessor } = useCharts();
    const { theme } = useTheme();

    if (!data || data.length === 0) return null;

    if (dimension === 'x') {
        const domain: [number, number] = [Math.min(...data.map(xAccessor)), Math.max(...data.map(xAccessor))];
        const ticks = generateTicks(domain, numberOfTicks);
        
        return (
            <g transform={`translate(0, ${dimensions.boundedHeight})`}>
                <line x1={0} x2={dimensions.boundedWidth} y1={0} y2={0} stroke={theme.colors.border} />
                {ticks.map((tick, i) => (
                    <g key={i} transform={`translate(${xScale(tick)}, 0)`}>
                        <line y2={6} stroke={theme.colors.textSecondary} />
                        <text
                            style={{
                                fill: theme.colors.textSecondary,
                                fontSize: '10px',
                                textAnchor: 'middle',
                            }}
                            y={20}
                        >
                            {tick.toLocaleString()}
                        </text>
                    </g>
                ))}
                {label && (
                    <text
                        style={{ fill: theme.colors.text, fontSize: '12px', textAnchor: 'middle' }}
                        x={dimensions.boundedWidth / 2}
                        y={dimensions.marginBottom - 10}
                    >
                        {label}
                    </text>
                )}
            </g>
        );
    } else { // dimension === 'y'
        const domain: [number, number] = [Math.min(...data.map(yAccessor)), Math.max(...data.map(yAccessor))];
        const ticks = generateTicks(domain, numberOfTicks);
        
        return (
            <g>
                <line y1={0} y2={dimensions.boundedHeight} x1={0} x2={0} stroke={theme.colors.border} />
                {ticks.map((tick, i) => (
                    <g key={i} transform={`translate(0, ${yScale(tick)})`}>
                        <line x2={-6} stroke={theme.colors.textSecondary} />
                        <text
                            style={{
                                fill: theme.colors.textSecondary,
                                fontSize: '10px',
                                textAnchor: 'end',
                                dominantBaseline: 'middle',
                            }}
                            x={-10}
                        >
                           {tick.toLocaleString()}
                        </text>
                    </g>
                ))}
                {label && (
                    <text
                        style={{ fill: theme.colors.text, fontSize: '12px', textAnchor: 'middle' }}
                        transform={`translate(${-dimensions.marginLeft + 20}, ${dimensions.boundedHeight / 2}) rotate(-90)`}
                    >
                        {label}
                    </text>
                )}
            </g>
        );
    }
};
