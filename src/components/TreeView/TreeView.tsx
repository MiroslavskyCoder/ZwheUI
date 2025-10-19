

import React, { useState, useMemo, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { useStyles, useTheme } from '../../core';
import { Icon } from '../Icon/Icon';
import { ChevronRightIcon } from '../../icons';
// FIX: `useTreeViewContext` was not imported, causing a reference error.
import { TreeViewContext, TreeViewContextType, TreeItemComponent, TreeItemProps, useTreeViewContext } from './TreeViewContext';
import { useTreeItem } from './useTreeItem';

export interface TreeViewNodeData {
    id: string;
    label: string;
    children?: TreeViewNodeData[];
    icon?: React.ElementType;
}

// --- Default Item Component ---

const DefaultTreeItem: React.FC<TreeItemProps> = (props) => {
    const { node, isExpanded, isExpandable, isSelected, level, getTreeItemProps, getToggleProps } = props;
    const { expandIcon, collapseIcon, defaultEndIcon } = useTreeViewContext();
    const { theme } = useTheme();
    const createStyle = useStyles('tree-item-default');

    const itemClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
        paddingLeft: `calc(${level} * 1.5rem)`,
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s',
        color: isSelected ? theme.colors.text : theme.colors.textSecondary,
        backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
        '&:hover': {
            backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.05)',
            color: theme.colors.text,
        },
        '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.primary}`,
        }
    });

    const iconContainerClass = createStyle({
        width: '16px',
        height: '16px',
        marginRight: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    });

    const renderIcon = () => {
        if (!isExpandable) {
            return defaultEndIcon ? <div className={iconContainerClass}>{defaultEndIcon}</div> : <span style={{ width: '16px', marginRight: '0.5rem' }} />;
        }
        
        if (expandIcon || collapseIcon) {
            return isExpanded ? collapseIcon : expandIcon;
        }
        
        const chevronClass = createStyle({
            transition: 'transform 0.2s',
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
        });
        
        return <Icon as={ChevronRightIcon} size={16} className={chevronClass} />;
    };
    
    return (
        <div {...getTreeItemProps({ className: itemClass })}>
            <div {...getToggleProps({ className: iconContainerClass })}>
                {renderIcon()}
            </div>
            <span>{node.label}</span>
        </div>
    );
};


// --- Recursive Renderer ---

const NodeRenderer: React.FC<{ nodeId: string; level: number }> = ({ nodeId, level }) => {
    const { nodesById, item: CustomItemComponent, groupTransition: TransitionComponent } = useTreeViewContext();
    const node = nodesById.get(nodeId);

    if (!node) return null;

    const itemProps = useTreeItem(node, level);
    const Item = CustomItemComponent || DefaultTreeItem;
    const Transition = TransitionComponent || React.Fragment;
    const TransitionWrapper = TransitionComponent ? Transition : 'div';
    
    return (
        <>
            <Item {...itemProps} />
            {itemProps.isExpandable && node.children && (
                // @ts-ignore
                <TransitionWrapper {...(TransitionComponent && { in: itemProps.isExpanded })}>
                    <div role="group">
                        {itemProps.isExpanded && node.children.map(child => (
                            <NodeRenderer key={child.id} nodeId={child.id} level={level + 1} />
                        ))}
                    </div>
                </TransitionWrapper>
            )}
        </>
    );
};


// --- Main TreeView Component ---

interface TransitionProps {
    in: boolean;
    children: React.ReactNode;
}

interface TreeViewProps {
    data: TreeViewNodeData[];
    selectionMode?: 'single' | 'multiple';
    defaultSelectedIds?: string[];
    defaultExpandedIds?: string[];
    onSelectionChange?: (ids: string[]) => void;
    onExpansionChange?: (ids: string[]) => void;
    
    expandIcon?: React.ReactNode;
    collapseIcon?: React.ReactNode;
    defaultEndIcon?: React.ReactNode;
    groupTransition?: React.ComponentType<TransitionProps>;
    
    item?: TreeItemComponent;
}

const flattenTree = (nodes: TreeViewNodeData[], parent: string | null = null, map: Map<string, TreeViewNodeData>, parents: Map<string, string | null>) => {
    nodes.forEach(node => {
        map.set(node.id, node);
        parents.set(node.id, parent);
        if (node.children) {
            flattenTree(node.children, node.id, map, parents);
        }
    });
};

export interface TreeViewHandle {
    focusItem: (id: string) => void;
}

export const TreeView = forwardRef<TreeViewHandle, TreeViewProps>(({
    data,
    selectionMode = 'single',
    defaultSelectedIds = [],
    defaultExpandedIds = [],
    onSelectionChange,
    onExpansionChange,
    item,
    ...rest // icon and transition props
}, ref) => {
    const [expandedIds, setExpandedIds] = useState(new Set(defaultExpandedIds));
    const [selectedIds, setSelectedIds] = useState(new Set(defaultSelectedIds));
    const itemRefs = useRef<Map<string, HTMLElement | null>>(new Map());

    useImperativeHandle(ref, () => ({
        focusItem: (id: string) => {
            const itemEl = itemRefs.current.get(id);
            itemEl?.focus({ preventScroll: false });
        }
    }));

    const { nodesById, nodeParents } = useMemo(() => {
        const map = new Map<string, TreeViewNodeData>();
        const parents = new Map<string, string | null>();
        flattenTree(data, null, map, parents);
        return { nodesById: map, nodeParents: parents };
    }, [data]);

    useEffect(() => {
        onExpansionChange?.(Array.from(expandedIds));
    }, [expandedIds, onExpansionChange]);

    useEffect(() => {
        onSelectionChange?.(Array.from(selectedIds));
    }, [selectedIds, onSelectionChange]);

    const toggleExpand = useCallback((id: string) => {
        setExpandedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, []);

    const toggleSelect = useCallback((event: React.MouseEvent, id: string) => {
        const isMultiSelect = selectionMode === 'multiple' && (event.ctrlKey || event.metaKey);
        
        setSelectedIds(prev => {
            // FIX: Explicitly type `new Set()` as `new Set<string>()` to prevent TypeScript from inferring `Set<unknown>`, which caused a type mismatch.
            const newSet = isMultiSelect ? new Set(prev) : new Set<string>();
            if (newSet.has(id) && isMultiSelect) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });

    }, [selectionMode]);

    const contextValue: TreeViewContextType = {
        expandedIds,
        selectedIds,
        nodesById,
        nodeParents,
        toggleExpand,
        toggleSelect,
        itemRefs,
        item,
        ...rest
    };

    return (
        <TreeViewContext.Provider value={contextValue}>
            <div role="tree">
                {data.map(node => (
                    <NodeRenderer key={node.id} nodeId={node.id} level={0} />
                ))}
            </div>
        </TreeViewContext.Provider>
    );
});
TreeView.displayName = 'TreeView';