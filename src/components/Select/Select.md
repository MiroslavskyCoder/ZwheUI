# Select

A custom-styled dropdown component for selecting a single option from a list.

## Props

*   `value` (string, required): The `value` of the currently selected option.
*   `onChange` (function, required): A callback function triggered when the selection changes.
*   `options` (array of objects, required): The list of options to display. Each object must have `value` and `label` properties.
*   `disabled` (boolean, optional): If true, the select is not interactive.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { Select } from './src/components';
import { useState } from 'react';

const selectOptions = [
    { value: 'grid', label: 'Data Grid' },
    { value: 'suite', label: 'Component Suite' },
];

const [selection, setSelection] = useState('grid');

<Select value={selection} onChange={setSelection} options={selectOptions} />
```
