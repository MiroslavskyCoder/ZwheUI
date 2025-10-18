# Sofa

A styled container component used throughout the component showcase application. It provides a consistent bordered and padded box for wrapping component demonstrations and can now include a title and description.

## Props

*   `children` (React.ReactNode, required): The content to be displayed inside the container.
*   `title` (string, optional): A title to render in a heading style above the children.
*   `description` (string, optional): A descriptive text to render below the title.
*   All other standard HTML `<div>` attributes are supported.

## Usage

```tsx
import { Sofa, Text } from './src/components';

<Sofa
  title="Component Demo"
  description="This is a demonstration of another component."
>
  {/* ... other components ... */}
</Sofa>
```