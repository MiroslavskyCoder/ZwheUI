# Number Input

An input component specifically for numbers, which includes stepper controls to increment and decrement the value.

## Props

*   `value` (number, required): The current value of the input.
*   `onChange` (function, required): A callback function triggered when the value changes.
*   `min` (number, optional): The minimum allowed value.
*   `max` (number, optional): The maximum allowed value.
*   `step` (number, optional, default: 1): The amount to increment or decrement by.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { NumberInput } from './src/components';
import { useState } from 'react';

const [quantity, setQuantity] = useState(1);

<NumberInput
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>
```
