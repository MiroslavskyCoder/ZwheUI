# Dialog

A modal window that interrupts the user with important information or a request for a decision. It's built on top of the `Modal` component.

## Props

*   `isOpen` (boolean, required): Controls the visibility of the dialog.
*   `onClose` (function, required): A callback function to close the dialog.
*   `title` (string, required): The title displayed at the top of the dialog.
*   `children` (React.ReactNode, required): The main content of the dialog.
*   `actions` (array of objects, optional): An array of actions to render as buttons in the footer. Each object is passed as props to a `Button` component, with an added `label` property for the button text.
*   `className` (string, optional): Additional CSS classes for the modal container.

## Usage

```tsx
import { Dialog, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

const dialogActions = [
    { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'secondary' },
    { label: 'Confirm', onClick: () => { alert('Confirmed!'); setIsOpen(false); } }
];

<>
    <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Confirm Action"
      actions={dialogActions}
    >
      Are you sure you want to proceed with this action?
    </Dialog>
</>
```
