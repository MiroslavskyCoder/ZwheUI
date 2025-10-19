# AspectRatio

A layout component that wraps its children in a container that maintains a specific aspect ratio. Useful for videos, images, or any embedded content.

## Props

*   `ratio` (number, optional): The aspect ratio, calculated as `width / height`. Defaults to `16 / 9`.
*   All other `Box` props are supported.

## Usage

```tsx
import { AspectRatio } from './src/components';

<AspectRatio ratio={4 / 3}>
  <img src="path/to/image.jpg" alt="A landscape image" />
</AspectRatio>
```
