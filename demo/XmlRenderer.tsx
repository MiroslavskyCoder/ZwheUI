
import React from 'react';
import { XmlRenderer, Sofa, Text, Stack, Card } from '../src/components';

const sampleXml = `
<layout direction="column" gap="1rem">
  <Card>
    <Text>This is a Card inside a Layout.</Text>
  </Card>
  <layer z="10">
    <Card variant="glass">
      <Text>This Card is in a Layer component rendered from XML.</Text>
    </Card>
  </layer>
</layout>
`;

export const XmlRendererDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">XML Renderer</Text>
            <Text>A component that parses an XML-like string and renders it into corresponding React components from the library.</Text>
            <XmlRenderer xml={sampleXml} components={{ Card, Text }} />
        </Stack>
    </Sofa>
);
