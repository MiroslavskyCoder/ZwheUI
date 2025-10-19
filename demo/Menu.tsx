import React from 'react';
import { StyledMenu, Text, Stack, Icon, Kbd } from '../src/components';
import { PencilIcon, CopyIcon, ArchiveIcon, TrashIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const documentation = `# Menu & StyledMenu

Components for creating dropdown menus. \`Menu\` provides the core logic and structure, while \`StyledMenu\` is a pre-styled, opinionated implementation for common use cases.

## StyledMenu

A quick and easy way to create a styled dropdown menu with icons, shortcuts, groups, and dividers.

### Props
*   \`label\` (string, required): The text for the trigger button.
*   \`items\` (array of \`MenuItemData\` or \`MenuGroupData\`, required): The list of menu items.

### Data Structure
\`\`\`ts
// A clickable menu item
interface MenuAction {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    shortcut?: string;
    disabled?: boolean;
}

// A visual separator
interface MenuDivider {
    type: 'divider';
}

type MenuItemData = MenuAction | MenuDivider;

// A group of menu items
interface MenuGroupData {
    title?: string;
    items: MenuItemData[];
    divider?: 'after'; // Adds a divider after this group
}
\`\`\`

### Usage
\`\`\`tsx
import { StyledMenu, Icon } from './src/components';

const menuItems = [
    {
        items: [
            { label: 'Edit', onClick: () => {}, shortcut: '⌘E' },
            { type: 'divider' },
            { label: 'Delete', onClick: () => {}, shortcut: '⌘⌫' },
        ]
    }
];

<StyledMenu label="Actions" items={menuItems} />
\`\`\`
`;

const sourceCode = `/* This file contains the implementation for the high-level StyledMenu. */
import React from 'react'
import { Menu, MenuButton, MenuItems, MenuItem } from './Menu'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

interface MenuAction { label: string; onClick: () => void; icon?: React.ReactNode; shortcut?: string; disabled?: boolean; }
interface MenuDivider { type: 'divider'; }
type MenuItemData = MenuAction | MenuDivider;
interface MenuGroupData { title?: string; items: MenuItemData[]; divider?: 'after'; }

export interface StyledMenuProps {
    label: string;
    items: Array<MenuItemData | MenuGroupData>;
    className?: string;
}

function isAction(item: MenuItemData): item is MenuAction { return 'label' in item; }

export const StyledMenu: React.FC<StyledMenuProps> = ({ label, items, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('menu');
    const isDark = theme.colors.background.startsWith('#');

    const menuClass = createStyle({ position: 'relative', display: 'inline-block' });
    const buttonClass = createStyle({ /* ... button styles ... */ });
    const itemsClass = createStyle({ /* ... items container styles ... */ });
    const itemClass = createStyle({ /* ... individual item styles ... */ });
    const shortcutClass = createStyle({ /* ... shortcut styles ... */ });
    const dividerClass = createStyle({ /* ... divider styles ... */ });
    const groupTitleClass = createStyle({ /* ... group title styles ... */ });

    const isGrouped = items.length > 0 && 'items' in items[0] && Array.isArray((items[0] as any).items);
    const normalizedItems: MenuGroupData[] = isGrouped 
        ? items as MenuGroupData[] 
        : [{ items: items as MenuItemData[] }];

    return (
        <Menu className={\`\${menuClass} \${className}\`}>
            <MenuButton className={buttonClass}>{label}</MenuButton>
            <MenuItems className={itemsClass}>
                {normalizedItems.map((group, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {group.title && <div className={groupTitleClass}>{group.title}</div>}
                        {group.items.map((item, itemIndex) => {
                            if (isAction(item)) {
                                return (
                                    <MenuItem key={\`\${groupIndex}-\${itemIndex}\`} className={itemClass} onClick={item.onClick} disabled={item.disabled}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                        {item.shortcut && <span className={shortcutClass}>{item.shortcut}</span>}
                                    </MenuItem>
                                );
                            } else {
                                return <hr key={\`\${groupIndex}-\${itemIndex}\`} className={dividerClass} />;
                            }
                        })}
                        {group.divider === 'after' && groupIndex < normalizedItems.length - 1 && (<hr className={dividerClass} />)}
                    </React.Fragment>
                ))}
            </MenuItems>
        </Menu>
    )
}`;

export const MenuDemo = () => {
    const menuItems = [
        {
            divider: 'after' as const,
            items: [
                { label: 'Edit', onClick: () => alert('Edit'), shortcut: '⌘E', icon: <Icon as={PencilIcon} size={16} /> },
                { label: 'Duplicate', onClick: () => alert('Duplicate'), shortcut: '⌘D', icon: <Icon as={CopyIcon} size={16} /> },
                { type: 'divider' as const },
                { label: 'Archive', onClick: () => alert('Archive'), icon: <Icon as={ArchiveIcon} size={16} />, disabled: true },
            ]
        },
        {
            title: 'Destructive Actions',
            items: [
                { label: 'Delete', onClick: () => alert('Delete'), shortcut: '⌘⌫', icon: <Icon as={TrashIcon} size={16} /> },
            ]
        }
    ];

    return (
        <DemoSection
            title="Menu"
            description={<span>A styled dropdown menu. Dividers can be added within a group using <Kbd>{`{ type: 'divider' }`}</Kbd> or between groups using the `divider: 'after'` prop.</span>}
            livePreview={
                <StyledMenu label="Actions" items={menuItems} />
            }
            propControls={
                <Text color="textSecondary">This is a standard implementation of the StyledMenu component. The `items` prop is a complex object not suitable for simple controls.</Text>
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
