
# Footer

A semantic container component for the bottom section of a page, typically containing copyright information, links, and other metadata.

## Props

*   `children` (React.ReactNode): The content to be rendered inside the footer.
*   All other standard `<footer>` attributes are supported.

## Usage

```tsx
import { Footer, Text, Link } from './src/components';

<Footer>
  <Text size="14px">
    © {new Date().getFullYear()} ZwheUI. All Rights Reserved.
  </Text>
  <Link href="/privacy">Privacy Policy</Link>
</Footer>
```
