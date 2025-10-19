
import React from 'react';
import { Flex, Sofa, Text, Stack, Card } from '../src/components';

export const FlexDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Flex</Text>
            <Text>A Box with `display: flex` and convenient props for flexbox layouts.</Text>
            <Flex gap="1rem" align="center" justify="space-between">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
                <Card>Item 3</Card>
            </Flex>
        </Stack>
    </Sofa>
);
