# Progress Indicators

Components to indicate loading or the progress of an operation.

## CircularProgress

A circular "spinner" style progress indicator.

### Props
*   `value` (number, optional): A value from 0 to 100 to show determinate progress. If omitted, the indicator will be indeterminate.
*   `size` (number, optional, default: 48): The width and height of the component in pixels.
*   `strokeWidth` (number, optional, default: 4): The thickness of the progress ring.

### Usage
```tsx
import { CircularProgress } from './src/components';

// Indeterminate
<CircularProgress />

// Determinate
<CircularProgress value={75} />
```

---

## LinearProgress

A horizontal bar style progress indicator.

### Props
*   `value` (number, optional): A value from 0 to 100 to show determinate progress. If omitted, the indicator will be indeterminate.
*   `height` (string, optional, default: '4px'): The thickness of the progress bar.

### Usage
```tsx
import { LinearProgress } from './src/components';

// Indeterminate
<LinearProgress />

// Determinate
<LinearProgress value={50} />
```
