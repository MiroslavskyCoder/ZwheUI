
import React from 'react';
import { Footer, Sofa, Text, Stack, Link } from '../src/components';

export const FooterDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Footer</Text>
      <Text>A semantic container for the bottom of a page layout.</Text>
      <Footer>
        <Stack gap="0.5rem">
            <Text size="14px" color="inherit">© 2024 ZwheUI</Text>
            <Link href="#">Terms of Service</Link>
        </Stack>
      </Footer>
    </Stack>
  </Sofa>
);
