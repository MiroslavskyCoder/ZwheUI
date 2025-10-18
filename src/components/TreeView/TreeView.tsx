import React, { useState } from 'react';
import { useStyles, useTheme } from '../../core';
import { Icon } from '../Icon/Icon';
import { ChevronRightIcon } from '../../icons';

export interface TreeViewNodeData {
    id: string;
    label: string;
    children?: TreeViewNodeData[];
}

interface TreeViewProps {
    data: TreeViewNodeData[];
}

const TreeNode: React.FC<{ node: TreeViewNodeData; level: number; }> = ({ node, level }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('tree-node');
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    const itemClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        padding: `0.25rem 0.5rem`,
        paddingLeft: `calc(${level} * 1.5rem + 0.5rem)`,
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        color: theme.colors.textSecondary,
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: theme.colors.text,
        }
    });

    const iconClass = createStyle({
        marginRight: '0.5rem',
        transition: 'transform 0.2s',
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
    });

    return (
        <div>
            <div className={itemClass} onClick={() => setIsExpanded(!isExpanded)}>
                {hasChildren ? (
                    <Icon as={ChevronRightIcon} size={16} className={iconClass} />
                ) : (
                    <span style={{ width: '16px', marginRight: '0.5rem' }}></span>
                )}
                <span>{node.label}</span>
            </div>
            {isExpanded && hasChildren && (
                <div>
                    {node.children!.map(child => (
                        <TreeNode key={child.id} node={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export const TreeView: React.FC<TreeViewProps> = ({ data }) => {
    return (
        <div>
            {data.map(node => (
                <TreeNode key={node.id} node={node} level={0} />
            ))}
        </div>
    );
};
