import React, { useState } from 'react';
import { Container, Text, Stack, Card, SegmentedControl } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const ContainerConfigurator: React.FC<{
    size: any;
    setSize: (s: any) => void;
}> = ({ size, setSize }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Size Prop</Text>
        <SegmentedControl 
            value={size}
            onChange={setSize}
            options={[
                { label: 'xs', value: 'xs' },
                { label: 'sm', value: 'sm' },
                { label: 'md', value: 'md' },
                { label: 'lg', value: 'lg' },
                { label: 'xl', value: 'xl' },
                { label: 'container', value: 'container' },
            ]}
        />
    </Stack>
);

const documentation = `# Container

A layout component that centers its content and constrains it to a maximum width. This is essential for creating consistent, readable layouts on wider screens.

## Props

*   \`children\` (React.ReactNode): The content to be rendered inside the container.
*   \`size\` (enum: 'xs' | 'sm' | 'md' | 'lg' | 'xl', optional): A predefined size from the theme's \`maxWidths\` scale.
*   \`maxWidth\` (string, optional): A specific max-width for the container (e.g., '800px'). Overrides \`size\` if both are provided. Defaults to \`theme.maxWidths.container\`.
*   \`className\` (string, optional): Additional CSS classes for custom styling.
*   All other standard \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
import { Container, Card, Text } from './src/components';

// Default container
<Container>
  <Text>This content is centered with the default max-width.</Text>
</Container>

// Sized container
<Container size="sm">
  <Text>This content is in a small container.</Text>
</Container>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme, Theme } from '../../core/theme/ThemeProvider';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: string;
    size?: keyof Theme['maxWidths'];
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', maxWidth, size, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('container');

    const containerClass = createStyle({
        width: '100%',
        maxWidth: (size ? theme.maxWidths[size] : undefined) || maxWidth || theme.maxWidths.container,
        margin: '0 auto',
        padding: \`0 \${theme.spacing.lg}\`,
        '@media': {
            "(maxWidth: 'sm')": {
                padding: \`0 \${theme.spacing.md}\`,
            }
        }
    });

    return (
        <div className={\`\${containerClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};`;

export const ContainerDemo = () => {
    const { theme } = useTheme();
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'container'>('sm');
  
    return (
        <DemoSection
            title="Container"
            description="A layout component that centers its content and constrains it to a maximum width. Supports a `size` prop for theme-based widths."
            livePreview={
                <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem 0', borderRadius: '8px', width: '100%' }}>
                    <Container size={size}>
                        <Card>
                            <Text>This content is inside a `Container` with `size="{size}"`.</Text>
                        </Card>
                    </Container>
                </div>
            }
            propControls={<ContainerConfigurator size={size} setSize={setSize} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};