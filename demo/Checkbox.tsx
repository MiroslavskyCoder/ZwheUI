import React, { useState } from 'react';
import { Checkbox, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const CheckboxConfigurator: React.FC<{
    label: string;
    setLabel: (l: string) => void;
    isChecked: boolean;
    setIsChecked: (c: boolean) => void;
    isDisabled: boolean;
    setIsDisabled: (d: boolean) => void;
}> = ({ label, setLabel, isChecked, setIsChecked, isDisabled, setIsDisabled }) => (
    <Stack gap="1.5rem">
        <Input label="Label Prop" value={label} onChange={e => setLabel(e.target.value)} />
        <Checkbox label="Checked Prop" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
        <Checkbox label="Disabled Prop" checked={isDisabled} onChange={e => setIsDisabled(e.target.checked)} />
    </Stack>
);

const documentation = `# Checkbox

A standard checkbox component for capturing boolean (true/false) input from a user.

## Props

*   \`label\` (string, optional): The text label displayed next to the checkbox.
*   \`id\` (string, optional): A unique identifier, necessary for associating the label with the input.
*   \`checked\` (boolean): The current state of the checkbox.
*   \`disabled\` (boolean, optional): If true, the checkbox will be un-interactive.
*   All other standard HTML \`<input type="checkbox">\` attributes are supported (e.g., \`onChange\`).

## Usage

\`\`\`tsx
import { Checkbox } from './src/components';
import { useState } from 'react';

const [isChecked, setIsChecked] = useState(false);

<Checkbox
  label="Accept terms and conditions"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', checked, disabled, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('checkbox');
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: theme.spacing.sm,
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.6 : 1,
    });
    
    const customCheckboxClass = createStyle({
        width: '18px',
        height: '18px',
        border: '2px solid',
        borderRadius: '4px',
        display: 'grid',
        placeContent: 'center',
        transition: 'all 0.2s',
        backgroundColor: checked ? theme.colors.primary : 'transparent',
        borderColor: checked ? theme.colors.primary : theme.colors.border,
    });

    const inputClass = createStyle({
        position: 'absolute',
        opacity: 0,
        height: 0,
        width: 0,
        '&:focus-visible + div': {
            boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.primary}\`,
        }
    });

    return (
        <label htmlFor={id} className={\`\${containerClass} \${className}\`}>
            <input 
                type="checkbox" 
                id={id} 
                checked={checked} 
                disabled={disabled}
                {...props} 
                className={inputClass}
            />
            <div className={customCheckboxClass}>
                 {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.background} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
            </div>
            {label && <span style={{color: theme.colors.text}}>{label}</span>}
        </label>
    );
};`;

export const CheckboxDemo = () => {
    const [label, setLabel] = useState('Accept terms');
    const [isChecked, setIsChecked] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    
    return (
        <DemoSection
            title="Checkbox"
            description="A standard checkbox component for capturing boolean input."
            livePreview={
                <Checkbox label={label} checked={isChecked} disabled={isDisabled} onChange={(e) => setIsChecked(e.target.checked)} />
            }
            propControls={
                <CheckboxConfigurator
                    label={label} setLabel={setLabel}
                    isChecked={isChecked} setIsChecked={setIsChecked}
                    isDisabled={isDisabled} setIsDisabled={setIsDisabled}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
