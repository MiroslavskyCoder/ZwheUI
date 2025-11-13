# Server-Side Rendering (SSR)

ZwheUI is designed to be fully compatible with Server-Side Rendering (SSR) environments like Next.js. The styling system generates deterministic class names, ensuring that the HTML rendered on the server matches what is expected on the client, thus preventing React hydration errors.

## How It Works

1.  **On the Server**: During a server render, ZwheUI's `useStyles` hook generates unique, deterministic class names for each component based on its styles and the current theme. These class names are included in the server-rendered HTML. The corresponding CSS rules are collected in an in-memory registry.
2.  **Style Extraction**: You must extract these collected styles on the server and inject them into a `<style>` tag in the `<head>` of your HTML document.
3.  **On the Client**: When the application hydrates on the client, ZwheUI generates the exact same class names. On the first render, it injects any *new* CSS rules (e.g., for components rendered only on the client) into its client-side `<style>` tag. Because the server-rendered styles are already present, there is no "flash of unstyled content" (FOUC).

## Setup for Next.js (Pages Router)

To enable SSR for styles, you need to customize the `pages/_document.js` (or `.tsx`) file in your Next.js project.

### 1. Create or Modify `_document.js`

This file allows you to modify the server-rendered `<html>` and `<body>` tags. We'll override the `getInitialProps` method to collect and inject our styles.

```jsx
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getSsrStyles, clearSsrStyles } from 'zwheui';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Clear the style registry before each render.
    // IMPORTANT: See note on concurrency below.
    clearSsrStyles();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />,
        });

      const initialProps = await Document.getInitialProps(ctx);
      const zwheuiStyles = getSsrStyles();

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="zwheui-ssr-styles"
              dangerouslySetInnerHTML={{ __html: zwheuiStyles }}
            />
          </>
        ),
      };
    } finally {
      // It's good practice to clear styles again after render, though less critical.
      clearSsrStyles();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### 2. Note on Concurrency

The current SSR implementation uses a global, in-memory registry for styles. In a serverless environment where a single Node.js process can handle multiple requests concurrently, this could potentially lead to styles from one request leaking into another.

For most use cases, this is not an issue, but it's an important consideration for high-traffic, concurrent environments. A future version of ZwheUI will introduce a context-based registry to solve this, which will be the recommended approach for Next.js App Router.

## Client-Side Only Components

Some components or hooks in ZwheUI rely on browser-specific APIs (like `window` or `document`) and will not work on the server. These must be rendered only on the client.

-   **`useMediaQuery`**: Relies on `window.matchMedia`.
-   **`useLocalStorage`**: Relies on `window.localStorage`.
-   **`ToastProvider` / `SnackbarProvider`**: They use React Portals, which need the `document` to mount.
-   **`Audio` & `Video`**: The advanced components rely on Web Audio/Video APIs.
-   **`GraphicsNodeEditor`**: Relies heavily on browser DOM APIs for measurements and events.

### Dynamic Imports in Next.js

The standard way to handle this is with dynamic imports, disabling SSR for the specific component.

```tsx
import dynamic from 'next/dynamic';
import { Skeleton } from 'zwheui';

// Dynamically import the GraphicsNodeEditor with SSR turned off.
// Provide a loading component that will be rendered on the server.
const DynamicNodeEditor = dynamic(
  () => import('zwheui').then((mod) => mod.GraphicsNodeEditorDemo),
  {
    ssr: false,
    loading: () => <Skeleton height="600px" />
  }
);

export default function EditorPage() {
  return (
    <div>
      <h1>My Node Editor</h1>
      <DynamicNodeEditor />
    </div>
  );
}
```

### Using the `DynamicImportComponents` Helper

As a simpler alternative to `next/dynamic` for components that don't need code-splitting but just need to be excluded from SSR, ZwheUI provides a `DynamicImportComponents` helper.

This component simply prevents its children from rendering on the server. You can provide an optional `fallback` prop to render a placeholder during the server render and initial client hydration.

#### Usage

Wrap any client-only component with `DynamicImportComponents`.

```tsx
import { DynamicImportComponents, GraphicsNodeEditorDemo, Skeleton } from 'zwheui';

export default function EditorPage() {
  return (
    <div>
      <h1>My Node Editor</h1>
      
      <DynamicImportComponents fallback={<Skeleton height="600px" />}>
        {/* This component will only be rendered on the client side */}
        <GraphicsNodeEditorDemo />
      </DynamicImportComponents>
    </div>
  );
}
```

This approach is often easier and sufficient if your primary goal is to avoid SSR errors without needing the performance benefits of code-splitting for that specific component.

## Advanced: Dynamic Imports for Server Components

For advanced use cases, ZwheUI also exports a barrel file containing dynamic `import()` statements for every component in the library. This is available as `DynamicImportsAllComponents`.

This is generally not needed for typical application development but can be useful if you are building a tool that needs to lazy-load ZwheUI components on the server, perhaps in combination with a custom implementation of `next/dynamic`.

### Usage

You can import this module and use it to dynamically load components by name.

```tsx
import { DynamicImportsAllComponents } from 'zwheui';
import dynamic from 'next/dynamic';

// Example of how you might use it with next/dynamic
const DynamicButton = dynamic(
  () => DynamicImportsAllComponents.Button().then(mod => mod.Button),
  { ssr: true } // This component can now be SSR'd
);

export default function MyPage() {
  return (
    <div>
      <p>This button is dynamically imported, but still rendered on the server.</p>
      <DynamicButton>Click me</DynamicButton>
    </div>
  );
}
```

This provides a structured way to handle code-splitting for ZwheUI components even within a server environment.
