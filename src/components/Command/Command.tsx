
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Dialog } from '../Dialog/Dialog';
import { Stack } from '../Stack/Stack';
import { Search } from '../Search/Search';
import { Text } from '../Text/Text';
import { Kbd } from '../Kbd/Kbd';
import { useStyles, useTheme } from '../../core';

interface CommandContextType {
    search: string;
    setSearch: (search: string) => void;
    onSelect: () => void;
}
const CommandContext = createContext<CommandContextType | null>(null);

// Main Dialog Wrapper
export const CommandDialog: React.FC<{
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}> = ({ children, isOpen, onClose }) => {
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                onClose();
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, [onClose]);

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <CommandContext.Provider value={{ search, setSearch, onSelect: onClose }}>
                <Stack>{children}</Stack>
            </CommandContext.Provider>
        </Dialog>
    );
};
CommandDialog.displayName = "Command.Dialog";


// Search Input
export const CommandInput: React.FC = () => {
    const context = useContext(CommandContext);
    if (!context) throw new Error('CommandInput must be used within CommandDialog');
    return (
        <Search
            placeholder="Type a command or search..."
            value={context.search}
            onChange={(e) => context.setSearch(e.target.value)}
        />
    );
};
CommandInput.displayName = "Command.Input";

// List Wrapper
export const CommandList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Stack style={{ maxHeight: '300px', overflowY: 'auto', marginTop: '0.5rem' }}>
            {children}
        </Stack>
    );
};
CommandList.displayName = "Command.List";

// Empty State
export const CommandEmpty: React.FC = () => {
    const context = useContext(CommandContext);
    const { theme } = useTheme();
    if (!context?.search) return null; // Only show if there is a search query
    return (
        <Text size="sm" color={theme.colors.textSecondary} style={{ padding: '1rem', textAlign: 'center' }}>
            No results found.
        </Text>
    );
};
CommandEmpty.displayName = "Command.Empty";

// Group
export const CommandGroup: React.FC<{ heading: string, children: React.ReactNode }> = ({ heading, children }) => {
    const { theme } = useTheme();
    return (
        <div style={{ marginTop: '0.5rem' }}>
            <Text size="xs" weight="600" color={theme.colors.textSecondary} style={{ padding: '0.5rem' }}>
                {heading}
            </Text>
            <Stack>{children}</Stack>
        </div>
    );
};
CommandGroup.displayName = "Command.Group";

// Item
export const CommandItem: React.FC<{ onSelect: () => void; children: React.ReactNode; shortcut?: string }> = ({ children, onSelect, shortcut }) => {
    const context = useContext(CommandContext);
    const createStyle = useStyles('command-item');

    const itemClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }
    });

    const handleSelect = () => {
        onSelect();
        context?.onSelect();
    };

    return (
        <div className={itemClass} onClick={handleSelect}>
            <Stack direction="row" align="center" gap="0.75rem">{children}</Stack>
            {shortcut && <Kbd>{shortcut}</Kbd>}
        </div>
    );
};
CommandItem.displayName = "Command.Item";


interface CompoundCommand {
    Dialog: typeof CommandDialog;
    Input: typeof CommandInput;
    List: typeof CommandList;
    Empty: typeof CommandEmpty;
    Group: typeof CommandGroup;
    Item: typeof CommandItem;
}

export const Command: Partial<CompoundCommand> = {};
Command.Dialog = CommandDialog;
Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Item = CommandItem;
