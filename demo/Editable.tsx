import React, { useState } from 'react';
import { Editable, Text, Stack, useToast, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const EditableConfigurator: React.FC<{
    defaultValue: string;
    setDefaultValue: (d: string) => void;
}> = ({ defaultValue, setDefaultValue }) => (
    <Stack gap="1rem">
        <Input label="DefaultValue Prop" value={defaultValue} onChange={e => setDefaultValue(e.target.value)} />
        <Text size="sm">This control remounts the component with a new default value.</Text>
    </Stack>
);

const documentation = `# Editable

A component that provides an inline editing experience. It displays text that, when clicked, transforms into an input field.

## Props

*   \`defaultValue\` (string, required): The initial text value to display.
*   \`onSave\` (function, required): A callback function that is triggered when the user confirms their edit. It receives the new value as an argument.

## Usage

\`\`\`tsx
import { Editable } from './src/components';

<Editable 
  defaultValue="Click to edit me"
  onSave={(newValue) => console.log('Saved:', newValue)}
/>
\`\`\``;

const sourceCode = `import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';
import { ButtonGroup, IconButton } from '..';
import { Flex } from '../Flex/Flex';
import { TimesIcon } from '../../icons';

const CheckIcon = () => <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

interface EditableProps {
    defaultValue: string;
    onSave: (value: string) => void;
}

export const Editable: React.FC<EditableProps> = ({ defaultValue, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setValue(defaultValue);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <Flex align="center" gap="0.5rem">
                <TextInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSave();
                        if (e.key === 'Escape') handleCancel();
                    }}
                    autoFocus
                />
                <ButtonGroup isAttached>
                    <IconButton icon={CheckIcon} aria-label="Save" onClick={handleSave} />
                    <IconButton icon={TimesIcon} aria-label="Cancel" onClick={handleCancel} />
                </ButtonGroup>
            </Flex>
        );
    }

    return (
        <Text onClick={() => setIsEditing(true)} style={{ cursor: 'pointer', borderBottom: '1px dashed grey', padding: '0.5rem 0.75rem' }}>
            {value}
        </Text>
    );
};`;

export const EditableDemo = () => {
    const { addToast } = useToast();
    const [defaultValue, setDefaultValue] = useState('Project Alpha');

    return (
        <DemoSection
            title="Editable"
            description="A component for inline editing. Click the text in the preview to edit it."
            livePreview={
                <Editable 
                    defaultValue={defaultValue}
                    key={defaultValue}
                    onSave={(newValue) => {
                        addToast({
                            title: 'Saved!',
                            description: `Name changed to "${newValue}"`,
                            variant: 'success'
                        });
                    }}
                />
            }
            propControls={
                <EditableConfigurator defaultValue={defaultValue} setDefaultValue={setDefaultValue} />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
