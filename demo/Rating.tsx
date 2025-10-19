import React, { useState } from 'react';
import { Rating, Sofa, Text, Stack } from '../src/components';

export const RatingDemo = () => {
    const [value, setValue] = useState(3);
    
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Rating</Text>
                <Text>A star rating component to display and collect user ratings.</Text>
                <Stack direction="row" gap="1rem" align="center" wrap={true}>
                    <Rating value={value} onChange={setValue} size="large" />
                    <Rating value={4} readonly size="medium" />
                    <Rating value={5} readonly size="small" />
                </Stack>
                 <Text>Your rating: {value} stars</Text>
            </Stack>
        </Sofa>
    );
};