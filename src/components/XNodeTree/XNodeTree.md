# XNodeTree

A component for displaying hierarchical data in a tree-like structure, such as a file system, scene graph, or component tree. Users can expand and collapse nodes to navigate the hierarchy and toggle a "locked" state for each item.

## Props

*   `data` (array of `XNodeTreeData`, required): An array of root nodes for the tree.
*   `initialExpandedIds` (string[], optional): An array of node IDs that should be expanded by default.
*   `initialLockedIds` (string[], optional): An array of node IDs that should be locked by default.

## Data Structure

The `data` prop expects an array of nodes, where each node has the following structure:

```ts
interface XNodeTreeData {
    id: string;
    label: string;
    icon?: React.ElementType; // An icon component to display
    children?: XNodeTreeData[];
}
```

## Usage

```tsx
import { XNodeTree, XNodeTreeData } from './src/components';
import { FolderIcon, FileIcon } from './src/icons';

const treeData: XNodeTreeData[] = [
  {
    id: '1',
    label: 'Documents',
    icon: FolderIcon,
    children: [
      { id: '1-1', label: 'Report.docx', icon: FileIcon },
    ],
  },
  {
    id: '2',
    label: 'Desktop',
    icon: FolderIcon,
    children: [
      { id: '2-1', label: 'notes.txt', icon: FileIcon },
    ],
  },
];

<XNodeTree data={treeData} initialExpandedIds={['1']} />
```
