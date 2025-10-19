
import React, { useRef } from 'react';
import { 
    Sofa, Text, Stack, TreeView, TreeViewNodeData, Icon, Collapse, Card,
    useTreeItem, TreeItemProps,
    Button,
    TreeViewHandle
} from '../src/components';
// FIX: `useTheme` is not exported from `../src/components`. It should be imported from `../src/core`.
import { useTheme } from '../src/core';
import { PlusSquareIcon, MinusSquareIcon, FileIcon, FolderIcon, ChevronRightIcon } from '../src/icons';

const treeData: TreeViewNodeData[] = [
  {
    id: 'root',
    label: 'Project Root',
    icon: FolderIcon,
    children: [
      {
        id: 'src',
        label: 'src',
        icon: FolderIcon,
        children: [
          { id: 'components', label: 'components', icon: FolderIcon },
          { id: 'hooks', label: 'hooks', icon: FolderIcon },
        ],
      },
      {
        id: 'public',
        label: 'public',
        icon: FolderIcon,
        children: [{ id: 'index.html', label: 'index.html', icon: FileIcon }],
      },
      {
        id: 'package.json',
        label: 'package.json',
        icon: FileIcon
      },
    ],
  },
];

const CustomTreeItem: React.FC<TreeItemProps> = (props) => {
    const { node, isExpanded, isExpandable, isSelected, level, getTreeItemProps, getToggleProps } = props;
    const { theme } = useTheme();
    
    const chevronClass = `transition-transform ${isExpanded ? 'rotate-90' : 'rotate-0'}`;

    return (
        <div 
            {...getTreeItemProps({
                className: `flex items-center p-1 rounded-md transition-colors ${isSelected ? 'bg-blue-500/20 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`,
                style: { paddingLeft: `calc(${level} * 1.5rem)` },
                // Make item focusable for programmatic focus
                tabIndex: -1,
            })}
        >
            <div {...getToggleProps({ className: 'w-5 h-5 flex-shrink-0 flex items-center justify-center' })}>
                {isExpandable && <Icon as={ChevronRightIcon} size={16} className={chevronClass} />}
            </div>
            {node.icon && <Icon as={node.icon} size={16} className="mr-2 flex-shrink-0" />}
            <span className="truncate">{node.label}</span>
        </div>
    );
};


export const TreeViewDemo = () => {
    const customTreeRef = useRef<TreeViewHandle>(null);

    const handleFocusClick = () => {
        customTreeRef.current?.focusItem('index.html');
    };

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Tree View</Text>
                <Text>A component for displaying hierarchical data. Now supports custom item rendering via the `item` prop and `useTreeItem` hook, plus single/multi-selection and programmatic focus.</Text>
                
                <Text weight="600">Custom Tree Item, Multi-Selection &amp; Programmatic Focus</Text>
                <Text size="sm">This example uses a custom component to render each item in a file-explorer style. Use Ctrl/Cmd-click to select multiple items.</Text>
                 <Stack direction="row" gap="1rem">
                    <Button onClick={handleFocusClick}>Focus 'index.html'</Button>
                </Stack>
                <Card style={{ padding: '1rem' }}>
                    <TreeView
                        ref={customTreeRef}
                        data={treeData}
                        item={CustomTreeItem}
                        groupTransition={Collapse}
                        selectionMode="multiple"
                        defaultExpandedIds={['root', 'src', 'public']}
                    />
                </Card>

                <Text weight="600" style={{ marginTop: '1rem' }}>Custom Icons &amp; Single Selection</Text>
                <Text size="sm">This example uses the default item renderer but provides custom icons for expand, collapse, and end nodes. It also uses the `Collapse` component for animations.</Text>
                <Card style={{ padding: '1rem' }}>
                    <TreeView
                        data={treeData}
                        expandIcon={<Icon as={PlusSquareIcon} />}
                        collapseIcon={<Icon as={MinusSquareIcon} />}
                        defaultEndIcon={<Icon as={FileIcon} size={16} />}
                        groupTransition={Collapse}
                    />
                </Card>
            </Stack>
        </Sofa>
    );
};