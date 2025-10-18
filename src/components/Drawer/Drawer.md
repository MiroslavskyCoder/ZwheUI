# Drawer

A panel that slides in from the edge of the screen, typically used for navigation or settings. It renders in a portal attached to the document body.

## Props

*   `isOpen` (boolean, required): Controls the visibility of the drawer.
*   `onClose` (function, required): A callback function to close the drawer.
*   `children` (React.ReactNode, required): The main content of the drawer.
*   `title` (string, optional): The title displayed in the drawer's header.
*   `position` (enum: 'left' | 'right', optional, default: 'right'): The edge from which the drawer slides in.
*   `className` (string, optional): Additional CSS classes for the drawer panel.

## Usage

```tsx
import { Drawer, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    <Drawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Settings"
      position="left"
    >
      <p>Drawer content goes here.</p>
    </Drawer>
</>
```
