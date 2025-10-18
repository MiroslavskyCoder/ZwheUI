// FIX: This file incorrectly contained the component implementation instead of a demo.
// It has been replaced with a proper demo component, `ColorPickerDemo`, to resolve the import error in `DemoApp.tsx`.
import React, { useState } from 'react';
import { ColorPicker, Sofa, Text, Stack } from '../src/components';

export const ColorPickerDemo = () => {
    const [color, setColor] = useState('#60a5fa');

    return (
        <Sofa>
            <Stack gap="1rem" align="center">
                <Text as="h2" size="1.5rem" weight="600">Color Picker</Text>
                <Text>An interactive component for selecting a color using RGB sliders.</Text>
                <ColorPicker value={color} onChange={setColor} />
                <Text>Selected Color: {color}</Text>
            </Stack>
        </Sofa>
    );
};
