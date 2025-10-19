import React from 'react';
import { Text, Stack, XNodeTree, XNodeTreeData, Card } from '../src/components';
import { DemoSection } from './DemoSection';
import { 
    DocumentIcon,
    LayoutIcon,
    UserIcon,
    TypeIcon,
    SquareIcon,
    ImageIcon,
    DiamondIcon
} from '../src/icons';

const demoData: XNodeTreeData[] = [
    {
        id: 'paper', label: 'Paper', icon: DocumentIcon,
        children: [
            {
                id: 'header-container', label: 'Header container', icon: LayoutIcon,
                children: [
                    {
                        id: 'avatar', label: 'Avatar', icon: UserIcon,
                        children: [
                            { id: 'text-content-1', label: 'Text Content', icon: TypeIcon },
                            { id: 'header-title', label: 'Header Title', icon: TypeIcon },
                            { id: 'header-caption', label: 'Header Caption', icon: TypeIcon },
                        ]
                    },
                    { id: 'action-button-1', label: 'Action Button', icon: SquareIcon },
                    { id: 'image', label: 'Image', icon: ImageIcon },
                ]
            },
            {
                id: 'content', label: 'Content', icon: LayoutIcon,
                children: [ { id: 'text-content-2', label: 'Text Content', icon: TypeIcon } ]
            },
            {
                id: 'action-bar', label: 'Action Bar', icon: LayoutIcon,
                children: [
                    { id: 'icon-button-1', label: 'Icon Button', icon: DiamondIcon },
                    { id: 'icon-button-2', label: 'Icon Button', icon: DiamondIcon },
                ]
            }
        ]
    }
];

const documentation = `# XNodeTree

A component for displaying hierarchical data in a tree-like structure, such as a file system, scene graph, or component tree. Users can expand and collapse nodes to navigate the hierarchy and toggle a "locked" state for each item.

## Props

*   \`data\` (array of \`XNodeTreeData\`, required): An array of root nodes for the tree.
*   \`initialExpandedIds\` (string[], optional): An array of node IDs that should be expanded by default.
*   \`initialLockedIds\` (string[], optional): An array of node IDs that should be locked by default.

## Data Structure

\`\`\`ts
interface XNodeTreeData {
    id: string;
    label: string;
    icon?: React.ElementType; // An icon component to display
    children?: XNodeTreeData[];
}
\`\`\``;

const sourceCode = `import React, { useState } from 'react';
import { useStyles, useTheme } from '../../core';
import { Icon } from '../Icon/Icon';
import { ChevronRightIcon, LockIcon } from '../../icons';
import { LockOpenIcon } from '../../icons/LockOpenIcon';

export interface XNodeTreeData { /*...*/ }

interface XNodeTreeProps {
    data: XNodeTreeData[];
    initialExpandedIds?: string[];
    initialLockedIds?: string[];
}

export const XNodeTree: React.FC<XNodeTreeProps> = (props) => {
    /* ... internal state and logic ... */

    const renderNode = (node: XNodeTreeData, level: number) => {
        /* ... recursive rendering logic ... */
    };

    return <div className={treeClass}>{data.map(node => renderNode(node, 0))}</div>;
};`;


export const XNodeTreeDemo = () => (
  <DemoSection
    title="XNodeTree"
    description="A component for displaying hierarchical data, like a scene graph or component tree."
    livePreview={
        <Card style={{ padding: '0.5rem', minWidth: '300px' }}>
            <XNodeTree data={demoData} initialExpandedIds={['paper', 'header-container', 'avatar', 'content', 'action-bar']} />
        </Card>
    }
    propControls={
        <Text color="textSecondary">
            The main props (`data`, `initialExpandedIds`) are complex arrays. The preview demonstrates the component's interactive features.
        </Text>
    }
    documentation={documentation}
    fullSourceCode={sourceCode}
  />
);