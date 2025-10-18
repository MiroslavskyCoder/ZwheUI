import React, { useState } from 'react';
import { Sofa, Text, Stack, ToggleButtonGroup, ToggleButton } from '../src/components';

export const ToggleButtonDemo = () => {
    const [alignment, setAlignment] = useState('left');
    const [formats, setFormats] = useState(['bold']);

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Toggle Button</Text>
                <Text>A group of buttons that can be toggled, supporting single or multiple selections.</Text>
                
                <Stack gap="0.5rem">
                    <Text weight="600">Single Selection (like a radio group)</Text>
                    <ToggleButtonGroup value={alignment} onChange={(val) => setAlignment(val as string)} type="single">
                        <ToggleButton value="left">Left</ToggleButton>
                        <ToggleButton value="center">Center</ToggleButton>
                        <ToggleButton value="right">Right</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack gap="0.5rem">
                    <Text weight="600">Multiple Selection (like a checkbox group)</Text>
                    <ToggleButtonGroup value={formats} onChange={(val) => setFormats(val as string[])} type="multiple">
                        <ToggleButton value="bold">Bold</ToggleButton>
                        <ToggleButton value="italic">Italic</ToggleButton>
                        <ToggleButton value="underline">Underline</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </Sofa>
    );
};
