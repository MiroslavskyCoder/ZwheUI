# Divider

A component to visually separate content, either horizontally or vertically.

## Props

*   `orientation` (enum: 'horizontal' | 'vertical', optional): The orientation of the divider. Defaults to `horizontal`.
*   All other standard `<hr>` attributes are supported.

## Usage

```tsx
import { Divider, Stack, Text } from './src/components';

// Horizontal divider
<Stack>
  <Text>Content above</Text>
  <Divider />
  <Text>Content below</Text>
</Stack>

// Vertical divider
<Stack direction="row" align="center">
  <Text>Left</Text>
  <Divider orientation="vertical" style={{ height: '24px' }}/>
  <Text>Right</Text>
</Stack>
```
