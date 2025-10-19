import React, { useState } from 'react';
import { Switch, Text, Stack, Input, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const SwitchConfigurator: React.FC<{
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

const documentation = `# Switch

A control that allows the user to toggle between two states, typically "on" and "off". It's a visually distinct alternative to a \`Checkbox\`.

## Props

*   \`label\` (string, optional): A text label displayed next to the switch.
*   \`id\` (string, optional): A unique identifier for associating the label with the input.
*   \`checked\` (boolean): The current state of the switch.
*   \`disabled\` (boolean, optional): If true, the switch will be un-interactive.
*   All other standard HTML \`<input type="checkbox">\` attributes are supported (e.g., \`onChange\`).

## Usage

\`\`\`tsx
import { Switch } from './src/components';
import { useState } from 'react';

const [notifications, setNotifications] = useState(true);

<Switch
  label="Enable Notifications"
  checked={notifications}
  onChange={(e) => setNotifications(e.target.checked)}
/>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ label, id, checked, disabled, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('switch');

    const containerClass = createStyle({ /* ...styles... */ });
    const trackClass = createStyle({ /* ...styles... */ });
    const thumbClass = createStyle({ /* ...styles... */ });
    const inputClass = createStyle({ /* ...styles... */ });

    return (
        <label htmlFor={id} className={containerClass}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                disabled={disabled}
                role="switch"
                aria-checked={checked}
                {...props}
                className={inputClass}
            />
            <div className={trackClass}>
                <div className={thumbClass}></div>
            </div>
            {label && <span>{label}</span>}
        </label>
    );
};`;

export const SwitchDemo = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [label, setLabel] = useState('Enable Notifications');
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <DemoSection
            title="Switch"
            description="A control that allows the user to toggle between two states."
            livePreview={
                <Switch 
                    label={label}
                    checked={isChecked} 
                    onChange={(e) => setIsChecked(e.target.checked)} 
                    disabled={isDisabled}
                />
            }
            propControls={
                <SwitchConfigurator 
                    label={label} setLabel={setLabel}
                    isChecked={isChecked} setIsChecked={setIsChecked}
                    isDisabled={isDisabled} setIsDisabled={setIsDisabled}
                />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};