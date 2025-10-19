
import React, { useState } from 'react';
import { PinInput, Sofa, Text, Stack } from '../src/components';

export const PinInputDemo = () => {
    const [pin, setPin] = useState('');

    return (
        <Sofa>
            <Stack gap="1rem" align="center">
                <Text as="h2" size="1.5rem" weight="600">Pin Input</Text>
                <Text>For entering PINs or one-time codes.</Text>
                <PinInput length={6} value={pin} onChange={setPin} />
                <Text size="sm">Current Value: {pin}</Text>
            </Stack>
        </Sofa>
    );
};
