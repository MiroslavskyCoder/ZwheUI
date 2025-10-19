import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const RadioGroupConfigurator: React.FC<{
    label: string;
    setLabel: (l: string) => void;
    value: string;
}> = ({ label, setLabel, value }) => (
    <Stack gap="1.5rem">
        <Input label="Label Prop" value={label} onChange={e => setLabel(e.target.value)} />
        <Text>Selected value: <code style={{background: 'rgba(255,255,255,0.1)', padding: '2px 4px', borderRadius: '4px'}}>{value}</code></Text>
    </Stack>
);

const documentation = `# Radio Group

A set of checkable buttons where only one option can be selected at a time.

## Components

*   **RadioGroup**: The main wrapper that manages state and provides context.
*   **RadioGroupItem**: A single radio button option with a label.

## Props

### RadioGroup
*   \`value\` (string, required): The \`value\` of the currently selected \`RadioGroupItem\`.
*   \`onChange\` (function, required): A callback function triggered when the selection changes.
*   \`name\` (string, required): A name for the group, passed to the underlying radio inputs for accessibility.
*   \`label\` (string, optional): An accessible label for the entire group.

### RadioGroupItem
*   \`value\` (string, required): A unique value for this option.
*   \`label\` (string, required): The text label for this option.

## Usage

\`\`\`tsx
import { RadioGroup, RadioGroupItem } from './src/components';
import { useState } from 'react';

const [plan, setPlan] = useState('free');

<RadioGroup
  value={plan}
  onChange={setPlan}
  name="subscription-plan"
  label="Select a Plan"
>
    <RadioGroupItem value="free" label="Free Tier" />
    <RadioGroupItem value="pro" label="Pro Tier" />
</RadioGroup>
\`\`\``;

const sourceCode = `import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface RadioGroupContextType { /* ... */ }
const RadioGroupContext = createContext<RadioGroupContextType | null>(null);
const useRadioGroup = () => { /* ... */ };

interface RadioGroupProps { /* ... */ }

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, value, onChange, name, label, className }) => {
    return (
        <RadioGroupContext.Provider value={{ value, onChange, name }}>
            <div role="radiogroup" aria-label={label} className={className}>
                {label && <Text as="span">{label}</Text>}
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};

interface RadioGroupItemProps { /* ... */ }

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, label, className }) => {
    /* ... internal logic and styles ... */

    return (
        <label className={\`\${containerClass} \${className}\`}>
            <input 
                type="radio" 
                name={name} 
                value={value} 
                checked={isChecked} 
                onChange={() => onChange(value)}
                className={inputClass}
            />
            <span className={radioClass}>
                <span className={indicatorClass}></span>
            </span>
            <Text as="span">{label}</Text>
        </label>
    );
};`;

export const RadioGroupDemo = () => {
    const [plan, setPlan] = useState('free');
    const [label, setLabel] = useState('Select a Plan');

    return (
        <DemoSection
            title="Radio Group"
            description="A set of checkable buttons, where only one can be selected at a time."
            livePreview={
                 <RadioGroup value={plan} onChange={setPlan} name="subscription-plan" label={label}>
                    <RadioGroupItem value="free" label="Free Tier" />
                    <RadioGroupItem value="pro" label="Pro Tier" />
                    <RadioGroupItem value="enterprise" label="Enterprise Tier" />
                </RadioGroup>
            }
            propControls={
                <RadioGroupConfigurator label={label} setLabel={setLabel} value={plan} />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
