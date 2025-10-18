# Stack

A layout component for arranging items in a vertical or horizontal stack with a consistent gap between them. It is a simplified version of the `Layout` component.

## Props

*   `direction` (enum: 'row' | 'column', optional, default: 'column'): The direction to stack the items.
*   `gap` (string, optional, default: '1rem'): The space between items.
*   `align` (string, optional): The alignment of items along the cross axis (e.g., `center`, `start`, `end`).
*   `justify` (string, optional): The alignment of items along the main axis (e.g., `center`, `space-between`).
*   All other standard HTML `<div>` attributes are supported.

## Usage

```tsx
import { Stack, Card } from './src/components';

// Vertical Stack
<Stack gap="1rem">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</Stack>

// Horizontal Stack
<Stack direction="row" gap="1rem" align="center">
  <Card>Item A</Card>
  <Card>Item B</Card>
</Stack>
```
