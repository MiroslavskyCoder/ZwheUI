# Server-Side Rendering (SSR)

ZwheUI is designed to be compatible with Server-Side Rendering (SSR) environments like Next.js, Remix, or custom Express servers with React. The library's styling solution is SSR-friendly, but there are a few considerations to keep in mind.

## How ZwheUI's Styling Works with SSR

The custom styling engine (`useStyles` and `createClassFlow`) works by injecting CSS rules into a `<style>` tag in the document's `<head>`.

-   **On the Client**: This works out of the box. When a component mounts, it calculates its styles and ensures they are present in the DOM.
-   **On the Server**: During a server render, React components are rendered to an HTML string. However, there is no `document` or `<head>` to inject styles into. The style generation happens, but the output CSS is not collected.

To make SSR work, you need a mechanism to collect all the generated CSS during the server render and inject it into the final HTML document that is sent to the browser.

While ZwheUI does not currently ship with an out-of-the-box, automated style extraction utility for SSR, its architecture is compatible with common patterns for achieving this. The core `createClassFlow` function could be modified in an SSR environment to collect rules instead of injecting them directly.

**For the context of this project, full SSR style extraction is an advanced topic not fully implemented. Components will render without styles on the server, and styles will "pop in" on the client-side during hydration.**

## Client-Side Only Components

Some components or hooks in ZwheUI rely on browser-specific APIs (like `window` or `document`) and will not work on the server.

-   **`useMediaQuery`**: Relies on `window.matchMedia`.
-   **`useLocalStorage`**: Relies on `window.localStorage`.
-   **`ToastProvider` / `SnackbarProvider`**: They use React Portals, which need the `document` to mount.
-   **Web Audio/Video APIs**: The `Audio` and `Video` components with advanced features.
-   **`GraphicsNodeEditor`**: Relies heavily on browser DOM APIs for measurements and events.

When using these components in an SSR framework like Next.js, you must ensure they are only rendered on the client.

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

### Checking for `window`

For hooks, you can guard their execution by checking if `window` is defined.

```tsx
import { useLocalStorage } from 'zwheui';
import { useEffect, useState } from 'react';

const MyComponent = () => {
  // Initialize state with a default server-side value
  const [value, setValue] = useState('default');
  
  // The hook will only run on the client, but this can cause hydration mismatches.
  // A better approach is to delay its usage until the client has mounted.
  
  useEffect(() => {
    // This code only runs on the client.
    // Here you could sync with localStorage.
    const storedValue = window.localStorage.getItem('my-key');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);
  
  // ...
};
```

By being mindful of which components are client-side only and using dynamic imports where necessary, you can successfully integrate ZwheUI into your SSR application.
