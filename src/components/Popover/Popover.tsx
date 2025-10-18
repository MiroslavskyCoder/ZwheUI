import React from 'react';
import { Popper, PopperTrigger as PopperTriggerInternal, PopperContent as PopperContentInternal } from '../Popper/Popper';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Popover: React.FC<{ children: React.ReactNode }> = ({ children }) => <Popper>{children}</Popper>;

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => <PopperTriggerInternal>{children}</PopperTriggerInternal>;

export const PopoverContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('popover-content');
    const isDark = theme.colors.background.startsWith('#');

    const contentClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '6px',
        border: `1px solid ${theme.colors.border}`,
        boxShadow: `0 4px 12px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}`,
        zIndex: '50',
        overflow: 'hidden',
        padding: '4px',
        minWidth: '150px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    return <PopperContentInternal className={`${contentClass} ${className}`}>{children}</PopperContentInternal>;
};
