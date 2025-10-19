import React, { useState } from 'react';
import { SegmentedControl, Text, Stack, Textarea, Error } from '../src/components';
import { DemoSection } from './DemoSection';

const initialOptions = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
    { label: 'Map', value: 'map' },
];

const SegmentedControlConfigurator: React.FC<{
    optionsString: string;
    setOptionsString: (o: string) => void;
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

const documentation = `# Segmented Control

A linear set of two or more segments, where each segment functions as a button. It's often used as a stylish alternative to a radio group for view switching.

## Props

*   \`options\` (array of objects, required): The list of segments to display. Each object must have \`label\` and \`value\` properties.
*   \`value\` (string, required): The \`value\` of the currently active segment.
*   \`onChange\` (function, required): A callback function triggered when a new segment is selected.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { SegmentedControl } from './src/components';
import { useState } from 'react';

const viewOptions = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
];

const [view, setView] = useState('grid');

<SegmentedControl options={viewOptions} value={view} onChange={setView} />
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SegmentedControlProps {
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, value, onChange, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('segmented-control');

    const containerClass = createStyle({ /* ... styles ... */ });
    const optionClass = createStyle({ /* ... styles ... */ });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            {options.map(option => (
                <button
                    key={option.value}
                    className={optionClass}
                    data-active={value === option.value}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};`;

export const SegmentedControlDemo = () => {
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
            title="Segmented Control"
            description="A linear set of two or more segments, each of which functions as a button."
            livePreview={
                <SegmentedControl options={options} value={value} onChange={setValue} />
            }
            propControls={
                <SegmentedControlConfigurator 
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