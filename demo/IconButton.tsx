
import React from 'react';
import { IconButton, Sofa, Text, Stack } from '../src/components';
import { SettingsIcon, UserIcon, TrashIcon } from '../src/icons';

export const IconButtonDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Icon Button</Text>
      <Text>A button for rendering a single icon.</Text>
      <Stack direction="row" gap="1rem" align="center">
        <IconButton icon={SettingsIcon} aria-label="Settings" variant="primary" />
        <IconButton icon={UserIcon} aria-label="Profile" variant="secondary" />
        <IconButton icon={TrashIcon} aria-label="Delete" variant="accent" isRound />
      </Stack>
    </Stack>
  </Sofa>
);
