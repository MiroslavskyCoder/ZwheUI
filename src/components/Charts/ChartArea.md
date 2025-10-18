# ChartArea

A chart component that renders a filled area shape based on the provided data. It must be used as a child of the `Charts` component.

## Props

*   `color` (string, optional): The color of the area. Defaults to the theme's primary color.
*   `opacity` (number, optional, default: 0.3): The opacity of the filled area.
*   `yAccessor` (function, optional): A specific y-accessor for this area, useful for multi-series charts. If not provided, it uses the `yAccessor` from the parent `Charts` context.

## Usage

```tsx
import { Charts, ChartArea, ChartAxis } from './src/components';

<Charts data={myData} xAccessor={d => d.x} yAccessor={d => d.y}>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
  <ChartArea color="#f59e0b" opacity={0.5} />
</Charts>
```
