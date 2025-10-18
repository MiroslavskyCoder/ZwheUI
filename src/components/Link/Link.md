# Link

A styled anchor (`<a>`) tag for navigation, consistent with the application's theme.

## Props

*   All standard HTML `<a>` attributes are supported (e.g., `href`, `target`, `onClick`).
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

```tsx
import { Link, Text } from './src/components';

<Text>
  Please <Link href="/login">log in</Link> to continue.
</Text>
```
