
import React from 'react';
import { Code, Sofa, Text, Stack } from '../src/components';

export const CodeDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Code</Text>
      <Text>A component for displaying inline code snippets.</Text>
      <Text>
        The <Code>useStyles</Code> hook is a powerful tool for creating scoped styles.
      </Text>
    </Stack>
  </Sofa>
);
