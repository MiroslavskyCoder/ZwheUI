

import React from 'react';
import { Link, Sofa, Text, Stack } from '../src/components';

export const LinkDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Link</Text>
      <Text>A styled anchor tag for navigation. Supports standard `href` for external links and `to` for client-side routing with React Router.</Text>
      <Text>
        This is a standard external link to <Link href="https://example.com" target="_blank" rel="noopener noreferrer">example.com</Link>.
      </Text>
      <Text>
        This is a client-side router link for internal navigation using the `to` prop: <Link to="/components">Go to Components</Link>.
      </Text>
    </Stack>
  </Sofa>
);