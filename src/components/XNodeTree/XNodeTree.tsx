import React, { useState } from 'react';
import { useStyles, useTheme } from '../../core';
import { Icon } from '../Icon/Icon';
import { ChevronRightIcon, LockIcon } from '../../icons';
import { LockOpenIcon } from '../../icons/LockOpenIcon';

export interface XNodeTreeData {
    id: string;
    label: string;
    icon?: React.ElementType;
    children?: XNodeTreeData[];
}

interface XNodeTreeProps {
    data: XNodeTreeData[];
    initialExpandedIds?: string[];
    initialLockedIds?: string[];
}

export const XNodeTree: React.FC<XNodeTreeProps> = ({
    data,
    initialExpandedIds = [],
    initialLockedIds = [],
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('x-node-tree');
    const [expandedIds, setExpandedIds] = useState(new Set(initialExpandedIds));
    const [lockedIds, setLockedIds] = useState(new Set(initialLockedIds));

    const toggleExpand = (id: string) => {
        setExpandedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };
    
    const toggleLock = (id: string) => {
        setLockedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const treeClass = createStyle({
        color: theme.colors.text,
        fontSize: theme.typography.fontSizes.sm,
        userSelect: 'none',
    });

    const nodeItemClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
    });
    
    const iconClass = (isExpanded: boolean) => createStyle({
        transition: 'transform 0.2s',
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
    });
    
    const lockIconClass = createStyle({
        marginLeft: 'auto',
        color: theme.colors.textSecondary,
        opacity: 0.5,
        '&:hover': {
            color: theme.colors.text,
            opacity: 1,
        },
    });

    const renderNode = (node: XNodeTreeData, level: number) => {
        const isExpanded = expandedIds.has(node.id);
        const isLocked = lockedIds.has(node.id);
        const hasChildren = node.children && node.children.length > 0;

        return (
            <div key={node.id}>
                <div 
                    className={nodeItemClass} 
                    style={{ paddingLeft: `calc(${level} * 1.25rem + 0.5rem)` }}
                    onClick={() => hasChildren && toggleExpand(node.id)}
                >
                    <Icon 
                        as={ChevronRightIcon} 
                        size={16} 
                        className={iconClass(isExpanded)}
                        style={{ visibility: hasChildren ? 'visible' : 'hidden', marginRight: '0.25rem', flexShrink: 0 }}
                    />
                    {node.icon && <Icon as={node.icon} size={16} style={{ marginRight: '0.5rem', color: theme.colors.textSecondary, flexShrink: 0 }} />}
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node.label}</span>
                    <Icon 
                        as={isLocked ? LockIcon : LockOpenIcon}
                        size={14} 
                        className={lockIconClass}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleLock(node.id);
                        }}
                    />
                </div>
                {hasChildren && isExpanded && (
                    <div>
                        {node.children!.map(child => renderNode(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return <div className={treeClass}>{data.map(node => renderNode(node, 0))}</div>;
};
