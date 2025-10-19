import React from 'react';
import { Text, Stack, TransferList } from '../src/components';
import { DemoSection } from './DemoSection';

const initialItems = [
  { id: 'item-1', label: 'React' },
  { id: 'item-2', label: 'Vue' },
  { id: 'item-3', label: 'Angular' },
  { id: 'item-4', label: 'Svelte' },
];

const documentation = `# Transfer List

A component that allows users to move items between two lists. It's useful for scenarios like selecting a subset of options from a larger pool.

## Props

*   \`initialLeft\` (array of objects, required): The initial set of items for the left list. Each object must have \`id\` and \`label\` properties.
*   \`initialRight\` (array of objects, required): The initial set of items for the right list.
*   \`leftTitle\` (string, optional, default: 'Choices'): The title for the left list.
*   \`rightTitle\` (string, optional, default: 'Chosen'): The title for the right list.

## Usage

\`\`\`tsx
import { TransferList } from './src/components';

const items = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
];

<TransferList initialLeft={items} initialRight={[]} />
\`\`\``;

const sourceCode = `import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { List, ListItem } from '../List/List';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button';
import { Stack } from '../Stack/Stack';
import { useTheme } from '../../core';

interface Item { id: string; label: string; }

interface TransferListProps {
    initialLeft: Item[];
    initialRight: Item[];
    leftTitle?: string;
    rightTitle?: string;
}

export const TransferList: React.FC<TransferListProps> = (props) => {
    /* ... internal logic for state and moving items ... */
    
    const CustomList = ({ title, items }: { title: string, items: Item[] }) => (
        <Card title={title} style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
            <List style={{ flex: 1, overflowY: 'auto' }}>
                {items.map(item => (
                    <ListItem key={item.id} onClick={() => handleToggle(item)}>
                        <Checkbox checked={checked.has(item.id)} label={item.label} readOnly />
                    </ListItem>
                ))}
            </List>
        </Card>
    );

    return (
        <Stack direction="row" align="center" gap="1rem">
            <div style={{ flex: 1 }}>
                <CustomList title={leftTitle} items={left} />
            </div>
            <Stack direction="column" gap="0.5rem">
                <Button onClick={moveRight} disabled={leftChecked.length === 0}>&gt;</Button>
                <Button onClick={moveLeft} disabled={rightChecked.length === 0}>&lt;</Button>
            </Stack>
            <div style={{ flex: 1 }}>
                <CustomList title={rightTitle} items={right} />
            </div>
        </Stack>
    );
};`;

export const TransferListDemo = () => (
    <DemoSection
        title="Transfer List"
        description="A component for moving items between two lists."
        livePreview={
            <TransferList 
                initialLeft={initialItems} 
                initialRight={[]} 
                leftTitle="Available Frameworks"
                rightTitle="Selected Frameworks"
            />
        }
        propControls={
            <Text color="textSecondary">
                The main props for this component (`initialLeft`, `initialRight`) are complex arrays. The preview demonstrates the component's functionality.
            </Text>
        }
        documentation={documentation}
        fullSourceCode={sourceCode}
    />
);