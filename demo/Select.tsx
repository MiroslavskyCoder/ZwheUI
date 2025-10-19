import React, { useState } from 'react';
import { Select, Text, Stack, Textarea, Error } from '../src/components';
import { DemoSection } from './DemoSection';

const initialOptions = [
    { value: 'grid', label: 'Data Grid Pro' },
    { value: 'suite', label: 'Component Suite' },
    { value: 'headless', label: 'Headless Components' },
];

const SelectConfigurator: React.FC<{
    optionsString: string;
    setOptionsString: (s: string) => void;
    error: string;
    value: string;
}> = ({ optionsString, setOptionsString, error, value }) => (
    <Stack gap="1rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Options Prop (JSON Array)</Text>
            <Textarea value={optionsString} onChange={e => setOptionsString(e.target.value)} rows={5} style={{fontFamily: 'monospace'}} />
            {error && <Error>{error}</Error>}
        </Stack>
        <Text>Selected value: <code style={{background: 'rgba(255,255,255,0.1)', padding: '2px 4px', borderRadius: '4px'}}>{value}</code></Text>
    </Stack>
);

const documentation = `# Select

A custom-styled dropdown component for selecting a single option from a list.

## Props

*   \`value\` (string, required): The \`value\` of the currently selected option.
*   \`onChange\` (function, required): A callback function triggered when the selection changes.
*   \`options\` (array of objects, required): The list of options to display. Each object must have \`value\` and \`label\` properties.
*   \`disabled\` (boolean, optional): If true, the select is not interactive.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Select } from './src/components';
import { useState } from 'react';

const selectOptions = [
    { value: 'grid', label: 'Data Grid' },
    { value: 'suite', label: 'Component Suite' },
];

const [selection, setSelection] = useState('grid');

<Select value={selection} onChange={setSelection} options={selectOptions} />
\`\`\``;

const sourceCode = `import React, { useState, useRef } from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'
import { useClickOutside } from '../../core/hooks/useInteractions'
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper'

export interface SelectProps { /* ... */ }

export const Select: React.FC<SelectProps> = ({ value, onChange, options, disabled = false, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('select');
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedOption = options.find(opt => opt.value === value);

    const triggerClass = createStyle({ /* ... styles ... */ });
    const dropdownClass = createStyle({ /* ... styles ... */ });
    const optionClass = createStyle({ /* ... styles ... */ });

    const handleSelect = (optionValue: string) => { /* ... */ };

    return (
       <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <PopperTrigger>
                 <button className={triggerClass} disabled={disabled}>
                    {selectedOption?.label}
                </button>
            </PopperTrigger>
            <PopperContent className={dropdownClass}>
                 {options.map((option) => (
                    <div
                        key={option.value}
                        className={optionClass}
                        onClick={() => handleSelect(option.value)}
                        data-selected={option.value === value}
                    >
                        {option.label}
                    </div>
                ))}
            </PopperContent>
       </Popper>
    );
}`;

export const SelectDemo = () => {
    const [optionsString, setOptionsString] = useState(JSON.stringify(initialOptions, null, 2));
    const [error, setError] = useState('');

    let options = initialOptions;
     try {
        const parsed = JSON.parse(optionsString);
        if (Array.isArray(parsed)) {
            options = parsed;
            if (error) setError('');
        } else {
             if (!error) setError('Options must be a valid JSON array.');
        }
    } catch (e) {
        if (!error) setError('Invalid JSON format');
    }

    const [value, setValue] = useState(options[0]?.value || '');
    
    return (
        <DemoSection
            title="Select"
            description="A custom-styled dropdown component for selecting a single option from a list."
            livePreview={
                <Select value={value} onChange={setValue} options={options} />
            }
            propControls={
                <SelectConfigurator
                    optionsString={optionsString}
                    setOptionsString={setOptionsString}
                    error={error}
                    value={value}
                />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};