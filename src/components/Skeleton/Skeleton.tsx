
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    variant?: 'text' | 'rect' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = '1rem',
    variant = 'text',
    className = '',
    style,
    ...props
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('skeleton');

    const animationClass = createStyle({
        '@keyframes shimmer': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
        },
        animation: 'shimmer 2s infinite linear',
        backgroundImage: `linear-gradient(90deg, ${theme.colors.border} 25%, rgba(255,255,255,0.1) 50%, ${theme.colors.border} 75%)`,
        backgroundSize: '2000px 100%',
    });

    const baseClass = createStyle({
        backgroundColor: theme.colors.border,
        width,
        height,
        borderRadius: variant === 'circle' ? '50%' : (variant === 'text' ? '4px' : '8px'),
    });

    return (
        <div
            className={`${baseClass} ${animationClass} ${className}`}
            style={style}
            {...props}
        />
    );
};
