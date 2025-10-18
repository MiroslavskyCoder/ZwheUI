# Link

A styled anchor (`<a>`) tag for navigation, consistent with the application's theme. It seamlessly integrates with `react-router-dom` for client-side routing.

## Props

*   `to` (string, optional): The path for client-side navigation. If this prop is provided, the component will render a `react-router-dom` `Link`.
*   `href` (string, optional): The URL for a standard anchor tag. This is used for external links or when not using a router.
*   All other standard `<a>` attributes are supported (e.g., `target`, `onClick`).
*   `className` (string, optional): Additional CSS classes for custom styling.

## Usage

### Standard External Link
```tsx
import { Link } from './src/components';

<Link href="https://example.com" target="_blank">
  Visit Example
</Link>
```

### Client-Side Routing Link
```tsx
import { Link } from './src/components';

// This will render a <Link> from react-router-dom
<Link to="/profile">
  View Profile
</Link>
```