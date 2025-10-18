
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline';
    colorScheme?: 'primary' | 'accent' | 'success' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'solid', colorScheme = 'primary', className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('badge');

    const colors = {
        primary: theme.colors.primary,
        accent: theme.colors.accent,
        success: '#10b981',
        error: '#ef4444',
    };
    
    const baseColor = colors[colorScheme];

    const variantStyles = {
        solid: {
            backgroundColor: hexToRgba(baseColor, 0.2),
            color: baseColor,
            border: '1px solid transparent',
        },
        outline: {
            backgroundColor: 'transparent',
            color: baseColor,
            border: `1px solid ${baseColor}`,
        },
    };

    const badgeClass = createStyle({
        display: 'inline-block',
        padding: '0.125rem 0.625rem',
        fontSize: '0.75rem',
        fontWeight: '500',
        borderRadius: '999px',
        lineHeight: '1.25',
        ...variantStyles[variant],
    });

    return (
        <span className={`${badgeClass} ${className}`} {...props}>
            {children}
        </span>
    );
};
