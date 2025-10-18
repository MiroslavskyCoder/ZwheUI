import React from 'react';
import { Kbd, Sofa, Text, Stack } from '../src/components';

export const KbdDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Kbd</Text>
      <Text>A component for displaying keyboard shortcuts.</Text>
      <Text>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.</Text>
      <Text>Use <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> to navigate backwards.</Text>
    </Stack>
  </Sofa>
);