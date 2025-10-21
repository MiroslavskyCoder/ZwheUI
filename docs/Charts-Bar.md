# Bar Charts

Bar charts are ideal for comparing discrete categories of data. They use rectangular bars whose lengths are proportional to the values they represent. They are excellent for:

-   Visualizing differences in magnitude across groups.
-   Highlighting trends over discrete time periods.
-   Comparing proportions at a glance.

ZwheUI provides a `ChartBar` component that must be used as a child of the main `Charts` component.

## Basic Requirements

To create a bar chart, your data and component setup need:
1.  **A categorical dimension**: This is what you are comparing (e.g., products, countries, months). It will be plotted on one axis.
2.  **A numerical metric**: This determines the length of each bar and is plotted on the other axis.

## Usage with `dataset`

When your data is stored in an array of objects, the `dataset` prop on the `Charts` component is the most convenient way to provide data. You can then use the `dataKey` property on the `series` and `xAxis` props to specify which fields from your objects to use.

### Example

Let's create a simple bar chart comparing voter turnout in several countries.

**1. Your Data:**
```ts
const turnoutData = [
  { country: 'Belgium', turnout: 88.4 },
  { country: 'Sweden', turnout: 87.2 },
  { country: 'Denmark', turnout: 84.6 },
  { country: 'Australia', turnout: 80.8 },
  { country: 'Germany', turnout: 76.6 },
];
```

**2. The Chart Component:**

Here, we use a `dataset` prop on `Charts`. The `xAxis` uses `dataKey: 'country'` to define the categories, and the `series` uses `dataKey: 'turnout'` to define the bar lengths.

```tsx
import { Charts, ChartBar, ChartAxis } from 'zwheui';

<Charts
  dataset={turnoutData}
  xAxis={[{ 
    scaleType: 'band', // 'band' scale is used for categorical data
    dataKey: 'country' 
  }]}
  series={[{ 
    type: 'bar', 
    dataKey: 'turnout' 
  }]}
  style={{ height: '300px' }}
>
  <ChartAxis dimension="x" />
  <ChartAxis dimension="y" label="Voter Turnout (%)" />
  <ChartBar />
</Charts>
```
*Note: The `scaleType: 'band'` is important for bar charts as it correctly calculates the position and width for each categorical bar.*

The `Charts` component context will automatically create the appropriate scales and pass them down to the `ChartBar` and `ChartAxis` children, which then render the visualization. You can also create horizontal bar charts by swapping the `x` and `y` axis configurations.
