import React, { useState } from 'react';
import { Stepper, Sofa, Text, Stack, Button } from '../src/components';

const steps = [
    { label: 'Shipping' },
    { label: 'Payment' },
    { label: 'Review' },
];

export const StepperDemo = () => {
    const [activeStep, setActiveStep] = useState(1);
    
    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Stepper</Text>
                <Text>A component that displays progress through a sequence of logical and numbered steps.</Text>
                <Stepper steps={steps} activeStep={activeStep} />
                <Stack direction="row" justify="center" gap="1rem">
                    <Button onClick={() => setActiveStep(p => Math.max(0, p - 1))} disabled={activeStep === 0}>Back</Button>
                    <Button onClick={() => setActiveStep(p => Math.min(steps.length - 1, p + 1))} disabled={activeStep === steps.length - 1}>Next</Button>
                </Stack>
            </Stack>
        </Sofa>
    );
};