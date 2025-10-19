
import React from 'react';
import { ButtonGroup, Button, Sofa, Text, Stack } from '../src/components';

export const ButtonGroupDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Button Group</Text>
      <Text>A component to group related buttons.</Text>
      
      <Text weight="600">Spaced (default)</Text>
      <ButtonGroup>
        <Button variant="secondary">Save</Button>
        <Button variant="primary">Submit</Button>
      </ButtonGroup>
      
      <Text weight="600">Attached</Text>
       <ButtonGroup isAttached>
        <Button variant="secondary">Copy</Button>
        <Button variant="secondary">Paste</Button>
        <Button variant="secondary">Cut</Button>
      </ButtonGroup>

    </Stack>
  </Sofa>
);
