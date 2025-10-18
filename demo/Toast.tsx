import React from 'react';
import { useToast, Sofa, Text, Stack, Button } from '../src/components';

export const ToastDemo = () => {
    const { addToast } = useToast();

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Toast</Text>
                <Text>A system for dispatching ephemeral, non-intrusive notifications.</Text>
                <Stack direction="row" gap="1rem" wrap={true}>
                    <Button onClick={() => addToast({ title: 'Event has been created.', description: 'Anyone with the link can now view it.' })}>
                        Show Info
                    </Button>
                     <Button onClick={() => addToast({ title: 'Success!', description: 'Your profile was updated.', variant: 'success' })}>
                        Show Success
                    </Button>
                     <Button onClick={() => addToast({ title: 'Warning', description: 'Please check your connection.', variant: 'warning' })}>
                        Show Warning
                    </Button>
                     <Button onClick={() => addToast({ title: 'Error', description: 'Failed to save changes.', variant: 'error' })}>
                        Show Error
                    </Button>
                </Stack>
            </Stack>
        </Sofa>
    );
};