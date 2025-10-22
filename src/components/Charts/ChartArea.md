# ChartArea

A chart component that renders a filled area shape based on the provided data. It is now automatically rendered by the parent `Charts` component when a series with `type: 'area'` is defined. You generally do not need to use this component directly.

## Customization

While rendered automatically, you can still customize its appearance via the `series` prop on the `Charts` component.

```tsx
import { Charts, ChartAxis } from './src/components';

<Charts
  dataset={myData}
  xAxis={[{ dataKey: 'x' }]}
  series={[
    { 
      type: 'area', 
      dataKey: 'y',
      color: '#f59e0b', // Custom color
      opacity: 0.5      // Custom opacity
    }
  ]}
>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
</Charts>
```
