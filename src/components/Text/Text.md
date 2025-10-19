# Text

A versatile and polymorphic component for rendering text with consistent, theme-based typography styles. It can be rendered as different HTML elements using the `as` prop.

## Props

*   `as` (enum: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre', optional, default: 'p'): The underlying HTML element to render.
*   `size` (string, optional): The font size (e.g., '1rem', '14px'). Defaults to the theme's base font size.
*   `weight` (string | number, optional): The font weight. Defaults to the theme's normal font weight.
*   `color` (string, optional): The text color. Defaults to the theme's primary text color.
*   All other standard HTML attributes for the rendered element (e.g., `p`, `h1`) are supported.

## Usage

```tsx
import { Text } from './src/components';

// Render a paragraph with default styles
<Text>This is some body text.</Text>

// Render a styled heading
<Text as="h2" size="1.5rem" weight="600">
  Section Title
</Text>

// Render colored text
<Text as="span" color="#60a5fa">
  This is a primary color span.
</Text>

// Render preformatted text
<Text as="pre">
  This text will preserve whitespace.
</Text>
```