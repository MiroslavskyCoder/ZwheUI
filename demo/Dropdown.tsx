
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, Sofa, Text, Stack, Button } from '../src/components';

export const DropdownDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Dropdown</Text>
            <Text>A flexible dropdown menu built on Popper, an alternative to StyledMenu.</Text>
            <Dropdown>
                <DropdownTrigger>
                    <Button>User Actions</Button>
                </DropdownTrigger>
                <DropdownContent>
                     <DropdownItem onClick={() => alert('Profile clicked')}>Profile</DropdownItem>
                     <DropdownItem onClick={() => alert('Settings clicked')}>Settings</DropdownItem>
                     <DropdownItem onClick={() => alert('Logout clicked')} style={{color: '#f87171'}}>Logout</DropdownItem>
                </DropdownContent>
            </Dropdown>
        </Stack>
    </Sofa>
);
