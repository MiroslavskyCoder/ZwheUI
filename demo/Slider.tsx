import React, { useState } from 'react';
import { Slider, Text, Stack, Input, Checkbox } from '../src/components';
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

const documentation = `# Slider

An input component that allows the user to select a value from a continuous or discrete range by dragging a thumb along a track.

## Props

*   \`value\` (number, required): The current value of the slider.
*   \`onChange\` (function, required): A callback function triggered when the value changes.
*   \`min\` (number, optional, default: 0): The minimum value of the range.
*   \`max\` (number, optional, default: 100): The maximum value of the range.
*   \`step\` (number, optional, default: 1): The increment value.
*   \`disabled\` (boolean, optional): If true, the slider is not interactive.
*   \`showValue\` (boolean, optional): If true, the current value is always displayed above the thumb.
*   \`color\` (string, optional): A custom color for the slider's track and thumb.

## Usage

\`\`\`tsx
import { Slider } from './src/components';
import { useState } from 'react';

const [volume, setVolume] = useState(50);

<Slider value={volume} onChange={setVolume} min={0} max={100} />
\`\`\``;

const sourceCode = `import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface SliderProps { /* ... */ }

export const Slider: React.FC<SliderProps> = ({
    value, onChange, min = 0, max = 100, step = 1, disabled = false, showValue = false, className = '', color,
}) => {
    /* ... internal logic for dragging, keyboard events, and styles ... */

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div ref={trackRef} className={trackClass} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
                <div className={progressClass} />
                <div
                    className={thumbClass}
                    onKeyDown={handleKeyDown}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    /* ... aria props ... */
                />
                {(showValue || isDragging) && (
                    <div className={valueClass}>{value}</div>
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
    
    return (
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
    );
};