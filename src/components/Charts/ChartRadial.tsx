import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface RadialData {
    value: number;
    color: string;
    label: string;
}

interface ChartRadialProps {
    data: RadialData[];
    size?: number;
    strokeWidth?: number;
    className?: string;
}

// Helper to convert polar coordinates to Cartesian
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0; // Start from the left
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
};

// Helper to describe an SVG arc path
const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
};

export const ChartRadial: React.FC<ChartRadialProps> = ({ data, size = 150, strokeWidth = 20, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('chart-radial');
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const radius = (size - strokeWidth) / 2;
    const center = size / 2;
    let startAngle = 0;

    const containerClass = createStyle({
        display: 'grid',
        justifyItems: 'center',
        gap: theme.spacing.md,
        width: `${size}px`
    });

    const legendClass = createStyle({
        display: 'grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.md,
    });
    
    const legendItemClass = createStyle({
        display: 'grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        gap: theme.spacing.sm,
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <svg width={size} height={size / 2 + strokeWidth} viewBox={`0 0 ${size} ${size}`}>
                <g transform={`translate(0, ${size/2})`}>
                    {data.map((item, index) => {
                        const angle = (item.value / total) * 180;
                        const endAngle = startAngle + angle;
                        const path = describeArc(center, center, radius, startAngle, endAngle);
                        startAngle = endAngle;
                        return <path key={index} d={path} fill="none" stroke={item.color} strokeWidth={strokeWidth} />;
                    })}
                </g>
            </svg>
            <div className={legendClass}>
                {data.map(item => (
                    <div key={item.label} className={legendItemClass}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: item.color }}></div>
                        <span style={{fontSize: '12px', color: theme.colors.textSecondary}}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};