
import React from 'react';
import { Center, Sofa, Text, Stack, Card } from '../src/components';
import { useTheme } from '../src/core';

export const CenterDemo = () => {
    const { theme } = useTheme();
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Center</Text>
                <Text>A layout component to center its children.</Text>
                <Center style={{ height: '100px', backgroundColor: theme.colors.background, borderRadius: '8px' }}>
                    <Card><Text>Perfectly Centered</Text></Card>
                </Center>
            </Stack>
        </Sofa>
    );
};
