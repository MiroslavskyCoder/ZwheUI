import React from 'react';
import { Sidebar, SidebarNav, SidebarNavItem, Sofa, Text, Stack } from '../src/components';
import { HomeIcon, SettingsIcon } from '../src/icons';


export const SidebarDemo = () => (
    <Sofa>
        <Stack gap="1rem">
             <Text as="h2" size="1.5rem" weight="600">Sidebar</Text>
             <Text>A vertical navigation component, typically used for main application navigation.</Text>
            <Stack direction="row" style={{height: '300px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px'}}>
                <Sidebar>
                    <Text size="1.25rem" weight="600">App</Text>
                    <SidebarNav title="Menu">
                        <SidebarNavItem href="#" icon={HomeIcon} isActive>Dashboard</SidebarNavItem>
                        <SidebarNavItem href="#" icon={SettingsIcon}>Settings</SidebarNavItem>
                    </SidebarNav>
                </Sidebar>
                <div style={{padding: '1rem'}}>
                    <Text>Main content area</Text>
                </div>
            </Stack>
        </Stack>
    </Sofa>
);