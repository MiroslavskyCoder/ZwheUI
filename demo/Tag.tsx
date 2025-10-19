
import React from 'react';
import { Tag, Sofa, Text, Stack } from '../src/components';

export const TagDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Tag</Text>
      <Text>A label for categorizing content, with optional close button.</Text>
      <Stack direction="row" gap="1rem" align="center" wrap={true}>
        <Tag size="sm">Small</Tag>
        <Tag size="md" colorScheme="accent">Medium</Tag>
        <Tag size="lg" colorScheme="success">
            Large
            <Tag.CloseButton />
        </Tag>
      </Stack>
    </Stack>
  </Sofa>
);
