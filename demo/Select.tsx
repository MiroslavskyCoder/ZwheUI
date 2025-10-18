
import React, { useState } from 'react';
import { Select, Sofa, Text, Stack } from '../src/components';

const selectOptions = [
    { value: 'grid', label: 'Data Grid Pro' },
    { value: 'suite', label: 'Component Suite' },
    { value: 'headless', label: 'Headless Components' },
];

export const SelectDemo = () => {
    const [value, setValue] = useState('grid');
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Select</Text>
                <Text>A custom-styled dropdown component for selecting a single option from a list.</Text>
                <Select value={value} onChange={setValue} options={selectOptions} />
                 <Text>Selected Value: {value}</Text>
            </Stack>
        </Sofa>
    );
};
