# Skeleton

A placeholder component used to indicate that content is loading. It shows a shimmering shape that mimics the final content's structure, improving perceived performance.

## Props

*   `width` (string, optional, default: '100%'): The width of the skeleton shape.
*   `height` (string, optional, default: '1rem'): The height of the skeleton shape.
*   `variant` (enum: 'text' | 'rect' | 'circle', optional, default: 'text'): The shape of the skeleton placeholder.
*   All other standard HTML `<div>` attributes are supported.

## Usage

```tsx
import { Skeleton, Stack } from './src/components';

<Stack gap="0.5rem">
    {/* Text skeleton */}
    <Skeleton width="80%" height="1.2rem" />
    <Skeleton width="60%" />

    {/* Avatar + Text skeleton */}
    <Stack direction="row" gap="1rem" align="center">
        <Skeleton variant="circle" width="40px" height="40px" />
        <Skeleton width="50%" height="0.8rem" />
    </Stack>

    {/* Rectangle skeleton */}
    <Skeleton variant="rect" height="100px" />
</Stack>
```
