
import React, { useState } from 'react';
import { Code, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const CodeConfigurator: React.FC<{
    childrenText: string;
    setChildrenText: (t: string) => void;
}> = ({ childrenText, setChildrenText }) => (
    <Input label="Children Prop (Text)" value={childrenText} onChange={e => setChildrenText(e.target.value)} />
);

const documentation = `# Code

A component for displaying inline code snippets with appropriate styling.

## Props

*   All standard \`<code>\` attributes are supported.

## Usage

\`\`\`tsx
import { Code, Text } from './src/components';

<Text>
  Run the command <Code>npm install</Code> to get started.
</Text>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles, useTheme } from '../../core';

export const Code: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('code');

    const codeClass = createStyle({
        fontFamily: 'monospace',
        fontSize: '0.875em',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '0.125em 0.3em',
        borderRadius: '4px',
        color: theme.colors.text,
    });

    return (
        <code className={\`\${codeClass} \${className}\`} {...props}>
            {children}
        </code>
    );
};`;

export const CodeDemo = () => {
    const [childrenText, setChildrenText] = useState('useStyles()');
    return (
        <DemoSection
            title="Code"
            description="A component for displaying inline code snippets."
            livePreview={
                <Text>
                    The <Code>{childrenText}</Code> hook is a powerful tool.
                </Text>
            }
            propControls={<CodeConfigurator childrenText={childrenText} setChildrenText={setChildrenText} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};