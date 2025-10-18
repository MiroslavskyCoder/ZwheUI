# Tabs

A component for organizing and navigating between different views of content.

## Components

*   **Tabs**: The main wrapper that manages the active tab state.
*   **TabList**: The container for the tab buttons.
*   **Tab**: A single, clickable tab button.
*   **TabPanels**: The container for all tab content panels.
*   **TabPanel**: The content for a single tab, which is only visible when its corresponding `Tab` is active.

## Props

### Tabs
*   `defaultValue` (string, required): The `value` of the `Tab` that should be active by default.
*   `children` (React.ReactNode): Should contain a `TabList` and `TabPanels`.

### Tab & TabPanel
*   `value` (string, required): A unique identifier that links a `Tab` to its `TabPanel`.

## Usage

```tsx
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
```
