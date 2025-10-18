# Switch

A control that allows the user to toggle between two states, typically "on" and "off". It's a visually distinct alternative to a `Checkbox`.

## Props

*   `label` (string, optional): A text label displayed next to the switch.
*   `id` (string, optional): A unique identifier for associating the label with the input.
*   `checked` (boolean): The current state of the switch.
*   `disabled` (boolean, optional): If true, the switch will be un-interactive.
*   All other standard HTML `<input type="checkbox">` attributes are supported (e.g., `onChange`).

## Usage

```tsx
import { Switch } from './src/components';
import { useState } from 'react';

const [notifications, setNotifications] = useState(true);

<Switch
  label="Enable Notifications"
  checked={notifications}
  onChange={(e) => setNotifications(e.target.checked)}
/>
```
