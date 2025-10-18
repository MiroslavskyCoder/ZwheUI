
import React, { useState } from 'react';
import { SegmentedControl, Sofa, Text, Stack } from '../src/components';

const viewOptions = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
    { label: 'Map', value: 'map' },
];

export const SegmentedControlDemo = () => {
    const [view, setView] = useState('grid');
    
    return (
        <Sofa>
            <Stack gap="1rem" align="center">
                <Text as="h2" size="1.5rem" weight="600">Segmented Control</Text>
                <Text>A linear set of two or more segments, each of which functions as a button.</Text>
                <SegmentedControl options={viewOptions} value={view} onChange={setView} />
            </Stack>
        </Sofa>
    );
};
