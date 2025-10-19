
import React, { useState } from 'react';
import { ButtonGroup, Button, Text, Stack, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const ButtonGroupConfigurator: React.FC<{
    isAttached: boolean;
    setIsAttached: (attached: boolean) => void;
}> = ({ isAttached, setIsAttached }) => (
    <Checkbox label="Is Attached Prop" checked={isAttached} onChange={e => setIsAttached(e.target.checked)} />
);

const documentation = `# ButtonGroup

A layout component to group related buttons together.

## Props

*   \`isAttached\` (boolean, optional): If true, the buttons will be visually attached with no space or rounded corners between them.
*   All \`Stack\` props are supported.

## Usage

\`\`\`tsx
import { ButtonGroup, Button } from './src/components';

// Spaced group
<ButtonGroup>
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>

// Attached group
<ButtonGroup isAttached>
  <Button>Bold</Button>
  <Button>Italic</Button>
  <Button>Underline</Button>
</ButtonGroup>
\`\`\``;

const sourceCode = `import React from 'react';
import { Stack } from '../Stack/Stack';
import { useStyles } from '../../core';

interface ButtonGroupProps extends React.ComponentProps<typeof Stack> {
    isAttached?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ isAttached, className, children, ...props }) => {
    const createStyle = useStyles('button-group');
    
    const attachedClass = isAttached ? createStyle({
        '& > button:not(:first-child)': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        '& > button:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
        },
    }) : '';

    return (
        <Stack direction="row" gap={isAttached ? '0' : '0.5rem'} className={\`\${attachedClass} \${className}\`} {...props}>
            {children}
        </Stack>
    );
};`;

export const ButtonGroupDemo = () => {
    const [isAttached, setIsAttached] = useState(false);

    return (
        <DemoSection
            title="Button Group"
            description="A component to group related buttons together, either spaced or attached."
            livePreview={
                <ButtonGroup isAttached={isAttached}>
                    <Button variant="secondary">Copy</Button>
                    <Button variant="secondary">Paste</Button>
                    <Button variant="secondary">Cut</Button>
                </ButtonGroup>
            }
            propControls={
                <ButtonGroupConfigurator isAttached={isAttached} setIsAttached={setIsAttached} />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};