# Toggle Button

A set of components for creating a group of buttons that can be toggled on or off, similar to a checkbox or radio group but with a button-like appearance.

## Components

*   **ToggleButtonGroup**: The main wrapper that manages the state for a group of toggle buttons.
*   **ToggleButton**: A single button within the group.

## Props

### ToggleButtonGroup
*   `value` (string | string[] | null, required): The value of the currently selected button(s). Use a string for `single` type and an array of strings for `multiple`.
*   `onChange` (function, required): A callback function that is triggered when the selection changes.
*   `type` (enum: 'single' | 'multiple', optional, default: 'single'): The selection behavior of the group.

### ToggleButton
*   `value` (string, required): A unique value for the button.
*   All other standard `<button>` attributes are supported.

## Usage

### Single Selection
```tsx
import { ToggleButtonGroup, ToggleButton } from './src/components';
import { useState } from 'react';

const [alignment, setAlignment] = useState('left');

<ToggleButtonGroup value={alignment} onChange={setAlignment} type="single">
  <ToggleButton value="left">Left</ToggleButton>
  <ToggleButton value="center">Center</ToggleButton>
  <ToggleButton value="right">Right</ToggleButton>
</ToggleButtonGroup>
```

### Multiple Selection
```tsx
import { ToggleButtonGroup, ToggleButton } from './src/components';
import { useState } from 'react';

const [formats, setFormats] = useState(['bold']);

<ToggleButtonGroup value={formats} onChange={setFormats} type="multiple">
  <ToggleButton value="bold">Bold</ToggleButton>
  <ToggleButton value="italic">Italic</ToggleButton>
  <ToggleButton value="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```
