
import React from 'react';
import { Image, Sofa, Text, Stack, Grid } from '../src/components';
import { ImageIcon } from '../src/icons';

export const ImageDemo = () => (
  <Sofa>
    <Stack gap="1.5rem">
      <Text as="h2" size="1.5rem" weight="600">Image</Text>
      <Text>A component for displaying images with loading states and fallbacks.</Text>
      <Grid columns={3} gap="1rem">
        <Stack gap="0.5rem">
          <Text>Standard Image</Text>
          <Image src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Forest" />
        </Stack>
        <Stack gap="0.5rem">
            <Text>Loading Error</Text>
            <Image src="https://example.com/non-existent.jpg" alt="Error" fallback={<ImageIcon />} />
        </Stack>
        <Stack gap="0.5rem">
            <Text>Custom Radius</Text>
            <Image src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Mountains" radius="50%" />
        </Stack>
      </Grid>
    </Stack>
  </Sofa>
);
