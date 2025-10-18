
# Header

A semantic container component for the top section of a page, typically containing branding, navigation, and primary actions. It uses sub-components for layout.

## Components

*   **Header**: The main container.
*   **Header.Left**: A wrapper for content aligned to the left (e.g., logo, title).
*   **Header.Right**: A wrapper for content aligned to the right (e.g., actions, user menu).

## Usage

```tsx
import { Header, Text, Button } from './src/components';

<Header>
  <Header.Left>
    <Text as="h1" size="1.25rem" weight="600">My App</Text>
  </Header.Left>
  <Header.Right>
    <Button>Log In</Button>
  </Header.Right>
</Header>
```
