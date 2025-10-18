
import React, { useState } from 'react';
import { NumberInput, Sofa, Text, Stack } from '../src/components';

export const NumberInputDemo = () => {
    const [value, setValue] = useState(1);

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Number Input</Text>
                <Text>An input for numbers with stepper controls.</Text>
                <div style={{width: '150px'}}>
                    <NumberInput value={value} onChange={setValue} min={0} max={10} />
                </div>
                <Text>Current value: {value}</Text>
            </Stack>
        </Sofa>
    );
};
