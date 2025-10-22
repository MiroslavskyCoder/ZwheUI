# Tree View

A component for displaying hierarchical data in a tree-like structure. It supports selection, expansion, and extensive customization.

## Props

*   `data` (array of `TreeViewNodeData`, required): An array of root nodes for the tree.
*   `selectionMode` (enum: 'single' | 'multiple', optional): The selection behavior. Defaults to `'single'`.
*   `defaultSelectedIds` (string[], optional): An array of node IDs that should be selected by default.
*   `defaultExpandedIds` (string[], optional): An array of node IDs that should be expanded by default.
*   `onSelectionChange` (function, optional): Callback fired when any item's selection state changes.
*   `onExpansionChange` (function, optional): Callback fired when a node is expanded or collapsed.
*   `onFileSelect` (function, optional): Callback fired when a leaf node (a node without children) is selected. It receives the full node data object.

## Data Structure

The `data` prop expects an array of nodes, where each node has the following structure:
```ts
interface TreeViewNodeData {
    id: string;
    label: string;
    icon?: React.ElementType;
    children?: TreeViewNodeData[];
}
```

## Basic Usage

```tsx
import { TreeView, TreeViewNodeData } from './src/components';
import { FolderIcon, FileIcon } from './src/icons';

const treeData: TreeViewNodeData[] = [
  {
    id: 'root',
    label: 'Project Root',
    icon: FolderIcon,
    children: [
      { id: 'file-1', label: 'package.json', icon: FileIcon },
      { id: 'src-folder', label: 'src', icon: FolderIcon, children: [/* ... */] },
    ],
  },
];

const handleFileSelected = (fileNode) => {
    console.log("File selected:", fileNode.label);
};

<TreeView 
  data={treeData}
  defaultExpandedIds={['root']}
  onFileSelect={handleFileSelected}
/>
```

## Advanced Customization

The `TreeView` component is highly customizable. You can control icons, animations, and even the rendering of each item. For detailed guides on these advanced features, please see the [**Advanced TreeView Customization**](./../../docs/TreeViewCustomization.md) documentation.