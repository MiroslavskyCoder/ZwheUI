# ChartSparkline

A small, lightweight, standalone chart. It's typically used inline to show a trend at a glance, without axes or coordinates.

## Props

*   `data` (array, required): The dataset to be visualized.
*   `xAccessor` (function, required): A function to access the x-value from a data point.
*   `yAccessor` (function, required): A function to access the y-value from a data point.
*   `width` (number | string, optional, default: '100%'): The width of the SVG element.
*   `height` (number | string, optional, default: 50): The height of the SVG element.
*   `color` (string, optional): The color of the line and area fill. Defaults to the theme's primary color.
*   `strokeWidth` (number, optional, default: 1.5): The thickness of the line.

## Usage

```tsx
import { ChartSparkline } from './src/components';

const sparklineData = Array.from({ length: 20 }, (_, i) => ({ x: i, y: Math.random() * 30 }));

<ChartSparkline
  data={sparklineData}
  xAccessor={d => d.x}
  yAccessor={d => d.y}
  height={40}
/>
```
