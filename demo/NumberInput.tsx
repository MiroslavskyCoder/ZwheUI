import React, { useState } from 'react';
import { NumberInput, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const NumberInputConfigurator: React.FC<{
    min: number;
    setMin: (m: number) => void;
    max: number;
    setMax: (m: number) => void;
    step: number;
    setStep: (s: number) => void;
}> = ({ min, setMin, max, setMax, step, setStep }) => (
    <Stack gap="1.5rem">
        <Input label="Min Prop" type="number" value={min} onChange={e => setMin(Number(e.target.value))} />
        <Input label="Max Prop" type="number" value={max} onChange={e => setMax(Number(e.target.value))} />
        <Input label="Step Prop" type="number" value={step} onChange={e => setStep(Number(e.target.value))} />
    </Stack>
);

const documentation = `# Number Input

An input component specifically for numbers, which includes stepper controls to increment and decrement the value.

## Props

*   \`value\` (number, required): The current value of the input.
*   \`onChange\` (function, required): A callback function triggered when the value changes.
*   \`min\` (number, optional): The minimum allowed value.
*   \`max\` (number, optional): The maximum allowed value.
*   \`step\` (number, optional, default: 1): The amount to increment or decrement by.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { NumberInput } from './src/components';
import { useState } from 'react';

const [quantity, setQuantity] = useState(1);

<NumberInput
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>
\`\`\``;

const sourceCode = `import React from 'react';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button';
import { Stack } from '../Stack/Stack';
import { useStyles } from '../../core/hooks/useStyles';

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min, max, step = 1, className }) => {
    const createStyle = useStyles('number-input');

    const handleStep = (direction: 'up' | 'down') => {
        const newValue = value + (direction === 'up' ? step : -step);
        if (min !== undefined && newValue < min) return;
        if (max !== undefined && newValue > max) return;
        onChange(newValue);
    };

    const containerClass = createStyle({ /* ... styles ... */ });
    const stepperButtonClass = createStyle({ /* ... styles ... */ });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <TextInput
                type="number"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value, 10))}
                min={min}
                max={max}
                step={step}
                style={{ borderRadius: '0.375rem 0 0 0.375rem', borderRight: 0 }}
            />
            <Stack direction="column" gap="2px" style={{height: '100%'}}>
                <Button variant="secondary" onClick={() => handleStep('up')} className={stepperButtonClass} style={{borderRadius: '0 0.375rem 0 0', height: '50%'}}>+</Button>
                <Button variant="secondary" onClick={() => handleStep('down')} className={stepperButtonClass} style={{borderRadius: '0 0 0.375rem 0', height: '50%'}}>-</Button>
            </Stack>
        </div>
    );
};`;

export const NumberInputDemo = () => {
    const [value, setValue] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [step, setStep] = useState(1);

    return (
        <DemoSection
            title="Number Input"
            description="An input for numbers with stepper controls."
            livePreview={
                <div style={{width: '150px'}}>
                    <NumberInput value={value} onChange={setValue} min={min} max={max} step={step} />
                </div>
            }
            propControls={
                <NumberInputConfigurator 
                    min={min} setMin={setMin}
                    max={max} setMax={setMax}
                    step={step} setStep={setStep}
                />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};