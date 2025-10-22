# SSR and Node.js Environments

ZwheUI is designed to be compatible with both client-side applications and server-side rendering (SSR) environments. As of version 8, the packages have been updated to use the Node.js `exports` field in `package.json`, which improves compatibility with modern tooling and native Node.js ESM.

## General Recommendations

For most modern frameworks like Next.js or Vite, ZwheUI should work out of the box. We recommend trying to run your application without any special configuration first. If you encounter errors related to module resolution, this guide can help.

## Node.js ESM and `ERR_UNSUPPORTED_DIR_IMPORT`

If you are using ZwheUI in a native Node.js ESM environment (e.g., by setting `"type": "module"` in your `package.json`), you might encounter an error like:

`Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '.../node_modules/zwheui/dist' is not supported resolving ES modules.`

This error occurs because older versions of libraries (including ZwheUI v6 and v5) did not properly define their ES module entry points for native Node.js resolution.

### Resolution

**1. Upgrade to ZwheUI v7+:**
The best solution is to ensure you are using ZwheUI v7 or later. These versions have been updated with the `exports` field to correctly resolve module paths in both CommonJS and ESM environments.

**2. For Older Versions (v5, v6):**
If you must use an older version, you may need to adjust your import paths to point directly to the file. This is less ideal as it makes your code brittle to changes in the library's internal structure.

```javascript
// Instead of this (which might fail in Node ESM):
import { Button } from 'zwheui';

// You might need to do this for older versions:
import { Button } from 'zwheui/dist/index.esm.js'; 
// OR
import { Button } from 'zwheui/dist/components/Button'; // If subpath exports are not defined
```

However, the strong recommendation is to upgrade to the latest version of ZwheUI for the best compatibility.

## Server-Side Rendering (SSR) Considerations

While components will render on the server, ZwheUI's styling engine (`useStyles`) injects styles on the client side. This means that during the initial server render, the HTML will be unstyled, and styles will "pop in" when the client-side JavaScript hydrates the application.

For a seamless SSR experience, a mechanism to extract CSS on the server and include it in the initial HTML response is required. While ZwheUI's architecture is compatible with this approach, an out-of-the-box extraction utility is not yet provided.

See the [Server-Side Rendering](./ServerSideRendering.md) guide for more details on handling client-only components with dynamic imports.
