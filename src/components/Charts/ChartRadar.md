# ChartRadar

A standalone chart component that visualizes multivariate data in the form of a 2D chart of three or more quantitative variables represented on axes starting from the same point.

## Props

*   `data` (array of `RadarSeries`, required): The dataset(s) to display. Each `RadarSeries` object contains a `series` name, `color`, and an array of `values`. Each value object has an `axis` label and a numerical `value`.
*   `size` (number, optional, default: 300): The width and height of the chart in pixels.
*   `maxValue` (number, optional): The maximum value for the axes. If not provided, it's calculated automatically from the data.
*   `gridLevels` (number, optional, default: 5): The number of concentric grid lines to display.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { ChartRadar } from './src/components';

const radarData = [
    {
        series: 'Product A',
        color: '#60a5fa',
        values: [
            { axis: 'Usability', value: 8 },
            { axis: 'Performance', value: 9 },
            { axis: 'Features', value: 6 },
        ]
    }
];

<ChartRadar data={radarData} size={250} />
```
