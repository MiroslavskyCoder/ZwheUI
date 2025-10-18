# Dropdown

A flexible, general-purpose dropdown menu component built on top of the `Popper` utility.

## Components

*   **Dropdown**: The main wrapper component.
*   **DropdownTrigger**: The element that, when clicked, toggles the dropdown's visibility. It must wrap a single child.
*   **DropdownContent**: The container for the dropdown menu items that appears when open.
*   **DropdownItem**: A clickable button element within the `DropdownContent`.

## Usage

```tsx
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, Button } from './src/components';

<Dropdown>
    <DropdownTrigger>
        <Button>User Actions</Button>
    </DropdownTrigger>
    <DropdownContent>
         <DropdownItem onClick={() => alert('Profile clicked')}>Profile</DropdownItem>
         <DropdownItem onClick={() => alert('Settings clicked')}>Settings</DropdownItem>
         <DropdownItem onClick={() => alert('Logout clicked')} style={{color: '#f87171'}}>
            Logout
         </DropdownItem>
    </DropdownContent>
</Dropdown>
```
