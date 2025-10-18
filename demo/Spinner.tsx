import React from 'react';
import { Spinner, Sofa, Text, Stack } from '../src/components';

export const SpinnerDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Spinner</Text>
      <Text>A simple loading indicator.</Text>
      <Stack direction="row" gap="1rem" align="center">
        <Spinner size={16} />
        <Spinner size={24} />
        <Spinner size={32} />
      </Stack>
    </Stack>
  </Sofa>
);