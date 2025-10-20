
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface LinearProgressProps {
    value?: number; // 0 to 100
    height?: string;
    className?: string;
    'aria-label'?: string;
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
    value,
    height = '4px',
    className = '',
    'aria-label': ariaLabel = 'Loading progress'
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('linear-progress');
    const isIndeterminate = value === undefined;

    const containerClass = createStyle({
        width: '100%',
        height: height,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: height,
        overflow: 'hidden',
        position: 'relative',
    });

    const barClass = createStyle({
        height: '100%',
        backgroundColor: theme.colors.primary,
        borderRadius: height,
        transition: 'width 0.3s ease-out',
        width: !isIndeterminate ? `${value}%` : '100%',
        position: 'absolute',
        animation: isIndeterminate ? 'indeterminate 1.5s ease-in-out infinite' : 'none',
        '@keyframes indeterminate': {
            '0%': {
                left: '-100%',
                width: '100%',
            },
            '100%': {
                left: '100%',
                width: '10%',
            },
        },
    });

    return (
        <div
            className={`${containerClass} ${className}`}
            role="progressbar"
            aria-valuenow={isIndeterminate ? undefined : value}
            aria-valuemin={isIndeterminate ? undefined : 0}
            aria-valuemax={isIndeterminate ? undefined : 100}
            aria-label={ariaLabel}
        >
            <div className={barClass} />
        </div>
    );
};

export default LinearProgress;