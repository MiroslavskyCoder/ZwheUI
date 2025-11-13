# Slider

An input component that allows the user to select a value from a continuous or discrete range by dragging a thumb along a track.

## Props

*   `value` (number, required): The current value of the slider.
*   `onChange` (function, required): A callback function triggered when the value changes.
*   `min` (number, optional, default: 0): The minimum value of the range.
*   `max` (number, optional, default: 100): The maximum value of the range.
*   `step` (number, optional, default: 1): The increment value for a continuous slider. Ignored if `marks` are provided.
*   `marks` (array of objects, optional): An array of marks to display on the slider. Each object should have a `value` (number) and an optional `label` (React.ReactNode). When `marks` are provided, the slider snaps to these discrete values.
*   `disabled` (boolean, optional): If true, the slider is not interactive.
*   `showValue` (boolean, optional): If true, the current value is always displayed above the thumb.
*   `color` (string, optional): A custom color for the slider's track and thumb.

## Usage

### Continuous Slider
```tsx
import { Slider } from './src/components';
import { useState } from 'react';

const [volume, setVolume] = useState(50);

<Slider value={volume} onChange={setVolume} min={0} max={100} />
```

### Discrete Slider with Marks
```tsx
import { Slider } from './src/components';
import { useState } from 'react';

const marks = [
  { value: 1, label: '1' },
  { value: 10, label: '10' },
  { value: 100, label: '100' },
  { value: 1000, label: '∞' },
];

const [users, setUsers] = useState(100);

<Slider value={users} onChange={setUsers} marks={marks} />
```