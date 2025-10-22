# Polymorphic Components with "as"

Several components in ZwheUI are "polymorphic," meaning they can render as different HTML elements while retaining their styles and behaviors. This powerful feature is enabled through the `as` prop and is key to writing semantic, accessible, and flexible markup.

## The Core Concept

By default, a layout component like `Box` renders a `<div>`. This is a generic, non-semantic container. However, for accessibility and SEO, it's often better to use more descriptive tags like `<section>`, `<article>`, `<nav>`, or `<aside>`. The `as` prop allows you to tell a component to render as a different element.

```tsx
// This renders a <div>
<Box>Hello</Box>

// This renders a <section>
<Box as="section">Hello</Box>
```

## Why is This Useful?

1.  **Semantic HTML**: Write more meaningful HTML that describes the structure of your content. This is beneficial for screen readers and search engines.
2.  **Flexibility**: Adapt base components to a wide variety of use cases without needing to create new components.
3.  **Reduced DOM Nesting**: Avoids unnecessary wrapper `<div>`s. Instead of writing `<section><Box>...</Box></section>`, you can just write `<Box as="section">...<Box>`.

## Polymorphic Components in ZwheUI

### `Box`, `Flex`, `Stack`, `Center`, `Grid`

All layout primitives are polymorphic. This allows you to build your page structure with semantically correct tags.

```tsx
import { Flex, Stack, Grid, Text } from 'zwheui';

const PageLayout = () => (
  <Flex as="main" direction="column">
    <Stack as="header">
      <Text as="h1">My Website</Text>
    </Stack>
    
    <Grid as="section" minItemWidth="300px">
      <Box as="article">Article 1</Box>
      <Box as="article">Article 2</Box>
    </Grid>

    <Box as="footer">
      © 2024
    </Box>
  </Flex>
);
```

### `Text`

The `Text` component is another powerful polymorphic component. It renders a `<p>` tag by default, but you can easily change it to render any heading level (`h1`-`h6`), a `<span>`, a `<label>`, or other text-based elements. This allows you to apply consistent typography styles to any text element.

```tsx
import { Text, Input } from 'zwheui';

// Renders an <h1> with specific styles from the Text component
<Text as="h1" size="2rem" weight="bold">
  Main Page Title
</Text>

// Renders a <label> associated with an input
<Text as="label" htmlFor="email-input">
  Email Address
</Text>
<Input id="email-input" />


// Renders a <span> for inline text styling
<p>
  This is a paragraph with an inline{' '}
  <Text as="span" color="primary">
    highlighted
  </Text>
  {' '}part.
</p>
```

By leveraging the `as` prop, you gain a tremendous amount of control over your final HTML output, leading to cleaner, more semantic, and more accessible web applications.
