
import React from 'react';
import { Textarea, Sofa, Text, Stack } from '../src/components';

export const TextareaDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Textarea</Text>
            <Text>A styled multi-line text input field for longer form content.</Text>
            <Textarea placeholder="Enter your comments here..." rows={4} />
            <Textarea defaultValue="This textarea is disabled." disabled />
        </Stack>
    </Sofa>
);
