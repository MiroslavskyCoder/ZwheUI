# Layout

A set of components for structuring the main layout of a page.

## Components

*   **Layout**: The main container. Can be configured with `hasSider` to create a side-navigation layout.
*   **Layout.Header**: A wrapper for the header section. Renders a `<header>` tag.
*   **Layout.Content**: A wrapper for the main content area. Renders a `<main>` tag.
*   **Layout.Footer**: A wrapper for the footer section. Renders a `<footer>` tag.
*   **Layout.Sider**: A wrapper for a sidebar. Renders an `<aside>` tag.

## Usage

### Basic Layout
```tsx
import { Layout } from './src/components';

<Layout>
  <Layout.Header>Header</Layout.Header>
  <Layout.Content>Content</Layout.Content>
  <Layout.Footer>Footer</Layout.Footer>
</Layout>
```

### Layout with Sidebar
```tsx
import { Layout } from './src/components';

<Layout hasSider>
  <Layout.Sider>Sider</Layout.Sider>
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
</Layout>
```
