# Advanced Charts

The ZwheUI `Charts` component is designed to be composable, allowing you to build complex and customized data visualizations by combining its building blocks. This guide covers some advanced patterns and recipes.

## 1. Multi-Series Charts

The `Charts` provider sets up scales based on the `dataset` and a primary `yAccessor`. However, you can render multiple `ChartLine` or `ChartArea` components, each with its own `yAccessor` to plot different data series from the same dataset.

### Example: Multi-Line Chart

Let's assume a dataset with multiple values per data point:

```ts
const salesData = [
  { month: 'Jan', productA: 220, productB: 150 },
  { month: 'Feb', productA: 250, productB: 180 },
  { month: 'Mar', productA: 310, productB: 220 },
  // ...
];
```

You can render both `productA` and `productB` on the same chart. The `yScale` created by the `Charts` provider will automatically adjust its domain to accommodate the full range of values from all series.

```tsx
import { Charts, ChartLine, ChartAxis, useTheme } from 'zwheui';

const MultiLineChart = () => {
    const { theme } = useTheme();
    
    return (
        <Charts
            data={salesData}
            xAccessor={d => d.month}
            // The primary yAccessor can be for one of the series
            yAccessor={d => d.productA}
            style={{ height: '300px' }}
        >
            <ChartAxis dimension="x" />
            <ChartAxis dimension="y" />

            {/* Line for Product A (uses primary yAccessor and color) */}
            <ChartLine />
            
            {/* Line for Product B (overrides yAccessor and color) */}
            <ChartLine 
                yAccessor={d => d.productB}
                color={theme.colors.accent}
            />
        </Charts>
    );
};
```

## 2. Combining Chart Types

You can easily combine different chart types within the same `Charts` container. For example, you can render an `ChartArea` with a `ChartLine` on top of it for emphasis.

```tsx
<Charts
    data={stockData}
    xAccessor={d => d.date}
    yAccessor={d => d.price}
    style={{ height: '300px' }}
>
    <ChartAxis dimension="x" />
    <ChartAxis dimension="y" />

    {/* Render the area first (so it's in the background) */}
    <ChartArea opacity={0.2} />

    {/* Render the line on top */}
    <ChartLine strokeWidth={2} />
</Charts>
```

## 3. Customizing Tooltips

The `ChartTooltip` component is highly customizable. You can provide formatting functions to control how the X and Y values are displayed.

```tsx
import { ChartTooltip } from 'zwheui';

// Example formatter for dates
const formatX = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};

// Example formatter for currency
const formatY = (value) => {
  return `$${value.toFixed(2)}`;
};

<Charts data={stockData} xAccessor={d => d.date} yAccessor={d => d.price}>
    {/* ... other components ... */}
    <ChartTooltip
      formatX={formatX}
      formatY={formatY}
      series={[
        { key: 'price', label: 'Price', color: theme.colors.primary, accessor: d => d.price },
        // ... other series if applicable
      ]}
    />
</Charts>
```

## 4. Handling Real-Time Data

While ZwheUI doesn't have a specific "real-time" chart component, you can easily create one by managing your data in React state and passing it to the `Charts` component. The chart will re-render efficiently whenever the `data` prop changes.

```tsx
import { useState, useEffect } from 'react';
import { Charts, ChartLine, ChartAxis } from 'zwheui';

const RealTimeChart = () => {
  const [data, setData] = useState([{ time: Date.now(), value: 50 }]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const newDataPoint = {
          time: Date.now(),
          value: 50 + (Math.random() - 0.5) * 20,
        };
        // Keep the last 50 data points
        return [...currentData, newDataPoint].slice(-50);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Charts
      data={data}
      xAccessor={d => d.time}
      yAccessor={d => d.value}
      style={{ height: '300px' }}
    >
      <ChartAxis dimension="x" formatTick={t => new Date(t).toLocaleTimeString()} />
      <ChartAxis dimension="y" />
      <ChartLine />
    </Charts>
  );
};
```
*Note: This example would require adding a `formatTick` prop to the `ChartAxis` for custom tick labels, which is a potential future enhancement.*
