# Getting Started

Once you have successfully installed the ZwheUI library and configured the necessary styles, the next step is to set up the root of your application. ZwheUI relies on several React Context providers to deliver features like theming and notifications.

## Required Providers

At the root of your application, you should wrap your main component with the following providers:

1.  **`ThemeProvider`**: This is the most critical provider. It supplies the theme (colors, spacing, typography, etc.) to all components and enables dynamic theme switching. All ZwheUI components must be rendered within a `ThemeProvider`.
2.  **`ToastProvider`**: This provider manages the state and rendering of toast notifications. It's required if you plan to use the `useToast` hook.
3.  **`SnackbarProvider`**: This provider manages the state and rendering of snackbar notifications. It's required if you plan to use the `useSnackbar` hook.

## Example: Root Application Setup

Here is a complete example of how to structure your main application file (e.g., `App.tsx` or `index.tsx`).

```tsx
// In your main App.tsx or index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Import providers and components from ZwheUI
import { 
    ThemeProvider, 
    ToastProvider, 
    SnackbarProvider, 
    Stack,
    Card,
    Text,
    Button, 
    useToast,
    useSnackbar
} from 'zwheui';

// 2. Import the required stylesheet
import 'zwheui/dist/styles.css';

// Your main application component
const App = () => {
  // 3. Use hooks provided by the context providers
  const { addToast } = useToast();
  const { addSnackbar } = useSnackbar();

  const handleShowToast = () => {
    addToast({ 
        title: 'Success!', 
        description: 'Your action was completed successfully.',
        variant: 'success'
    });
  };

  const handleShowSnackbar = () => {
    addSnackbar({
        message: 'An item was deleted.',
        action: {
            label: 'Undo',
            onClick: () => addToast({ title: 'Action Undone' })
        }
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
        <Card style={{ maxWidth: '500px' }}>
            <Card.Body>
                <Stack gap="1.5rem">
                    <Stack gap="0.5rem">
                        <Text as="h1" size="1.5rem" weight="600">Welcome to ZwheUI</Text>
                        <Text color="textSecondary">
                            This application is wrapped in all the necessary providers.
                        </Text>
                    </Stack>
                    <Stack direction="row" gap="1rem">
                        <Button variant="primary" onClick={handleShowToast}>
                            Show Toast
                        </Button>
                        <Button variant="secondary" onClick={handleShowSnackbar}>
                            Show Snackbar
                        </Button>
                    </Stack>
                </Stack>
            </Card.Body>
        </Card>
    </div>
  );
};

// 4. Render your application, wrapped in the providers
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ThemeProvider>
          <ToastProvider>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </ToastProvider>
        </ThemeProvider>
      </React.StrictMode>
    );
}

```

### What's Happening in This Example?

1.  **Imports**: We import all necessary providers, hooks, and components from the `zwheui` library.
2.  **CSS**: We import the library's stylesheet to ensure all components are styled correctly.
3.  **Using Hooks**: Inside the `App` component, `useToast` and `useSnackbar` are called. This is only possible because `App` is a descendant of `ToastProvider` and `SnackbarProvider`.
4.  **Provider Hierarchy**: The entire `App` is wrapped. The order of `ToastProvider` and `SnackbarProvider` doesn't matter, but both must be inside `ThemeProvider`.

With this setup, you are now ready to start building your application's UI by importing and composing any of the components from the ZwheUI library.
