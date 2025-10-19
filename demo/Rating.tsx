import React, { useState } from 'react';
import { Rating, Text, Stack, Slider, Checkbox, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const RatingConfigurator: React.FC<{
    max: number;
    setMax: (m: number) => void;
    size: 'small' | 'medium' | 'large';
    setSize: (s: any) => void;
    isReadonly: boolean;
    setIsReadonly: (r: boolean) => void;
    value: number;
}> = ({ max, setMax, size, setSize, isReadonly, setIsReadonly, value }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Max Prop (Total Stars)</Text>
            <Slider value={max} onChange={setMax} min={3} max={10} showValue />
        </Stack>
         <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Size Prop</Text>
            <SegmentedControl value={size} onChange={setSize} options={[{label: 'Small', value: 'small'}, {label: 'Medium', value: 'medium'}, {label: 'Large', value: 'large'}]} />
        </Stack>
        <Checkbox label="Readonly Prop" checked={isReadonly} onChange={e => setIsReadonly(e.target.checked)} />
        <Text>Current value: {value}</Text>
    </Stack>
);

const documentation = `# Rating

A star rating component to display and collect user ratings.

## Props

*   \`value\` (number, required): The current rating value (number of filled stars).
*   \`onChange\` (function, optional): A callback function triggered when the rating is changed by the user.
*   \`max\` (number, optional, default: 5): The total number of stars to display.
*   \`readonly\` (boolean, optional, default: false): If true, the rating is display-only and cannot be changed.
*   \`size\` (enum: 'small' | 'medium' | 'large', optional, default: 'medium'): The size of the stars.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Rating } from './src/components';
import { useState } from 'react';

const [rating, setRating] = useState(3);

// Interactive rating
<Rating value={rating} onChange={setRating} max={5} />

// Read-only rating
<Rating value={4} readonly />
\`\`\``;

const sourceCode = `import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface RatingProps {
    value: number;
    onChange?: (value: number) => void;
    max?: number;
    readonly?: boolean;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export const Rating: React.FC<RatingProps> = ({ value, onChange, max = 5, readonly = false, size = 'medium', className = '' }) => {
    /* ... internal logic and styles ... */

    const handleClick = (index: number) => {
        if (!readonly && onChange) {
            onChange(index + 1)
        }
    }
    
    return (
        <div className={\`\${containerClass} \${className}\`} {...interactiveProps} >
            {Array.from({ length: max }, (_, i) => (
                <span key={i} className={starClass} data-filled={i < value} onClick={() => handleClick(i)} />
            ))}
        </div>
    )
}`;

export const RatingDemo = () => {
    const [value, setValue] = useState(3);
    const [max, setMax] = useState(5);
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [isReadonly, setIsReadonly] = useState(false);
    
    return (
        <DemoSection
            title="Rating"
            description="A star rating component to display and collect user ratings."
            livePreview={
                <Rating value={value} onChange={setValue} max={max} size={size} readonly={isReadonly} />
            }
            propControls={
                <RatingConfigurator 
                    max={max} setMax={setMax}
                    size={size} setSize={setSize}
                    isReadonly={isReadonly} setIsReadonly={setIsReadonly}
                    value={value}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
