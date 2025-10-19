# Menu & StyledMenu

Components for creating dropdown menus. `Menu` provides the core logic and structure, while `StyledMenu` is a pre-styled, opinionated implementation for common use cases.

## StyledMenu

A quick and easy way to create a styled dropdown menu with icons, shortcuts, groups, and dividers.

### Props
*   `label` (string, required): The text for the trigger button.
*   `items` (array of `MenuItemData` or `MenuGroupData`, required): The list of menu items.

### Data Structure

Items can be provided as a flat array or as an array of groups.

```ts
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

// Union type for items within a menu group
type MenuItemData = MenuAction | MenuDivider;

// A group of menu items, which can have an optional title and divider
interface MenuGroupData {
    title?: string;
    items: MenuItemData[];
    divider?: 'after'; // Adds a divider after this group
}
```

### Usage
```tsx
import { StyledMenu, Icon } from './src/components';
import { PencilIcon, TrashIcon } from './src/icons';

const menuItems = [
    // This is a group
    {
        divider: 'after', // Adds a divider after this group
        items: [
            { label: 'Edit', onClick: () => alert('Edit'), shortcut: '⌘E', icon: <Icon as={PencilIcon} size={16} /> },
            { type: 'divider' }, // This is a divider within the group
            { label: 'Archive', onClick: () => alert('Archive'), disabled: true },
        ]
    },
    // This is a second group with a title
    {
        title: 'Destructive Actions',
        items: [
            { label: 'Delete', onClick: () => alert('Delete'), shortcut: '⌘⌫', icon: <Icon as={TrashIcon} size={16} /> },
        ]
    }
];

<StyledMenu label="Actions" items={menuItems} />
```

---

## Menu (Advanced)

A set of unstyled, accessible components for building a custom menu from scratch.

### Components
*   **Menu**: The main wrapper that manages state.
*   **MenuButton**: The trigger element.
*   **MenuItems**: The container for the menu items.
*   **MenuItem**: A single, clickable item within the menu.

### Usage
```tsx
import { Menu, MenuButton, MenuItems, MenuItem, Button } from './src/components';

<Menu>
    <MenuButton as={Button}>Options</MenuButton>
    <MenuItems>
        <MenuItem onClick={() => alert('Download')}>Download</MenuItem>
        <MenuItem onClick={() => alert('Share')}>Share</MenuItem>
    </MenuItems>
</Menu>
```