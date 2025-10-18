import React, { useState } from 'react';
import { Drawer, Sofa, Text, Stack, Button } from '../src/components';

export const DrawerDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Drawer</Text>
                <Text>A panel that slides in from the edge of the screen.</Text>
                <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
                <Drawer 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    title="Settings"
                >
                    <Stack gap="1rem">
                        <Text>This is the content of the drawer.</Text>
                        <Text>You can place forms, navigation, or any other content here.</Text>
                        <Button onClick={() => setIsOpen(false)}>Close</Button>
                    </Stack>
                </Drawer>
            </Stack>
        </Sofa>
    );
};