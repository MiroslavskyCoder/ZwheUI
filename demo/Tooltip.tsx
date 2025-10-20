
import React, { useState } from 'react';
import { Tooltip, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Tooltip

A floating label that appears when a user hovers over an element.

## Props
*   \`label\` (string, required): The text to display in the tooltip.
*   \`children\` (React.ReactNode, required): The trigger element.

## Usage
\`\`\`tsx
import { Tooltip, Button } from './src/components';

<Tooltip label="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
\`\`\``;

const sourceCode = `import React, { useState } from 'react';
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper';
import { TooltipBubble } from './TooltipBubble';

interface TooltipProps {
    label: string;
    children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <PopperTrigger>
                    {children}
                </PopperTrigger>
                <PopperContent>
                    <TooltipBubble>{label}</TooltipBubble>
                </PopperContent>
            </div>
        </Popper>
    );
};`;

export const TooltipDemo = () => {
    return (
        <DemoSection
            title="Tooltip"
            description="A floating label that appears when a user hovers over an element."
            livePreview={
                <Stack direction="row" gap="1rem">
                    <Tooltip label="This is a tooltip on a button">
                        <Button>Hover me</Button>
                    </Tooltip>
                    <Tooltip label="This is a tooltip on some text">
                        <Text style={{ borderBottom: '1px dashed' }}>Hover me too</Text>
                    </Tooltip>
                </Stack>
            }
            propControls={<Text color="textSecondary">The main prop, `label`, is demonstrated in the preview.</Text>}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};
