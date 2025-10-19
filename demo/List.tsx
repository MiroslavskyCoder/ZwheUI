import React from 'react';
import { List, ListItem, ListItemText, Divider, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# List

A set of components for displaying structured lists of items.

## Components

*   **List**: The main \`<ul>\` wrapper with styling for the container.
*   **ListItem**: A \`<li>\` element representing a single row in the list.
*   **ListItemBody**: A \`<div>\` wrapper for the main content area of a ListItem, useful for complex layouts.
*   **ListItemText**: A component for displaying primary and optional secondary text in a standard format.
*   **Divider**: A \`<hr>\` element for visually separating \`ListItem\` components.

## Usage

\`\`\`tsx
import { List, ListItem, ListItemText, Divider, Button } from './src/components';

<List>
  <ListItem>
    <ListItemText primary="Profile" secondary="Update your personal details" />
  </ListItem>
  <Divider />
  <ListItem>
    <ListItemText primary="Billing" />
    <Button variant="secondary">Manage</Button>
  </ListItem>
</List>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('list');
    const listClass = createStyle({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        backdropFilter: 'blur(8px)',
        borderRadius: '8px',
        border: \`1px solid \${theme.colors.border}\`,
        overflow: 'hidden',
    });
    return <ul className={\`\${listClass} \${className}\`} {...props}>{children}</ul>;
};

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('list-item');
    const itemClass = createStyle({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '1fr auto',
        gap: theme.spacing.md,
        padding: \`\${theme.spacing.sm} \${theme.spacing.md}\`,
        color: theme.colors.text,
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }
    });
    return <li className={\`\${itemClass} \${className}\`} {...props}>{children}</li>;
};

interface ListItemBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const ListItemBody: React.FC<ListItemBodyProps> = ({ children, className, ...props }) => {
    const createStyle = useStyles('list-item-body');
    const bodyClass = createStyle({
        minWidth: 0,
    });
    return <div className={\`\${bodyClass} \${className}\`} {...props}>{children}</div>;
}

interface ListItemTextProps {
    primary: React.ReactNode;
    secondary?: React.ReactNode;
}
export const ListItemText: React.FC<ListItemTextProps> = ({ primary, secondary }) => {
    const { theme } = useTheme();
    return (
        <div>
            <Text weight="500">{primary}</Text>
            {secondary && <Text size="0.875rem" color={theme.colors.textSecondary}>{secondary}</Text>}
        </div>
    );
};`;

export const ListDemo = () => (
    <DemoSection
        title="List"
        description="A set of components for displaying structured lists of items with optional dividers and rich content."
        livePreview={
            <List>
                <ListItem>
                    <ListItemText primary="Profile" secondary="Update your personal details" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Billing" secondary="Manage your subscription" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Log Out" />
                    <Button variant="secondary">Action</Button>
                </ListItem>
            </List>
        }
        propControls={
            <Text color="textSecondary">This is a standard implementation of the List component. No props are available to configure in this demo.</Text>
        }
        documentation={documentation}
        fullSourceCode={sourceCode}
    />
);