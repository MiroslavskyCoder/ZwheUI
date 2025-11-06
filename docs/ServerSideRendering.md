# Server-Side Rendering (SSR)

ZwheUI is designed to be fully compatible with Server-Side Rendering (SSR) environments like Next.js. The styling system generates deterministic class names, ensuring that the HTML rendered on the server matches what is expected on the client, thus preventing React hydration errors.

## How It Works

1.  **On the Server**: During a server render, ZwheUI's `useStyles` hook generates unique, deterministic class names for each component based on its styles and the current theme. These class names are included in the server-rendered HTML. No `<style>` tags are generated on the server.
2.  **On the Client**: When the application hydrates on the client, ZwheUI generates the exact same class names. On the first render, it injects the corresponding CSS rules into a single `<style>` tag in the document `<head>`.

This approach ensures a seamless experience with no "flash of unstyled content" (FOUC) and no hydration mismatches, which is critical for frameworks like Next.js.

## Client-Side Only Components

Some components or hooks in ZwheUI rely on browser-specific APIs (like `window` or `document`) and will not work on the server. These must be rendered only on the client.

-   **`useMediaQuery`**: Relies on `window.matchMedia`.
-   **`useLocalStorage`**: Relies on `window.localStorage`.
-   **`ToastProvider` / `SnackbarProvider`**: They use React Portals, which need the `document` to mount.
-   **Web Audio/Video APIs**: The `Audio` and `Video` components with advanced features.
-   **`GraphicsNodeEditor`**: Relies heavily on browser DOM APIs for measurements and events.

### Dynamic Imports in Next.js

The standard way to handle this is with dynamic imports, disabling SSR for the specific component.

```tsx
import dynamic from 'next/dynamic';
import { Skeleton } from 'zwheui';

// Dynamically import the GraphicsNodeEditor with SSR turned off.
// Provide a loading component that will be rendered on the server.
const DynamicNodeEditor = dynamic(
  () => import('zwheui').then((mod) => mod.GraphicsNodeEditorDemo), // Assuming this is the component
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
