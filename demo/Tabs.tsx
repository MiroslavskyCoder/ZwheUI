import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Sofa, Text, Stack, Input, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Tabs

A component for organizing and navigating between different views of content.

## Components

*   **Tabs**: The main wrapper that manages the active tab state.
*   **TabList**: The container for the tab buttons.
*   **Tab**: A single, clickable tab button.
*   **TabPanels**: The container for all tab content panels.
*   **TabPanel**: The content for a single tab, which is only visible when its corresponding \`Tab\` is active.

## Props

### Tabs
*   \`defaultValue\` (string, required): The \`value\` of the \`Tab\` that should be active by default.
*   \`children\` (React.ReactNode): Should contain a \`TabList\` and \`TabPanels\`.

### Tab & TabPanel
*   \`value\` (string, required): A unique identifier that links a \`Tab\` to its \`TabPanel\`.

## Usage

\`\`\`tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './src/components';

<Tabs defaultValue="account">
    <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="account">
            <p>Account settings content goes here.</p>
        </TabPanel>
        <TabPanel value="password">
            <p>Password settings content goes here.</p>
        </TabPanel>
    </TabPanels>
</Tabs>
\`\`\``;

const sourceCode = `import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

// --- Context Setup ---
interface TabsContextType {
    activeTab: string;
    setActiveTab: (value: string) => void;
    baseId: string;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tab components must be used within a <Tabs> component.');
    }
    return context;
};


// --- Main Tabs Wrapper ---
export const Tabs: React.FC<{ defaultValue: string; children: React.ReactNode; className?: string }> = ({ defaultValue, children, className }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);
    const baseId = useRef(\`tabs-\${Math.random().toString(36).substring(2, 9)}\`).current;
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
};


// --- TabList: Container for the tab buttons ---
export const TabList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('tabs-list');
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        tabRefs.current = tabRefs.current.slice(0, React.Children.count(children));
    }, [children]);

    const containerClass = createStyle({
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        borderRadius: '8px',
        padding: '4px',
        display: 'inline-flex',
        gap: '4px',
        border: \`1px solid \${theme.colors.border}\`,
        marginBottom: theme.spacing.lg,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });
    
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const focusedIndex = tabRefs.current.findIndex(tab => tab === document.activeElement);
            if (focusedIndex === -1) return;

            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (focusedIndex + direction + tabRefs.current.length) % tabRefs.current.length;
            
            tabRefs.current[nextIndex]?.focus();
        }
    };

    return (
        <div role="tablist" aria-orientation="horizontal" className={\`\${containerClass} \${className}\`} onKeyDown={handleKeyDown}>
            {React.Children.map(children, (child, index) => 
                React.isValidElement(child) 
                ? React.cloneElement(child as React.ReactElement<any>, { ref: (el: HTMLButtonElement) => tabRefs.current[index] = el }) 
                : child
            )}
        </div>
    );
};


// --- Tab: A single tab button ---
export const Tab = React.forwardRef<HTMLButtonElement, { value: string; children: React.ReactNode; className?: string }>(({ value, children, className }, ref) => {
    const { activeTab, setActiveTab, baseId } = useTabs();
    const { theme } = useTheme();
    const createStyle = useStyles('tab');
    const isActive = activeTab === value;
    
    const tabClass = createStyle({
        padding: '6px 16px',
        borderRadius: '6px',
        background: 'none',
        border: 'none',
        color: theme.colors.textSecondary,
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'color 0.3s, background-color 0.3s',
        '&[data-active="true"]': {
            color: theme.colors.text,
            backgroundColor: theme.colors.backgroundSecondary,
        },
        '&:hover:not([data-active="true"])': {
            color: theme.colors.text,
        },
        '&:focus-visible': {
             outline: \`2px solid \${theme.colors.primary}\`,
             outlineOffset: '2px',
        }
    });

    return (
        <button
            ref={ref}
            id={\`\${baseId}-tab-\${value}\`}
            onClick={() => setActiveTab(value)}
            className={\`\${tabClass} \${className}\`}
            role="tab"
            aria-selected={isActive}
            aria-controls={\`\${baseId}-panel-\${value}\`}
            data-active={isActive}
            tabIndex={isActive ? 0 : -1}
        >
            {children}
        </button>
    );
});


// --- TabPanels: Wrapper for the content panels ---
export const TabPanels: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};


// --- TabPanel: A single content panel, conditionally rendered ---
export const TabPanel: React.FC<{ value: string; children: React.ReactNode; className?: string }> = ({ value, children, className }) => {
    const { activeTab, baseId } = useTabs();
    return activeTab === value ? (
        <div 
            id={\`\${baseId}-panel-\${value}\`}
            role="tabpanel" 
            aria-labelledby={\`\${baseId}-tab-\${value}\`}
            className={className}
        >
            {children}
        </div>
    ) : null;
};`;

export const TabsDemo = () => {
    const [defaultValue, setDefaultValue] = useState('account');

    return (
        <DemoSection
            title="Tabs"
            description="A component for organizing content into switchable views."
            livePreview={
                <Tabs defaultValue={defaultValue} key={defaultValue}>
                    <TabList>
                        <Tab value="account">Account</Tab>
                        <Tab value="password">Password</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="account">
                            <Stack gap="1rem" style={{ padding: '1rem 0' }}>
                                <Text weight="600">Account Settings</Text>
                                <Text size="14px">Make changes to your account here. Click save when you're done.</Text>
                                <Input label="Name" defaultValue="Zwhe UI" />
                            </Stack>
                        </TabPanel>
                        <TabPanel value="password">
                             <Stack gap="1rem" style={{ padding: '1rem 0' }}>
                                <Text weight="600">Password Settings</Text>
                                <Text size="14px">Change your password here. After saving, you'll be logged out.</Text>
                                <Input label="Current Password" type="password" />
                                <Input label="New Password" type="password" />
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            }
            propControls={
                <Stack gap="1rem">
                    <Text as="label" size="sm" weight="medium" color="textSecondary">DefaultValue Prop</Text>
                    <Text size="sm">This control remounts the component with a new default value.</Text>
                     <SegmentedControl value={defaultValue} onChange={setDefaultValue} options={[
                        { label: 'Account', value: 'account' }, { label: 'Password', value: 'password' }
                    ]}/>
                </Stack>
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};