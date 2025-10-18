# Charts

The main wrapper component for creating charts. It sets up the dimensions and provides a context with data and scales for all child chart components (like `ChartLine`, `ChartArea`, `ChartAxis`).

## Props

*   `data` (array, required): The dataset to be visualized.
*   `xAccessor` (function, required): A function that takes a data point (`d`) and its index (`i`) and returns the x-value.
*   `yAccessor` (function, required): A function that takes a data point (`d`) and its index (`i`) and returns the y-value.
*   `children` (React.ReactNode): The chart components to be rendered (e.g., `ChartAxis`, `ChartLine`).
*   `className` (string, optional): Additional CSS classes for the container.
*   `style` (React.CSSProperties, optional): Inline styles for the container.

## Usage

```tsx
import { Charts, ChartLine, ChartArea, ChartAxis } from './src/components';

const myData = [
  { day: 1, value: 10 },
  { day: 2, value: 15 },
  { day: 3, value: 8 },
];

<Charts
  data={myData}
  xAccessor={d => d.day}
  yAccessor={d => d.value}
  style={{ height: '300px' }}
>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
  <ChartArea />
  <ChartLine />
</Charts>
```
