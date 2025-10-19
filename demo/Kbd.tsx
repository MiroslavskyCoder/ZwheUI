import React, { useState } from 'react';
import { Kbd, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const KbdConfigurator: React.FC<{
    key1: string;
    setKey1: (k: string) => void;
    key2: string;
    setKey2: (k: string) => void;
}> = ({ key1, setKey1, key2, setKey2 }) => (
    <Stack direction="row" gap="1rem">
        <Input label="Key 1" value={key1} onChange={e => setKey1(e.target.value)} />
        <Input label="Key 2" value={key2} onChange={e => setKey2(e.target.value)} />
    </Stack>
);

const documentation = `# Kbd

A component for displaying keyboard shortcuts in a visually distinct style, mimicking the appearance of a physical key.

## Props

*   \`children\` (React.ReactNode, required): The key or symbol to display (e.g., '⌘', 'Shift', 'K').
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Kbd, Text } from './src/components';

<Text>
  Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
</Text>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Kbd: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('kbd');

    const kbdClass = createStyle({
        display: 'inline-block',
        padding: '2px 6px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: theme.colors.textSecondary,
        backgroundColor: theme.colors.border,
        border: \`1px solid rgba(255, 255, 255, 0.1)\`,
        borderBottomWidth: '2px',
        borderRadius: '4px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(4px)',
        },
    });

    return (
        <kbd className={\`\${kbdClass} \${className}\`}>
            {children}
        </kbd>
    );
};`;

export const KbdDemo = () => {
    const [key1, setKey1] = useState('⌘');
    const [key2, setKey2] = useState('K');

    return (
        <DemoSection
            title="Kbd"
            description="A component for displaying keyboard shortcuts."
            livePreview={
                <Text>Press <Kbd>{key1}</Kbd> + <Kbd>{key2}</Kbd> to open the command palette.</Text>
            }
            propControls={<KbdConfigurator key1={key1} setKey1={setKey1} key2={key2} setKey2={setKey2} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
