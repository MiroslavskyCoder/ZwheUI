# Combobox

An input field that combines a text input with a dropdown list. It allows users to filter a list of options and select one.

## Props

*   `items` (array of objects, required): The list of options to display. Each object must have `value` and `label` properties.
*   `value` (string, required): The `value` of the currently selected item.
*   `onChange` (function, required): A callback function triggered when an item is selected.
*   `placeholder` (string, optional): Placeholder text for the input field.

## Usage

```tsx
import { Combobox } from './src/components';
import { useState } from 'react';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'svelte', label: 'Svelte' },
];

const [selectedValue, setSelectedValue] = useState('react');

<Combobox
  items={frameworks}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select a framework..."
/>
```
