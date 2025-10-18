
import React, { useState, useEffect } from 'react';
import { CircularProgress, LinearProgress, Sofa, Text, Stack } from '../src/components';

export const ProgressDemo = () => {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
        }, 800);
        return () => clearInterval(timer);
    }, []);

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Progress</Text>
                <Text>Components to indicate loading or the progress of an operation, available in circular and linear styles.</Text>
                
                <Stack gap="1rem">
                    <Text weight="600">Linear</Text>
                    <LinearProgress value={progress} />
                    <LinearProgress />
                </Stack>

                <Stack gap="1rem" direction="row" align="center">
                     <Text weight="600">Circular</Text>
                     <CircularProgress value={progress} />
                     <CircularProgress />
                </Stack>
            </Stack>
        </Sofa>
    );
};
