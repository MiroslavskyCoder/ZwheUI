# Charts

The main wrapper component for creating charts. It sets up the dimensions and provides a context with data and scales for all child chart components (like `ChartLine`, `ChartArea`, `ChartAxis`).

## Props

*   `dataset` (array, required): The array of data objects to be visualized.
*   `xAxis` (array, required): Configuration for the X-axis. For a categorical axis (like in bar charts), use `{ scaleType: 'band', dataKey: '...' }`. For a linear axis, use `{ dataKey: '...' }`.
*   `series` (array, required): An array defining the data series to plot. Each object must have a `type` ('line', 'area', or 'bar') and a `dataKey`.
*   `children` (React.ReactNode): The chart components to be rendered (e.g., `ChartAxis`, `ChartLine`).
*   `className` (string, optional): Additional CSS classes for the container.
*   `style` (React.CSSProperties, optional): Inline styles for the container.

## Usage

```tsx
import { Charts, ChartLine, ChartArea, ChartAxis } from './src/components';

const myData = [
  { month: 'Jan', revenue: 1200, expenses: 800 },
  { month: 'Feb', revenue: 1500, expenses: 900 },
  { month: 'Mar', revenue: 1300, expenses: 850 },
];

<Charts
  dataset={myData}
  xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
  series={[
    { type: 'area', dataKey: 'revenue', color: '#60a5fa' },
    { type: 'line', dataKey: 'revenue', color: '#60a5fa' },
    { type: 'line', dataKey: 'expenses', color: '#ef4444' },
  ]}
  style={{ height: '300px' }}
>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" />
  {/* The ChartLine and ChartArea components are now rendered automatically based on the 'series' prop */}
</Charts>
```
