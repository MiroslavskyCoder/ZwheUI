import React, { useState } from 'react';
import { Stepper, Text, Stack, Button } from '../src/components';
import { DemoSection } from './DemoSection';

const steps = [
    { label: 'Shipping' },
    { label: 'Payment' },
    { label: 'Review' },
];

const StepperConfigurator: React.FC<{
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ activeStep, setActiveStep }) => (
    <Stack direction="row" justify="center" gap="1rem">
        <Button onClick={() => setActiveStep(p => Math.max(0, p - 1))} disabled={activeStep === 0}>
            Back
        </Button>
        <Button onClick={() => setActiveStep(p => Math.min(steps.length - 1, p + 1))} disabled={activeStep === steps.length - 1}>
            Next
        </Button>
    </Stack>
);

const documentation = `# Stepper

A component that displays progress through a sequence of logical, numbered steps. It is ideal for guiding users through a multi-step process like a checkout or setup wizard.

## Props

*   \`activeStep\` (number, required): The index of the current active step (0-based).
*   \`steps\` (array of objects, required): An array describing the steps. Each object should have:
    *   \`label\` (string, required): The title of the step.
    *   \`description\` (string, optional): A short description of the step.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Stepper, Button } from './src/components';
import { useState } from 'react';

const steps = [
    { label: 'Shipping' },
    { label: 'Payment' },
    { label: 'Review' },
];

const [activeStep, setActiveStep] = useState(1);

<>
    <Stepper steps={steps} activeStep={activeStep} />
    <Button onClick={() => setActiveStep(p => p + 1)}>Next</Button>
</>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface StepperProps {
    activeStep: number;
    steps: { label: string; description?: string }[];
    className?: string;
}

export const Stepper: React.FC<StepperProps> = ({ activeStep, steps, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('stepper');

    const containerClass = createStyle({ /* ...styles... */ });
    
    return (
        <div className={\`\${containerClass} \${className}\`}>
            {steps.map((step, index) => (
                <div key={index} className={stepClass}>
                    <div className={stepContentClass}>
                        <div className={circleClass(index)}>{index + 1}</div>
                        <Text size="14px" weight={index === activeStep ? 600 : 400}>
                            {step.label}
                        </Text>
                    </div>
                    <div className={connectorClass(index)} />
                </div>
            ))}
        </div>
    );
};`;

export const StepperDemo = () => {
    const [activeStep, setActiveStep] = useState(1);
    
    return (
        <DemoSection
            title="Stepper"
            description="A component that displays progress through a sequence of logical and numbered steps."
            livePreview={
                <Stepper steps={steps} activeStep={activeStep} />
            }
            propControls={
                <StepperConfigurator activeStep={activeStep} setActiveStep={setActiveStep} />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};