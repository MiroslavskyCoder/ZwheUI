
import React, { useState } from 'react';
import { Alert, Text, Stack, Input, Textarea, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';
import { useTheme } from '../src/core';

const AlertConfigurator: React.FC<{
    title: string;
    setTitle: (t: string) => void;
    childrenText: string;
    setChildrenText: (t: string) => void;
    variant: 'info' | 'warning' | 'error' | 'success';
    setVariant: (v: any) => void;
}> = ({ title, setTitle, childrenText, setChildrenText, variant, setVariant }) => {
    const { theme } = useTheme();

    return (
        <Stack gap="1.5rem">
            <Input label="Title Prop" value={title} onChange={(e) => setTitle(e.target.value)} />
             <Stack gap="4px">
                <Text as="label" htmlFor="alert-children-input" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Children Prop (Text)</Text>
                <Textarea id="alert-children-input" value={childrenText} onChange={(e) => setChildrenText(e.target.value)} rows={3} />
            </Stack>
            <Stack gap="4px">
                <Text as="label" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Variant Prop</Text>
                <SegmentedControl
                    options={[
                        { label: 'Info', value: 'info' },
                        { label: 'Success', value: 'success' },
                        { label: 'Warning', value: 'warning' },
                        { label: 'Error', value: 'error' }
                    ]}
                    value={variant}
                    onChange={(val) => setVariant(val as any)}
                />
            </Stack>
        </Stack>
    );
};


const documentation = `# Alert

A component to display contextual feedback messages for user actions.

## Props

*   \`title\` (string, required): The main title of the alert.
*   \`children\` (React.ReactNode, optional): Additional description text for the alert.
*   \`variant\` (enum: 'info' | 'warning' | 'error' | 'success', optional, default: 'info'): The style and color scheme of the alert.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Alert } from './src/components';

<Alert title="Success!" variant="success">
  Your profile has been updated.
</Alert>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface AlertProps {
    title: string;
    children?: React.ReactNode;
    variant?: 'info' | 'warning' | 'error' | 'success';
    className?: string;
}

const icons = {
    info: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>\`,
    warning: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>\`,
    error: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>\`,
    success: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>\`
};

export const Alert: React.FC<AlertProps> = ({ title, children, variant = 'info', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('alert');
    const iconHtml = { __html: icons[variant] };

    const variantStyles = {
        info: { backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.5)', color: '#93c5fd' },
        warning: { backgroundColor: 'rgba(245, 158, 11, 0.2)', borderColor: 'rgba(245, 158, 11, 0.5)', color: '#fcd34d' },
        error: { backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.5)', color: '#fca5a5' },
        success: { backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.5)', color: '#6ee7b7' },
    };

    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'start',
        gap: theme.spacing.md,
        borderRadius: '8px',
        border: '1px solid',
        padding: theme.spacing.md,
        ...variantStyles[variant],
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    return (
        <div role="alert" className={\`\${containerClass} \${className}\`}>
            <span aria-hidden="true" style={{ flexShrink: 0, width: '20px', height: '20px' }} dangerouslySetInnerHTML={iconHtml}></span>
            <div>
                <Text weight="600" style={{ marginBottom: '0.25rem' }}>{title}</Text>
                {children && <Text size="0.875rem" color="inherit" style={{ opacity: 0.8 }}>{children}</Text>}
            </div>
        </div>
    );
};`;

export const AlertDemo = () => {
    const [title, setTitle] = useState('Info');
    const [childrenText, setChildrenText] = useState('This is an informational message.');
    const [variant, setVariant] = useState<'info' | 'warning' | 'error' | 'success'>('info');

    const code = `<Alert title="${title}" variant="${variant}">${childrenText}</Alert>`;

    return (
        <DemoSection
            title="Alert"
            description="Provides contextual feedback messages for typical user actions, with variants for different severity levels."
            initialCode={code}
            propControls={
                <AlertConfigurator
                    title={title}
                    setTitle={setTitle}
                    childrenText={childrenText}
                    setChildrenText={setChildrenText}
                    variant={variant}
                    setVariant={setVariant}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
