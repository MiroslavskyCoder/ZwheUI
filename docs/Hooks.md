# Utility Hooks

ZwheUI includes several utility hooks that abstract common patterns for timers, state management, browser APIs, and component lifecycles. These hooks are used internally by many components but are also exported for you to use in your own application logic.

---

### `useToggle`
A simple hook for managing boolean state.

- **`useToggle(initialState)`**: `initialState` defaults to `false`.
- **Returns**: `[boolean, () => void]` - A tuple with the current state and a function to toggle it.

**Usage:**
```tsx
const [isOn, toggle] = useToggle(false);
return <Button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</Button>;
```

---

### `useTimeout`
A declarative, lifecycle-aware `setTimeout`.

- **`useTimeout(callback, delay)`**: The timeout is cleared automatically on unmount. If `delay` is `null`, the timeout is paused.

**Usage:**
```tsx
const [visible, setVisible] = useState(true);
// The message will hide after 3 seconds.
useTimeout(() => setVisible(false), 3000);
return visible ? <p>I will disappear soon!</p> : null;
```

---

### `useInterval`
A declarative, lifecycle-aware `setInterval`.

- **`useInterval(callback, delay)`**: The interval is cleared on unmount. If `delay` is `null`, it's paused.

**Usage:**
```tsx
const [count, setCount] = useState(0);
// The count will increment every second.
useInterval(() => setCount(c => c + 1), 1000);
return <p>Timer: {count}</p>;
```

---

### `useUpdateEffect`
A `useEffect` that runs only on updates, skipping the initial render.

- **`useUpdateEffect(effect, deps)`**: API is identical to `useEffect`.

**Usage:**
```tsx
// This toast will only appear when `count` changes, not on the initial render.
useUpdateEffect(() => {
  addToast({ title: `Count changed to ${count}` });
}, [count]);
```

---

### `useCopyToClipboard`
Provides a function to copy text to the clipboard.

- **Returns**: `[copiedText, (text: string) => Promise<boolean>]` - A tuple with the last successfully copied text and the copy function.

**Usage:**
```tsx
const [copiedText, copy] = useCopyToClipboard();
const handleCopy = () => copy('Hello from clipboard!');
return <Button onClick={handleCopy}>Copy Text</Button>;
```

---

### `useEventListener`
Declaratively attaches an event listener to `window`, `document`, or a specific element.

- **`useEventListener(eventName, handler, element)`**: `element` defaults to `window`.

**Usage:**
```tsx
const [key, setKey] = useState('');
useEventListener('keydown', (e: KeyboardEvent) => {
  setKey(e.key);
});
return <p>Last key pressed: {key}</p>;
```

---

### `useWindowSize`
Tracks the width and height of the browser window.

- **Returns**: `{ width: number, height: number }`

**Usage:**
```tsx
const { width, height } = useWindowSize();
return <p>Window: {width}x{height}</p>;
```

---

### `useGeolocation`
Tracks the user's geographical position.

- **Returns**: A state object with `loading`, `latitude`, `longitude`, `error`, etc.
- **Note**: Requires the `geolocation` permission in `metadata.json`.

**Usage:**
```tsx
const { loading, latitude, longitude, error } = useGeolocation();
if (loading) return <p>Loading location...</p>;
if (error) return <p>Error: {error}</p>;
return <p>Lat: {latitude}, Lon: {longitude}</p>;
```

---

### `useOnlineStatus`
Tracks the browser's online/offline status.

- **Returns**: `boolean`

**Usage:**
```tsx
const isOnline = useOnlineStatus();
return <p>Network status: {isOnline ? 'Online' : 'Offline'}</p>;
```

---

### `useDocumentTitle`
Sets the document's title (`<title>` tag).

- **`useDocumentTitle(title)`**

**Usage:**
```tsx
useDocumentTitle('My Awesome Page');
```

---

### `useFavicon`
Sets the page's favicon.

- **`useFavicon(href)`**

**Usage:**
```tsx
useFavicon('https://my-site.com/favicon.ico');
```

---

### `useScript`
Dynamically loads an external script and tracks its status.

- **`useScript(src)`**
- **Returns**: A status string: `'idle' | 'loading' | 'ready' | 'error'`.

**Usage:**
```tsx
const status = useScript('https://maps.googleapis.com/maps/api/js');
return <p>Google Maps script status: {status}</p>;
```

---

### `useIsomorphicLayoutEffect`
A hook that uses `useLayoutEffect` on the client and `useEffect` on the server to prevent SSR warnings. Useful for library authors.

**Usage:**
```tsx
useIsomorphicLayoutEffect(() => {
  // This will run synchronously on the client but as a normal effect on the server.
}, []);
```
