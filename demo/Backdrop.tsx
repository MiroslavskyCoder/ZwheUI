
import React, { useState } from 'react';
import { Backdrop, Sofa, Text, Stack, Button } from '../src/components';

export const BackdropDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Backdrop</Text>
                <Text>A semi-transparent overlay to disable interaction with the main page, often used with Modals or Drawers.</Text>
                <Button onClick={() => setIsOpen(true)}>Show Backdrop</Button>
                <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
            </Stack>
        </Sofa>
    );
}
