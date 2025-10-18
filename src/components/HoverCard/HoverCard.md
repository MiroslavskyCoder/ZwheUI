# Hover Card

A popover that appears when a user hovers their mouse over a trigger element.

## Components

*   **HoverCard**: The main wrapper that manages the hover state.
*   **HoverCardTrigger**: The element that triggers the popover on hover.
*   **HoverCardContent**: The content that appears in the popover.

## Usage

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent, Link, Text } from './src/components';

<p>
    Hover over the <HoverCard>
        <HoverCardTrigger>
            <Link href="#">@username</Link>
        </HoverCardTrigger>
        <HoverCardContent>
            <Text>User profile information goes here.</Text>
        </HoverCardContent>
    </HoverCard> profile link.
</p>
```
