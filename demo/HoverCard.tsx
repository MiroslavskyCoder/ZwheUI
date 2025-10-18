
import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent, Sofa, Text, Stack, Link, Avatar } from '../src/components';

export const HoverCardDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Hover Card</Text>
            <Text>A popover that appears when a user hovers over a trigger element.</Text>
            <Text>
                Hover over the <HoverCard>
                    <HoverCardTrigger>
                        <Link href="#" onClick={(e) => e.preventDefault()}>@zwhe</Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <Stack direction="row" gap="1rem" align="center">
                           <Avatar fallback="ZW" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                           <Stack gap="0.25rem">
                               <Text weight="600">Zwhe UI</Text>
                               <Text size="14px" color="textSecondary">The component library you're looking at.</Text>
                           </Stack>
                        </Stack>
                    </HoverCardContent>
                </HoverCard>> profile link.
            </Text>
        </Stack>
    </Sofa>
);
