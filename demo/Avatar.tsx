import React from 'react';
import { Avatar, AvatarGroup, Sofa, Text, Stack } from '../src/components';

export const AvatarDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Avatar</Text>
      <Text>An image element with a fallback for representing a user.</Text>
      <Stack direction="row" gap="1rem" align="center" wrap={true}>
        <Avatar fallback="ZW" />
        <Avatar fallback="UI" src="https://example.com/non-existent.jpg" />
        <Avatar fallback="JD" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </Stack>
       <Text as="h3" size="1.25rem" weight="600" style={{marginTop: '1rem'}}>Avatar Group</Text>
       <Text>Displays a stack of avatars.</Text>
       <AvatarGroup>
           <Avatar fallback="A" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
           <Avatar fallback="B" src="https://i.pravatar.cc/150?u=a042581f4e29026704e" />
           <Avatar fallback="C" src="https://i.pravatar.cc/150?u=a042581f4e29026704f" />
           <Avatar fallback="D" />
           <Avatar fallback="E" />
       </AvatarGroup>
    </Stack>
  </Sofa>
);