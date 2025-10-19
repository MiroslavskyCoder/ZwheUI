import React from 'react';
import { StyledMenu, Sofa, Text, Stack, Icon, Kbd } from '../src/components';
import { PencilIcon, CopyIcon, ArchiveIcon, TrashIcon } from '../src/icons';

export const MenuDemo = () => {
    const menuItems = [
        {
            divider: 'after' as const,
            items: [
                { label: 'Edit', onClick: () => alert('Edit'), shortcut: '⌘E', icon: <Icon as={PencilIcon} size={16} /> },
                { label: 'Duplicate', onClick: () => alert('Duplicate'), shortcut: '⌘D', icon: <Icon as={CopyIcon} size={16} /> },
                { type: 'divider' as const },
                { label: 'Archive', onClick: () => alert('Archive'), icon: <Icon as={ArchiveIcon} size={16} />, disabled: true },
            ]
        },
        {
            title: 'Destructive Actions',
            items: [
                { label: 'Delete', onClick: () => alert('Delete'), shortcut: '⌘⌫', icon: <Icon as={TrashIcon} size={16} /> },
            ]
        }
    ];

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Menu</Text>
                <Text>A styled dropdown menu. Dividers can be added within a group using <Kbd>{`{ type: 'divider' }`}</Kbd> or between groups using the `divider: 'after'` prop.</Text>
                <StyledMenu label="Actions" items={menuItems} />
            </Stack>
        </Sofa>
    );
};