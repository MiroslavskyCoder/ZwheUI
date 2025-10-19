import React, { useState, useEffect } from 'react';
import { CircularProgress, LinearProgress, Text, Stack, Slider, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const ProgressConfigurator: React.FC<{
    value: number;
    setValue: (v: number) => void;
    isIndeterminate: boolean;
    setIsIndeterminate: (i: boolean) => void;
}> = ({ value, setValue, isIndeterminate, setIsIndeterminate }) => (
    <Stack gap="1.5rem">
        <Checkbox label="Indeterminate" checked={isIndeterminate} onChange={e => setIsIndeterminate(e.target.checked)} />
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Value Prop</Text>
            <Slider value={value} onChange={setValue} min={0} max={100} disabled={isIndeterminate} showValue />
        </Stack>
    </Stack>
);

const documentation = `# Progress Indicators

Components to indicate loading or the progress of an operation.

## CircularProgress

A circular "spinner" style progress indicator.

### Props
*   \`value\` (number, optional): A value from 0 to 100 to show determinate progress. If omitted, the indicator will be indeterminate.
*   \`size\` (number, optional, default: 48): The width and height of the component in pixels.
*   \`strokeWidth\` (number, optional, default: 4): The thickness of the progress ring.

### Usage
\`\`\`tsx
import { CircularProgress } from './src/components';

// Indeterminate
<CircularProgress />

// Determinate
<CircularProgress value={75} />
\`\`\`

---

## LinearProgress

A horizontal bar style progress indicator.

### Props
*   \`value\` (number, optional): A value from 0 to 100 to show determinate progress. If omitted, the indicator will be indeterminate.
*   \`height\` (string, optional, default: '4px'): The thickness of the progress bar.

### Usage
\`\`\`tsx
import { LinearProgress } from './src/components';

// Indeterminate
<LinearProgress />

// Determinate
<LinearProgress value={50} />
\`\`\``;

const sourceCode = `/* Showing CircularProgress source. LinearProgress is similar. */
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CircularProgressProps {
    value?: number; // 0 to 100
    size?: number;
    strokeWidth?: number;
    className?: string;
    'aria-label'?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    size = 48,
    strokeWidth = 4,
    className = '',
    'aria-label': ariaLabel = 'Loading progress'
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('circular-progress');
    const isIndeterminate = value === undefined;

    /* ... internal logic and styles ... */

    return (
        <div className={\`\${containerClass} \${className}\`} role="progressbar" /* ...aria props... */>
            <svg>
                {/* ... circle elements ... */}
            </svg>
        </div>
    );
};`;

export const ProgressDemo = () => {
    const [progress, setProgress] = useState(60);
    const [isIndeterminate, setIsIndeterminate] = useState(false);

    return (
        <DemoSection
            title="Progress"
            description="Components to indicate loading or the progress of an operation, available in circular and linear styles."
            livePreview={
                <Stack gap="1.5rem" style={{width: '100%'}}>
                    <Stack gap="1rem" align="center">
                        <Text weight="600">Linear</Text>
                        <LinearProgress value={isIndeterminate ? undefined : progress} />
                    </Stack>
                    <Stack gap="1rem" direction="row" align="center" justify="center">
                        <Text weight="600">Circular</Text>
                        <CircularProgress value={isIndeterminate ? undefined : progress} />
                    </Stack>
                </Stack>
            }
            propControls={
                <ProgressConfigurator 
                    value={progress} setValue={setProgress}
                    isIndeterminate={isIndeterminate} setIsIndeterminate={setIsIndeterminate}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
