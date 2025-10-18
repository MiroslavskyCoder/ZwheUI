
import React from 'react';
import { Header, Sofa, Text, Stack, Button } from '../src/components';

export const HeaderDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Header</Text>
      <Text>A semantic container for the top of a page layout. Use Header.Left and Header.Right to align content.</Text>
      <Header>
        <Header.Left>
            <Text weight="600">My Application</Text>
        </Header.Left>
        <Header.Right>
            <Button variant="secondary">Login</Button>
        </Header.Right>
      </Header>
    </Stack>
  </Sofa>
);
