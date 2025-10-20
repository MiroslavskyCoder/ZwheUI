
import React, { useState } from 'react';
import { ColorPicker, Text } from '../src/components';
import { DemoSection } from './DemoSection';

const ColorPickerConfigurator: React.FC = () => (
    <Text color="textSecondary">
        The Color Picker is now fully interactive. Use the controls in the Live Preview panel to change the color and switch between color models (HEX/RGB, HSL, LAB).
    </Text>
);

const documentation = `# Color Picker

An interactive component for selecting a color. It displays a color swatch and allows editing in different color models: HEX/RGB, HSL, and CIELAB.

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

const fullSourceCode = `import React, { useState, useMemo } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Slider } from '../Slider/Slider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { parseColor, rgbToHsl, hslToRgb, rgbToLab, labToRgb, rgbToHex } from '../../core/color/utils';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';

type ColorModel = 'HEX' | 'HSL' | 'LAB';

interface ColorPickerProps {
    value: string; // hex color string e.g. #RRGGBB
    onChange: (color: string) => void;
    className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('color-picker');
    const [colorModel, setColorModel] = useState<ColorModel>('HEX');

    const [r, g, b] = useMemo(() => {
        try {
            return parseColor(value);
        } catch {
            return [0, 0, 0];
        }
    }, [value]);

    const { h, s, l } = useMemo(() => rgbToHsl(r, g, b), [r, g, b]);
    const { L, a, b: b_lab } = useMemo(() => rgbToLab(r, g, b), [r, g, b]);

    const handleRgbChange = (channel: 'r' | 'g' | 'b', newValue: number) => {
        const newColor = { r, g, b };
        newColor[channel] = newValue;
        onChange(rgbToHex(newColor.r, newColor.g, newColor.b));
    };

    const handleHslChange = (channel: 'h' | 's' | 'l', newValue: number) => {
        const newHsl = { h, s, l };
        newHsl[channel] = newValue;
        const { r: newR, g: newG, b: newB } = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
        onChange(rgbToHex(newR, newG, newB));
    };

    const handleLabChange = (channel: 'L' | 'a' | 'b', newValue: number) => {
        const newLab = { L, a, b: b_lab };
        newLab[channel] = newValue;
        const { r: newR, g: newG, b: newB } = labToRgb(newLab.L, newLab.a, newLab.b);
        onChange(rgbToHex(newR, newG, newB));
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

    const renderRgbSliders = () => (
        <Stack direction="column" gap={theme.spacing.sm}>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" color="#ef4444" style={{width: '15px'}}>R</Text>
                <Slider value={r} onChange={(newR) => handleRgbChange('r', newR)} min={0} max={255} color="#ef4444" showValue />
            </Stack>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" color="#10b981" style={{width: '15px'}}>G</Text>
                <Slider value={g} onChange={(newG) => handleRgbChange('g', newG)} min={0} max={255} color="#10b981" showValue />
            </Stack>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" color="#3b82f6" style={{width: '15px'}}>B</Text>
                <Slider value={b} onChange={(newB) => handleRgbChange('b', newB)} min={0} max={255} color="#3b82f6" showValue />
            </Stack>
            <input 
                className={hexInputClass} 
                type="text" 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
            />
        </Stack>
    );

    const renderHslSliders = () => (
        <Stack direction="column" gap={theme.spacing.sm}>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" style={{width: '15px'}}>H</Text>
                <Slider value={Math.round(h)} onChange={(newH) => handleHslChange('h', newH)} min={0} max={360} showValue />
            </Stack>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" style={{width: '15px'}}>S</Text>
                <Slider value={Math.round(s)} onChange={(newS) => handleHslChange('s', newS)} min={0} max={100} showValue />
            </Stack>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" style={{width: '15px'}}>L</Text>
                <Slider value={Math.round(l)} onChange={(newL) => handleHslChange('l', newL)} min={0} max={100} showValue />
            </Stack>
        </Stack>
    );

    const renderLabSliders = () => (
        <Stack direction="column" gap={theme.spacing.sm}>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" style={{width: '15px'}}>L*</Text>
                <Slider value={Math.round(L)} onChange={(newL) => handleLabChange('L', newL)} min={0} max={100} showValue />
            </Stack>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" style={{width: '15px'}}>a*</Text>
                <Slider value={Math.round(a)} onChange={(newA) => handleLabChange('a', newA)} min={-128} max={127} showValue />
            </Stack>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Text as="span" size="14px" style={{width: '15px'}}>b*</Text>
                <Slider value={Math.round(b_lab)} onChange={(newB) => handleLabChange('b', newB)} min={-128} max={127} showValue />
            </Stack>
        </Stack>
    );
    
    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div className={swatchClass} />
            <Stack gap={theme.spacing.md}>
                <SegmentedControl
                    value={colorModel}
                    onChange={(val) => setColorModel(val as ColorModel)}
                    options={[
                        { label: 'HEX', value: 'HEX' },
                        { label: 'HSL', value: 'HSL' },
                        { label: 'LAB', value: 'LAB' },
                    ]}
                />
                {colorModel === 'HEX' && renderRgbSliders()}
                {colorModel === 'HSL' && renderHslSliders()}
                {colorModel === 'LAB' && renderLabSliders()}
            </Stack>
        </div>
    );
};
`;

export const ColorPickerDemo = () => {
    const [color, setColor] = useState('#60a5fa');
    
    const code = `<ColorPicker value="${color}" />`;

    return (
        <DemoSection
            title="Color Picker"
            description="An interactive component for selecting a color using HEX/RGB, HSL, or LAB color models."
            livePreview={<ColorPicker value={color} onChange={setColor} />}
            propControls={<ColorPickerConfigurator />}
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
