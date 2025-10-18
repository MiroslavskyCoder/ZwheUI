
import React from 'react'
import { Menu, MenuButton, MenuItems, MenuItem } from './Menu'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

// A clickable menu item
interface MenuAction {
    label: string
    onClick: () => void
    icon?: React.ReactNode
    shortcut?: string
    disabled?: boolean
}

// A visual separator
interface MenuDivider {
    type: 'divider'
}

// Union type for items within a menu
type MenuItemData = MenuAction | MenuDivider;

// A group of menu items, which can have an optional title
interface MenuGroupData {
    title?: string
    items: MenuItemData[]
    divider?: 'after'
}

export interface StyledMenuProps {
    label: string
    items: Array<MenuItemData | MenuGroupData>
    className?: string
}

// Type guard to differentiate between actions and dividers
function isAction(item: MenuItemData): item is MenuAction {
    return 'label' in item;
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
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        position: 'relative',
        borderRadius: '4px',
        fontSize: '14px',
        '&:hover:not(:disabled), &:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.colors.text,
            outline: 'none',
            transform: 'scale(1.03)',
        },
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: 'transparent',
            color: theme.colors.textSecondary,
        }
    });

    const shortcutClass = createStyle({
        marginLeft: 'auto',
        color: theme.colors.textSecondary,
        opacity: 0.7,
        fontSize: '13px',
    });

    const dividerClass = createStyle({
        height: '1px',
        border: 'none',
        backgroundColor: theme.colors.border,
        margin: '4px 0',
    });

    const groupTitleClass = createStyle({
        padding: '8px 12px 4px',
        fontSize: '11px',
        fontWeight: '600',
        color: theme.colors.textSecondary,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    });

    // Normalize items into groups. This correctly handles a flat array of items
    // (which can now include dividers) by wrapping it into a single group.
    const isGrouped = items.length > 0 && 'items' in items[0] && Array.isArray((items[0] as any).items);
    const normalizedItems: MenuGroupData[] = isGrouped 
        ? items as MenuGroupData[] 
        : [{ items: items as MenuItemData[] }];

    return (
        <Menu className={`${menuClass} ${className}`}>
            <MenuButton className={buttonClass}>
                {label}
            </MenuButton>
            <MenuItems className={itemsClass}>
                {normalizedItems.map((group, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {group.title && <div className={groupTitleClass}>{group.title}</div>}
                        {group.items.map((item, itemIndex) => {
                            if (isAction(item)) {
                                return (
                                    <MenuItem
                                        key={`${groupIndex}-${itemIndex}`}
                                        className={itemClass}
                                        onClick={item.onClick}
                                        disabled={item.disabled}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                        {item.shortcut && <span className={shortcutClass}>{item.shortcut}</span>}
                                    </MenuItem>
                                );
                            } else {
                                // It's a divider
                                return <hr key={`${groupIndex}-${itemIndex}`} className={dividerClass} />;
                            }
                        })}
                        {group.divider === 'after' && groupIndex < normalizedItems.length - 1 && (
                            <hr className={dividerClass} />
                        )}
                    </React.Fragment>
                ))}
            </MenuItems>
        </Menu>
    )
}

export default StyledMenu;
