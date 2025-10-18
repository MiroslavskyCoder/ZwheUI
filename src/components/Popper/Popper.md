# Popper

A low-level utility component for positioning a floating element (`PopperContent`) relative to a trigger element (`PopperTrigger`). This is the foundation for components like `Popover`, `Dropdown`, and `DatePicker`.

## Components

*   **Popper**: The main context provider that manages state.
*   **PopperTrigger**: The element that triggers the popper. It must wrap a single, focusable child.
*   **PopperContent**: The floating element that is positioned relative to the trigger.

## Props

### Popper
*   `isOpen` (boolean, optional): A prop to control the popper's visibility from outside.
*   `setIsOpen` (function, optional): A callback to update the external `isOpen` state.

## Usage

```tsx
import { Popper, PopperTrigger, PopperContent, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Popper isOpen={isOpen} setIsOpen={setIsOpen}>
    <PopperTrigger>
        <Button>Toggle Popper</Button>
    </PopperTrigger>
    <PopperContent>
        <div style={{ padding: '1rem', background: '#333', borderRadius: '4px' }}>
            Popper Content
        </div>
    </PopperContent>
</Popper>
```
