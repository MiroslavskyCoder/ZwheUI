import React from 'react';
import { useTreeViewContext, TreeItemProps } from './TreeViewContext';
import { TreeViewNodeData } from './TreeView';

export const useTreeItem = (node: TreeViewNodeData, level: number): TreeItemProps => {
    const { expandedIds, selectedIds, toggleExpand, toggleSelect, itemRefs } = useTreeViewContext();

    const isExpanded = expandedIds.has(node.id);
    const isSelected = selectedIds.has(node.id);
    const isExpandable = !!(node.children && node.children.length > 0);

    const getTreeItemProps = (props: React.HTMLAttributes<HTMLDivElement> = {}) => ({
        ...props,
        ref: (el: HTMLDivElement | null) => {
            if (itemRefs) {
                itemRefs.current.set(node.id, el);
            }
        },
        role: 'treeitem',
        'aria-expanded': isExpandable ? isExpanded : undefined,
        'aria-selected': isSelected,
        tabIndex: -1,
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            // A click on the item toggles selection
            toggleSelect(e, node.id);
            
            // If the click is not on the icon, also toggle expansion
            const target = e.target as HTMLElement;
            if (!target.closest('[data-zwtv-toggle]')) {
                if (isExpandable) {
                    toggleExpand(node.id);
                }
            }
            props.onClick?.(e);
        },
    });
    
    const getToggleProps = (props: React.HTMLAttributes<HTMLDivElement> = {}) => ({
        ...props,
        'data-zwtv-toggle': true, // Custom attribute to identify the toggle area
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation(); // prevent selection and double-toggle
            if (isExpandable) {
                toggleExpand(node.id);
            }
            props.onClick?.(e);
        },
    });

    return {
        node,
        isExpanded,
        isExpandable,
        isSelected,
        level,
        getTreeItemProps,
        getToggleProps,
    };
};