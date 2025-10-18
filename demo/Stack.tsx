import React from 'react';
import { Stack, Sofa, Text, Card } from '../src/components';

export const StackDemo = () => (
    <Sofa>
        <Stack gap="1.5rem">
            <Text as="h2" size="1.5rem" weight="600">Stack</Text>
            <Text>A layout component for arranging items with consistent spacing, now powered by Flexbox and supporting wrapping.</Text>
            
            <Text weight={600}>Vertical Stack (default)</Text>
            <Stack gap="1rem">
                <Card><Text size="0.875rem">Item 1</Text></Card>
                <Card><Text size="0.875rem">Item 2</Text></Card>
            </Stack>
            
            <Text weight={600} style={{marginTop: '1rem'}}>Horizontal Stack</Text>
            <Stack direction="row" gap="1rem">
                <Card><Text size="0.875rem">Item A</Text></Card>
                <Card><Text size="0.875rem">Item B</Text></Card>
            </Stack>

            <Text weight={600} style={{marginTop: '1rem'}}>Wrapped Horizontal Stack</Text>
            <Stack direction="row" gap="1rem" wrap={true}>
                <Card style={{minWidth: '150px'}}><Text size="0.875rem">Wrapped Item 1</Text></Card>
                <Card style={{minWidth: '150px'}}><Text size="0.875rem">Wrapped Item 2</Text></Card>
                <Card style={{minWidth: '150px'}}><Text size="0.875rem">Wrapped Item 3</Text></Card>
                 <Card style={{minWidth: '150px'}}><Text size="0.875rem">Wrapped Item 4</Text></Card>
            </Stack>
        </Stack>
    </Sofa>
);