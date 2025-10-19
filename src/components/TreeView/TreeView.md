# Tree View

A component for displaying hierarchical data in a tree-like structure. It supports extensive customization through a headless hook and custom render props, allowing for features like animations, custom icons, and complex item layouts.

## Props

*   `data` (array of `TreeViewNodeData`, required): An array of root nodes for the tree.
*   `selectionMode` (enum: 'single' | 'multiple', optional): The selection behavior. Defaults to `'single'`.
*   `defaultSelectedIds` (string[], optional): An array of node IDs that should be selected by default.
*   `defaultExpandedIds` (string[], optional): An array of node IDs that should be expanded by default.
*   `onSelectionChange` (function, optional): Callback fired when the selection changes.
*   `onExpansionChange` (function, optional): Callback fired when a node is expanded or collapsed.
*   `item` (React.ComponentType<TreeItemProps>, optional): A custom component to render for each tree item.
*   `expandIcon` (React.ReactNode, optional): Custom icon for collapsed, expandable nodes.
*   `collapseIcon` (React.ReactNode, optional): Custom icon for expanded, expandable nodes.
*   `defaultEndIcon` (React.ReactNode, optional): Custom icon for leaf nodes (nodes without children).
*   `groupTransition` (React.ComponentType, optional): A component to handle expand/collapse animations (e.g., `Collapse`).

## Customization

### Icon Customization

You can customize the expand, collapse, and end node icons using the `expandIcon`, `collapseIcon`, and `defaultEndIcon` props.

```tsx
import { TreeView, Icon } from './src/components';
import { PlusSquareIcon, MinusSquareIcon, FileIcon } from './src/icons';

<TreeView
    data={treeData}
    expandIcon={<Icon as={PlusSquareIcon} />}
    collapseIcon={<Icon as={MinusSquareIcon} />}
    defaultEndIcon={<Icon as={FileIcon} size={16} />}
/>
```

### Custom Animations

Pass a transition component to the `groupTransition` prop to animate the expansion and collapse of node children. The component you provide should accept an `in` prop (boolean) and wrap `children`. ZwheUI's `Collapse` component works out of the box.

```tsx
import { TreeView, Collapse } from './src/components';

<TreeView data={treeData} groupTransition={Collapse} />
```

### Custom Tree Item

For full control over layout and behavior, you can create your own tree item component and pass it to the `item` prop. This allows you to build completely custom layouts, such as a file explorer view.

Learn more about building a custom item with the Headless API below.

## Headless API: `useTreeItem`

Use the `useTreeItem` hook to create your own custom tree item component. This hook provides all the state and prop getters needed for an accessible and interactive item.

Your custom component will receive `TreeItemProps`.

```tsx
// Your custom item component
import { useTreeItem, TreeItemProps } from './src/components';

const MyCustomItem: React.FC<TreeItemProps> = (props) => {
  const { 
    node, 
    isExpanded, 
    isSelected, 
    level, 
    getTreeItemProps, 
    getToggleProps 
  } = props; // These props are provided by TreeView
  
  // Return your custom JSX
  return (
    <div {...getTreeItemProps()}>
      <div {...getToggleProps()}>
        {isExpanded ? '[-]' : '[+]'}
      </div>
      <span>{node.label}</span>
    </div>
  );
};

// Use it in the TreeView
<TreeView data={treeData} item={MyCustomItem} />
```

## Programmatic Control

### Focusing an Item

You can programmatically focus an item by getting a `ref` to the `TreeView` component and calling the `focusItem` method.

```tsx
import { TreeView, TreeViewHandle, Button } from './src/components';
import { useRef } from 'react';

const MyTree = () => {
    const treeRef = useRef<TreeViewHandle>(null);

    const handleFocus = () => {
        // Focus the node with id 'some-node-id'
        treeRef.current?.focusItem('some-node-id');
    };

    return (
        <>
            <Button onClick={handleFocus}>Focus Item</Button>
            <TreeView ref={treeRef} data={treeData} />
        </>
    );
}
```

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