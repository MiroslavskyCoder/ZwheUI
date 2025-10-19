# Box

A polymorphic layout primitive that renders a `div` by default but can be changed to any other HTML element using the `as` prop.

## Props

*   `as` (React.ElementType, optional): The underlying HTML element to render. Defaults to `div`.
*   All other standard HTML attributes for the rendered element are supported.

## Usage

```tsx
import { Box } from './src/components';

// Renders a div
<Box style={{ padding: '1rem', background: '#333' }}>
  This is a box.
</Box>

// Renders a section element
<Box as="section">
  This is a section.
</Box>
```
