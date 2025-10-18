# Text Input

The base styled text input component. It serves as the foundation for other form elements like `Input`, `Search`, and `Combobox`.

## Props

*   All standard HTML `<input>` attributes are supported (e.g., `placeholder`, `value`, `onChange`, `type`, `disabled`).
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { TextInput } from './src/components';

// A basic text input
<TextInput placeholder="Enter your name..." />

// A disabled text input
<TextInput defaultValue="Cannot be changed" disabled />
```
