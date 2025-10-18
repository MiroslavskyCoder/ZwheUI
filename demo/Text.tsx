
import React from 'react';
import { Text, Sofa, Stack } from '../src/components';
import { useTheme } from '../src/core/theme/ThemeProvider';

export const TextDemo = () => {
    const { theme } = useTheme();
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Text</Text>
                <Text>A versatile component for rendering text with consistent typography styles.</Text>
                <Text size="1.25rem" weight="700">Heading XL Bold</Text>
                <Text size="1.125rem" weight="600">Heading LG Semibold</Text>
                <Text size="1rem" weight="500">Body Medium (default)</Text>
                <Text size="0.875rem" color={theme.colors.textSecondary}>Small secondary text</Text>
                <Text size="0.75rem" color={theme.colors.primary}>Extra small primary text</Text>
            </Stack>
        </Sofa>
    );
};
