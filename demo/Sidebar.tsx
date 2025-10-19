import React, { useState } from 'react';
import { Sidebar, SidebarNav, SidebarNavItem, Text, Stack, Input } from '../src/components';
import { HomeIcon, SettingsIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const SidebarConfigurator: React.FC<{
    width: string;
    setWidth: (w: string) => void;
}> = ({ width, setWidth }) => (
    <Input label="Width Prop" value={width} onChange={e => setWidth(e.target.value)} />
);

const documentation = `# Sidebar

A set of components for creating a vertical navigation sidebar, commonly used for main application navigation.

## Components

*   **Sidebar**: The main container for the sidebar content.
*   **SidebarNav**: A wrapper for a navigation section, which can include a title.
*   **SidebarNavItem**: A single, clickable navigation link, with support for an icon and an active state.

## Props

### Sidebar
*   \`width\` (string, optional, default: '250px'): The width of the sidebar.
*   \`children\` (React.ReactNode): The content of the sidebar.

### SidebarNav
*   \`title\` (string, optional): A title for the navigation section.
*   \`children\` (React.ReactNode): A collection of \`SidebarNavItem\` components.

### SidebarNavItem
*   \`icon\` (React.ReactNode, optional): An icon to display next to the text.
*   \`isActive\` (boolean, optional): If true, applies an active style to the item.
*   All other props are passed to the underlying \`<a>\` tag (e.g., \`href\`, \`onClick\`).

## Usage

\`\`\`tsx
import { Sidebar, SidebarNav, SidebarNavItem } from './src/components';

<Sidebar>
    <SidebarNav title="Main Menu">
        <SidebarNavItem href="/dashboard" isActive>
            Dashboard
        </SidebarNavItem>
        <SidebarNavItem href="/settings">
            Settings
        </SidebarNavItem>
    </SidebarNav>
</Sidebar>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Icon } from '../Icon/Icon';

interface SidebarProps { /* ... */ }

export const Sidebar: React.FC<SidebarProps> = ({ children, width = '250px', height = '100%', className }) => {
    /* ... styles ... */
    return <aside className={\`\${sidebarClass} \${className}\`}>{children}</aside>;
};

interface SidebarNavProps { /* ... */ }
export const SidebarNav: React.FC<SidebarNavProps> = ({ children, title }) => { /* ... */ };

interface SidebarNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { /* ... */ }
export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ children, icon, isActive, className, ...props }) => {
    /* ... styles ... */
    return (
        <a className={\`\${itemClass} \${className}\`} {...props}>
            {icon && <Icon as={icon} size={16} />}
            <span>{children}</span>
        </a>
    );
};`;

export const SidebarDemo = () => {
    const [width, setWidth] = useState('250px');
    return (
        <DemoSection
            title="Sidebar"
            description="A vertical navigation component, typically used for main application navigation."
            livePreview={
                <Stack direction="row" style={{height: '300px', width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px'}}>
                    <Sidebar width={width}>
                        <Text size="1.25rem" weight="600">App</Text>
                        <SidebarNav title="Menu">
                            <SidebarNavItem href="#" icon={HomeIcon} isActive>Dashboard</SidebarNavItem>
                            <SidebarNavItem href="#" icon={SettingsIcon}>Settings</SidebarNavItem>
                        </SidebarNav>
                    </Sidebar>
                    <div style={{padding: '1rem', flex: 1}}>
                        <Text>Main content area</Text>
                    </div>
                </Stack>
            }
            propControls={<SidebarConfigurator width={width} setWidth={setWidth} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
