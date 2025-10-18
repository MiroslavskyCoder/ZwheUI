
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CircularProgressProps {
    value?: number; // 0 to 100
    size?: number;
    strokeWidth?: number;
    className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    size = 48,
    strokeWidth = 4,
    className = '',
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('circular-progress');
    const isIndeterminate = value === undefined;

    const containerClass = createStyle({
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
    });

    const svgClass = createStyle({
        transform: 'rotate(-90deg)',
        animation: isIndeterminate ? '$spin 1.4s linear infinite' : undefined,
        '@keyframes spin': {
            '0%': { transform: 'rotate(-90deg)' },
            '100%': { transform: 'rotate(270deg)' },
        }
    });

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = value !== undefined ? circumference - (value / 100) * circumference : undefined;

    const circleBaseClass = createStyle({
        stroke: 'rgba(255, 255, 255, 0.1)',
        fill: 'transparent',
    });
    
    const circleProgressClass = createStyle({
        stroke: theme.colors.primary,
        fill: 'transparent',
        strokeLinecap: 'round',
        transition: 'stroke-dashoffset 0.3s',
        animation: isIndeterminate ? '$dash 1.4s ease-in-out infinite' : undefined,
        '@keyframes dash': {
            '0%': {
                strokeDasharray: '1, 200',
                strokeDashoffset: '0',
            },
            '50%': {
                strokeDasharray: '89, 200',
                strokeDashoffset: '-35px',
            },
            '100%': {
                strokeDasharray: '89, 200',
                strokeDashoffset: '-124px',
            },
        }
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={svgClass}>
                <circle
                    className={circleBaseClass}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className={circleProgressClass}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
        </div>
    );
};

export default CircularProgress;
