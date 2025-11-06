# Styling in ZwheUI

ZwheUI uses a custom, lightweight CSS-in-JS solution that is built with performance and simplicity in mind. It leverages a `useStyles` hook combined with a theme context to provide scoped, dynamic, and theme-aware styling without external dependencies.

## Core Concepts

1.  **`useTheme()`**: This hook provides access to the current theme object, which includes colors, spacing, typography, and more. It also gives you the `mode` ('dark' or 'light') and a `switchTheme` function.

2.  **`useStyles(prefix)`**: This is the primary hook for creating styles. It returns a `createStyle` function.
    *   `prefix` (optional string): An optional prefix for the generated class names, useful for debugging (e.g., `useStyles('button')`).

3.  **`createStyle(styleObject)`**: This function takes a JavaScript style object (similar to React's inline styles but with support for pseudo-selectors and media queries) and injects the corresponding CSS into a `<style>` tag in the document head. It returns a unique, scoped class name.

## Basic Usage

Here's how these pieces fit together inside a component:

```tsx
import { useStyles, useTheme } from '../core';

export const MyComponent = () => {
    const { theme } = useTheme();
    const createStyle = useStyles('my-component');

    const containerClass = createStyle({
        padding: theme.spacing.md,
        backgroundColor: theme.colors.primary,
        borderRadius: '8px',
        color: theme.colors.text,
    });

    return (
        <div className={containerClass}>
            Hello, World!
        </div>
    );
}
```

This will generate a unique class name (e.g., `my-component-a1b2c3d4`) and inject the corresponding CSS, ensuring styles don't leak and conflict with other components.

## Advanced Features

The styling system also supports pseudo-selectors, pseudo-elements, and media queries.

### Pseudo-Selectors

Use the `&` symbol to target the component itself with pseudo-selectors like `:hover` or `:focus`.

```tsx
const buttonClass = createStyle({
    backgroundColor: theme.colors.primary,
    '&:hover': {
        filter: 'brightness(0.9)',
    },
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    }
});
```

### Media Queries

Use the `@media` key to define responsive styles. You can use standard media query strings or theme-based breakpoints for convenience.

```tsx
const containerClass = createStyle({
    padding: theme.spacing.md,
    '@media': {
        // Uses the 'sm' breakpoint from the theme
        "(maxWidth: 'sm')": {
            padding: theme.spacing.sm,
        },
        // Standard media query string
        '(min-width: 1200px)': {
            maxWidth: '1200px',
        }
    }
});
```

## How It Works (`createClassFlow`)

Under the hood, `useStyles` calls a function named `createClassFlow` which is now compatible with Server-Side Rendering (SSR).

1.  Takes a style object and the current theme.
2.  Serializes both into a string to generate a unique, deterministic hash. The class name is derived from this hash (e.g., `zw-a1b2c3d4`).
3.  Checks a cache to see if this class name has already been processed in the current session. If so, it returns the cached class name immediately.
4.  If not cached, it generates the full CSS rule string from the style object, resolving any theme values.
5.  **On the client**, it injects the new CSS rule into a single `<style data-zwheui>` tag in the document's `<head>`.
6.  **On the server**, it does *not* inject any CSS. It only generates and returns the deterministic class name. This allows the server-rendered HTML to match the client, preventing hydration errors. The client is responsible for injecting the styles on first load.
7.  Caches the class name to prevent re-injection and returns it.

This approach provides the benefits of scoped styles and SSR compatibility with good performance by caching aggressively and minimizing DOM manipulations.