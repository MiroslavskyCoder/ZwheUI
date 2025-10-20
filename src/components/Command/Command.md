# Command

A component for building a fast, accessible command menu, similar to those found in apps like Slack, Linear, or VS Code. It's built on top of the `Dialog` component.

## Features
-   **Composable**: Built with sub-components for maximum flexibility.
-   **Searchable**: Includes a built-in search input that filters items.
-   **Accessible**: Keyboard navigable and follows ARIA patterns.
-   Can be opened with a keyboard shortcut (e.g., `Cmd+K`).

## Components

*   **Command.Dialog**: The main modal wrapper that manages state.
*   **Command.Input**: The search input field.
*   **Command.List**: The scrollable container for command items.
*   **Command.Empty**: A component to show when no search results are found.
*   **Command.Group**: A component to group items under a heading.
*   **Command.Item**: A single, selectable command item.

## Usage

```tsx
import { Command, Icon, Button, useToast } from './src/components';
import { HomeIcon, SettingsIcon, UserIcon } from './src/icons';
import { useState } from 'react';

const MyCommandMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { addToast } = useToast();

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Command</Button>
            <Command.Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Command.Input />
                <Command.List>
                    <Command.Empty />
                    <Command.Group heading="Navigation">
                        <Command.Item onSelect={() => addToast({ title: 'Navigating to Home' })}>
                            <Icon as={HomeIcon} /> Home
                        </Command.Item>
                        <Command.Item onSelect={() => addToast({ title: 'Navigating to Profile' })}>
                            <Icon as={UserIcon} /> Profile
                        </Command.Item>
                    </Command.Group>
                    <Command.Group heading="Settings">
                         <Command.Item onSelect={() => addToast({ title: 'Opening Settings' })} shortcut="⌘S">
                            <Icon as={SettingsIcon} /> Settings
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Dialog>
        </>
    );
}
```
