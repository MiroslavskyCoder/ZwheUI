# ChartAxis

A component that renders an X or Y axis with ticks, labels, and a baseline. It must be used as a child of the `Charts` component.

## Props

*   `dimension` (enum: 'x' | 'y', required): Specifies whether to render a horizontal (x) or vertical (y) axis.
*   `label` (string, optional): A label for the axis.
*   `numberOfTicks` (number, optional, default: 5): The desired number of ticks to display on the axis.

## Usage

```tsx
import { Charts, ChartAxis } from './src/components';

<Charts
  dataset={myData}
  xAxis={[{ dataKey: 'x' }]}
  series={[{ type: 'line', dataKey: 'y' }]}
>
  <ChartAxis dimension="x" label="Day" />
  <ChartAxis dimension="y" label="Value" numberOfTicks={10} />
</Charts>
```
