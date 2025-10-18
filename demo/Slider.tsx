
import React, { useState } from 'react';
import { Slider, Sofa, Text, Stack } from '../src/components';

export const SliderDemo = () => {
    const [value, setValue] = useState(50);
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Slider</Text>
                <Text>An input component that allows selecting a value from a continuous or discrete range.</Text>
                <Slider value={value} onChange={setValue} min={0} max={100} showValue />
                {/* FIX: Added required 'onChange' prop to the disabled slider. */}
                <Slider value={25} onChange={() => {}} disabled showValue />
            </Stack>
        </Sofa>
    );
};