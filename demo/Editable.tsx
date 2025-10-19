
import React from 'react';
import { Editable, Sofa, Text, Stack, useToast } from '../src/components';

export const EditableDemo = () => {
    const { addToast } = useToast();

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Editable</Text>
                <Text>A component for inline editing. Click the text below.</Text>
                <Editable 
                    defaultValue="Project Alpha"
                    onSave={(newValue) => {
                        addToast({
                            title: 'Saved!',
                            description: `Project name changed to "${newValue}"`,
                            variant: 'success'
                        });
                    }}
                />
            </Stack>
        </Sofa>
    );
};
