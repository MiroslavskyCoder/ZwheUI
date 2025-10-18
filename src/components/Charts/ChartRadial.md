# ChartRadial

A standalone component that displays a semi-circular radial chart (half-donut), typically used to show proportions of a whole.

## Props

*   `data` (array of objects, required): The dataset to display. Each object must have a `value`, `color`, and `label`.
*   `size` (number, optional, default: 150): The width of the chart container. The height is calculated automatically.
*   `strokeWidth` (number, optional, default: 20): The thickness of the radial segments.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { ChartRadial } from './src/components';

const radialData = [
    { value: 45, color: '#60a5fa', label: 'Desktop' },
    { value: 35, color: '#f59e0b', label: 'Mobile' },
    { value: 20, color: '#4b5563', label: 'Tablet' },
];

<ChartRadial data={radialData} size={200} strokeWidth={25} />
```
