

import React, { createContext, useContext, useState } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

// --- Context Setup ---
interface TabsContextType {
    activeTab: string;
    setActiveTab: (value: string) => void;
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
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
};


// --- TabList: Container for the tab buttons ---
export const TabList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('tabs-list');
    const containerClass = createStyle({
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        borderRadius: '8px',
        padding: '4px',
        display: 'inline-flex',
        gap: '4px',
        border: `1px solid ${theme.colors.border}`,
        marginBottom: theme.spacing.lg,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    return <div className={`${containerClass} ${className}`}>{children}</div>;
};


// --- Tab: A single tab button ---
export const Tab: React.FC<{ value: string; children: React.ReactNode; className?: string }> = ({ value, children, className }) => {
    const { activeTab, setActiveTab } = useTabs();
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
        }
    });

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`${tabClass} ${className}`}
            role="tab"
            aria-selected={isActive}
            data-active={isActive}
        >
            {children}
        </button>
    );
};


// --- TabPanels: Wrapper for the content panels ---
export const TabPanels: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};


// --- TabPanel: A single content panel, conditionally rendered ---
export const TabPanel: React.FC<{ value: string; children: React.ReactNode; className?: string }> = ({ value, children, className }) => {
    const { activeTab } = useTabs();
    return activeTab === value ? <div className={className}>{children}</div> : null;
};