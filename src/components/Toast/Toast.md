# Toast Notification System

A system for dispatching ephemeral, non-intrusive notifications that appear at the corner of the screen.

## Components & Hooks

*   **ToastProvider**: A context provider that manages the state and rendering of all toasts. It should wrap your entire application or a top-level layout component.
*   **useToast**: A hook that provides access to the `addToast` function. This function can be called from any component within the `ToastProvider` to trigger a new notification.

## Usage

1.  **Wrap your app in `ToastProvider`:**

    ```tsx
    // In your main App.tsx or equivalent
    import { ToastProvider, ThemeProvider } from './src/components';

    const App = () => (
        <ThemeProvider>
            <ToastProvider>
                {/* ... The rest of your application ... */}
            </ToastProvider>
        </ThemeProvider>
    );
    ```

2.  **Use the `useToast` hook to trigger notifications:**

    ```tsx
    import { useToast, Button } from './src/components';

    const MyComponent = () => {
        const { addToast } = useToast();

        const showSuccessToast = () => {
            addToast({
                title: 'Success!',
                description: 'Your profile was updated successfully.',
                variant: 'success',
                duration: 5000 // optional, defaults to 5000ms
            });
        };

        return <Button onClick={showSuccessToast}>Save Profile</Button>;
    };
    ```

## `addToast` Options

The `addToast` function accepts an object with the following properties:

*   `title` (string, required): The main title of the toast.
*   `description` (string, optional): Additional descriptive text.
*   `variant` (enum: 'info' | 'success' | 'warning' | 'error', optional, default: 'info'): The style and icon of the toast.
*   `duration` (number, optional, default: 5000): The time in milliseconds before the toast automatically dismisses.
