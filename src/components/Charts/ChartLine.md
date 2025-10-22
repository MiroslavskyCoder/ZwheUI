# ChartLine

A chart component that renders a line connecting data points. It is now automatically rendered by the parent `Charts` component when a series with `type: 'line'` is defined. You generally do not need to use this component directly.

## Customization

You can customize the line's appearance via the `series` prop on the `Charts` component.

```tsx
import { Charts, ChartAxis } from './src/components';

<Charts
  dataset={myData}
  xAxis={[{ dataKey: 'x' }]}
  series={[{ 
    type: 'line', 
    dataKey: 'y',
    color: '#f59e0b',    // Custom color
    strokeWidth: 3      // Custom thickness
  }]}
>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
</Charts>
```
