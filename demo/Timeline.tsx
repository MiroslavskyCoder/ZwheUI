import React from 'react';
import { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent, Text, Stack } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Timeline

A component for displaying a list of events in chronological order.

## Components

*   **Timeline**: The main container for the timeline.
*   **TimelineItem**: A wrapper for a single event in the timeline.
*   **TimelineConnector**: The vertical line that connects the timeline dots.
*   **TimelineDot**: The circular marker for an event. Can contain an icon or text.
*   **TimelineContent**: A container for the event's details (title, description, etc.).

## Props

### TimelineItem
*   \`isLast\` (boolean, optional): If true, removes the padding at the bottom of the item to properly terminate the timeline.

## Usage

\`\`\`tsx
import { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent } from './src/components';

<Timeline>
    <TimelineItem>
        <TimelineConnector />
        <TimelineDot>🚀</TimelineDot>
        <TimelineContent>
            <p><strong>Launch</strong></p>
            <p>Project kickoff and team alignment.</p>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem isLast>
        <TimelineDot>🎉</TimelineDot>
        <TimelineContent>
            <p><strong>Deployment</strong></p>
            <p>First version deployed to production.</p>
        </TimelineContent>
    </TimelineItem>
</Timeline>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Timeline: React.FC<{ children: React.ReactNode, className?: string }> = (props) => { /*...*/ };
export const TimelineItem: React.FC<{ children: React.ReactNode, isLast?: boolean }> = (props) => { /*...*/ };
export const TimelineConnector: React.FC = () => { /*...*/ };
export const TimelineDot: React.FC<{ children?: React.ReactNode, className?: string }> = (props) => { /*...*/ };
export const TimelineContent: React.FC<{ children: React.ReactNode, className?: string }> = (props) => { /*...*/ };
`;

export const TimelineDemo = () => (
    <DemoSection
        title="Timeline"
        description="Displays a list of events in chronological order."
        livePreview={
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
        }
        propControls={
            <Text color="textSecondary">This is a presentational component with no configurable props.</Text>
        }
        documentation={documentation}
        fullSourceCode={sourceCode}
    />
);