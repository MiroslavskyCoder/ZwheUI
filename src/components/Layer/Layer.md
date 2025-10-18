# Layer

A layout utility component for controlling the stacking order of elements using `z-index`.

## Props

*   `children` (React.ReactNode): The content to be rendered inside the layer.
*   `z` (number, optional, default: 0): The `z-index` value to apply to the layer.
*   `className` (string, optional): Additional CSS classes for custom styling.
*   `style` (React.CSSProperties, optional): Inline styles for the layer.

## Usage

```tsx
import { Layer, Card, Text } from './src/components';

<div style={{ position: 'relative', height: '100px' }}>
    <Layer z={0}>
        <Card>Base Layer</Card>
    </Layer>
    <Layer z={10} style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <Card>Top Layer</Card>
    </Layer>
</div>
```
