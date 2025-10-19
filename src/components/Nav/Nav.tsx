import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Link } from '../Link/Link';
import { Container } from '../Container/Container';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    height?: string;
}

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
        padding: '6px 1rem',
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

        '&[data-active="true"]': {
            color: theme.colors.text,
            fontWeight: '500',
        },
    });

    return <Link className={`${itemClass} ${className}`} data-active={isActive} {...props}>{children}</Link>;
};
NavItem.displayName = 'Nav.Item';

export const Nav: React.FC<NavProps> & {
    List: typeof NavList;
    Item: typeof NavItem;
} = ({ children, className, container = false, height, ...props }) => {
    const createStyle = useStyles('nav');
    const navClass = createStyle({
        width: '100%',
        height: height,
        display: height ? 'flex' : 'block',
        alignItems: height ? 'center' : undefined,
    });

    const content = container ? <Container>{children}</Container> : children;

    return (
        <nav className={`${navClass} ${className}`} {...props}>
            {content}
        </nav>
    );
};

Nav.List = NavList;
Nav.Item = NavItem;