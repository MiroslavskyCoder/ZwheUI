import React from 'react';
import { useStyles, useTheme, useBreakpoint } from '../../core';
import { Container } from '../Container/Container';
import { Stack } from '../Stack/Stack';
import { Link } from '../Link/Link';
import { Button, ButtonProps } from '../Button';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from '../Dropdown/Dropdown';
import { IconButton } from '../IconButton/IconButton';
import { MenuIcon } from '../../icons';
import { Text } from '../Text/Text';

// --- Types ---
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    height?: string;
}

// --- Brand ---
interface BrandProps {
    children: React.ReactNode;
    href?: string;
    to?: string;
}
const HeaderBrand: React.FC<BrandProps> = ({ children, ...props }) => {
    return (
        <Link {...props} style={{ textDecoration: 'none' }}>
            <Text as="h1" size="1.25rem" weight="600">{children}</Text>
        </Link>
    );
};
HeaderBrand.displayName = 'Header.Brand';

// --- Nav ---
interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
    isActive?: boolean;
}
const NavItem: React.FC<NavItemProps> = ({ children, isActive, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('header-nav-item');
    const itemClass = createStyle({
        padding: '6px 1rem',
        borderRadius: '6px',
        color: isActive ? theme.colors.text : theme.colors.textSecondary,
        fontWeight: isActive ? '500' : '400',
        textDecoration: 'none',
        transition: 'all 0.2s',
        '&:hover': {
            color: theme.colors.text,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
    });
    return <Link className={itemClass} {...props}>{children}</Link>;
};
NavItem.displayName = 'Header.Nav.Item';

const HeaderNav: React.FC<{ children: React.ReactNode }> & { Item: typeof NavItem } = ({ children }) => {
    const createStyle = useStyles('header-nav');
    const isDesktop = useBreakpoint('md');

    const navClass = createStyle({
        display: isDesktop ? 'flex' : 'none',
        alignItems: 'center',
        gap: '0.25rem',
    });

    return <nav className={navClass}>{children}</nav>;
};
HeaderNav.Item = NavItem;
HeaderNav.displayName = 'Header.Nav';

// --- Action ---
const ActionItem: React.FC<ButtonProps> = (props) => {
    return <Button variant="secondary" {...props} />;
};
ActionItem.displayName = 'Header.Action.Item';

const HeaderAction: React.FC<{ children: React.ReactNode }> & { Item: typeof ActionItem } = ({ children }) => {
    const createStyle = useStyles('header-action');
    const isDesktop = useBreakpoint('md');

    const actionClass = createStyle({
        display: isDesktop ? 'flex' : 'none',
        alignItems: 'center',
        gap: '0.5rem',
    });

    return <div className={actionClass}>{children}</div>;
};
HeaderAction.Item = ActionItem;
HeaderAction.displayName = 'Header.Action';

// --- Menu (for mobile) ---
const MenuItem: React.FC<React.ComponentProps<typeof DropdownItem>> = (props) => {
    return <DropdownItem {...props} />;
};
MenuItem.displayName = 'Header.Menu.Item';

const HeaderMenu: React.FC<{ children: React.ReactNode }> & { Item: typeof MenuItem } = ({ children }) => {
    const isDesktop = useBreakpoint('md');
    
    if (isDesktop) return null;

    return (
        <Dropdown>
            <DropdownTrigger>
                <IconButton icon={MenuIcon} aria-label="Open menu" />
            </DropdownTrigger>
            <DropdownContent>
                {children}
            </DropdownContent>
        </Dropdown>
    );
};
HeaderMenu.Item = MenuItem;
HeaderMenu.displayName = 'Header.Menu';

// --- Left & Right Containers ---
const HeaderLeft: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Stack direction="row" align="center" gap="1.5rem">{children}</Stack>;
};
HeaderLeft.displayName = 'Header.Left';

const HeaderRight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Stack direction="row" align="center" gap="1rem">{children}</Stack>;
};
HeaderRight.displayName = 'Header.Right';


// --- Main Header ---
export const Header: React.FC<HeaderProps> & {
    Brand: typeof HeaderBrand;
    Nav: typeof HeaderNav;
    Action: typeof HeaderAction;
    Menu: typeof HeaderMenu;
    Left: typeof HeaderLeft;
    Right: typeof HeaderRight;
} = ({ children, className = '', height = '60px', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('header');

    const headerClass = createStyle({
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        borderBottom: `1px solid ${theme.colors.border}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: height,
        display: 'flex',
        alignItems: 'center',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    const containerClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    });

    return (
        <header className={`${headerClass} ${className}`} {...props}>
            <Container className={containerClass}>
                {children}
            </Container>
        </header>
    );
};

Header.Brand = HeaderBrand;
Header.Nav = HeaderNav;
Header.Action = HeaderAction;
Header.Menu = HeaderMenu;
Header.Left = HeaderLeft;
Header.Right = HeaderRight;
