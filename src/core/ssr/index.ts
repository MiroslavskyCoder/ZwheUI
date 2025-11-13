/**
 * ZwheUI Server-Side Rendering (SSR) Utilities.
 *
 * These utilities are for use in server environments like Next.js to ensure
 * that styles are correctly rendered on the server and sent to the client,
 * preventing a "flash of unstyled content" (FOUC).
 */
import { getSsrStyles, clearSsrStyles } from '../css/createClassFlow';

/**
 * Retrieves all unique CSS rules generated during a server-side render pass.
 *
 * In a Next.js Pages Router application, you would use this inside `pages/_document.js`
 * within `getInitialProps` to collect the styles after the page has been rendered.
 *
 * @returns {string} A string containing all the CSS rules to be injected into a `<style>` tag.
 * @example
 * ```js
 * // pages/_document.js
 * import Document from 'next/document';
 * import { getSsrStyles } from 'zwheui'; 
 *
 * class MyDocument extends Document {
 *   static async getInitialProps(ctx) {
 *     const initialProps = await Document.getInitialProps(ctx);
 *     const styles = getSsrStyles();
 *     return {
 *       ...initialProps,
 *       styles: (
 *         <>
 *           {initialProps.styles}
 *           <style
 *              id="zwheui-ssr-styles"
 *              dangerouslySetInnerHTML={{ __html: styles }}
 *           />
 *         </>
 *       ),
 *     };
 *   }
 * }
 * ```
 */
export { getSsrStyles };

/**
 * Clears the server-side style registry.
 *
 * This function should be called before each server-side render pass to ensure
 * that styles from a previous request do not leak into the current one. In a Next.js
 * Pages Router app, this is typically handled at the start of `_document.js`'s `getInitialProps`.
 *
 * @example
 * ```js
 * // pages/_document.js
 * import { clearSsrStyles } from 'zwheui';
 *
 * // ... inside MyDocument.getInitialProps
 * clearSsrStyles(); // Clear styles before rendering
 * const originalRenderPage = ctx.renderPage;
 * // ...
 * ```
 */
export { clearSsrStyles };

// Export client-side SSR helper
export * from './DynamicImportComponents';

// Export the barrel file for all dynamic component imports
export * as DynamicImportsAllComponents from './DynamicImportsAllComponents';
