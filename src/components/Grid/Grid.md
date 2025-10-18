# Grid

A responsive grid layout component. It automatically adjusts the number of columns to fit its container, based on a minimum item width you provide.

## Props

*   `minItemWidth` (string, optional, default: '350px'): The minimum width for each item in the grid. The grid will create as many columns as can fit.
*   `gap` (string, optional, default: '1.5rem'): The space between grid items.
*   `className` (string, optional): Additional CSS classes for the container.
*   All other standard HTML `<div>` attributes are supported.

## Usage

```tsx
import { Grid, Card } from './src/components';

<Grid minItemWidth="200px" gap="1rem">
    <Card>Item 1</Card>
    <Card>Item 2</Card>
    <Card>Item 3</Card>
    <Card>Item 4</Card>
</Grid>
```
