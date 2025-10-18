import React, { useState } from 'react';
import { Dialog, Sofa, Text, Stack, Button } from '../src/components';

export const DialogDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const dialogActions = [
        { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'secondary' as const },
        { label: 'Delete', onClick: () => { alert('Deleted!'); setIsOpen(false); }, variant: 'primary' as const }
    ];

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Dialog</Text>
                <Text>A modal window that prompts the user for a decision or to enter information, built on top of the Modal component.</Text>
                <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
                <Dialog 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    title="Delete Item"
                    actions={dialogActions}
                >
                    <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
                </Dialog>
            </Stack>
        </Sofa>
    );
};