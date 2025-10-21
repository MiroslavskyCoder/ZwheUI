# Icons

ZwheUI includes a flexible `Icon` component and a set of pre-built SVG icons to ensure consistency across your application.

## `Icon` Component

The `Icon` component acts as a styled wrapper around an SVG icon. It standardizes sizing, coloring, and alignment.

### Props
- `as` (required): The icon component to render (e.g., `HomeIcon`).
- `size` (optional): The width and height of the icon (e.g., `24`, `'1.5rem'`). Defaults to `1em`.
- `color` (optional): The stroke or fill color of the icon. Defaults to `currentColor`.

### Usage

You must import both the `Icon` component and the specific icon you want to use from the library.

```tsx
import { Icon, Button } from 'zwheui';
import { HomeIcon, SettingsIcon } from 'zwheui/icons'; // Assuming icons are exported from a sub-path

// Basic icon
<Icon as={HomeIcon} size={24} color="blue" />

// Icon inside a button
<Button>
  <Icon as={SettingsIcon} size={16} />
  <span>Settings</span>
</Button>
```

## Available Icons

The library includes a variety of commonly used icons. To see a full list, check the `src/icons` directory or the "Icon" component demo in the showcase.

Some examples include:
- `HomeIcon`
- `SettingsIcon`
- `UserIcon`
- `PlusIcon`
- `TrashIcon`
- `ChevronLeftIcon`
- `PlayIcon`
- and many more.

## Creating Your Own Icons

You can easily create your own icons to use with the `Icon` component. The icon should be a React component that returns an SVG. For best results, use `width="1em"`, `height="1em"`, and `stroke="currentColor"` to allow the `Icon` wrapper to control the size and color.

```tsx
// src/my-icons/MyCustomIcon.tsx
import React from 'react';

export const MyCustomIcon = (props) => (
  <svg 
    width="1em" 
    height="1em" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    {...props}
  >
    {/* Your SVG paths here */}
  </svg>
);
```
