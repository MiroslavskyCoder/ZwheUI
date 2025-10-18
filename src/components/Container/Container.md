# Container

A layout component that centers its content and constrains it to a maximum width. This is essential for creating consistent, readable layouts on wider screens.

## Props

*   `children` (React.ReactNode): The content to be rendered inside the container.
*   `size` (enum: 'xs' | 'sm' | 'md' | 'lg' | 'xl', optional): A predefined size from the theme's `maxWidths` scale.
*   `maxWidth` (string, optional): A specific max-width for the container (e.g., '800px'). Overrides `size` if both are provided. Defaults to `theme.maxWidths.container`.
*   `className` (string, optional): Additional CSS classes for custom styling.
*   All other standard `<div>` attributes are supported.

## Usage

```tsx
import { Container, Card, Text } from './src/components';

// Default container
<Container>
  <Text>This content is centered with the default max-width.</Text>
</Container>

// Sized container
<Container size="sm">
  <Text>This content is in a small container.</Text>
</Container>
```