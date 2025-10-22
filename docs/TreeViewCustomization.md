# Advanced TreeView Customization

The `TreeView` component in ZwheUI is highly customizable, allowing you to go far beyond the default appearance and behavior. This guide covers advanced customization techniques, including custom icons, animations, custom item rendering with a headless hook, and programmatic control.

## Icon Customization

You can easily override the default expand, collapse, and end-node icons using props on the `TreeView` component. This is useful for matching the tree view to your application's specific design system.

-   `expandIcon`: A React node for collapsed, expandable items.
-   `collapseIcon`: A React node for expanded, expandable items.
-   `defaultEndIcon`: A React node for leaf items (items with no children).

### Example

```tsx
import { TreeView, Icon } from 'zwheui';
import { PlusSquareIcon, MinusSquareIcon, FileIcon } from 'zwheui/icons';

<TreeView
    data={treeData}
    defaultExpandedIds={['root']}
    expandIcon={<Icon as={PlusSquareIcon} size={16} />}
    collapseIcon={<Icon as={MinusSquareIcon} size={16} />}
    defaultEndIcon={<Icon as={FileIcon} size={16} />}
/>
```

## Custom Toggle Animations

To animate the opening and closing of tree nodes, you can provide a transition component to the `groupTransition` prop. This component will wrap the list of child nodes.

The provided component must accept an `in` prop (a boolean that is `true` when the group should be visible) and render its `children`. ZwheUI's `Collapse` component is designed for this purpose and works out of the box.

### Example with `Collapse`

```tsx
import { TreeView, Collapse } from 'zwheui';

// The children of each expandable node will now animate
// when they are expanded or collapsed.
<TreeView 
    data={treeData} 
    groupTransition={Collapse} 
/>
```

You can also integrate third-party animation libraries like `react-spring` by creating a simple wrapper component that conforms to the `groupTransition` prop's contract.

## Custom Tree Item (Headless API)

For complete control over the rendering and behavior of each item, you can create your own custom tree item component. This is made possible by the headless `useTreeItem` hook.

### `useTreeItem` Hook

This hook provides all the necessary state and prop-getters for a single tree item, allowing you to build a fully accessible and interactive UI from scratch.

When you provide a custom `item` component to `TreeView`, it will receive `TreeItemProps`, which includes:
-   `node`: The data object for the current node.
-   `isExpanded`, `isExpandable`, `isSelected`: Boolean states.
-   `level`: The nesting depth of the node.
-   `getTreeItemProps`: A function to get the props for the root element of your item (handles `role`, `aria-*` attributes, `onClick`, etc.).
-   `getToggleProps`: A function to get the props for the expand/collapse toggle element (handles `onClick` with event propagation).

### Example: File Explorer Style Item

```tsx
import { useTreeItem, TreeItemProps, Icon, Text } from 'zwheui';
import { ChevronRightIcon } from 'zwheui/icons';

// 1. Create your custom item component
const FileExplorerItem: React.FC<TreeItemProps> = (props) => {
  const { node, isExpanded, isExpandable, isSelected, level, getTreeItemProps, getToggleProps } = props;
  
  const chevronClass = `transition-transform ${isExpanded ? 'rotate-90' : 'rotate-0'}`;

  return (
    // 2. Spread the prop-getters onto your elements
    <div {...getTreeItemProps({ 
        className: `flex items-center p-1 rounded-md ${isSelected ? 'bg-blue-500/20' : 'hover:bg-white/5'}`,
        style: { paddingLeft: `calc(${level} * 1.5rem)` }
    })}>
      <div {...getToggleProps({ className: 'w-5' })}>
        {isExpandable && <Icon as={ChevronRightIcon} size={16} className={chevronClass} />}
      </div>
      {node.icon && <Icon as={node.icon} size={16} className="mr-2" />}
      <Text>{node.label}</Text>
    </div>
  );
};

// 3. Pass your custom component to the TreeView
<TreeView 
    data={fileExplorerData} 
    item={FileExplorerItem} 
/>
```

## Programmatic Control

### Focusing an Item

You can programmatically set focus to any item in the tree using a `ref`.

1.  Create a `ref` for the `TreeViewHandle`.
2.  Attach the `ref` to your `TreeView` component.
3.  Call the `focusItem(id)` method on the ref's `current` property.

```tsx
import { TreeView, TreeViewHandle, Button } from 'zwheui';
import { useRef } from 'react';

const MyTree = () => {
    const treeRef = useRef<TreeViewHandle>(null);

    const handleFocusClick = () => {
        // Focus the node with the ID 'index.html'
        treeRef.current?.focusItem('index.html');
    };

    return (
        <>
            <Button onClick={handleFocusClick}>Focus on index.html</Button>
            <TreeView ref={treeRef} data={treeData} />
        </>
    );
}
```

## Lazy Loading Data

For very large trees, you may want to load children dynamically from a server. While the core `TreeView` component works with a static `data` prop, you can build a lazy-loading experience by managing the data fetching in your application state.

The `getChildrenCount()` attribute is not part of the ZwheUI `TreeView` API but is a concept from other libraries. In ZwheUI, you would achieve this by:

1.  Storing the tree data in your component's state.
2.  When a user expands a node that doesn't have children loaded yet, trigger a data fetch.
3.  Once the data arrives, update your state by finding the parent node and adding the fetched children to its `children` array.
4.  The `TreeView` will automatically re-render to show the new nodes.
