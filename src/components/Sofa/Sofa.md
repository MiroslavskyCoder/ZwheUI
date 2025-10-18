# Sofa

A styled container component used throughout the component showcase application. It provides a consistent bordered and padded box for wrapping component demonstrations.

## Props

*   `children` (React.ReactNode, required): The content to be displayed inside the container.
*   All other standard HTML `<div>` attributes are supported.

## Usage

```tsx
import { Sofa, Text } from './src/components';

<Sofa>
  <Text as="h2">Component Demo</Text>
  <Text>This is a demonstration of another component, wrapped in a Sofa for consistent styling.</Text>
  {/* ... other components ... */}
</Sofa>
```
