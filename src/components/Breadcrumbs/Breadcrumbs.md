# Breadcrumbs

A navigational aid that shows the user's current location within the application's hierarchy.

## Props

*   `items` (array of objects, required): An array of breadcrumb items. Each object should have:
    *   `label` (string, required): The text to display.
    *   `href` (string, optional): The URL for the link. If omitted, the item will be rendered as plain text.
*   `separator` (React.ReactNode, optional, default: '/'): The character or component to display between items.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { Breadcrumbs } from './src/components';

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
];

<Breadcrumbs items={breadcrumbItems} />
```
