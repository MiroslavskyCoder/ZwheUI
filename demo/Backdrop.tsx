import React, { useState } from 'react';
import { Backdrop, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';

const BackdropConfigurator: React.FC<{
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}> = ({ isOpen, setIsOpen }) => (
    <Stack gap="1rem" align="start">
        <Text>The `isOpen` prop controls the visibility of the Backdrop. Use the button to toggle it.</Text>
        <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Hide' : 'Show'} Backdrop
        </Button>
    </Stack>
);

const documentation = `# Backdrop

A semi-transparent, blurred overlay used to disable interaction with the main page. It's typically used in conjunction with components like \`Modal\` or \`Drawer\`.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the backdrop.
*   \`onClick\` (function, optional): A callback function to execute when the backdrop is clicked.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Backdrop, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Show Backdrop</Button>
    <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
</>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useFade } from '../../core/hooks/useAnimation';

interface BackdropProps {
    isOpen: boolean;
    onClick?: () => void;
    className?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClick, className = '' }) => {
    const createStyle = useStyles('backdrop');
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    if (!isRendered) return null;

    const backdropClass = createStyle({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(16px)',
        zIndex: 40, // Should be below modals
    });

    return (
        <div 
            className={\`\${backdropClass} \${className}\`} 
            style={fadeStyle}
            onClick={onClick}
        />
    );
};

export default Backdrop;`;

export const BackdropDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <DemoSection
                title="Backdrop"
                description="A semi-transparent overlay to disable interaction with the main page, often used with Modals or Drawers."
                livePreview={
                    <Text>
                        The backdrop will cover the entire screen. Use the controls in the 'Props' tab to show it.
                    </Text>
                }
                propControls={
                    <BackdropConfigurator isOpen={isOpen} setIsOpen={setIsOpen} />
                }
                documentation={documentation}
                fullSourceCode={sourceCode}
            />
            {/* Render the actual backdrop at the top level */}
            <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
        </>
    );
};