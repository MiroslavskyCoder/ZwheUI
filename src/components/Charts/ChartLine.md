# ChartLine

A chart component that renders a line connecting data points. It must be used as a child of the `Charts` component.

## Props

*   `color` (string, optional): The color of the line. Defaults to the theme's primary color.
*   `strokeWidth` (number, optional, default: 2): The thickness of the line.
*   `yAccessor` (function, optional): A specific y-accessor for this line, useful for multi-series charts. If not provided, it uses the `yAccessor` from the parent `Charts` context.

## Usage

```tsx
import { Charts, ChartLine, ChartAxis } from './src/components';

<Charts data={myData} xAccessor={d => d.x} yAccessor={d => d.y}>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
  <ChartLine color="#f59e0b" strokeWidth={3} />
</Charts>
```
