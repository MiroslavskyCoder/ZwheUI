import React from 'react';
import { useToast, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';

const ToastConfigurator: React.FC = () => {
    const { addToast } = useToast();
    return (
        <Stack gap="1rem">
            <Text>Use the buttons below to trigger toasts with different variants. They will appear at the top-right of the screen.</Text>
            <Stack direction="row" gap="1rem" wrap={true}>
                <Button onClick={() => addToast({ title: 'Event has been created.', description: 'Anyone with the link can now view it.' })}>
                    Show Info
                </Button>
                 <Button onClick={() => addToast({ title: 'Success!', description: 'Your profile was updated.', variant: 'success' })}>
                    Show Success
                </Button>
                 <Button onClick={() => addToast({ title: 'Warning', description: 'Please check your connection.', variant: 'warning' })}>
                    Show Warning
                </Button>
                 <Button onClick={() => addToast({ title: 'Error', description: 'Failed to save changes.', variant: 'error' })}>
                    Show Error
                </Button>
            </Stack>
        </Stack>
    );
};

const documentation = `# Toast Notification System

A system for dispatching ephemeral, non-intrusive notifications that appear at the corner of the screen.

## Components & Hooks

*   **ToastProvider**: A context provider that manages the state and rendering of all toasts. It should wrap your entire application.
*   **useToast**: A hook that provides access to the \`addToast\` function.

## Usage

1.  **Wrap your app in \`ToastProvider\`:**
    \`\`\`tsx
    import { ToastProvider } from './src/components';
    const App = () => (
        <ToastProvider>
            {/* ... Your app ... */}
        </ToastProvider>
    );
    \`\`\`

2.  **Use the \`useToast\` hook:**
    \`\`\`tsx
    import { useToast, Button } from './src/components';
    const MyComponent = () => {
        const { addToast } = useToast();
        return <Button onClick={() => addToast({ title: 'Hello!' })}>Show</Button>;
    };
    \`\`\``;

const sourceCode = `/* This file shows the Toast component. The provider and hook are also part of the system. */
import React, { useEffect } from 'react';
import { ToastData } from './useToast';

interface ToastProps {
    toast: ToastData;
    onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
    /* ... internal logic for animations and dismissal ... */

    return (
        <div role="alert" aria-live="assertive">
            <div>
                <IconComponent />
            </div>
            <div>
                <Text weight="600">{toast.title}</Text>
                {toast.description && <Text size="14px">{toast.description}</Text>}
            </div>
        </div>
    );
};`;

export const ToastDemo = () => {
    return (
        <DemoSection
            title="Toast"
            description="A system for dispatching ephemeral, non-intrusive notifications."
            livePreview={
                <Text color="textSecondary">Use the 'Props' tab to trigger toasts.</Text>
            }
            propControls={<ToastConfigurator />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};