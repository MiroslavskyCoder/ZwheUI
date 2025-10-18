
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useCharts } from './ChartsHook';
import { Tooltip } from '../Tooltip/Tooltip';
import { useTheme } from '../../core/theme/ThemeProvider';

interface TooltipSeries {
    key: string;
    label: string;
    color: string;
    accessor: (d: any) => number;
}

interface ChartTooltipProps {
    series: TooltipSeries[];
    formatX?: (value: any) => string;
    formatY?: (value: any) => string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({
    series,
    formatX = (val) => val.toString(),
    formatY = (val) => val.toLocaleString(),
}) => {
    const { data, xScale, yScale, dimensions, xAccessor } = useCharts();
    const { theme } = useTheme();
    const [hoveredData, setHoveredData] = useState<{
        point: any;
        x: number;
        y: number;
    } | null>(null);

    const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
        if (!data || data.length === 0) return;

        const { left } = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - left - dimensions.marginLeft;

        const hoveredXValue = xScale.invert(mouseX);
        
        // Find the closest data point by iterating through the data
        let closestPoint = data[0];
        let minDiff = Math.abs(xAccessor(data[0], 0) - hoveredXValue);

        for (let i = 1; i < data.length; i++) {
            const diff = Math.abs(xAccessor(data[i], i) - hoveredXValue);
            if (diff < minDiff) {
                minDiff = diff;
                closestPoint = data[i];
            }
        }
        
        setHoveredData({
            point: closestPoint,
            x: event.clientX,
            y: event.clientY,
        });
    };

    const handleMouseLeave = () => {
        setHoveredData(null);
    };

    const svgX = hoveredData ? xScale(xAccessor(hoveredData.point, 0)) : null;

    return (
        <g>
            <rect
                x={0}
                y={0}
                width={dimensions.boundedWidth}
                height={dimensions.boundedHeight}
                fill="transparent"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />

            {hoveredData && svgX !== null && (
                <>
                    <line
                        x1={svgX} x2={svgX}
                        y1={0} y2={dimensions.boundedHeight}
                        stroke={theme.colors.border}
                        strokeWidth={1}
                        strokeDasharray="3 3"
                        pointerEvents="none"
                    />

                    {series.map(({ key, color, accessor }) => {
                        const yValue = accessor(hoveredData.point);
                        if (yValue === null || yValue === undefined) return null;
                        return (
                            <circle
                                key={key}
                                cx={svgX}
                                cy={yScale(yValue)}
                                r={4}
                                fill={color}
                                stroke={theme.colors.background}
                                strokeWidth={2}
                                pointerEvents="none"
                            />
                        )
                    })}
                    
                    {ReactDOM.createPortal(
                        <Tooltip style={{
                            top: hoveredData.y,
                            left: hoveredData.x,
                            transform: `translate(${hoveredData.x > window.innerWidth / 2 ? '-110%' : '10%'}, -50%)`,
                        }}>
                           <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: theme.colors.text }}>
                               {formatX(xAccessor(hoveredData.point, 0))}
                           </div>
                           <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '0.25rem 1rem', alignItems: 'center' }}>
                                {series.map(({ key, label, color, accessor }) => (
                                    <React.Fragment key={key}>
                                        <div style={{ width: '10px', height: '10px', backgroundColor: color, borderRadius: '50%' }} />
                                        <span style={{ color: theme.colors.textSecondary }}>{label}:</span>
                                        <span style={{ fontWeight: '500', textAlign: 'right' }}>{formatY(accessor(hoveredData.point))}</span>
                                    </React.Fragment>
                                ))}
                           </div>
                        </Tooltip>,
                        document.body
                    )}
                </>
            )}
        </g>
    );
};
