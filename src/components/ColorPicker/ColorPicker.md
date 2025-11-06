# Color Picker

A professional-grade, interactive component for color selection, inspired by tools in graphics software. It now features a draggable panel with a visual color wheel and saturation/value box.

## Features

*   **Draggable Interface**: The picker is a floating panel that can be moved around the screen, allowing users to position it conveniently over their work.
*   **Visual Picker**: An interactive hue wheel and an inner saturation/value square provide an intuitive way to explore and select colors.
*   **Multiple Color Models**: Supports real-time conversion and input for a wide range of color models: HEX, RGB, HSL, HSV, CMYK, LAB, and XYZ.
*   **Color Harmonies**: Visual indicators directly on the hue wheel show complementary, triadic, analogous, and other color schemes, which update in real-time as you select a new color.
*   **Comparison Swatches**: A "current" vs. "new" color swatch allows for easy comparison before committing to a new color.
*   **Professional UI**: Includes an eyedropper icon (for future implementation) and a "Web Safe" checkbox, mimicking the features of professional design tools.

## Props

*   `value` (string, required): The currently selected color as a hex string (e.g., `#RRGGBB`).
*   `onChange` (function, required): A callback function that is triggered when the color value changes. It receives the new hex color string as an argument.
*   `isOpen` (boolean, required): Controls the visibility of the color picker panel.
*   `onClose` (function, required): A callback function to close the panel, typically triggered by clicking a close button.

## Usage

The `ColorPicker` is now a floating panel, so you need to manage its visibility state.

```tsx
import { ColorPicker, Button, Box } from './src/components';
import { useState } from 'react';

const MyComponent = () => {
    const [color, setColor] = useState('#60a5fa');
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsPickerOpen(true)}>
                Show Color Picker
            </Button>
            <Box style={{ width: '50px', height: '50px', backgroundColor: color, marginTop: '1rem' }} />

            {isPickerOpen && (
                <ColorPicker 
                    value={color} 
                    onChange={setColor} 
                    isOpen={isPickerOpen}
                    onClose={() => setIsPickerOpen(false)}
                />
            )}
        </div>
    );
}
```