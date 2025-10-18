# Badge

A small component used to highlight status, metadata, or other snippet-sized information.

## Props

*   `children` (React.ReactNode): The content to display inside the badge.
*   `variant` (enum: 'solid' | 'outline', optional, default: 'solid'): The visual style of the badge.
*   `colorScheme` (enum: 'primary' | 'accent' | 'success' | 'error', optional, default: 'primary'): The color theme of the badge.
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { Badge } from './src/components';

<Badge colorScheme="success">
  Active
</Badge>

<Badge colorScheme="error" variant="outline">
  Offline
</Badge>
```
