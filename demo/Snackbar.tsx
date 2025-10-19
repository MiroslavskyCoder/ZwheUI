
import React from 'react';
import { Text, Stack, Button } from '../src/components';
import { useSnackbar } from '../src/components/Snackbar/useSnackbar';
import { DemoSection } from './DemoSection';

const SnackbarConfigurator: React.FC = () => {
    const { addSnackbar } = useSnackbar();
    return (
        <Stack gap="1rem">
            <Text>Use the buttons below to trigger snackbars with different configurations. They will appear at the bottom of the screen.</Text>
            <Stack direction="row" gap="1rem" wrap={true}>
                <Button onClick={() => addSnackbar({ message: 'This is a simple snackbar.' })}>
                    Show Snackbar
                </Button>
                <Button variant="secondary" onClick={() => {
                    addSnackbar({
                        message: 'An action was performed.',
                        action: {
                            label: 'Undo',
                            onClick: () => alert('Undo action clicked!')
                        }
                    })
                }}>
                    Show with Action
                </Button>
            </Stack>
        </Stack>
    );
};

const documentation = `# Snackbar Notification System

A system for dispatching brief, temporary notifications that appear at the bottom of the screen. Snackbars can also include an optional action.

## Components & Hooks

*   **SnackbarProvider**: A context provider that manages the state and rendering of all snackbars. It should wrap your entire application.
*   **useSnackbar**: A hook that provides access to the \`addSnackbar\` function.

## Usage

1.  **Wrap your app in \`SnackbarProvider\`:**
    \`\`\`tsx
    import { SnackbarProvider } from './src/components';
    const App = () => (
        <SnackbarProvider>
            {/* ... Your app ... */}
        </SnackbarProvider>
    );
    \`\`\`

2.  **Use the \`useSnackbar\` hook:**
    \`\`\`tsx
    import { useSnackbar, Button } from './src/components';
    const MyComponent = () => {
        const { addSnackbar } = useSnackbar();
        return <Button onClick={() => addSnackbar({ message: 'Hello!' })}>Show</Button>;
    };
    \`\`\`

## \`addSnackbar\` Options
*   \`message\` (string, required): The text to display.
*   \`action\` (object, optional): An action button with \`label\` and \`onClick\` properties.
*   \`duration\` (number, optional, default: 5000): Time in milliseconds before auto-dismiss.
`;

const sourceCode = `/* This file shows the Snackbar component. The provider and hook are also part of the system. */
import React, { useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';
import { SnackbarData } from './useSnackbar';
import { Text } from '../Text/Text';
import { Button } from '../Button';

interface SnackbarProps {
    snackbar: SnackbarData;
    onDismiss: (id: string) => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({ snackbar, onDismiss }) => {
    /* ... internal logic for animations and dismissal ... */

    const containerClass = createStyle({ /* ... styles ... */ });

    return (
        <div 
            className={containerClass} 
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'opacity 0.2s, transform 0.2s',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
            role="alert"
        >
            <Text size="14px" color="inherit">{snackbar.message}</Text>
            {snackbar.action && (
                <Button onClick={handleActionClick}>
                    {snackbar.action.label}
                </Button>
            )}
        </div>
    );
};`;

export const SnackbarDemo = () => (
    <DemoSection
        title="Snackbar"
        description="A component for brief, temporary notifications displayed at the bottom of the screen."
        livePreview={
            <Text color="textSecondary">Use the 'Props' tab to trigger snackbars.</Text>
        }
        propControls={<SnackbarConfigurator />}
        documentation={documentation}
        fullSourceCode={sourceCode}
    />
);