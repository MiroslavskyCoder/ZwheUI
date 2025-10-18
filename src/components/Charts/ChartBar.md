# ChartBar

A chart component that renders a series of vertical bars based on the provided data. It must be used as a child of the `Charts` component.

## Props

*   `color` (string, optional): The color of the bars. Defaults to the theme's primary color.
*   `barWidthRatio` (number, optional, default: 0.6): A ratio (0 to 1) that determines the width of each bar relative to its available space (the band width).

## Usage

```tsx
import { Charts, ChartBar, ChartAxis } from './src/components';

const barData = [
  { category: 1, value: 20 },
  { category: 2, value: 35 },
];

<Charts data={barData} xAccessor={d => d.category} yAccessor={d => d.value}>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
  <ChartBar />
</Charts>
```
