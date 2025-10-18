# Floating Action Button (FAB)

A circular button that appears in front of all screen content, typically used for a primary or common action.

## Props

*   `icon` (React.ElementType, required): The icon component to display inside the button.
*   `label` (string, required): An accessible label for the button, as it has no visible text.
*   `position` (object, optional): An object with `top`, `bottom`, `left`, `right` properties to position the FAB. Defaults to `{ bottom: '2rem', right: '2rem' }`.
*   `size` (enum: 'small' | 'medium' | 'large', optional, default: 'medium'): The size of the button.
*   All other props are passed down to the underlying `Button` component (e.g., `onClick`).

## Usage

```tsx
import { FloatingActionButton } from './src/components';
import { PlusIcon } from './src/icons';

<FloatingActionButton
  icon={PlusIcon}
  label="Add new item"
  onClick={() => alert('FAB clicked!')}
/>
```
