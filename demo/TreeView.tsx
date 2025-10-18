import React from 'react';
import { Sofa, Text, Stack, TreeView, TreeViewNodeData } from '../src/components';

const treeData: TreeViewNodeData[] = [
  {
    id: 'root',
    label: 'Project Root',
    children: [
      {
        id: 'src',
        label: 'src',
        children: [
          { id: 'components', label: 'components' },
          { id: 'hooks', label: 'hooks' },
        ],
      },
      {
        id: 'public',
        label: 'public',
        children: [{ id: 'index.html', label: 'index.html' }],
      },
      {
        id: 'package.json',
        label: 'package.json',
      },
    ],
  },
];

export const TreeViewDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Engine Tree View</Text>
      <Text>A component for displaying hierarchical data, like a file explorer.</Text>
      <TreeView data={treeData} />
    </Stack>
  </Sofa>
);
