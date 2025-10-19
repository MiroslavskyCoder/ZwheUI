import React, { createContext, useContext } from 'react';
import { TreeViewNodeData } from './TreeView';

interface TransitionProps {
    in: boolean;
    children: React.ReactNode;
}
export type TreeItemComponent = React.ComponentType<TreeItemProps>;


export interface TreeViewContextType {
    // State
    expandedIds: Set<string>;
    selectedIds: Set<string>;
    nodesById: Map<string, TreeViewNodeData>;
    nodeParents: Map<string, string | null>;
    itemRefs: React.MutableRefObject<Map<string, HTMLElement | null>>;

    // Handlers
    toggleExpand: (id: string) => void;
    toggleSelect: (event: React.MouseEvent, id: string) => void;

    // Customization
    expandIcon?: React.ReactNode;
    collapseIcon?: React.ReactNode;
    defaultEndIcon?: React.ReactNode;
    groupTransition?: React.ComponentType<TransitionProps>;
    item?: TreeItemComponent;
}

export const TreeViewContext = createContext<TreeViewContextType | null>(null);

export const useTreeViewContext = () => {
    const context = useContext(TreeViewContext);
    if (!context) {
        throw new Error('useTreeViewContext must be used within a TreeView provider.');
    }
    return context;
};

// Props that will be passed to custom item components
export interface TreeItemProps {
    node: TreeViewNodeData;
    isExpanded: boolean;
    isExpandable: boolean;
    isSelected: boolean;
    level: number;
    getTreeItemProps: (props?: React.HTMLAttributes<HTMLDivElement>) => React.HTMLAttributes<HTMLDivElement>;
    getToggleProps: (props?: React.HTMLAttributes<HTMLDivElement>) => React.HTMLAttributes<HTMLDivElement>;
}