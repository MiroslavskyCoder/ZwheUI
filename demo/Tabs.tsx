
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Sofa, Text, Stack, Input } from '../src/components';

export const TabsDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Tabs</Text>
            <Text>A component for organizing content into switchable views.</Text>
            <Tabs defaultValue="account">
                <TabList>
                    <Tab value="account">Account</Tab>
                    <Tab value="password">Password</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="account">
                        <Stack gap="1rem" style={{ padding: '1rem 0' }}>
                            <Text weight="600">Account Settings</Text>
                            <Text size="14px">Make changes to your account here. Click save when you're done.</Text>
                            <Input label="Name" defaultValue="Zwhe UI" />
                        </Stack>
                    </TabPanel>
                    <TabPanel value="password">
                         <Stack gap="1rem" style={{ padding: '1rem 0' }}>
                            <Text weight="600">Password Settings</Text>
                            <Text size="14px">Change your password here. After saving, you'll be logged out.</Text>
                            <Input label="Current Password" type="password" />
                            <Input label="New Password" type="password" />
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Stack>
    </Sofa>
);
