# Date Picker

A form input component that allows users to select a date from a calendar popover.

## Props

*   `value` (Date, optional): The currently selected date.
*   `onChange` (function, required): A callback function that is triggered when a new date is selected.
*   `label` (string, optional): A text label for the input field.
*   `className` (string, optional): Additional CSS classes for the main container.

## Usage

```tsx
import { DatePicker } from './src/components';
import { useState } from 'react';

const [date, setDate] = useState(new Date());

<DatePicker label="Event Date" value={date} onChange={setDate} />
```
