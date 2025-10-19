

import React, { useState } from 'react';
import { Textarea, Text, Stack, Input, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const TextareaConfigurator: React.FC<{
    placeholder: string;
    setPlaceholder: (p: string) => void;
    isDisabled: boolean;
    setIsDisabled: (d: boolean) => void;
}> = ({ placeholder, setPlaceholder, isDisabled, setIsDisabled }) => (
    <Stack gap="1.5rem">
        <Input label="Placeholder Prop" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
        <Checkbox label="Disabled Prop" checked={isDisabled} onChange={e => setIsDisabled(e.target.checked)} />
    </Stack>
);

const documentation = `# Textarea

A styled multi-line text input field, ideal for longer form content like comments or descriptions.

## Props

*   All standard HTML \`<textarea>\` attributes are supported (e.g., \`placeholder\`, \`rows\`, \`disabled\`).
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
<Textarea
  placeholder="Enter your comments here..."
  rows={4}
/>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('textarea');
    const isDark = theme.colors.background.startsWith('#1');

    const baseClasses = createStyle({
        display: 'block',
        width: '100%',
        backgroundColor: theme.colors.backgroundSecondary,
        border: \`1px solid \${theme.colors.border}\`,
        borderRadius: '0.375rem',
        padding: '0.5rem 0.75rem',
        color: theme.colors.text,
        transition: 'all 0.2s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
        },
        '&::placeholder': {
            color: theme.colors.textSecondary,
        },
        '&:focus': {
            outline: 'none',
            boxShadow: \`0 0 0 2px \${isDark ? theme.colors.background : '#fff'}, 0 0 0 4px \${theme.colors.primary}\`
        }
    });

    return <textarea className={\`\${baseClasses} \${className}\`} {...props} />;
};`;

export const TextareaDemo = () => {
    const [placeholder, setPlaceholder] = useState('Enter your comments here...');
    const [isDisabled, setIsDisabled] = useState(false);

    const code = `<Textarea placeholder="${placeholder}" disabled="${isDisabled}" rows="4" />`;

    return (
        <DemoSection
            title="Textarea"
            description="A styled multi-line text input field for longer form content."
            initialCode={code}
            propControls={
                <TextareaConfigurator
                    placeholder={placeholder} setPlaceholder={setPlaceholder}
                    isDisabled={isDisabled} setIsDisabled={setIsDisabled}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};