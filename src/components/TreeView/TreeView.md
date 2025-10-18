# Tree View

A component for displaying hierarchical data in a tree-like structure, such as a file system or organizational chart. Users can expand and collapse nodes to navigate the hierarchy.

## Props

*   `data` (array of `TreeViewNodeData`, required): An array of root nodes for the tree.

## Data Structure

The `data` prop expects an array of nodes, where each node has the following structure:

```ts
interface TreeViewNodeData {
    id: string;
    label: string;
    children?: TreeViewNodeData[];
}
```

## Usage

```tsx
import { TreeView } from './src/components';

const treeData = [
  {
    id: '1',
    label: 'Documents',
    children: [
      { id: '1-1', label: 'Report.docx' },
      { 
        id: '1-2', 
        label: 'Images',
        children: [
          { id: '1-2-1', label: 'photo.jpg' },
        ]
      },
    ],
  },
  {
    id: '2',
    label: 'Desktop',
    children: [
      { id: '2-1', label: 'notes.txt' },
    ],
  },
];

<TreeView data={treeData} />
```
