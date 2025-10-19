
import React from 'react';
import { Divider, Sofa, Text, Stack } from '../src/components';

export const DividerDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Divider</Text>
      <Text>A component to visually separate content.</Text>
      
      <Text>Horizontal (default)</Text>
      <Stack>
        <Text>Content A</Text>
        <Divider />
        <Text>Content B</Text>
      </Stack>

      <Text>Vertical</Text>
      <Stack direction="row" align="center" style={{ height: '40px' }}>
          <Text>Item 1</Text>
          <Divider orientation="vertical" />
          <Text>Item 2</Text>
      </Stack>
    </Stack>
  </Sofa>
);
