import React, { useState, useEffect } from 'react';

interface DynamicImportComponentsProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * A utility component to ensure that its children are only rendered on the client-side.
 * This is useful for wrapping components that rely on browser-specific APIs (like `window` or `document`)
 * and would otherwise cause errors during Server-Side Rendering (SSR).
 *
 * @param {DynamicImportComponentsProps} props
 * @param {React.ReactNode} props.children The component(s) to render only on the client.
 * @param {React.ReactNode} [props.fallback=null] An optional fallback component to render on the server.
 */
export const DynamicImportComponents: React.FC<DynamicImportComponentsProps> = ({ children, fallback = null }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : <>{fallback}</>;
};

export default DynamicImportComponents;
