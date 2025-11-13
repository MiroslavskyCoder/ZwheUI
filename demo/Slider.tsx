import React, { useState } from 'react';
import { Slider, Text, Stack, Input, Checkbox, Sofa } from '../src/components';
import { DemoSection } from './DemoSection';

const SliderConfigurator: React.FC<{
    min: number; setMin: (n: number) => void;
    max: number; setMax: (n: number) => void;
    step: number; setStep: (n: number) => void;
    showValue: boolean; setShowValue: (b: boolean) => void;
    isDisabled: boolean; setIsDisabled: (b: boolean) => void;
}> = ({ min, setMin, max, setMax, step, setStep, showValue, setShowValue, isDisabled, setIsDisabled }) => (
    <Stack gap="1.5rem">
        <Input label="Min Prop" type="number" value={min} onChange={e => setMin(Number(e.target.value))} />
        <Input label="Max Prop" type="number" value={max} onChange={e => setMax(Number(e.target.value))} />
        <Input label="Step Prop" type="number" value={step} onChange={e => setStep(Number(e.target.value))} />
        <Checkbox label="Show Value Prop" checked={showValue} onChange={e => setShowValue(e.target.checked)} />
        <Checkbox label="Disabled Prop" checked={isDisabled} onChange={e => setIsDisabled(e.target.checked)} />
    </Stack>
);

const discreteMarks = [
    { value: 1, label: '1' },
    { value: 10, label: '10' },
    { value: 100, label: '100' },
    { value: 1000, label: '∞' },
];

const documentation = `# Slider

An input component that allows the user to select a value from a continuous or discrete range by dragging a thumb along a track.

## Props

*   \`value\` (number, required): The current value of the slider.
*   \`onChange\` (function, required): A callback function triggered when the value changes.
*   \`min\` (number, optional, default: 0): The minimum value of the range. Ignored if \`marks\` is provided.
*   \`max\` (number, optional, default: 100): The maximum value of the range. Ignored if \`marks\` is provided.
*   \`step\` (number, optional, default: 1): The increment value. Ignored if \`marks\` is provided.
*   \`marks\` (array, optional): An array of mark objects ({value: number, label: string}) to create a discrete slider.
*   \`disabled\` (boolean, optional): If true, the slider is not interactive.
*   \`showValue\` (boolean, optional): If true, the current value is always displayed above the thumb.
*   \`color\` (string, optional): A custom color for the slider's track and thumb.

## Usage

\`\`\`tsx
import { Slider } from './src/components';
import { useState } from 'react';

// Discrete slider with marks
const marks = [
  { value: 1, label: '1' },
  { value: 10, label: '10' },
  { value: 100, label: '100' },
];
const [users, setUsers] = useState(100);
<Slider value={users} onChange={setUsers} marks={marks} />
\`\`\``;

const sourceCode = `import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface Mark {
  value: number;
  label?: React.ReactNode;
}
export interface SliderProps { /* ... */ }

export const Slider: React.FC<SliderProps> = ({
    value, onChange, min = 0, max = 100, step = 1, disabled = false, showValue = false, className = '', color, marks
}) => {
    /* ... internal logic for dragging, keyboard events, and styles ... */
    const isDiscrete = !!marks && marks.length > 0;
    
    // Logic to handle both continuous and discrete sliders
    const handleMove = useCallback(/* ... */);
    const handleKeyDown = useCallback(/* ... */);
    const getPercentage = useCallback(/* ... */);

    return (
        <div className={\`\${containerClass} \${className}\`}>
            {isDiscrete && ( /* ... render labels ... */ )}
            <div ref={trackRef} className={trackClass} /* ... event handlers ... */>
                <div className={progressClass} style={{ width: \`\${percentage}%\` }} />
                {isDiscrete && ( /* ... render ticks ... */ )}
                <div
                    className={thumbClass}
                    style={{ left: \`\${percentage}%\` }}
                    /* ... event handlers and aria props ... */
                />
                {(showValue || isDragging) && (
                    <div className={valueClass} style={{ left: \`\${percentage}%\` }}>{value}</div>
                )}
            </div>
        </div>
    );
}`;

export const SliderDemo = () => {
    const [value, setValue] = useState(50);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [step, setStep] = useState(1);
    const [showValue, setShowValue] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    
    const [discreteValue, setDiscreteValue] = useState(100);

    return (
        <>
            <DemoSection
                title="Slider"
                description="An input component that allows selecting a value from a continuous or discrete range."
                livePreview={
                    <Slider value={value} onChange={setValue} min={min} max={max} step={step} showValue={showValue} disabled={isDisabled} />
                }
                propControls={
                    <SliderConfigurator 
                        min={min} setMin={setMin}
                        max={max} setMax={setMax}
                        step={step} setStep={setStep}
                        showValue={showValue} setShowValue={setShowValue}
                        isDisabled={isDisabled} setIsDisabled={setIsDisabled}
                    />
                }
                documentation={documentation}
                fullSourceCode={sourceCode}
            />
            <Sofa>
                <Stack gap="1.5rem">
                    <Text as="h3" size="1.25rem" weight="600">Discrete Slider with Marks</Text>
                    <Text>Use the `marks` prop to create a slider that snaps to predefined, labeled values.</Text>
                    <Stack>
                        <Text color="textSecondary">ЧИСЛО ПОЛЬЗОВАТЕЛЕЙ</Text>
                        <Slider
                            value={discreteValue}
                            onChange={setDiscreteValue}
                            marks={discreteMarks}
                        />
                        <Stack direction="row" justify="space-between" align="center" style={{marginTop: '0.5rem'}}>
                            <Text>Число участников</Text>
                            <Text weight="600">{discreteMarks.find(m => m.value === discreteValue)?.label || discreteValue}</Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Sofa>
        </>
    );
};