import React from 'react';
import { Container, Sofa, Text, Stack, Card } from '../src/components';

export const ContainerDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Container</Text>
      <Text>A layout component that centers its content and constrains it to a maximum width. It now supports a `size` prop for theme-based widths.</Text>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem 0', borderRadius: '8px' }}>
          <Container size="sm">
            <Card>
                <Text>This content is inside a `Container` with `size="sm"`. On wide screens, the container will add horizontal margins to center this content with a small max-width.</Text>
            </Card>
          </Container>
      </div>
    </Stack>
  </Sofa>
);