# ChartHeatmap

A standalone chart component that visualizes a 2D matrix of data as a grid of colored cells. The intensity of the color corresponds to the value of the cell.

## Props

*   `data` (number[][], required): A 2D array of numerical values.
*   `rowLabels` (string[], required): An array of labels for the rows.
*   `colLabels` (string[], required): An array of labels for the columns.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { ChartHeatmap } from './src/components';

const heatmapData = {
    data: [
        [10, 50, 20],
        [80, 10, 90],
    ],
    rowLabels: ['Alpha', 'Beta'],
    colLabels: ['X', 'Y', 'Z'],
};

<ChartHeatmap {...heatmapData} />
```
