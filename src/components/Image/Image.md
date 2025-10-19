# Image

A component for displaying images with support for loading skeletons and fallback content.

## Props

*   `fallbackSrc` (string, optional): A fallback image URL to use if the primary `src` fails to load.
*   `fallback` (React.ReactNode, optional): A React node to display if the image fails to load and no `fallbackSrc` is provided.
*   `fit` (string, optional): The `object-fit` CSS property. Defaults to `cover`.
*   `radius` (string, optional): The `border-radius` of the image. Defaults to `8px`.
*   All other standard `<img>` attributes are supported.

## Usage

```tsx
import { Image, Text } from './src/components';

<Image 
  src="https://example.com/image.jpg"
  alt="An example image"
  fallback={<Text>Image not available</Text>}
/>
```
