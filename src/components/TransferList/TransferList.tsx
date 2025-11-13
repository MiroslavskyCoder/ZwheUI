import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { List, ListItem } from '../List/List';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { useTheme } from '../../core';

interface Item {
    id: string;
    label: string;
}

interface TransferListProps {
    initialLeft: Item[];
    initialRight: Item[];
    leftTitle?: string;
    rightTitle?: string;
}

export const TransferList: React.FC<TransferListProps> = ({ initialLeft, initialRight, leftTitle = 'Choices', rightTitle = 'Chosen' }) => {
    const { theme } = useTheme();
    const [left, setLeft] = useState(initialLeft);
    const [right, setRight] = useState(initialRight);
    const [checked, setChecked] = useState(new Set<string>());

    const leftChecked = left.filter(item => checked.has(item.id));
    const rightChecked = right.filter(item => checked.has(item.id));

    const handleToggle = (item: Item) => {
        const newChecked = new Set(checked);
        if (newChecked.has(item.id)) {
            newChecked.delete(item.id);
        } else {
            newChecked.add(item.id);
        }
        setChecked(newChecked);
    };

    const moveRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(left.filter(item => !checked.has(item.id)));
        const newChecked = new Set(checked);
        leftChecked.forEach(item => newChecked.delete(item.id));
        setChecked(newChecked);
    };

    const moveLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(right.filter(item => !checked.has(item.id)));
        const newChecked = new Set(checked);
        rightChecked.forEach(item => newChecked.delete(item.id));
        setChecked(newChecked);
    };

    const CustomList = ({ title, items }: { title: string, items: Item[] }) => (
        <Card title={title} style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
            <List style={{ flex: 1, overflowY: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                {items.map(item => (
                    <ListItem key={item.id} onClick={() => handleToggle(item)} style={{ cursor: 'pointer', padding: `${theme.spacing.sm} 0`}}>
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
                <Button variant="secondary" onClick={moveRight} disabled={leftChecked.length === 0}>&gt;</Button>
                <Button variant="secondary" onClick={moveLeft} disabled={rightChecked.length === 0}>&lt;</Button>
            </Stack>
            <div style={{ flex: 1 }}>
                <CustomList title={rightTitle} items={right} />
            </div>
        </Stack>
    );
};
