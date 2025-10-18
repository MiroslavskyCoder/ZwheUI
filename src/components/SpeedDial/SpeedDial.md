# Speed Dial

A component that displays a floating action button (FAB) which, upon being clicked, animates to reveal a set of related, secondary actions.

## Props

*   `actions` (array of objects, required): An array of action objects to display. Each object must have:
    *   `icon` (React.ElementType): The icon for the action's button.
    *   `label` (string): The text label for the action (appears next to the button).
    *   `onClick` (function): The callback function to execute when the action is clicked.
*   `position` (object, optional): An object with `top`, `bottom`, `left`, `right` properties to position the Speed Dial. Defaults to `{ bottom: '2rem', right: '2rem' }`.

## Usage

```tsx
import { SpeedDial } from './src/components';
import { ShareIcon, PrintIcon, CopyIcon } from './src/icons';

const actions = [
  { icon: CopyIcon, label: 'Copy', onClick: () => alert('Copy') },
  { icon: ShareIcon, label: 'Share', onClick: () => alert('Share') },
  { icon: PrintIcon, label: 'Print', onClick: () => alert('Print') },
];

<SpeedDial actions={actions} />
```
