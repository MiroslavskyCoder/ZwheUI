import React from 'react';
import { Sofa, Text, Stack, XNodeTree, XNodeTreeData, Card } from '../src/components';
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
        id: 'paper',
        label: 'Paper',
        icon: DocumentIcon,
        children: [
            {
                id: 'header-container',
                label: 'Header container',
                icon: LayoutIcon,
                children: [
                    {
                        id: 'avatar',
                        label: 'Avatar',
                        icon: UserIcon,
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
                id: 'content',
                label: 'Content',
                icon: LayoutIcon,
                children: [
                     { id: 'text-content-2', label: 'Text Content', icon: TypeIcon },
                ]
            },
            {
                id: 'action-bar',
                label: 'Action Bar',
                icon: LayoutIcon,
                children: [
                    { id: 'icon-button-1', label: 'Icon Button', icon: DiamondIcon },
                    { id: 'icon-button-2', label: 'Icon Button', icon: DiamondIcon },
                ]
            }
        ]
    }
];


export const XNodeTreeDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">XNodeTree</Text>
      <Text>A component for displaying hierarchical data, like a scene graph or component tree.</Text>
      <Card style={{ padding: '0.5rem' }}>
        <XNodeTree data={demoData} initialExpandedIds={['paper', 'header-container', 'avatar', 'content', 'action-bar']} />
      </Card>
    </Stack>
  </Sofa>
);
