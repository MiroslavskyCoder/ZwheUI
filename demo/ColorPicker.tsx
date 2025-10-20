import React, { useState } from 'react';
import { ColorPicker, Text, Stack, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

type ColorModel = 'HEX' | 'HSL' | 'LAB';

const ColorPickerConfigurator: React.FC<{
    disabledModels: ColorModel[];
    setDisabledModels: (models: ColorModel[]) => void;
}> = ({ disabledModels, setDisabledModels }) => {

    const handleCheckboxChange = (model: ColorModel, isChecked: boolean) => {
        setDisabledModels(
            isChecked 
                ? [...disabledModels, model] 
                : disabledModels.filter(m => m !== model)
        );
    };

    return (
        <Stack gap="1rem">
            <Text weight="500">Disable Color Models</Text>
            <Checkbox 
                label="HEX / RGB"
                checked={disabledModels.includes('HEX')}
                onChange={(e) => handleCheckboxChange('HEX', e.target.checked)}
            />
            <Checkbox 
                label="HSL"
                checked={disabledModels.includes('HSL')}
                onChange={(e) => handleCheckboxChange('HSL', e.target.checked)}
            />
            <Checkbox 
                label="LAB"
                checked={disabledModels.includes('LAB')}
                onChange={(e) => handleCheckboxChange('LAB', e.target.checked)}
            />
        </Stack>
    );
};


const documentation = `# Color Picker

An interactive component for selecting a color. It displays a color swatch and allows editing in different color models: HEX/RGB, HSL, and CIELAB.

## Props

*   \`value\` (string, required): The currently selected color as a hex string (e.g., \`#RRGGBB\`).
*   \`onChange\` (function, required): A callback function triggered when the color value changes. It receives the new hex color string as an argument.
*   \`className\` (string, optional): Additional CSS classes for the container.
*   \`disableColorModel\` (array, optional): An array of color model strings ('HEX', 'HSL', 'LAB') to disable and hide from the control.

## Usage

\`\`\`tsx
import { ColorPicker } from './src/components';
import { useState } from 'react';

const [color, setColor] = useState('#60a5fa');

// Disable the LAB color model
<ColorPicker 
  value={color} 
  onChange={setColor} 
  disableColorModel={['LAB']}
/>
\`\`\``;

const fullSourceCode = `import React, { useState, useMemo, useEffect } from 'react';
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
    disableColorModel?: ColorModel[];
}

const allColorModels: { label: string, value: ColorModel }[] = [
    { label: 'HEX', value: 'HEX' },
    { label: 'HSL', value: 'HSL' },
    { label: 'LAB', value: 'LAB' },
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, className = '', disableColorModel = [] }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('color-picker');

    const availableOptions = useMemo(() => 
        allColorModels.filter(model => !disableColorModel.includes(model.value)),
        [disableColorModel]
    );

    const [colorModel, setColorModel] = useState<ColorModel>(availableOptions[0]?.value || 'HEX');
    
    useEffect(() => {
        // If the current color model is disabled, switch to the first available one.
        if (disableColorModel.includes(colorModel) && availableOptions.length > 0) {
            setColorModel(availableOptions[0].value);
        }
    }, [disableColorModel, colorModel, availableOptions]);


    const [r, g, b] = useMemo(() => {
        try {
            return parseColor(value);
        } catch {
            return [0, 0, 0];
        }
    }, [value]);

    const { h, s, l } = useMemo(() => rgbToHsl(r, g, b), [r, g, b]);
    const { L, a, b: b_lab } = useMemo(() => rgbToLab(r, g, b), [r, g, b]);
    
    // ... (handler functions and rendering logic) ...
    
    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div className={swatchClass} />
            <Stack gap={theme.spacing.md}>
                {availableOptions.length > 1 && (
                     <SegmentedControl
                        value={colorModel}
                        onChange={(val) => setColorModel(val as ColorModel)}
                        options={availableOptions}
                    />
                )}
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
    const [disabledModels, setDisabledModels] = useState<ColorModel[]>([]);
    
    const disabledPropString = disabledModels.length > 0 
        ? ` disableColorModel={[${disabledModels.map(m => `'${m}'`).join(', ')}]}` 
        : '';
        
    const code = `<ColorPicker value="${color}"${disabledPropString} />`;

    return (
        <DemoSection
            title="Color Picker"
            description="An interactive component for selecting a color using HEX/RGB, HSL, or LAB color models."
            initialCode={code}
            livePreview={
                <ColorPicker 
                    value={color} 
                    onChange={setColor} 
                    disableColorModel={disabledModels} 
                />
            }
            propControls={
                <ColorPickerConfigurator 
                    disabledModels={disabledModels} 
                    setDisabledModels={setDisabledModels}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};