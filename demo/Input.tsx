

import React, { useState } from 'react';
import { Input, Sofa, Text, Stack, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';
import { useTheme } from '../src/core';

const InputConfigurator: React.FC<{
    label: string;
    setLabel: (l: string) => void;
    placeholder: string;
    setPlaceholder: (p: string) => void;
    error: string;
    setError: (e: string) => void;
    isDisabled: boolean;
    setIsDisabled: (d: boolean) => void;
}> = ({ label, setLabel, placeholder, setPlaceholder, error, setError, isDisabled, setIsDisabled }) => {
    
    return (
        <Stack gap="1.5rem">
            <Input label="Label Prop" value={label} onChange={(e) => setLabel(e.target.value)} />
            <Input label="Placeholder Prop" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
            <Input label="Error Prop" value={error} onChange={(e) => setError(e.target.value)} />
            <Checkbox label="Disabled Prop" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
        </Stack>
    );
};

const documentation = `# Input

A complete form input component that wraps \`TextInput\` to include a label and an error message display.

## Props

*   \`label\` (string, optional): The text label displayed above the input field.
*   \`error\` (string, optional): An error message to display below the input field.
*   \`id\` (string, optional): A unique identifier for associating the label with the input.
*   All other props are passed down to the \`TextInput\` component.

## Usage

\`\`\`tsx
<Input label="Email Address" placeholder="you@example.com" error="Email is required." />
\`\`\``;

const fullSourceCode = `import React from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Error } from '../Error/Error';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('input-wrapper');

    const containerClass = createStyle({
        display: 'grid',
        gap: '4px',
        width: '100%',
    });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            {label && (
                <label htmlFor={id}>
                    <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>
                        {label}
                    </Text>
                </label>
            )}
            <TextInput id={id} {...props} />
            <Error>{error}</Error>
        </div>
    );
};`;

export const InputDemo = () => {
    const [label, setLabel] = useState('Email Address');
    const [placeholder, setPlaceholder] = useState('you@example.com');
    const [error, setError] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const code = `<Input 
    label="${label}" 
    placeholder="${placeholder}" 
    error="${error}" 
    disabled={${isDisabled}} 
/>`;

    return (
        <DemoSection
            title="Input"
            description="A wrapper for TextInput that includes a label and an error message display area."
            initialCode={code}
            propControls={
                <InputConfigurator 
                    label={label}
                    setLabel={setLabel}
                    placeholder={placeholder}
                    setPlaceholder={setPlaceholder}
                    error={error}
                    setError={setError}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};