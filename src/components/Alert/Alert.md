# Alert

A component to display contextual feedback messages for user actions.

## Props

*   `title` (string, required): The main title of the alert.
*   `children` (React.ReactNode, optional): Additional description text for the alert.
*   `variant` (enum: 'info' | 'warning' | 'error' | 'success', optional, default: 'info'): The style and color scheme of the alert.
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { Alert } from './src/components';

<Alert title="Success!" variant="success">
  Your profile has been updated.
</Alert>
```
