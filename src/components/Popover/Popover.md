# Popover

A floating panel that appears in relation to a trigger element. It's a styled implementation of the `Popper` utility.

## Components

*   **Popover**: The main wrapper component.
*   **PopoverTrigger**: The element that, when clicked, toggles the popover's visibility. It must wrap a single child.
*   **PopoverContent**: The styled container for the popover's content.

## Usage

```tsx
import { Popover, PopoverTrigger, PopoverContent, Button, Text } from './src/components';

<Popover>
    <PopoverTrigger>
        <Button>Show Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
         <Text style={{ padding: '8px' }}>
            This is the content of the popover.
         </Text>
    </PopoverContent>
</Popover>
```
