# Color Picker

An interactive component for selecting a color. It displays a color swatch and allows editing in different color models: HEX/RGB, HSL, and CIELAB.

## Props

*   `value` (string, required): The currently selected color as a hex string (e.g., `#RRGGBB`).
*   `onChange` (function, required): A callback function triggered when the color value changes. It receives the new hex color string as an argument.
*   `className` (string, optional): Additional CSS classes for the container.
*   `disableColorModel` (Array<'HEX' | 'HSL' | 'LAB'>, optional): An array of color model strings to disable and hide from the segmented control.

## Usage

```tsx
import { ColorPicker } from './src/components';
import { useState } from 'react';

const [color, setColor] = useState('#60a5fa');

// Standard color picker
<ColorPicker value={color} onChange={setColor} />

// Color picker with the LAB model disabled
<ColorPicker 
  value={color} 
  onChange={setColor} 
  disableColorModel={['LAB']}
/>
```