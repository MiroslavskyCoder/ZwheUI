# Grid

A responsive grid layout component. It automatically adjusts the number of columns to fit its container, or uses a fixed number of columns. Now includes a `Grid.Item` sub-component for controlling column and row spans.

## Components

*   **Grid**: The main grid container.
*   **Grid.Item**: A wrapper for a grid item, allowing control over its span.

## Props

### Grid
*   `minItemWidth` (string, optional, default: '350px'): The minimum width for each item in a responsive grid. The grid will create as many columns as can fit.
*   `gap` (string, optional, default: '1.5rem'): The space between grid items.
*   `columns` (number, optional): A fixed number of columns to create. Overrides `minItemWidth`.
*   `alignItems` (string, optional): Aligns grid items along the block (column) axis.
*   `justifyContent` (string, optional): Aligns grid items along the inline (row) axis.
*   `className` (string, optional): Additional CSS classes for the container.
*   All other standard `<div>` attributes are supported.

### Grid.Item
*   `colSpan` (number, optional): The number of columns the item should span.
*   `rowSpan` (number, optional): The number of rows the item should span.

## Usage

```tsx
import { Grid, Card } from './src/components';

// Responsive grid
<Grid minItemWidth="200px" gap="1rem">
    <Grid.Item><Card>Item 1</Card></Grid.Item>
    <Grid.Item><Card>Item 2</Card></Grid.Item>
</Grid>

// Fixed 4-column grid with spanning
<Grid columns={4} gap="1rem">
    <Grid.Item colSpan={2}><Card>Spans 2 columns</Card></Grid.Item>
    <Grid.Item><Card>Item B</Card></Grid.Item>
    <Grid.Item><Card>Item C</Card></Grid.Item>
</Grid>
```
