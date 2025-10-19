
import React, { useState } from 'react';
import { TextInput, Text, Stack, Input, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const TextInputConfigurator: React.FC<{
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

const documentation = `# Text Input

The base styled text input component. It serves as the foundation for other form elements like \`Input\`, \`Search\`, and \`Combobox\`.

## Props

*   All standard HTML \`<input>\` attributes are supported (e.g., \`placeholder\`, \`type\`, \`disabled\`).
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
<TextInput placeholder="Enter your name..." />
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ className = '', ...props }, ref) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text-input');
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

    return <input type="text" ref={ref} className={\`\${baseClasses} \${className}\`} {...props} />;
});

TextInput.displayName = 'TextInput';`;

export const TextInputDemo = () => {
    const [placeholder, setPlaceholder] = useState('Enter your name...');
    const [isDisabled, setIsDisabled] = useState(false);

    const code = `<TextInput placeholder="${placeholder}" disabled={${isDisabled}} />`;

    return (
        <DemoSection
            title="Text Input"
            description="The base styled text input component used in other form elements."
            initialCode={code}
            propControls={
                <TextInputConfigurator
                    placeholder={placeholder} setPlaceholder={setPlaceholder}
                    isDisabled={isDisabled} setIsDisabled={setIsDisabled}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
