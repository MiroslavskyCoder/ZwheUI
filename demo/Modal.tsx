
import React, { useState } from 'react';
import { Modal, Sofa, Text, Stack, Button } from '../src/components';

export const ModalDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Modal</Text>
                <Text>A modal dialog that appears on top of the main content, disabling page interaction until dismissed.</Text>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Basic Modal">
                    <Text>This is the content of the modal. You can put any React components here.</Text>
                </Modal>
            </Stack>
        </Sofa>
    );
};
