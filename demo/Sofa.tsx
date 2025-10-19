

import React, { useState } from 'react';
import { Sofa, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const SofaConfigurator: React.FC<{
    title: string;
    setTitle: (t: string) => void;
    description: string;
    setDescription: (d: string) => void;
}> = ({ title, setTitle, description, setDescription }) => (
    <Stack gap="1.5rem">
        <Input label="Title Prop" value={title} onChange={e => setTitle(e.target.value)} />
        <Input label="Description Prop" value={description} onChange={e => setDescription(e.target.value)} />
    </Stack>
);

const documentation = `# Sofa

A styled container component used throughout the component showcase application. It provides a consistent bordered and padded box for wrapping component demonstrations and can now include a title and description.

## Props

*   \`children\` (React.ReactNode, required): The content to be displayed inside the container.
*   \`title\` (string, optional): A title to render in a heading style above the children.
*   \`description\` (string, optional): A descriptive text to render below the title.
*   All other standard HTML \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
<Sofa
  title="Component Demo"
  description="This is a demonstration of another component."
>
  {/* ... other components ... */}
</Sofa>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

interface SofaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export const Sofa: React.FC<SofaProps> = ({ children, className = '', title, description, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sofa');
    
    const sofaClass = createStyle({ 
        padding: '24px',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: \`1px solid \${theme.colors.border}\`,
        transition: 'background-color 0.3s, border-color 0.3s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    return (
        <div className={\`\${sofaClass} \${className}\`} {...props}>
            {(title || description) ? (
                <Stack gap="1rem">
                    {title && <Text as="h2" size="1.5rem" weight="600">{title}</Text>}
                    {description && <Text>{description}</Text>}
                    <div>{children}</div>
                </Stack>
            ) : (
                children
            )}
        </div>
    );
};`;

export const SofaDemo = () => {
  const [title, setTitle] = useState('Sofa Container');
  const [description, setDescription] = useState('This is a styled container component used throughout the showcase.');

  const code = `<Sofa title="${title}" description="${description}">
    <Text>This is the main content area.</Text>
</Sofa>`;

  return (
    <DemoSection
      title="Sofa"
      description="A styled container component for wrapping content sections. It can include an optional title and description."
      initialCode={code}
      propControls={
        <SofaConfigurator
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      }
      documentation={documentation}
      fullSourceCode={fullSourceCode}
    />
  );
};