# Collapse

A component that provides a smooth vertical collapsing transition for its children. It's useful for accordions, tree views, or any "show/hide" UI.

## Props

*   `in` (boolean, required): If true, the children will be visible. If false, they will be collapsed.
*   `children` (React.ReactNode): The content to be transitioned.

## Usage

```tsx
import { Collapse, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
    <Collapse in={isOpen}>
        <p>This content will animate in and out.</p>
    </Collapse>
</>
```
