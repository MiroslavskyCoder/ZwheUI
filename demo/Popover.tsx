
import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Sofa, Text, Stack, Button, List, ListItem, ListItemText } from '../src/components';

export const PopoverDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Popover</Text>
            <Text>A floating panel that appears in relation to a trigger element. Built using the Popper utility.</Text>
            <Popover>
                <PopoverTrigger>
                    <Button>Show Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                     <List>
                        <ListItem>
                          <ListItemText primary="Account Settings" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Support" />
                        </ListItem>
                      </List>
                </PopoverContent>
            </Popover>
        </Stack>
    </Sofa>
);
