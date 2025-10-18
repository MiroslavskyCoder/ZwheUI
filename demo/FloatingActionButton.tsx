import React from 'react';
import { Sofa, Text, Stack, FloatingActionButton } from '../src/components';
import { PlusIcon } from '../src/icons';

export const FloatingActionButtonDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Floating Action Button</Text>
      <Text>A circular button for a primary action that "floats" above the UI. (Note: The button is fixed to the viewport, not this container).</Text>
      <Text size="sm" color="textSecondary">
        This demo showcases the FAB. To see it in action, you might need to scroll if your viewport is small. It is positioned at the bottom right of the screen.
      </Text>
      <FloatingActionButton
        icon={PlusIcon}
        label="Add new item"
        onClick={() => alert('FAB clicked!')}
      />
    </Stack>
  </Sofa>
);
