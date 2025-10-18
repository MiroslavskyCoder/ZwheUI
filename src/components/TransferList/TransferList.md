# Transfer List

A component that allows users to move items between two lists. It's useful for scenarios like selecting a subset of options from a larger pool.

## Props

*   `initialLeft` (array of objects, required): The initial set of items for the left list. Each object must have `id` and `label` properties.
*   `initialRight` (array of objects, required): The initial set of items for the right list.
*   `leftTitle` (string, optional, default: 'Choices'): The title for the left list.
*   `rightTitle` (string, optional, default: 'Chosen'): The title for the right list.

## Usage

```tsx
import { TransferList } from './src/components';

const items = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
];

<TransferList initialLeft={items} initialRight={[]} />
```
