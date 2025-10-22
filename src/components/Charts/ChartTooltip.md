# ChartTooltip

An interactive component that displays a tooltip with data point details when the user hovers over a chart. It must be used as a child of the `Charts` component.

## Props

*   `series` (array of objects, required): An array describing the data series to display in the tooltip. Each object should have:
    *   `key` (string, required): A unique key for the series.
    *   `label` (string, required): The display name for the series.
    *   `color` (string, required): The color swatch to show for the series.
    *   `accessor` (function, required): A function to get the series' value from a data point.
*   `formatX` (function, optional): A function to format the x-value displayed in the tooltip.
*   `formatY` (function, optional): A function to format the y-values displayed in the tooltip.

## Usage

```tsx
import { Charts, ChartTooltip, ChartAxis } from './src/components';

const myData = [
  { day: 1, seriesA: 10, seriesB: 15 },
  { day: 2, seriesA: 15, seriesB: 20 },
];

<Charts 
  dataset={myData} 
  xAxis={[{ dataKey: 'day' }]}
  series={[
    { type: 'line', dataKey: 'seriesA', color: '#60a5fa' },
    { type: 'line', dataKey: 'seriesB', color: '#f59e0b' },
  ]}
>
    <ChartAxis dimension="x" />
    <ChartAxis dimension="y" />
    <ChartTooltip series={[
        { key: 'a', label: 'Series A', color: '#60a5fa', accessor: d => d.seriesA },
        { key: 'b', label: 'Series B', color: '#f59e0b', accessor: d => d.seriesB },
    ]} />
</Charts>
```
