# Grid

A responsive grid layout component. It automatically adjusts the number of columns to fit its container, or uses a fixed number of columns.

## Props

*   `minItemWidth` (string, optional, default: '350px'): The minimum width for each item in a responsive grid. The grid will create as many columns as can fit.
*   `gap` (string, optional, default: '1.5rem'): The space between grid items.
*   `columns` (number, optional): A fixed number of columns to create. Overrides `minItemWidth`.
*   `alignItems` (string, optional): Aligns grid items along the block (column) axis.
*   `justifyContent` (string, optional): Aligns grid items along the inline (row) axis.
*   `className` (string, optional): Additional CSS classes for the container.
*   All other standard `<div>` attributes are supported.

## Usage

```tsx
import { Grid, Card } from './src/components';

// Responsive grid
<Grid minItemWidth="200px" gap="1rem">
    <Card>Item 1</Card>
    <Card>Item 2</Card>
</Grid>

// Fixed 3-column grid
<Grid columns={3} gap="1rem">
    <Card>Item A</Card>
    <Card>Item B</Card>
    <Card>Item C</Card>
</Grid>
```