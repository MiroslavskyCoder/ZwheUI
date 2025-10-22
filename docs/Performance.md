# Performance Optimization

ZwheUI is designed with performance in mind. Its custom styling solution avoids the overhead of runtime-heavy CSS-in-JS libraries, and its components are built to be efficient. However, as with any React application, there are best practices you can follow to ensure your app remains fast and responsive.

## 1. Code Splitting and Lazy Loading

Your application's initial load time is critical. Instead of bundling all components into a single JavaScript file, you should code-split your application. This means only loading the code necessary for the initial page view.

**React.lazy** and **Suspense** are the primary tools for this in React. You can use them to lazy-load components that are not immediately visible, such as those in other routes or inside modals.

### Route-Based Code Splitting

If you're using a router like React Router, you can lazy-load entire page components.

```tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from 'zwheui';

// Lazy-load page components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
```

### Component-Based Code Splitting

You can also lazy-load large or rarely used components, like a complex `DataTable` or `GraphicsNodeEditor`.

```tsx
import React, { Suspense, useState } from 'react';
import { Button, Modal } from 'zwheui';

const HeavyDataTable = React.lazy(() => import('./HeavyDataTable'));

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Open Data</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Suspense fallback={<p>Loading data table...</p>}>
          {isModalOpen && <HeavyDataTable />}
        </Suspense>
      </Modal>
    </div>
  );
};
```

## 2. Memoization

React's memoization features (`React.memo`, `useMemo`, `useCallback`) can prevent unnecessary re-renders of components, which is a common source of performance issues.

### `React.memo`

Wrap components in `React.memo` if they render often with the same props. This is especially useful for items in a long list.

```tsx
import React from 'react';
import { ListItem, ListItemText } from 'zwheui';

const MyListItem = React.memo(({ item }) => {
  // This component will only re-render if the 'item' prop changes.
  return (
    <ListItem>
      <ListItemText primary={item.name} />
    </ListItem>
  );
});
```

### `useMemo` and `useCallback`

Use these hooks to memoize expensive calculations and functions. This is particularly important when passing callbacks or derived data to memoized child components.

```tsx
import { useMemo, useCallback } from 'react';
import { DataTable } from 'zwheui';

const MyTable = ({ data }) => {
  // useMemo prevents the 'columns' array from being recreated on every render.
  const columns = useMemo(() => [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
  ], []);

  // useCallback ensures the 'handleRowClick' function has a stable reference.
  const handleRowClick = useCallback((row) => {
    console.log('Row clicked:', row);
  }, []);

  return <DataTable data={data} columns={columns} onRowClick={handleRowClick} />;
};
```

## 3. ZwheUI-Specific Considerations

-   **Styling Engine**: ZwheUI's styling engine (`useStyles`) is designed to be performant. It caches generated CSS rules, so the cost of creating styles is only paid once per component-style combination. You generally do not need to worry about the performance of the styling system itself.
-   **Large Datasets**: When working with components like `DataTable` or `List` with thousands of items, consider implementing **virtualization** (or "windowing"). Libraries like `react-window` or `react-virtualized` can be integrated with ZwheUI components to ensure only the visible items are rendered, drastically improving performance.

By applying these standard React performance patterns, you can build large, complex, and fast applications with the ZwheUI component library.
