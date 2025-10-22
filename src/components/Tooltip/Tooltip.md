# Tooltip

A floating label that appears when a user hovers over an element.

## Props

*   `label` (string, required): The text to display in the tooltip.
*   `children` (React.ReactNode, required): The trigger element that the user will hover over. This must be a single element.

## Usage

The `Tooltip` component is a simple wrapper. Place the element you want to trigger the tooltip as its child.

```tsx
import { Tooltip, Button, Text } from './src/components';

// Tooltip on a Button
<Tooltip label="Click to save your progress">
  <Button>Save</Button>
</Tooltip>

// Tooltip on a Text element
<Tooltip label="This is important information">
  <Text style={{ borderBottom: '1px dashed' }}>Hover over me</Text>
</Tooltip>
```
