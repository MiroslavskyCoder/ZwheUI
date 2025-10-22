# Icon

A flexible component for rendering SVG icons, allowing for consistent sizing and coloring across the application.

## Props

*   `as` (React.ElementType, required): The SVG icon component to render (e.g., `HomeIcon`).
*   `size` (number | string, optional, default: '1em'): The width and height of the icon.
*   `className` (string, optional): Additional CSS classes for custom styling.
*   All other standard SVG attributes are supported (e.g., `color`, `strokeWidth`).

## Usage

First, import the `Icon` component and the specific icon you want to use.

```tsx
import { Icon, Button } from 'zwheui';
import { HomeIcon, SettingsIcon } from 'zwheui/icons'; // Assuming icons are exported from a sub-path

// Basic icon
<Icon as={HomeIcon} size={24} color="#60a5fa" />

// Icon inside a button
<Button>
  <Icon as={SettingsIcon} size={16} />
  <span>Settings</span>
</Button>
```

## Creating Icons

Icons should be created as simple React components that return an SVG. For best results, use `width="1em"`, `height="1em"`, and `stroke="currentColor"` on the SVG element to ensure they scale and color correctly with the `Icon` component's props. Store them in the `/src/icons` directory.
