
import React, { useState } from 'react';
import { Pagination, Sofa, Text, Stack } from '../src/components';

export const PaginationDemo = () => {
    const [page, setPage] = useState(5);
    
    return (
        <Sofa>
            <Stack gap="1rem" align="center">
                <Text as="h2" size="1.5rem" weight="600">Pagination</Text>
                <Text>A component to control navigation between a set of pages.</Text>
                <Pagination count={20} page={page} onChange={setPage} />
            </Stack>
        </Sofa>
    );
};
