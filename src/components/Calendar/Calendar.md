# Calendar

A component that displays a grid of days for a given month, allowing users to select a date. It's the core of the `DatePicker` component.

## Props

*   `value` (Date, optional): The currently selected date.
*   `onChange` (function, required): A callback function that is triggered when a new date is selected. It receives the new `Date` object as an argument.

## Usage

```tsx
import { Calendar } from './src/components';
import { useState } from 'react';

const [selectedDate, setSelectedDate] = useState(new Date());

<Calendar value={selectedDate} onChange={setSelectedDate} />
```
