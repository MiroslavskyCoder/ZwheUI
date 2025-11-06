
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// FIX: Wrapped component in React.forwardRef to allow refs to be passed to the underlying input element.
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ className = '', ...props }, ref) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text-input');
    const isDark = theme.colors.background.startsWith('#1');

    const baseClasses = createStyle({
        display: 'block', 
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '0.375rem',
        padding: '0.5rem 0.75rem',
        color: theme.colors.text,
        transition: 'all 0.2s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
        },
        '&::placeholder': {
            color: theme.colors.textSecondary,
        },
        '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${isDark ? theme.colors.background : '#fff'}, 0 0 0 4px ${theme.colors.primary}`
        }
    });

    return <input type="text" ref={ref} className={`${baseClasses} ${className}`} {...props} />;
});

TextInput.displayName = 'TextInput';
