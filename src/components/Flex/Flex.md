# Flex

A layout component that extends `Box` to provide convenient props for creating flexbox layouts.

## Props

*   `direction` (string, optional): The `flex-direction`.
*   `align` (string, optional): The `align-items`.
*   `justify` (string, optional): The `justify-content`.
*   `wrap` (string, optional): The `flex-wrap`.
*   `gap` (string, optional): The `gap` between items.
*   All other `Box` props are supported.

## Usage

```tsx
import { Flex, Box } from './src/components';

<Flex gap="1rem" align="center">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>
```
