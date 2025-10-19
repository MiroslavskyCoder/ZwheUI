import React, { useState } from 'react';
import { Text, Stack, ToggleButtonGroup, ToggleButton, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Toggle Button

A set of components for creating a group of buttons that can be toggled on or off, similar to a checkbox or radio group but with a button-like appearance.

## Components

*   **ToggleButtonGroup**: The main wrapper that manages the state for a group of toggle buttons.
*   **ToggleButton**: A single button within the group.

## Props

### ToggleButtonGroup
*   \`value\` (string | string[] | null, required): The value of the currently selected button(s). Use a string for \`single\` type and an array of strings for \`multiple\`.
*   \`onChange\` (function, required): A callback function that is triggered when the selection changes.
*   \`type\` (enum: 'single' | 'multiple', optional, default: 'single'): The selection behavior of the group.

### ToggleButton
*   \`value\` (string, required): A unique value for the button.
*   All other standard \`<button>\` attributes are supported.

## Usage

\`\`\`tsx
import { ToggleButtonGroup, ToggleButton } from './src/components';

// Single selection
const [align, setAlign] = useState('left');
<ToggleButtonGroup value={align} onChange={setAlign} type="single">
  <ToggleButton value="left">Left</ToggleButton>
</ToggleButtonGroup>
\`\`\``;

const sourceCode = `import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ToggleButtonGroupContextType { /*...*/ }
const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType | null>(null);
export const useToggleButtonGroup = () => { /*...*/ };

interface ToggleButtonGroupProps { /*...*/ }
export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = (props) => { /*...*/ };

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { value: string; }
export const ToggleButton: React.FC<ToggleButtonProps> = (props) => { /*...*/ };
`;

export const ToggleButtonDemo = () => {
    const [alignment, setAlignment] = useState('left');
    const [formats, setFormats] = useState(['bold']);

    return (
        <DemoSection
            title="Toggle Button"
            description="A group of buttons that can be toggled, supporting single or multiple selections."
            livePreview={
                <Stack gap="1.5rem">
                    <Stack gap="0.5rem">
                        <Text weight="600">Single Selection</Text>
                        <ToggleButtonGroup value={alignment} onChange={(val) => setAlignment(val as string)} type="single">
                            <ToggleButton value="left">Left</ToggleButton>
                            <ToggleButton value="center">Center</ToggleButton>
                            <ToggleButton value="right">Right</ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>

                    <Stack gap="0.5rem">
                        <Text weight="600">Multiple Selection</Text>
                        <ToggleButtonGroup value={formats} onChange={(val) => setFormats(val as string[])} type="multiple">
                            <ToggleButton value="bold">Bold</ToggleButton>
                            <ToggleButton value="italic">Italic</ToggleButton>
                            <ToggleButton value="underline">Underline</ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                </Stack>
            }
            propControls={
                <Text color="textSecondary">
                    This component's main props (`value`, `onChange`, `type`) are demonstrated in the preview.
                </Text>
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};