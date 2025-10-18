import React from 'react';
import { Skeleton, Sofa, Text, Stack, Card } from '../src/components';

export const SkeletonDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Skeleton</Text>
            <Text>A placeholder component to indicate that content is loading, improving perceived performance.</Text>
            <Stack gap="0.5rem">
                <Skeleton width="80%" height="1.2rem" />
                <Skeleton width="60%" />
            </Stack>
            <Stack direction="row" gap="1rem" align="center">
                <Skeleton variant="circle" width="40px" height="40px" />
                <Stack gap="0.5rem" style={{flex: 1}}>
                    <Skeleton width="50%" height="0.8rem" />
                    <Skeleton width="30%" />
                </Stack>
            </Stack>
             <Skeleton variant="rect" height="100px" />
        </Stack>
    </Sofa>
);