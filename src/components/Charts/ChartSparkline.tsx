import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { createLinearScale } from '../../core/utils/scale';
import { hexToRgba } from '../../core/color/utils';

interface ChartSparklineProps {
    data: any[];
    xAccessor: (d: any, i: number) => any;
    yAccessor: (d: any, i: number) => any;
    width?: number | string;
    height?: number | string;
    color?: string;
    strokeWidth?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const ChartSparkline: React.FC<ChartSparklineProps> = ({
    data,
    xAccessor,
    yAccessor,
    width = '100%',
    height = 50,
    color,
    strokeWidth = 1.5,
    className = '',
    style
}) => {
    const { theme } = useTheme();

    if (!data || data.length < 2) {
        return <div style={{ width, height, ...style }} className={className} aria-label="Sparkline chart placeholder"></div>;
    }

    const viewBoxWidth = 100;
    const viewBoxHeight = 30;

    const xDomain: [number, number] = [Math.min(...data.map(xAccessor)), Math.max(...data.map(xAccessor))];
    const yDomain: [number, number] = [Math.min(...data.map(yAccessor)), Math.max(...data.map(yAccessor))];
    
    // Add a small buffer to yDomain to prevent clipping at the very top/bottom
    const yRange = yDomain[1] - yDomain[0];
    const paddedYDomain: [number, number] = yRange > 0 
      ? [yDomain[0] - yRange * 0.1, yDomain[1] + yRange * 0.1]
      : [yDomain[0] - 1, yDomain[1] + 1];


    const xScale = createLinearScale(xDomain, [0, viewBoxWidth]);
    const yScale = createLinearScale(paddedYDomain, [viewBoxHeight, 0]); // inverted for SVG

    const lineColor = color || theme.colors.primary;

    const linePath = data
        .map((d, i) => {
            const x = xScale(xAccessor(d, i));
            const y = yScale(yAccessor(d, i));
            return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(' ');
        
    const areaPath = [
        linePath,
        `L${viewBoxWidth},${viewBoxHeight}`,
        `L0,${viewBoxHeight}`,
        'Z'
    ].join(' ');
    
    const lastPoint = {
      x: xScale(xAccessor(data[data.length - 1], data.length - 1)),
      y: yScale(yAccessor(data[data.length - 1], data.length - 1)),
    };

    return (
        <svg 
            width={width} 
            height={height} 
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} 
            preserveAspectRatio="none"
            className={className}
            style={style}
            aria-label={`Sparkline chart showing trend from ${yAccessor(data[0], 0)} to ${yAccessor(data[data.length - 1], data.length - 1)}`}
            role="img"
        >
            <path
                d={areaPath}
                fill={hexToRgba(lineColor, 0.1)}
                stroke="none"
            />
            <path
                d={linePath}
                fill="none"
                stroke={lineColor}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ vectorEffect: 'non-scaling-stroke' }}
            />
            <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r={strokeWidth * 1.2}
                fill={lineColor}
                stroke="none"
            />
        </svg>
    );
};
