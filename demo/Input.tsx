
import React from 'react';
import { Input, Sofa, Text, Stack } from '../src/components';

export const InputDemo = () => (
  <Sofa>
    <Stack gap="1.5rem">
      <Text as="h2" size="1.5rem" weight="600">Input</Text>
      <Text>A wrapper for TextInput that includes a label and an error message display area.</Text>
      <Input label="Email Address" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Username" defaultValue="zwhe" error="This username is already taken." />
    </Stack>
  </Sofa>
);
