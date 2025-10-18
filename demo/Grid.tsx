import React from 'react';
import { Grid, Sofa, Text, Stack, Card } from '../src/components';

export const GridDemo = () => (
  <Sofa>
    <Stack gap="1.5rem">
      <Text as="h2" size="1.5rem" weight="600">Grid</Text>
      <Text>A responsive grid layout. Now supports a fixed number of `columns` and alignment props.</Text>
      <Text weight="600">Responsive Grid (default)</Text>
      <Grid minItemWidth="150px" gap="1rem">
          <Card><Text>Item 1</Text></Card>
          <Card><Text>Item 2</Text></Card>
          <Card><Text>Item 3</Text></Card>
          <Card><Text>Item 4</Text></Card>
      </Grid>
       <Text weight="600" style={{marginTop: '1rem'}}>Fixed 3-Column Grid</Text>
      <Grid columns={3} gap="1rem">
          <Card><Text>Item A</Text></Card>
          <Card><Text>Item B</Text></Card>
          <Card><Text>Item C</Text></Card>
      </Grid>
    </Stack>
  </Sofa>
);