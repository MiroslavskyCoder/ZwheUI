# List

A set of components for displaying structured lists of items.

## Components

*   **List**: The main `<ul>` wrapper with styling for the container.
*   **ListItem**: A `<li>` element representing a single row in the list.
*   **ListItemBody**: A `<div>` wrapper for the main content area of a ListItem, useful for complex layouts.
*   **ListItemText**: A component for displaying primary and optional secondary text in a standard format.
*   **Divider**: A `<hr>` element for visually separating `ListItem` components.

## Usage

```tsx
import { List, ListItem, ListItemText, Divider, Button } from './src/components';

<List>
  <ListItem>
    <ListItemText primary="Profile" secondary="Update your personal details" />
  </ListItem>
  <Divider />
  <ListItem>
    <ListItemText primary="Billing" />
    <Button variant="secondary">Manage</Button>
  </ListItem>
</List>
```
