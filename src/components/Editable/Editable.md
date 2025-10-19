# Editable

A component that provides an inline editing experience. It displays text that, when clicked, transforms into an input field.

## Props

*   `defaultValue` (string, required): The initial text value to display.
*   `onSave` (function, required): A callback function that is triggered when the user confirms their edit. It receives the new value as an argument.

## Usage

```tsx
import { Editable } from './src/components';

<Editable 
  defaultValue="Click to edit me"
  onSave={(newValue) => console.log('Saved:', newValue)}
/>
```
