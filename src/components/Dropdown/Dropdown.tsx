

import React from 'react';
import { Popper, PopperTrigger, PopperContent, usePopperContext } from '../Popper/Popper';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Dropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => <Popper>{children}</Popper>;

export const DropdownTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => <PopperTrigger>{children}</PopperTrigger>;

export const DropdownContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('dropdown-content');

    const contentClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '6px',
        border: `1px solid ${theme.colors.border}`,
        boxShadow: `0 4px 12px rgba(0,0,0,0.5)`,
        zIndex: 50,
        overflow: 'hidden',
        padding: '4px',
        minWidth: '180px',
         '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    return <PopperContent className={`${contentClass} ${className}`}>{children}</PopperContent>;
};

export const DropdownItem: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('dropdown-item');
    const { setIsOpen } = usePopperContext();

    const itemClass = createStyle({
        width: '100%',
        padding: '8px 12px',
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: theme.spacing.sm,
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        borderRadius: '4px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.colors.text,
        }
    });
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(e);
        setIsOpen(false);
    };

    return <button className={`${itemClass} ${className}`} {...props} onClick={handleClick}>{children}</button>;
};