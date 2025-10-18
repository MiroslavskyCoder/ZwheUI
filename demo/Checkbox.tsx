
import React, { useState } from 'react';
import { Checkbox, Sofa, Text, Stack } from '../src/components';

export const CheckboxDemo = () => {
    const [checked, setChecked] = useState(true);
    const [checked2, setChecked2] = useState(false);
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Checkbox</Text>
                <Text>A standard checkbox component for capturing boolean input.</Text>
                <Checkbox label="Accept terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <Checkbox label="Subscribe to newsletter" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />
                <Checkbox label="Disabled option" checked={true} disabled />
                <Checkbox label="Disabled option" checked={false} disabled />
            </Stack>
        </Sofa>
    );
};
