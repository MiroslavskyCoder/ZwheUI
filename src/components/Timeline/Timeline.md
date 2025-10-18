# Timeline

A component for displaying a list of events in chronological order.

## Components

*   **Timeline**: The main container for the timeline.
*   **TimelineItem**: A wrapper for a single event in the timeline.
*   **TimelineConnector**: The vertical line that connects the timeline dots.
*   **TimelineDot**: The circular marker for an event. Can contain an icon or text.
*   **TimelineContent**: A container for the event's details (title, description, etc.).

## Props

### TimelineItem
*   `isLast` (boolean, optional): If true, removes the padding at the bottom of the item to properly terminate the timeline.

## Usage

```tsx
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
```
