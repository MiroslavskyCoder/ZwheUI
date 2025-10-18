
import React from 'react'
import { Menu, MenuButton, MenuItems, MenuItem } from './Menu'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

// SVG Icons defined locally
const PencilIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49338 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92123 19.4875 1.9139C19.836 1.90657 20.1821 1.97006 20.5056 2.10085C20.8291 2.23165 21.1219 2.4273 21.3686 2.67398C21.6153 2.92066 21.811 3.21345 21.9418 3.53697C22.0726 3.86049 22.1361 4.20655 22.1287 4.55505C22.1214 4.90355 22.0435 5.2469 21.8998 5.5644C21.7561 5.8819 21.5493 6.16702 21.2799 6.40005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 4H6C4.93913 4 3.92172 4.42143 3.17157 5.17157C2.42143 5.92172 2 6.93913 2 8V18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H16C17.0609 22 18.0783 21.5786 18.8284 20.8284C19.5786 20.0783 20 19.0609 20 18V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CopyIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4H20C21.1046 4 22 4.89543 22 6V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 2H8C6.89543 2 6 2.89543 6 4V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V4C18 2.89543 17.1046 2 16 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ArchiveIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 3H1V8H23V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const TrashIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const icons: { [key: string]: React.FC } = {
    Edit: PencilIcon,
    Duplicate: CopyIcon,
    Archive: ArchiveIcon,
    Delete: TrashIcon,
};


export interface StyledMenuProps {
    label: string
    items: Array<{
        label: string
        onClick: () => void
        icon?: React.ReactNode
        shortcut?: string
    }>
    className?: string
}

export const StyledMenu: React.FC<StyledMenuProps> = ({
    label,
    items,
    className = ''
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('menu')
    const isDark = theme.colors.background.startsWith('#');

    const menuClass = createStyle({
        position: 'relative',
        display: 'inline-block'
    });

    const buttonClass = createStyle({
        padding: '6px 12px',
        backgroundColor: theme.colors.backgroundSecondary,
        color: theme.colors.text,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'inline-grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14px',
        '&:hover': {
            borderColor: theme.colors.secondary,
        },
        '&::after': {
            content: '"▼"',
            fontSize: '10px',
            color: theme.colors.textSecondary
        }
    });
    
    const itemsClass = createStyle({
        position: 'absolute',
        top: 'calc(100% + 4px)',
        left: '0',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '6px',
        border: `1px solid ${theme.colors.border}`,
        boxShadow: `0 4px 12px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}`,
        minWidth: '200px',
        zIndex: '50',
        overflow: 'hidden',
        padding: '4px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    const itemClass = createStyle({
        width: '100%',
        padding: '8px 12px',
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        gap: theme.spacing.sm,
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        position: 'relative',
        borderRadius: '4px',
        fontSize: '14px',
        '&[data-focused="true"]': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.colors.text,
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.colors.text,
        }
    });

    const shortcutClass = createStyle({
        marginLeft: 'auto',
        color: theme.colors.textSecondary,
        opacity: 0.7,
        fontSize: '13px',
    });

    return (
        <Menu className={`${menuClass} ${className}`}>
            <MenuButton className={buttonClass}>
                {label}
            </MenuButton>
            <MenuItems className={itemsClass}>
                {items.map((item, index) => {
                    const Icon = icons[item.label];
                    return (
                        <MenuItem
                            key={index}
                            className={itemClass}
                            onClick={item.onClick}
                        >
                            {Icon && <Icon />}
                            <span>{item.label}</span>
                            {item.shortcut && <span className={shortcutClass}>{item.shortcut}</span>}
                        </MenuItem>
                    )
                })}
            </MenuItems>
        </Menu>
    )
}

export default StyledMenu