
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Icon } from '../Icon/Icon';

interface SidebarProps {
    children: React.ReactNode;
    width?: string;
    // FIX: Add height prop to allow for flexible height adjustments.
    height?: string;
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, width = '250px', height = '100%', className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sidebar');

    const sidebarClass = createStyle({
        width: width,
        height: height,
        backgroundColor: theme.colors.backgroundSecondary,
        borderRight: `1px solid ${theme.colors.border}`,
        padding: theme.spacing.md,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.lg,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    return (
        <aside className={`${sidebarClass} ${className}`}>
            {children}
        </aside>
    );
};

interface SidebarNavProps {
    children: React.ReactNode;
    title?: string;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ children, title }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sidebar-nav');

     const navClass = createStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.xs,
    });
    
    const titleClass = createStyle({
        padding: `0 ${theme.spacing.sm}`,
        fontSize: '12px',
        fontWeight: 600,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.sm,
    });

    return (
        <nav>
            {title && <h3 className={titleClass}>{title}</h3>}
            <div className={navClass}>{children}</div>
        </nav>
    );
};

interface SidebarNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    icon?: React.ElementType;
    isActive?: boolean;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ children, icon, isActive, className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sidebar-nav-item');
    
    const itemClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        borderRadius: '6px',
        color: isActive ? theme.colors.text : theme.colors.textSecondary,
        backgroundColor: isActive ? theme.colors.backgroundSecondary : 'transparent',
        textDecoration: 'none',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.colors.backgroundSecondary,
            color: theme.colors.text,
        }
    });

    return (
        <a className={`${itemClass} ${className}`} {...props}>
            {icon && <Icon as={icon} size={16} />}
            <span>{children}</span>
        </a>
    );
};
