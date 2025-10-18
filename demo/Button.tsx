import React from 'react';
import { Button, Sofa, Text, Stack } from '../src/components';

export const ButtonDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Button</Text>
      <Text>A standard button component with primary, secondary, accent, and disabled states.</Text>
      <Stack direction="row" gap="1rem" align="center" wrap={true}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </Stack>
    </Stack>
  </Sofa>
);