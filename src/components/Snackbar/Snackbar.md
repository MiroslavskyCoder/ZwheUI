
# Snackbar Notification System

A system for dispatching brief, temporary notifications that appear at the bottom of the screen. Snackbars can also include an optional action.

## Components & Hooks

*   **SnackbarProvider**: A context provider that manages the state and rendering of all snackbars. It should wrap your entire application or a top-level layout component.
*   **useSnackbar**: A hook that provides access to the `addSnackbar` function. This function can be called from any component within the `SnackbarProvider` to trigger a new notification.

## Usage

1.  **Wrap your app in `SnackbarProvider`:**

    ```tsx
    // In your main App.tsx or equivalent
    import { SnackbarProvider, ThemeProvider } from './src/components';

    const App = () => (
        <ThemeProvider>
            <SnackbarProvider>
                {/* ... The rest of your application ... */}
            </SnackbarProvider>
        </ThemeProvider>
    );
    ```

2.  **Use the `useSnackbar` hook to trigger notifications:**

    ```tsx
    import { useSnackbar, Button } from './src/components';

    const MyComponent = () => {
        const { addSnackbar } = useSnackbar();

        const showSnackbar = () => {
            addSnackbar({
                message: 'An action was performed.',
                action: {
                    label: 'Undo',
                    onClick: () => console.log('Undo!')
                },
                duration: 5000 // optional, defaults to 5000ms
            });
        };

        return <Button onClick={showSnackbar}>Perform Action</Button>;
    };
    ```

## `addSnackbar` Options

The `addSnackbar` function accepts an object with the following properties:

*   `message` (string, required): The text message to display.
*   `action` (object, optional): An action button to display. The object should have:
    * `label` (string, required): The text for the button.
    * `onClick` (function, required): The callback to execute when the button is clicked.
*   `duration` (number, optional, default: 5000): The time in milliseconds before the snackbar automatically dismisses.
