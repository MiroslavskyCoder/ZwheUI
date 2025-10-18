# Error

A simple text component used to display error messages, typically in the context of a form input.

## Props

*   `children` (React.ReactNode, required): The error message to display.
*   `className` (string, optional): Additional CSS classes for the `<p>` tag.
*   All other standard HTML `<p>` attributes are supported.

## Usage

```tsx
import { Error, Input } from './src/components';

<Input label="Username" error="This username is already taken." />
```
