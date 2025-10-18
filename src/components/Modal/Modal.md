# Modal

A dialog window that appears on top of the main content, disabling page interaction until it is dismissed. It renders in a portal attached to the document body.

## Props

*   `isOpen` (boolean, required): Controls the visibility of the modal.
*   `onClose` (function, required): A callback function to close the modal. This is triggered by clicking the close button or the backdrop.
*   `children` (React.ReactNode, required): The content to be displayed inside the modal.
*   `title` (string, optional): A title to display in the modal's header.
*   `className` (string, optional): Additional CSS classes for the modal's content panel.

## Usage

```tsx
import { Modal, Button, Text } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Basic Modal"
    >
      <Text>This is the content of the modal.</Text>
    </Modal>
</>
```
