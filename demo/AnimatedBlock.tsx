
import React from 'react';
import { AnimatedBlock, Sofa, Text, Stack } from '../src/components';

export const AnimatedBlockDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Animated Block</Text>
      <Text>An interactive demonstration of the `useCurveAnimation` hook, allowing you to test different animation timing functions.</Text>
      <AnimatedBlock />
    </Stack>
  </Sofa>
);
