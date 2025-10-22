# Utility Hooks

ZwheUI includes several utility hooks that abstract common patterns for interactions, browser APIs, and performance optimizations. These hooks are used internally by many components but are also exported for you to use in your own application logic.

## Interaction Hooks

### `useClickOutside`

This hook triggers a callback when a click event occurs outside of a specified DOM element. It's essential for closing dropdowns, modals, or popovers when the user clicks away.

-   **`useClickOutside<T>(callback)`**
    -   `T` (generic): The type of the DOM element (e.g., `HTMLDivElement`). Defaults to `HTMLElement`.
    -   `callback` (function): The function to call when an outside click is detected.

**Returns:**
-   A `RefObject` to attach to the DOM element you want to monitor.

#### Usage

```tsx
import { useClickOutside } from 'zwheui';
import { useState, useRef } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // The ref returned by the hook should be attached to the dropdown container.
  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      )}
    </div>
  );
};
```

### `useHover`

A simple hook to track whether the mouse is currently hovering over an element.

**Returns:**
-   `[ref, isHovered]`: A tuple containing the `RefObject` to attach to your element and a boolean `isHovered` state.

#### Usage

```tsx
import { useHover } from 'zwheui';

const HoverableComponent = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      {isHovered ? 'You are hovering over me!' : 'Hover over me.'}
    </div>
  );
};
```

## Browser API Hooks

### `useLocalStorage`

A hook that syncs a React state value with the browser's `localStorage`. It's a convenient way to persist user settings or other data across sessions.

-   **`useLocalStorage<T>(key, initialValue)`**
    -   `key` (string): The key to use in `localStorage`.
    -   `initialValue` (T): The value to use if nothing is found in `localStorage`.

**Returns:**
-   `[storedValue, setValue]`: A state-like tuple. The `setValue` function updates both the React state and `localStorage`.

#### Usage

```tsx
import { useLocalStorage, useTheme } from 'zwheui';

const ThemePreferenceSaver = () => {
  const { mode, switchTheme } = useTheme();
  
  // Persist the theme mode in localStorage.
  const [savedMode, setSavedMode] = useLocalStorage('theme-mode', 'dark');

  // When the global theme changes, update localStorage.
  useEffect(() => {
    setSavedMode(mode);
  }, [mode, setSavedMode]);

  // When the component mounts, apply the saved theme.
  useEffect(() => {
    switchTheme(savedMode);
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This is a logic-only component
};
```

### `useMediaQuery`

A hook to subscribe to a CSS media query and get a boolean state indicating whether it matches.

-   **`useMediaQuery(query)`**
    -   `query` (string): The media query string (e.g., `'(min-width: 768px)'`).

#### Usage

```tsx
import { useMediaQuery } from 'zwheui';

const ResponsiveComponent = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div>
      {isDesktop ? 'Showing desktop view' : 'Showing mobile view'}
    </div>
  );
};
```

## Performance Hooks

### `useDebounce`

This hook debounces a value, meaning it only updates its returned value after a specified delay has passed without the source value changing. This is extremely useful for performance-intensive operations that shouldn't run on every keystroke, like API calls from a search input.

-   **`useDebounce<T>(value, delay)`**
    -   `value` (T): The source value to debounce (e.g., from a state).
    -   `delay` (number): The debounce delay in milliseconds.

#### Usage

```tsx
import { useDebounce, Search } from 'zwheui';
import { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // The debouncedSearchTerm will only update 500ms after the user stops typing.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // This effect runs only when debouncedSearchTerm changes,
    // preventing an API call on every keystroke.
    if (debouncedSearchTerm) {
      console.log(`Searching for: ${debouncedSearchTerm}`);
      // fetch(`/api/search?q=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  return (
    <Search 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};
```
