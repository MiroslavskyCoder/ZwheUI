import React from 'react';
import { PageHeader, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# PageHeader

A component for creating a standardized header for a page or content section. It typically includes a title, subtitle, breadcrumbs, and a set of actions.

## Props
*   \`title\` (string, required): The main title for the page.
*   \`subtitle\` (string, optional): A short description displayed below the title.
*   \`breadcrumbs\` (array, optional): An array of items for the \`Breadcrumbs\` component.
*   \`actions\` (React.ReactNode, optional): Action components, like \`Button\`s.
`;

const fullSourceCode = `import React from 'react';
import { Stack, Text, Breadcrumbs, Divider, BreadcrumbItem } from '..';
import { useTheme } from '../../core';

interface PageHeaderProps { /* ... */ }

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs, actions }) => {
    // ... component logic
    return (
        <Stack>
            {/* ... component structure ... */}
        </Stack>
    );
};`;

export const PageHeaderDemo = () => {
    const breadcrumbItems = [
        { label: 'Projects', href: '#' },
        { label: 'ZwheUI' },
    ];

    return (
        <DemoSection
            title="Page Header"
            description="A component for standardizing page titles, breadcrumbs, and actions."
            livePreview={
                <PageHeader
                    title="ZwheUI Project"
                    subtitle="Manage your component library settings and tasks."
                    breadcrumbs={breadcrumbItems}
                    actions={
                        <Stack direction="row" gap="1rem">
                            <Button variant="secondary">Import</Button>
                            <Button variant="primary">New Task</Button>
                        </Stack>
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