import React from 'react';
import { Grid, Sofa, Text, Stack, Card } from '../src/components';

export const GridDemo = () => (
  <Sofa>
    <Stack gap="1.5rem">
      <Text as="h2" size="1.5rem" weight="600">Grid</Text>
      <Text>A responsive grid layout. Now supports `Grid.Item` with `colSpan` and `rowSpan` properties.</Text>
      
      <Text weight="600">Responsive Grid (default)</Text>
      <Grid minItemWidth="150px" gap="1rem">
          <Grid.Item><Card><Text>Item 1</Text></Card></Grid.Item>
          <Grid.Item><Card><Text>Item 2</Text></Card></Grid.Item>
          <Grid.Item><Card><Text>Item 3</Text></Card></Grid.Item>
          <Grid.Item><Card><Text>Item 4</Text></Card></Grid.Item>
      </Grid>
      
       <Text weight="600" style={{marginTop: '1rem'}}>Fixed 4-Column Grid with Spanning</Text>
      <Grid columns={4} gap="1rem">
          <Grid.Item colSpan={2}><Card><Text>Item A (colSpan=2)</Text></Card></Grid.Item>
          <Grid.Item><Card><Text>Item B</Text></Card></Grid.Item>
          <Grid.Item><Card><Text>Item C</Text></Card></Grid.Item>
          <Grid.Item><Card><Text>Item D</Text></Card></Grid.Item>
          <Grid.Item colSpan={4}><Card><Text>Item E (colSpan=4)</Text></Card></Grid.Item>
      </Grid>
    </Stack>
  </Sofa>
);
