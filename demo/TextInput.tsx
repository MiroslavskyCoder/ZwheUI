
import React from 'react';
import { TextInput, Sofa, Text, Stack } from '../src/components';

export const TextInputDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Text Input</Text>
            <Text>The base styled text input component used in other form elements like Input and Search.</Text>
            <TextInput placeholder="Enter your name..." />
            <TextInput defaultValue="This input is disabled" disabled />
        </Stack>
    </Sofa>
);
