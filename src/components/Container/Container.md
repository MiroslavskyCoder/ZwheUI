# Container

A layout component that centers its content and constrains it to a maximum width. This is essential for creating consistent, readable layouts on wider screens.

## Props

*   `children` (React.ReactNode): The content to be rendered inside the container.
*   `maxWidth` (string, optional): A specific max-width for the container (e.g., '800px'). If not provided, it defaults to the value from the theme (`theme.maxWidths.container`).
*   `className` (string, optional): Additional CSS classes for custom styling.
*   All other standard `<div>` attributes are supported.

## Usage

```tsx
import { Container, Card, Text } from './src/components';

<Container>
  <Card>
    <Text>
      This content is inside a container. It will be centered and have a
      maximum width, ensuring it doesn't stretch too wide on large displays.
    </Text>
  </Card>
</Container>
```
