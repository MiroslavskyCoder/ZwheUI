
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('textarea');
    const isDark = theme.colors.background.startsWith('#1');

    const baseClasses = createStyle({
        display: 'block',
        width: '100%',
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

    return <textarea className={`${baseClasses} ${className}`} {...props} />;
};