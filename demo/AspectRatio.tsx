
import React from 'react';
import { AspectRatio, Sofa, Text, Stack, Center } from '../src/components';
import { useTheme } from '../src/core';

export const AspectRatioDemo = () => {
    const { theme } = useTheme();
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">AspectRatio</Text>
                <Text>A container that maintains a fixed aspect ratio.</Text>
                <AspectRatio ratio={16 / 9} style={{ backgroundColor: theme.colors.background, borderRadius: '8px' }}>
                    <Center>
                        <Text>16 / 9</Text>
                    </Center>
                </AspectRatio>
                <AspectRatio ratio={1} style={{ backgroundColor: theme.colors.background, borderRadius: '8px' }}>
                    <Center>
                        <Text>1 / 1</Text>
                    </Center>
                </AspectRatio>
            </Stack>
        </Sofa>
    );
};
