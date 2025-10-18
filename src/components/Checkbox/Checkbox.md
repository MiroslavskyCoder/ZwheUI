# Checkbox

A standard checkbox component for capturing boolean (true/false) input from a user.

## Props

*   `label` (string, optional): The text label displayed next to the checkbox.
*   `id` (string, optional): A unique identifier, necessary for associating the label with the input.
*   `checked` (boolean): The current state of the checkbox.
*   `disabled` (boolean, optional): If true, the checkbox will be un-interactive.
*   All other standard HTML `<input type="checkbox">` attributes are supported (e.g., `onChange`).

## Usage

```tsx
import { Checkbox } from './src/components';
import { useState } from 'react';

const [isChecked, setIsChecked] = useState(false);

<Checkbox
  label="Accept terms and conditions"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```
