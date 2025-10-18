# Color Picker

An interactive component for selecting a color. It displays a color swatch, RGB sliders, and a hex input field.

## Props

*   `value` (string, required): The currently selected color as a hex string (e.g., `#RRGGBB`).
*   `onChange` (function, required): A callback function triggered when the color value changes. It receives the new hex color string as an argument.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { ColorPicker } from './src/components';
import { useState } from 'react';

const [color, setColor] = useState('#60a5fa');

<ColorPicker value={color} onChange={setColor} />
```
