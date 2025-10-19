
import React from 'react';
import { useSnackbar, Sofa, Text, Stack, Button } from '../src/components';

export const SnackbarDemo = () => {
    const { addSnackbar } = useSnackbar();

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Snackbar</Text>
                <Text>A component for brief, temporary notifications displayed at the bottom of the screen.</Text>
                <Stack direction="row" gap="1rem" wrap={true}>
                    <Button onClick={() => addSnackbar({ message: 'This is a simple snackbar.' })}>
                        Show Snackbar
                    </Button>
                     <Button variant="secondary" onClick={() => {
                         addSnackbar({
                             message: 'An action was performed.',
                             action: {
                                 label: 'Undo',
                                 onClick: () => alert('Undo action clicked!')
                             }
                         })
                     }}>
                        Show with Action
                    </Button>
                </Stack>
            </Stack>
        </Sofa>
    );
};
