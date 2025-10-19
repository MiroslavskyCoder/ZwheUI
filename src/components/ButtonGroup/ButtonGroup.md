# ButtonGroup

A layout component to group related buttons together.

## Props

*   `isAttached` (boolean, optional): If true, the buttons will be visually attached with no space or rounded corners between them.
*   All `Stack` props are supported.

## Usage

```tsx
import { ButtonGroup, Button } from './src/components';

// Spaced group
<ButtonGroup>
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>

// Attached group
<ButtonGroup isAttached>
  <Button>Bold</Button>
  <Button>Italic</Button>
  <Button>Underline</Button>
</ButtonGroup>
```
