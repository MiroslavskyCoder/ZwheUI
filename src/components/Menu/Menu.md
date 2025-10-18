# Menu & StyledMenu

Components for creating dropdown menus. `Menu` provides the core logic and structure, while `StyledMenu` is a pre-styled, opinionated implementation for common use cases.

## StyledMenu

A quick and easy way to create a styled dropdown menu with icons and shortcuts.

### Props
*   `label` (string, required): The text for the trigger button.
*   `items` (array of objects, required): The list of menu items. Each object should contain:
    *   `label` (string, required): The text for the item.
    *   `onClick` (function, required): Callback for when the item is clicked.
    *   `icon` (React.ReactNode, optional): An icon to display next to the label.
    *   `shortcut` (string, optional): A string representing a keyboard shortcut.

### Usage
```tsx
import { StyledMenu } from './src/components';

const menuItems = [
    { label: 'Edit', onClick: () => alert('Edit'), shortcut: '⌘E' },
    { label: 'Delete', onClick: () => alert('Delete'), shortcut: '⌘⌫' },
];

<StyledMenu label="Actions" items={menuItems} />
```

---

## Menu (Advanced)

A set of unstyled, accessible components for building a custom menu.

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
