
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Kbd: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('kbd');

    const kbdClass = createStyle({
        display: 'inline-block',
        padding: '2px 6px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: theme.colors.textSecondary,
        backgroundColor: theme.colors.border,
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        borderBottomWidth: '2px',
        borderRadius: '4px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(4px)',
        },
    });

    return (
        <kbd className={`${kbdClass} ${className}`}>
            {children}
        </kbd>
    );
};