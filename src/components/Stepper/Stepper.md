# Stepper

A component that displays progress through a sequence of logical, numbered steps. It is ideal for guiding users through a multi-step process like a checkout or setup wizard.

## Props

*   `activeStep` (number, required): The index of the current active step (0-based).
*   `steps` (array of objects, required): An array describing the steps. Each object should have:
    *   `label` (string, required): The title of the step.
    *   `description` (string, optional): A short description of the step.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
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
```
