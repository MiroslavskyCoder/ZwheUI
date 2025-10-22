import React, { useState } from 'react';
import { Text, Stack, Command, Button, Icon, useToast } from '../src/components';
import { HomeIcon, SettingsIcon, UserIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const documentation = `# Command

A component for building a fast, accessible command menu.

## Components
*   **Command.Dialog**: The main modal wrapper.
*   **Command.Input**: The search input.
*   **Command.List**: The scrollable list container.
*   **Command.Empty**: Displayed when no search results are found.
*   **Command.Group**: Groups items under a heading.
*   **Command.Item**: A single selectable item.
`;

const sourceCode = `import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
// ... more imports

// Main Dialog Wrapper
export const CommandDialog: React.FC<{...}> = ({ children, isOpen, onClose }) => { /* ... */ };

// Sub-components
export const CommandInput: React.FC = () => { /* ... */ };
export const CommandList: React.FC<{ children: React.ReactNode }> = ({ children }) => { /* ... */ };
export const CommandEmpty: React.FC = () => { /* ... */ };
export const CommandGroup: React.FC<{ heading: string, children: React.ReactNode }> = ({ heading, children }) => { /* ... */ };
export const CommandItem: React.FC<{ onSelect: () => void; children: React.ReactNode; shortcut?: string }> = ({ children, onSelect, shortcut }) => { /* ... */ };

// Compound component setup
export const Command: Partial<CompoundCommand> = {};
// ...
`;

export const CommandDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { addToast } = useToast();

    // In a real app, you would filter the items based on the search value from context.
    // This demo is simplified to just show the structure.

    return (
        <>
        <DemoSection
            title="Command"
            description="A command menu for quick actions. Open it with the button or by pressing Cmd+K."
            livePreview={
                <Stack align="center">
                    <Button onClick={() => setIsOpen(true)}>Open Command Palette</Button>
                </Stack>
            }
            propControls={<Text color="textSecondary">Use the button in the preview to open the command palette. The component manages its own state.</Text>}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
        <Command.Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Command.Input />
            <Command.List>
                <Command.Empty />
                <Command.Group heading="Suggestions">
                    <Command.Item onSelect={() => addToast({ title: 'Navigating to Home' })}>
                        <Icon as={HomeIcon} /> Home
                    </Command.Item>
                    <Command.Item onSelect={() => addToast({ title: 'Navigating to Profile' })}>
                        <Icon as={UserIcon} /> Profile
                    </Command.Item>
                    <Command.Item onSelect={() => addToast({ title: 'Opening Settings' })}>
                        <Icon as={SettingsIcon} /> Settings
                    </Command.Item>
                </Command.Group>
                <Command.Group heading="Actions">
                    <Command.Item onSelect={() => addToast({ title: 'Copying link...' })} shortcut="⌘C">
                        Copy Link
                    </Command.Item>
                </Command.Group>
            </Command.List>
        </Command.Dialog>
        </>
    );
};