import React, { useState, useMemo, useEffect } from 'react';
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
        border: `1px solid ${theme.colors.border}`,
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
        border: `1px solid ${theme.colors.border}`,
        marginBottom: theme.spacing.md,
    });

    const hexInputClass = createStyle({
        width: '100%',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.border}`,
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
        <div className={`${containerClass} ${className}`}>
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

export default ColorPicker;