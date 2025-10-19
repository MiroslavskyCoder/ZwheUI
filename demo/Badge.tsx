import React from 'react';
import { Badge, Sofa, Text, Stack } from '../src/components';

export const BadgeDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Badge</Text>
      <Text>A small component to highlight status or metadata.</Text>
      <Stack direction="row" gap="1rem" align="center" wrap={true}>
        <Badge>Default</Badge>
        <Badge colorScheme="accent">Warning</Badge>
        <Badge colorScheme="success">Success</Badge>
        <Badge colorScheme="error" variant="outline">Error</Badge>
      </Stack>
    </Stack>
  </Sofa>
);