import React from 'react';
import { Icon, Sofa, Text, Stack, Button } from '../src/components';
import { 
    HomeIcon, SettingsIcon, UserIcon, LoginIcon, LogoutIcon, KeyIcon, LockIcon,
    UserPlusIcon, UsersIcon, ChatBubbleIcon, ChatDotsIcon, SendIcon, CogIcon,
    FilterIcon, SlidersIcon, SignOutAltIcon, ShoppingCartIcon
} from '../src/icons';
import { useTheme } from '../src/core';

export const IconDemo = () => {
    const { theme } = useTheme();

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Icon</Text>
                <Text>A flexible component for rendering SVG icons with consistent sizing and coloring.</Text>
                
                <Text weight="600">Auth Icons</Text>
                <Stack direction="row" gap="1.5rem" align="center">
                    <Icon as={LoginIcon} size={24} />
                    <Icon as={LogoutIcon} size={24} />
                    <Icon as={KeyIcon} size={24} />
                    <Icon as={LockIcon} size={24} />
                </Stack>

                <Text weight="600">User Icons</Text>
                 <Stack direction="row" gap="1.5rem" align="center">
                    <Icon as={UserIcon} size={24} />
                    <Icon as={UserPlusIcon} size={24} />
                    <Icon as={UsersIcon} size={24} />
                </Stack>

                <Text weight="600">Chat Icons</Text>
                 <Stack direction="row" gap="1.5rem" align="center">
                    <Icon as={ChatBubbleIcon} size={24} />
                    <Icon as={ChatDotsIcon} size={24} />
                    <Icon as={SendIcon} size={24} />
                </Stack>
                
                <Text weight="600">Setting Icons</Text>
                 <Stack direction="row" gap="1.5rem" align="center">
                    <Icon as={SettingsIcon} size={24} />
                    <Icon as={CogIcon} size={24} />
                    <Icon as={FilterIcon} size={24} />
                    <Icon as={SlidersIcon} size={24} />
                </Stack>

                <Text weight="600">Miscellaneous Icons</Text>
                 <Stack direction="row" gap="1.5rem" align="center">
                    <Icon as={SignOutAltIcon} size={24} />
                    <Icon as={ShoppingCartIcon} size={24} />
                </Stack>

                <Text weight="600">Inside a Button</Text>
                <Stack direction="row" gap="1rem" align="center">
                    <Button>
                        <Icon as={UserIcon} size={16} />
                        <span>Profile</span>
                    </Button>
                     <Button variant="secondary">
                        <span>Send Message</span>
                        <Icon as={SendIcon} size={16} />
                    </Button>
                </Stack>
            </Stack>
        </Sofa>
    );
};