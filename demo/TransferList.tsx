import React from 'react';
import { Sofa, Text, Stack, TransferList } from '../src/components';

const initialItems = [
  { id: 'item-1', label: 'React' },
  { id: 'item-2', label: 'Vue' },
  { id: 'item-3', label: 'Angular' },
  { id: 'item-4', label: 'Svelte' },
];

export const TransferListDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Transfer List</Text>
      <Text>A component for moving items between two lists.</Text>
      <TransferList 
        initialLeft={initialItems} 
        initialRight={[]} 
        leftTitle="Available Frameworks"
        rightTitle="Selected Frameworks"
      />
    </Stack>
  </Sofa>
);
