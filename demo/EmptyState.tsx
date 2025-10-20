import React from 'react';
import { EmptyState, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';
import { FolderIcon, PlusIcon } from '../src/icons';

const documentation = `# EmptyState

A component used to indicate that a list, table, or other content area is empty. It typically includes an icon, a message, and an optional call-to-action.

## Props
*   \`icon\` (React.ElementType, optional): An icon to display.
*   \`title\` (string, required): The main heading for the empty state.
*   \`description\` (string, required): A more detailed message.
*   \`action\` (React.ReactNode, optional): A call-to-action element, typically a \`Button\`.
`;

const fullSourceCode = `import React from 'react';
import { Stack, Center, Text, Icon } from '..';
import { useTheme } from '../../core';

interface EmptyStateProps { /* ... */ }

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
    // ... component logic
    return (
        <Center>
            <Stack>
                {/* ... component structure ... */}
            </Stack>
        </Center>
    );
};`;

export const EmptyStateDemo = () => {
    return (
        <DemoSection
            title="Empty State"
            description="A component to be displayed when there is no data to show."
            livePreview={
                <EmptyState
                    icon={FolderIcon}
                    title="No Projects Found"
                    description="Get started by creating a new project to see it here."
                    action={
                        <Button>
                            <PlusIcon /> Create Project
                        </Button>
                    }
                />
            }
            propControls={
                <p>This is a presentational demo. See documentation for prop details.</p>
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
