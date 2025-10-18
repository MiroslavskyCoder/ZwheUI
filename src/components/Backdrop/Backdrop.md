# Backdrop

A semi-transparent, blurred overlay used to disable interaction with the main page. It's typically used in conjunction with components like `Modal` or `Drawer`.

## Props

*   `isOpen` (boolean, required): Controls the visibility of the backdrop.
*   `onClick` (function, optional): A callback function to execute when the backdrop is clicked.
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { Backdrop, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Show Backdrop</Button>
    <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
</>
```
