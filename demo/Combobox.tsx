
import React, { useState } from 'react';
import { Combobox, Sofa, Text, Stack } from '../src/components';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
];

export const ComboboxDemo = () => {
    const [value, setValue] = useState('react');
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Combobox</Text>
                <Text>An input field that combines a text input with a dropdown list for filtering and selecting options.</Text>
                <Combobox items={frameworks} value={value} onChange={setValue} placeholder="Select a framework..." />
                <Text>Selected Value: {value || 'None'}</Text>
            </Stack>
        </Sofa>
    );
};
