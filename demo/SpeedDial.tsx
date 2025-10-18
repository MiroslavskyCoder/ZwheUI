import React from 'react';
import { Sofa, Text, Stack, SpeedDial } from '../src/components';
import { ShareIcon, PrintIcon, CopyIcon } from '../src/icons';

const speedDialActions = [
  { icon: CopyIcon, label: 'Copy', onClick: () => alert('Copy clicked') },
  { icon: ShareIcon, label: 'Share', onClick: () => alert('Share clicked') },
  { icon: PrintIcon, label: 'Print', onClick: () => alert('Print clicked') },
];

export const SpeedDialDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Speed Dial</Text>
      <Text>A FAB that displays a list of related actions when clicked. (Note: The button is fixed to the viewport, not this container).</Text>
       <Text size="sm" color="textSecondary">
        This demo showcases the Speed Dial. To see it in action, you might need to scroll if your viewport is small. It is positioned at the bottom right of the screen.
      </Text>
      <SpeedDial actions={speedDialActions} position={{ bottom: '7rem', right: '2rem' }} />
    </Stack>
  </Sofa>
);
