import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Link } from '../Link/Link';

interface NavProps extends React.HTMLAttributes<HTMLElement> {}

const NavList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('nav-list');
    const listClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    });
    return <div className={`${listClass} ${className}`}>{children}</div>;
};
NavList.displayName = 'Nav.List';

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
    isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, className, isActive, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('nav-item');
    const itemClass = createStyle({
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        color: theme.colors.textSecondary,
        fontWeight: '400',
        position: 'relative',
        textDecoration: 'none',
        transition: 'color 0.2s, background-color 0.2s',

        '&:hover:not([data-active="true"])': {
            color: theme.colors.text,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
        
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '4px',
            left: '0.75rem',
            right: '0.75rem',
            height: '2px',
            backgroundColor: theme.colors.primary,
            transform: 'scaleX(0)',
            transformOrigin: 'bottom',
            transition: 'transform 0.3s ease',
        },

        '&[data-active="true"]': {
            color: theme.colors.text,
            backgroundColor: theme.colors.backgroundSecondary,
            fontWeight: '500',
        },
        
        '&[data-active="true"]::after': {
            transform: 'scaleX(1)',
        }
    });

    return <Link className={`${itemClass} ${className}`} data-active={isActive} {...props}>{children}</Link>;
};
NavItem.displayName = 'Nav.Item';

export const Nav: React.FC<NavProps> & {
    List: typeof NavList;
    Item: typeof NavItem;
} = ({ children, className, ...props }) => {
    const createStyle = useStyles('nav');
    const navClass = createStyle({
        width: '100%',
    });

    return (
        <nav className={`${navClass} ${className}`} {...props}>
            {children}
        </nav>
    );
};

Nav.List = NavList;
Nav.Item = NavItem;