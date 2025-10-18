
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SpinnerProps {
    size?: number;
    className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 24, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('spinner');

    const spinnerClass = createStyle({
        width: `${size}px`,
        height: `${size}px`,
        border: '2px solid transparent',
        borderTopColor: theme.colors.primary,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    });

    return <div className={`${spinnerClass} ${className}`} role="status" aria-label="Loading"></div>;
};
