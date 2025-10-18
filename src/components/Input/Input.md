# Input

A complete form input component that wraps `TextInput` to include a label and an error message display.

## Props

*   `label` (string, optional): The text label displayed above the input field.
*   `error` (string, optional): An error message to display below the input field.
*   `id` (string, optional): A unique identifier for associating the label with the input.
*   All other props are passed down to the `TextInput` component (e.g., `placeholder`, `value`, `onChange`).

## Usage

```tsx
import { Input } from './src/components';

// Standard input with a label
<Input label="Email Address" placeholder="you@example.com" />

// Input with an error message
<Input label="Username" defaultValue="admin" error="This username is already taken." />
```
