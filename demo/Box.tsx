
import React from 'react';
import { Box, Sofa, Text, Stack } from '../src/components';
import { useTheme } from '../src/core';

export const BoxDemo = () => {
    const { theme } = useTheme();
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Box</Text>
                <Text>A polymorphic layout primitive, a foundational building block.</Text>
                <Box style={{ padding: '1rem', backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}`, borderRadius: '8px' }}>
                    <Text>This is a `div` by default.</Text>
                </Box>
                 <Box as="span" style={{ padding: '0.5rem', backgroundColor: theme.colors.secondary, borderRadius: '4px' }}>
                    <Text>This is a `span`.</Text>
                </Box>
            </Stack>
        </Sofa>
    )
};
