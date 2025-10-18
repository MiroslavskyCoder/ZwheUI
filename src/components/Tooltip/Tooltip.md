# Tooltip

A small, floating box that provides additional information when hovering over an element. This is the low-level UI component used internally by `ChartTooltip`. It is rendered in a React Portal.

## Note
This component is designed for internal use and does not include the hover detection logic itself. It is meant to be controlled by a parent component that manages its position and visibility.

## Props

*   `children` (React.ReactNode, required): The content to display inside the tooltip.
*   `style` (React.CSSProperties, optional): Inline styles for positioning the tooltip (e.g., `top`, `left`).
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { Tooltip } from './src/components';
import { useState } from 'react';

const MyComponent = () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setTooltip({ visible: true, x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            Hover over me.
            {tooltip.visible && (
                <Tooltip style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}>
                    Tooltip Content
                </Tooltip>
            )}
        </div>
    );
}
```
