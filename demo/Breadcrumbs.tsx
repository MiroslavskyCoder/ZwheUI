

import React from 'react';
import { Breadcrumbs, Sofa, Text, Stack } from '../src/components';

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Components', to: '#' },
    { label: 'Breadcrumbs' },
];

export const BreadcrumbsDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Breadcrumbs</Text>
      <Text>A navigational aid that shows the user's location within the app. Now supports react-router `to` prop.</Text>
      <Breadcrumbs items={breadcrumbItems} />
    </Stack>
  </Sofa>
);