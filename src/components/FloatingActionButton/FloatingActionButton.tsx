import React from 'react';
import { Icon } from '../Icon/Icon';
import { useStyles, useTheme } from '../../core';

interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ElementType;
    label: string; // for accessibility
    position?: { bottom?: string; right?: string; top?: string; left?: string };
    size?: 'small' | 'medium' | 'large';
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
    icon,
    label,
    position = { bottom: '2rem', right: '2rem' },
    size = 'medium',
    className = '',
    ...props
}) => {
    const { theme, mode } = useTheme();
    const createStyle = useStyles('fab');
    const isDark = mode !== 'light';

    const sizes = {
        small: { wrapper: '40px', icon: 18 },
        medium: { wrapper: '56px', icon: 24 },
        large: { wrapper: '72px', icon: 32 },
    };

    const baseClass = createStyle({
        // Base styles from Button
        fontWeight: '500',
        transition: 'all 0.2s',
        border: '1px solid transparent',
        '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.6
        },
        '&:focus': {
            outline: 'none',
        },
        // FAB specific styles
        position: 'fixed',
        ...position,
        width: sizes[size].wrapper,
        height: sizes[size].wrapper,
        borderRadius: '50%',
        padding: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 40,
    });
    
    // Variant styles from Button (primary)
    const primaryVariantClass = createStyle({
      backgroundColor: theme.colors.primary,
      color: isDark ? '#172554' : '#fff',
      '&:hover:not(:disabled)': {
        filter: isDark ? 'brightness(1.2)' : 'brightness(0.9)',
      },
       '&:focus-visible': {
        boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.primary}`
      },
    });

    return (
// @ts-ignore
        <button
            className={`${baseClass} ${primaryVariantClass} ${className}`}
            aria-label={label}
            {...props}
        >
            <Icon as={icon} size={sizes[size].icon} /> 
        </button>
    );
};
