
import React from 'react';
import { List, ListItem, ListItemText, Divider, Sofa, Text, Stack, Button } from '../src/components';

export const ListDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">List</Text>
      <Text>A set of components for displaying structured lists of items with optional dividers and rich content.</Text>
      <List>
        <ListItem>
          <ListItemText primary="Profile" secondary="Update your personal details" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Billing" secondary="Manage your subscription" />
        </ListItem>
         <Divider />
        <ListItem>
            <ListItemText primary="Log Out" />
            {/* FIX: Removed unsupported 'size' prop from Button component. */}
            <Button variant="secondary">Action</Button>
        </ListItem>
      </List>
    </Stack>
  </Sofa>
);