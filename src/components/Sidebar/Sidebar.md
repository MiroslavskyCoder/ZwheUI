# Sidebar

A set of components for creating a vertical navigation sidebar, commonly used for main application navigation.

## Components

*   **Sidebar**: The main container for the sidebar content.
*   **SidebarNav**: A wrapper for a navigation section, which can include a title.
*   **SidebarNavItem**: A single, clickable navigation link, with support for an icon and an active state.

## Props

### Sidebar
*   `width` (string, optional, default: '250px'): The width of the sidebar.
*   `children` (React.ReactNode): The content of the sidebar.

### SidebarNav
*   `title` (string, optional): A title for the navigation section.
*   `children` (React.ReactNode): A collection of `SidebarNavItem` components.

### SidebarNavItem
*   `icon` (React.ReactNode, optional): An icon to display next to the text.
*   `isActive` (boolean, optional): If true, applies an active style to the item.
*   All other props are passed to the underlying `<a>` tag (e.g., `href`, `onClick`).

## Usage

```tsx
import { Sidebar, SidebarNav, SidebarNavItem } from './src/components';

<Sidebar>
    <SidebarNav title="Main Menu">
        <SidebarNavItem href="/dashboard" isActive>
            Dashboard
        </SidebarNavItem>
        <SidebarNavItem href="/settings">
            Settings
        </SidebarNavItem>
    </SidebarNav>
</Sidebar>
```
