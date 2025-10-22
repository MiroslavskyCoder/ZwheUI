import React from 'react';
import { Grid, Sofa, Text, Stack, Card } from '../src/components';

export const GridDemo = () => (
  <Sofa>
    <Stack gap="1.5rem">
      <Text as="h2" size="1.5rem" weight="600">Grid</Text>
      <Text>A responsive grid layout. Now supports `Grid.Item` with `colSpan` and `rowSpan` properties, and a `flow` prop for column-first filling.</Text>
      
      <Text weight="600">Responsive Grid (default row flow)</Text>
      <Grid minItemWidth="150px" gap="1rem">
          <Grid.Item><Card><Card.Body><Text>Item 1</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card><Card.Body><Text>Item 2</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card><Card.Body><Text>Item 3</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card><Card.Body><Text>Item 4</Text></Card.Body></Card></Grid.Item>
      </Grid>
      
       <Text weight="600" style={{marginTop: '1rem'}}>Fixed 4-Column Grid with Spanning</Text>
      <Grid columns={4} gap="1rem">
          <Grid.Item colSpan={2}><Card><Card.Body><Text>Item A (colSpan=2)</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card><Card.Body><Text>Item B</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card><Card.Body><Text>Item C</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card><Card.Body><Text>Item D</Text></Card.Body></Card></Grid.Item>
          <Grid.Item colSpan={4}><Card><Card.Body><Text>Item E (colSpan=4)</Text></Card.Body></Card></Grid.Item>
      </Grid>

      <Text weight="600" style={{marginTop: '1rem'}}>Column Flow Grid</Text>
      <Text size="sm">Items fill columns first. This requires a defined height on the grid container to wrap into new columns.</Text>
      <Grid columns={3} flow="column" gap="1rem" style={{ height: '120px' }}>
          <Grid.Item><Card style={{height: '100%'}}><Card.Body><Text>Item 1</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card style={{height: '100%'}}><Card.Body><Text>Item 2</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card style={{height: '100%'}}><Card.Body><Text>Item 3</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card style={{height: '100%'}}><Card.Body><Text>Item 4</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card style={{height: '100%'}}><Card.Body><Text>Item 5</Text></Card.Body></Card></Grid.Item>
          <Grid.Item><Card style={{height: '100%'}}><Card.Body><Text>Item 6</Text></Card.Body></Card></Grid.Item>
      </Grid>
    </Stack>
  </Sofa>
);
