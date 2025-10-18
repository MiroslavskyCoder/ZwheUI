
import React from 'react';
import { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent, Sofa, Text, Stack } from '../src/components';

export const TimelineDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Timeline</Text>
            <Text>Displays a list of events in chronological order.</Text>
            <Timeline>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineDot>🚀</TimelineDot>
                    <TimelineContent>
                        <Text weight="600">Launch</Text>
                        <Text size="14px" color="textSecondary">Project kickoff and team alignment.</Text>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineDot>💻</TimelineDot>
                    <TimelineContent>
                        <Text weight="600">Development</Text>
                        <Text size="14px" color="textSecondary">Component library development in progress.</Text>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem isLast>
                    <TimelineDot>🎉</TimelineDot>
                    <TimelineContent>
                        <Text weight="600">Deployment</Text>
                        <Text size="14px" color="textSecondary">First version deployed to production.</Text>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Stack>
    </Sofa>
);
