import React, { useState } from 'react';
import { ColorPicker, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const ColorPickerConfigurator: React.FC<{
    color: string;
    setColor: (c: string) => void;
}> = ({ color, setColor }) => (
    <Input label="Value Prop (hex color)" value={color} onChange={e => setColor(e.target.value)} />
);

const documentation = `# Color Picker

An interactive component for selecting a color. It displays a color swatch, RGB sliders, and a hex input field.

## Props

*   \`value\` (string, required): The currently selected color as a hex string (e.g., \`#RRGGBB\`).
*   \`onChange\` (function, required): A callback function triggered when the color value changes. It receives the new hex color string as an argument.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { ColorPicker } from './src/components';
import { useState } from 'react';

const [color, setColor] = useState('#60a5fa');

<ColorPicker value={color} onChange={setColor} />
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Slider } from '../Slider/Slider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { parseColor } from '../../core/color/utils';

interface ColorPickerProps {
    value: string; // hex color string e.g. #RRGGBB
    onChange: (color: string) => void;
    className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('color-picker');
    const [r, g, b] = parseColor(value);

    const handleColorChange = (channel: 'r' | 'g' | 'b', newValue: number) => {
        const newColor = [r, g, b];
        if (channel === 'r') newColor[0] = newValue;
        if (channel === 'g') newColor[1] = newValue;
        if (channel === 'b') newColor[2] = newValue;

        const toHex = (c: number) => \`0\${c.toString(16)}\`.slice(-2);
        onChange(\`#\${toHex(newColor[0])}\${toHex(newColor[1])}\${toHex(newColor[2])}\`);
    };

    const containerClass = createStyle({
        padding: theme.spacing.md,
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: \`1px solid \${theme.colors.border}\`,
        width: '250px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    const swatchClass = createStyle({
        width: '100%',
        height: '60px',
        backgroundColor: value,
        borderRadius: '4px',
        border: \`1px solid \${theme.colors.border}\`,
        marginBottom: theme.spacing.md,
    });
    
    const hexInputClass = createStyle({
        width: '100%',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.background,
        border: \`1px solid \${theme.colors.border}\`,
        color: theme.colors.text,
        borderRadius: '4px'
    });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div className={swatchClass} />
            <Stack direction="column" gap={theme.spacing.sm}>
                <Stack direction="row" align="center" gap={theme.spacing.sm} style={{ gridTemplateColumns: 'auto 1fr' }}>
                    <Text as="span" size="14px" color="#ef4444" style={{width: '15px'}}>R</Text>
                    <Slider value={r} onChange={(newR) => handleColorChange('r', newR)} min={0} max={255} color="#ef4444" />
                </Stack>
                <Stack direction="row" align="center" gap={theme.spacing.sm} style={{ gridTemplateColumns: 'auto 1fr' }}>
                    <Text as="span" size="14px" color="#10b981" style={{width: '15px'}}>G</Text>
                    <Slider value={g} onChange={(newG) => handleColorChange('g', newG)} min={0} max={255} color="#10b981" />
                </Stack>
                <Stack direction="row" align="center" gap={theme.spacing.sm} style={{ gridTemplateColumns: 'auto 1fr' }}>
                    <Text as="span" size="14px" color="#3b82f6" style={{width: '15px'}}>B</Text>
                    <Slider value={b} onChange={(newB) => handleColorChange('b', newB)} min={0} max={255} color="#3b82f6" />
                </Stack>
                <input 
                    className={hexInputClass} 
                    type="text" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)}
                />
            </Stack>
        </div>
    );
};

export default ColorPicker;`;

export const ColorPickerDemo = () => {
    const [color, setColor] = useState('#60a5fa');

    return (
        <DemoSection
            title="Color Picker"
            description="An interactive component for selecting a color using RGB sliders."
            livePreview={<ColorPicker value={color} onChange={setColor} />}
            propControls={<ColorPickerConfigurator color={color} setColor={setColor} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
