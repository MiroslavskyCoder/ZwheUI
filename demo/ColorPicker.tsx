import React, { useState } from 'react';
import { ColorPicker, Text, Stack, Button, Box } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Color Picker

A professional-grade, interactive component for color selection, inspired by tools in graphics software. It now features a draggable panel with a visual color wheel and saturation/value box.

## Features
*   **Draggable Interface**: The picker is a floating panel that can be moved around the screen.
*   **Visual Picker**: An interactive hue wheel and saturation/value square for intuitive color selection.
*   **Color Models**: Supports real-time conversion and input for HEX, RGB, HSL, HSV, CMYK, LAB, and XYZ.
*   **Color Harmonies**: Visual indicators on the hue wheel show complementary, triadic, and other color schemes.
*   **Comparison Swatches**: Displays the new color selection against the original color.

## Props
*   \`value\` (string, required): The color as a hex string (e.g., \`#RRGGBB\`).
*   \`onChange\` (function, required): Callback triggered when the color changes.
*   \`isOpen\` (boolean, required): Controls the visibility of the picker panel.
*   \`onClose\` (function, required): Callback to close the panel.

## Usage
\`\`\`tsx
import { ColorPicker, Button } from './src/components';
import { useState } from 'react';

const [color, setColor] = useState('#60a5fa');
const [isPickerOpen, setIsPickerOpen] = useState(false);

<>
    <Button onClick={() => setIsPickerOpen(true)}>Show Picker</Button>
    <ColorPicker 
        value={color} 
        onChange={setColor} 
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
    />
</>
\`\`\``;


export const ColorPickerDemo = () => {
    const [color, setColor] = useState('#60a5fa');
    const [isPickerOpen, setIsPickerOpen] = useState(true);
    
    return (
        // FIX: The ColorPicker component is a floating panel and should not be a direct child of DemoSection.
        <>
            <DemoSection
                title="Color Picker"
                description="A professional-grade, draggable color picker with a visual wheel and support for multiple color models."
                livePreview={
                    <Stack align="center" gap="1rem">
                        <Text>The Color Picker is now a floating panel.</Text>
                        <Stack direction="row" align="center" gap="1rem">
                            <Button onClick={() => setIsPickerOpen(true)}>
                                {isPickerOpen ? 'Picker is Open' : 'Show Color Picker'}
                            </Button>
                            <Box style={{width: '40px', height: '40px', backgroundColor: color, borderRadius: '8px', border: '1px solid #fff'}} />
                        </Stack>
                    </Stack>
                }
                propControls={
                    <Text color="textSecondary">
                        The new Color Picker is a fully interactive, self-contained component. Use the button in the 'Live Preview' to toggle its visibility.
                    </Text>
                }
                documentation={documentation}
                fullSourceCode={`// The component is too large to display here. Please see the source file.`}
            />
            {isPickerOpen && (
                <ColorPicker 
                    value={color} 
                    onChange={setColor} 
                    isOpen={isPickerOpen}
                    onClose={() => setIsPickerOpen(false)}
                />
            )}
        </>
    );
};