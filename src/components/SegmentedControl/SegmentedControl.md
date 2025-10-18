# Segmented Control

A linear set of two or more segments, where each segment functions as a button. It's often used as a stylish alternative to a radio group for view switching.

## Props

*   `options` (array of objects, required): The list of segments to display. Each object must have `label` and `value` properties.
*   `value` (string, required): The `value` of the currently active segment.
*   `onChange` (function, required): A callback function triggered when a new segment is selected.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { SegmentedControl } from './src/components';
import { useState } from 'react';

const viewOptions = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
];

const [view, setView] = useState('grid');

<SegmentedControl options={viewOptions} value={view} onChange={setView} />
```
