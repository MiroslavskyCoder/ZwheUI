# Notification Systems

ZwheUI provides two distinct, non-intrusive notification systems: **Toasts** and **Snackbars**. Both require a provider to be placed at the root of your application.

## Toast

Toasts are used for providing feedback on an operation. They appear at the top-right of the screen and are suitable for conveying status information (success, error, warning, info).

### 1. Setup

Wrap your application in `ToastProvider`.

```tsx
import { ToastProvider } from 'zwheui';

<ToastProvider>
  <App />
</ToastProvider>
```

### 2. Usage

Use the `useToast` hook to get the `addToast` function.

```tsx
import { useToast, Button } from 'zwheui';

const MyComponent = () => {
  const { addToast } = useToast();

  const handleSave = () => {
    // ... save logic
    addToast({
      title: 'Profile Updated',
      description: 'Your changes have been saved successfully.',
      variant: 'success',
      duration: 3000 // optional
    });
  };

  return <Button onClick={handleSave}>Save</Button>;
};
```

---

## Snackbar

Snackbars appear at the bottom-center of the screen and provide brief messages about app processes. They can optionally include an action button.

### 1. Setup

Wrap your application in `SnackbarProvider`.

```tsx
import { SnackbarProvider } from 'zwheui';

<SnackbarProvider>
  <App />
</SnackbarProvider>
```

### 2. Usage

Use the `useSnackbar` hook to get the `addSnackbar` function.

```tsx
import { useSnackbar, Button } from 'zwheui';

const MyComponent = () => {
  const { addSnackbar } = useSnackbar();

  const handleDelete = () => {
    // ... delete logic
    addSnackbar({
      message: 'Item has been deleted.',
      action: {
        label: 'Undo',
        onClick: () => { /* ... undo logic ... */ }
      }
    });
  };

  return <Button onClick={handleDelete}>Delete Item</Button>;
};
```
