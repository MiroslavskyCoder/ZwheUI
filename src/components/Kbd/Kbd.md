# Kbd

A component for displaying keyboard shortcuts in a visually distinct style, mimicking the appearance of a physical key.

## Props

*   `children` (React.ReactNode, required): The key or symbol to display (e.g., '⌘', 'Shift', 'K').
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { Kbd, Text } from './src/components';

<Text>
  Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
</Text>
```
