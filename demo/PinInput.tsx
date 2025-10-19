
import React, { useState } from 'react';
import { PinInput, Text, Stack, Slider } from '../src/components';
import { DemoSection } from './DemoSection';

const PinInputConfigurator: React.FC<{
    length: number;
    setLength: (l: number) => void;
}> = ({ length, setLength }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Length Prop</Text>
        <Slider value={length} onChange={setLength} min={3} max={8} showValue />
    </Stack>
);

const documentation = `# PinInput

A component for entering PINs or one-time codes. It provides a set of styled inputs that automatically handle focus shifting, backspace, and pasting.

## Props

*   \`length\` (number, optional): The number of characters in the PIN. Defaults to \`4\`.
*   \`value\` (string, optional): The current value of the input.
*   \`onChange\` (function, optional): A callback function triggered when the value changes.

## Usage

\`\`\`tsx
import { PinInput } from './src/components';
import { useState } from 'react';

const [pin, setPin] = useState('');

<PinInput length={6} value={pin} onChange={setPin} />
\`\`\``;

const sourceCode = `import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { useStyles, useTheme } from '../../core';
import { Flex } from '../Flex/Flex';

interface PinInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
}

export const PinInput: React.FC<PinInputProps> = ({ length = 4, value = '', onChange }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('pin-input');
    const [localValue, setLocalValue] = useState(value);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => { /* ... */ };
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => { /* ... */ };
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => { /* ... */ };

    const inputClass = createStyle({ /* ... styles ... */ });

    return (
        <Flex gap="0.5rem">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={el => { inputRefs.current[index] = el; }}
                    className={inputClass}
                    type="text"
                    maxLength={1}
                    value={localValue[index] || ''}
                    onChange={e => handleChange(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                />
            ))}
        </Flex>
    );
};`;

export const PinInputDemo = () => {
    const [pin, setPin] = useState('');
    const [length, setLength] = useState(6);

    return (
        <DemoSection
            title="Pin Input"
            description="For entering PINs or one-time codes."
            livePreview={
                <Stack gap="1rem" align="center">
                    <PinInput length={length} value={pin} onChange={setPin} />
                    <Text size="sm">Current Value: {pin}</Text>
                </Stack>
            }
            propControls={<PinInputConfigurator length={length} setLength={setLength} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};