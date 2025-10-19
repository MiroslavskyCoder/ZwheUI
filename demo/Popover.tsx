import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Text, Stack, Button, List, ListItem, ListItemText } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Popover

A floating panel that appears in relation to a trigger element. It's a styled implementation of the \`Popper\` utility.

## Components

*   **Popover**: The main wrapper component.
*   **PopoverTrigger**: The element that, when clicked, toggles the popover's visibility. It must wrap a single child.
*   **PopoverContent**: The styled container for the popover's content.

## Usage

\`\`\`tsx
import { Popover, PopoverTrigger, PopoverContent, Button, Text } from './src/components';

<Popover>
    <PopoverTrigger>
        <Button>Show Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
         <Text style={{ padding: '8px' }}>
            This is the content of the popover.
         </Text>
    </PopoverContent>
</Popover>
\`\`\``;

const sourceCode = `import React from 'react';
import { Popper, PopperTrigger as PopperTriggerInternal, PopperContent as PopperContentInternal } from '../Popper/Popper';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Popover: React.FC<{ children: React.ReactNode }> = ({ children }) => <Popper>{children}</Popper>;

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => <PopperTriggerInternal>{children}</PopperTriggerInternal>;

export const PopoverContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('popover-content');
    /* ... styles ... */

    return <PopperContentInternal className={\`\${contentClass} \${className}\`}>{children}</PopperContentInternal>;
};`;

export const PopoverDemo = () => (
    <DemoSection
        title="Popover"
        description="A floating panel that appears in relation to a trigger element. Built using the Popper utility."
        livePreview={
            <Popover>
                <PopoverTrigger>
                    <Button>Show Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                     <List>
                        <ListItem>
                          <ListItemText primary="Account Settings" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Support" />
                        </ListItem>
                      </List>
                </PopoverContent>
            </Popover>
        }
        propControls={<Text color="textSecondary">This is a standard implementation of the Popover component. No props are available to configure in this demo.</Text>}
        documentation={documentation}
        sourceCode={sourceCode}
    />
);
