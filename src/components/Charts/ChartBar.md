# ChartBar

A chart component that renders a series of vertical bars. It is now automatically rendered by the parent `Charts` component when a series with `type: 'bar'` is defined. You generally do not need to use this component directly.

## Customization

Customize the bar chart's appearance via the `series` prop on the `Charts` component.

```tsx
import { Charts, ChartAxis } from './src/components';

const barData = [
  { category: 'A', value: 20 },
  { category: 'B', value: 35 },
];

<Charts 
  dataset={barData}
  xAxis={[{ dataKey: 'category', scaleType: 'band' }]}
  series={[{
    type: 'bar',
    dataKey: 'value',
    color: '#10b981' // Custom color
  }]}
>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
</Charts>
```
