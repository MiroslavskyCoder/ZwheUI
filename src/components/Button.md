# Button

A standard, clickable button component with multiple variants and states.

## Props

*   `variant` (enum: 'primary' | 'secondary', optional, default: 'primary'): The visual style of the button.
*   `className` (string, optional): Additional CSS classes for custom styling.
*   All other standard HTML `<button>` attributes are supported (e.g., `onClick`, `disabled`).

## Usage

```tsx
import { Button } from './src/components';

// Primary Button
<Button variant="primary" onClick={() => alert('Clicked!')}>
  Submit
</Button>

// Secondary Button
<Button variant="secondary">
  Cancel
</Button>

// Disabled Button
<Button variant="primary" disabled>
  Loading...
</Button>
```
