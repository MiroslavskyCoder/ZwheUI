# PinInput

A component for entering PINs or one-time codes. It provides a set of styled inputs that automatically handle focus shifting, backspace, and pasting.

## Props

*   `length` (number, optional): The number of characters in the PIN. Defaults to `4`.
*   `value` (string, optional): The current value of the input.
*   `onChange` (function, optional): A callback function triggered when the value changes.

## Usage

```tsx
import { PinInput } from './src/components';
import { useState } from 'react';

const [pin, setPin] = useState('');

<PinInput length={6} value={pin} onChange={setPin} />
```
