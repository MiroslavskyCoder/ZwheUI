
import React from 'react';
import { Search, Sofa, Text, Stack } from '../src/components';

export const SearchDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Search</Text>
            <Text>A styled text input component specifically designed for search queries, featuring a leading search icon.</Text>
            <Search placeholder="Search documentation..." />
        </Stack>
    </Sofa>
);
