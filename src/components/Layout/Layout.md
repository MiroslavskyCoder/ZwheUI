# Layout

A flexible layout component based on CSS Grid for arranging items in a row or column with consistent spacing.

## Props

*   `children` (React.ReactNode): The items to be arranged.
*   `direction` (enum: 'row' | 'column', optional, default: 'column'): The direction to arrange the items.
*   `gap` (string, optional, default: '0.75rem'): The space between items.
*   `align` (string, optional, default: 'stretch'): The alignment of items along the cross axis (e.g., `center`, `start`, `end`).
*   `justify` (string, optional, default: 'start'): The alignment of items along the main axis (e.g., `center`, `space-between`).
*   `className` (string, optional): Additional CSS classes for custom styling.
*   `style` (React.CSSProperties, optional): Inline styles for the container.

## Usage

```tsx
import { Layout, Button } from './src/components';

<Layout direction="row" gap="1rem" align="center">
    <Button>Yes</Button>
    <Button>No</Button>
</Layout>
```
