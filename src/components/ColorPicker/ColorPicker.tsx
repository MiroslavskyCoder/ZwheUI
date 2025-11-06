import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Slider } from '../Slider/Slider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { 
    parseColor, rgbToHsl, hslToRgb, rgbToHex, 
    rgbToHsv, hsvToRgb
} from '../../core/color/utils';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { useDraggable } from '../../core/hooks/useInteractions';
import { Checkbox } from '../Checkbox/Checkbox';
import { Icon } from '../Icon/Icon';
import { TimesIcon, SquareIcon, TriangleIcon } from '../../icons';
import { IconButton } from '../IconButton/IconButton';
import { Input } from '../Input/Input';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            conicGradient: React.SVGProps<SVGElement> & {
                from?: string;
                at?: string;
            };
        }
    }
}

type ColorModel = 'HEX' | 'HSL' | 'HSV' | 'RGB';
type HarmonyRule = 'complementary' | 'analogous' | 'triadic' | 'split';
type PickerShape = 'square' | 'triangle';

const EyedropperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18.207 7.793a3 3 0 0 1 0 4.242l-2.43 2.43-4.242-4.242 2.43-2.43a3 3 0 0 1 4.242 0zM4.929 19.071l-1.414-1.414M11.5 15.5l-6 6"/><path d="M16 8.5l-6 6"/></svg>;
const GamutWarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, isOpen, onClose, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('color-picker-pro');
    const pickerRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    useDraggable(pickerRef, handleRef, { x: window.innerWidth / 2 - 140, y: 100 });

    const [initialColor] = useState(value);
    const [colorModel, setColorModel] = useState<ColorModel>('HEX');
    const [harmony, setHarmony] = useState<HarmonyRule>('complementary');
    const [pickerShape, setPickerShape] = useState<PickerShape>('square');

    const hsv = useMemo(() => {
        try {
            const [r, g, b] = parseColor(value);
            return rgbToHsv(r, g, b);
        } catch { return { h: 0, s: 0, v: 0 }; }
    }, [value]);
    
    const hsl = useMemo(() => {
        try {
            const [r, g, b] = parseColor(value);
            return rgbToHsl(r, g, b);
        } catch { return { h: 0, s: 0, l: 0 }; }
    }, [value]);

    const handleHsvChange = (newHsv: { h: number, s: number, v: number }) => {
        const { r, g, b } = hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
        onChange(rgbToHex(r, g, b));
    };

    const handleHslChange = (newHsl: { h: number, s: number, l: number }) => {
        const { r, g, b } = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
        onChange(rgbToHex(r, g, b));
    };


    const containerClass = createStyle({
        position: 'fixed',
        padding: '0',
        backgroundColor: '#3a3a3a',
        borderRadius: '8px',
        border: `1px solid #1e1e1e`,
        width: 'max-content',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        userSelect: 'none',
        display: isOpen ? 'block' : 'none',
    });
    
    const headerClass = createStyle({
        padding: '6px 12px',
        backgroundColor: '#4a4a4a',
        borderBottom: '1px solid #1e1e1e',
        cursor: 'move',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    });

    if (!isOpen) return null;
    
    return (
        <div ref={pickerRef} className={`${containerClass} ${className}`}>
            <div ref={handleRef} className={headerClass}>
                <Text size="sm" weight="600">Color Picker</Text>
                <button onClick={onClose} style={{background: 'none', border: 'none', color: '#ccc', cursor: 'pointer'}}>
                    <Icon as={TimesIcon} size={16} />
                </button>
            </div>
            <div style={{ padding: '12px' }}>
                <Stack gap={theme.spacing.md}>
                    <VisualPicker hsv={hsv} hsl={hsl} onHsvChange={handleHsvChange} onHslChange={handleHslChange} harmony={harmony} pickerShape={pickerShape} />
                    <Swatches initialColor={initialColor} currentColor={value} />
                    <HarmonySelector harmony={harmony} setHarmony={setHarmony} />
                    <ColorInputs value={value} onChange={onChange} colorModel={colorModel} setColorModel={setColorModel}/>
                    <Stack direction="row" justify="space-between" align="center">
                        <Checkbox label="Only Web Colors" />
                        <Stack direction="row" align="center" gap="0.5rem">
                            <span title="Eyedropper"><Icon as={EyedropperIcon} size={16} style={{cursor: 'pointer'}}/></span>
                            <IconButton 
                                icon={pickerShape === 'square' ? TriangleIcon : SquareIcon}
                                onClick={() => setPickerShape(s => s === 'square' ? 'triangle' : 'square')}
                                aria-label="Toggle picker shape"
                                variant="secondary"
                                style={{ padding: '4px', height: 'auto', width: '24px' }}
                            />
                            <span title="Out of gamut for printing"><Icon as={GamutWarningIcon} size={16} color={theme.colors.accent} style={{cursor: 'pointer'}}/></span>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};

// --- Sub-components for clarity ---

const HarmonyHandle: React.FC<{ hue: number; radius: number; center: number; onClick: (hue: number) => void }> = ({ hue, radius, center, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const angle = hue * Math.PI / 180;
    const pos = {
        x: center + Math.cos(angle) * radius,
        y: center + Math.sin(angle) * radius,
    };
    return <circle 
        cx={pos.x} 
        cy={pos.y} 
        r={isHovered ? 6 : 5} 
        fill={`hsl(${hue}, 100%, 50%)`} 
        stroke="#fff" 
        strokeWidth={1.5}
        onClick={() => onClick(hue)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer', transition: 'r 0.2s ease' }}
    />;
}

const VisualPicker: React.FC<{ 
    hsv: {h: number, s: number, v: number};
    hsl: {h: number, s: number, l: number};
    onHsvChange: (hsv: any) => void,
    onHslChange: (hsl: any) => void,
    harmony: HarmonyRule,
    pickerShape: PickerShape
}> = ({ hsv, hsl, onHsvChange, onHslChange, harmony, pickerShape }) => {
    const wheelSize = 200;
    const center = wheelSize / 2;
    const hueRadius = center - 10;
    const wheelRef = useRef<SVGSVGElement>(null);

    const handleHueChange = (newHue: number) => {
        if (pickerShape === 'square') {
            onHsvChange({ ...hsv, h: newHue });
        } else {
            onHslChange({ ...hsl, h: newHue });
        }
    };
    
    const handleHueInteraction = (e: React.MouseEvent<SVGCircleElement>, isDragging: boolean) => {
        if (!wheelRef.current || (!e.buttons && isDragging)) return;
        const rect = wheelRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const dx = x - center;
        const dy = y - center;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        handleHueChange((angle + 360) % 360);
    };

    const hueAngle = (pickerShape === 'square' ? hsv.h : hsl.h) * Math.PI / 180;
    const hueHandlePos = {
        x: center + Math.cos(hueAngle) * hueRadius,
        y: center + Math.sin(hueAngle) * hueRadius,
    };

    const harmonyHues = useMemo(() => {
        const currentHue = pickerShape === 'square' ? hsv.h : hsl.h;
        let hues: number[] = [];
        switch (harmony) {
            case 'complementary': hues = [(currentHue + 180) % 360]; break;
            case 'analogous': hues = [(currentHue + 330) % 360, (currentHue + 30) % 360]; break;
            case 'triadic': hues = [(currentHue + 120) % 360, (currentHue + 240) % 360]; break;
            case 'split': hues = [(currentHue + 150) % 360, (currentHue + 210) % 360]; break;
        }
        return hues;
    }, [hsv.h, hsl.h, harmony, pickerShape]);

    return (
        <svg
            ref={wheelRef}
            width={wheelSize}
            height={wheelSize}
            viewBox={`0 0 ${wheelSize} ${wheelSize}`}
            style={{ margin: '0 auto', cursor: 'crosshair' }}
        >
            <defs>
                <conicGradient id="hue-gradient" from="0deg" at="50% 50%">
                    <stop offset="0%" stopColor="hsl(0, 100%, 50%)" /><stop offset="16.66%" stopColor="hsl(60, 100%, 50%)" /><stop offset="33.33%" stopColor="hsl(120, 100%, 50%)" /><stop offset="50%" stopColor="hsl(180, 100%, 50%)" /><stop offset="66.66%" stopColor="hsl(240, 100%, 50%)" /><stop offset="83.33%" stopColor="hsl(300, 100%, 50%)" /><stop offset="100%" stopColor="hsl(360, 100%, 50%)" />
                </conicGradient>
            </defs>
            <circle cx={center} cy={center} r={hueRadius} fill="none" stroke="url(#hue-gradient)" strokeWidth="20" onMouseDown={(e) => handleHueInteraction(e, false)} onMouseMove={(e) => handleHueInteraction(e, true)} />
            
            {pickerShape === 'square' ? <SquarePicker hsv={hsv} onHsvChange={onHsvChange} /> : <TrianglePicker hsl={hsl} onHslChange={onHslChange} />}

            {harmonyHues.map((hue, i) => (
                <HarmonyHandle 
                    key={i}
                    hue={hue}
                    radius={hueRadius}
                    center={center}
                    onClick={handleHueChange}
                />
            ))}
            <circle cx={hueHandlePos.x} cy={hueHandlePos.y} r={6} fill="none" stroke="#fff" strokeWidth={2} pointerEvents="none" />
        </svg>
    );
};

const SquarePicker: React.FC<{ hsv: any; onHsvChange: (hsv: any) => void }> = ({ hsv, onHsvChange }) => {
    const size = 130;
    const offset = (200 - size) / 2;
    const containerRef = useRef<SVGGElement>(null);

    const handleInteraction = (e: React.MouseEvent, isDragging: boolean) => {
        if (!containerRef.current || (!e.buttons && isDragging)) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const s = Math.max(0, Math.min(100, x / size * 100));
        const v = Math.max(0, Math.min(100, (1 - y / size) * 100));
        onHsvChange({ ...hsv, s, v });
    };

    const handlePos = { x: offset + hsv.s / 100 * size, y: offset + (1 - hsv.v / 100) * size };

    return (
        <g ref={containerRef} onMouseDown={(e) => handleInteraction(e, false)} onMouseMove={(e) => handleInteraction(e, true)}>
            <defs>
                <linearGradient id="sv-sat"><stop offset="0%" stopColor="#fff" /><stop offset="100%" stopColor={`hsl(${hsv.h}, 100%, 50%)`} /></linearGradient>
                <linearGradient id="sv-val" x2="0" y2="1"><stop offset="0%" stopColor="rgba(0,0,0,0)" /><stop offset="100%" stopColor="#000" /></linearGradient>
            </defs>
            <rect x={offset} y={offset} width={size} height={size} fill="url(#sv-sat)" />
            <rect x={offset} y={offset} width={size} height={size} fill="url(#sv-val)" />
            <circle cx={handlePos.x} cy={handlePos.y} r={6} fill="none" stroke="#fff" strokeWidth={2} pointerEvents="none" style={{mixBlendMode: 'difference'}}/>
        </g>
    );
};

const TrianglePicker: React.FC<{ hsl: any; onHslChange: (hsl: any) => void }> = ({ hsl, onHslChange }) => {
    const containerRef = useRef<SVGGElement>(null);
    const size = 150;
    const center = 100;
    const h = (Math.sqrt(3)/2) * size;

    const v_white = { x: center, y: center - h/2 };
    const v_black = { x: center - size/2, y: center + h/2 };
    const v_hue = { x: center + size/2, y: center + h/2 };
    const points = `${v_white.x},${v_white.y} ${v_black.x},${v_black.y} ${v_hue.x},${v_hue.y}`;

    const handleInteraction = (e: React.MouseEvent, isDragging: boolean) => {
        if (!containerRef.current || (!e.buttons && isDragging)) return;
        const rect = containerRef.current.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        const denominator = ((v_black.y - v_hue.y) * (v_white.x - v_hue.x) + (v_hue.x - v_black.x) * (v_white.y - v_hue.y));
        const w_white = ((v_black.y - v_hue.y) * (px - v_hue.x) + (v_hue.x - v_black.x) * (py - v_hue.y)) / denominator;
        const w_black = ((v_hue.y - v_white.y) * (px - v_hue.x) + (v_white.x - v_hue.x) * (py - v_hue.y)) / denominator;
        const w_hue = 1 - w_white - w_black;

        if (w_white >= 0 && w_black >= 0 && w_hue >= 0) {
            const l = w_white * 1 + w_black * 0 + w_hue * 0.5;
            const s = w_hue;
            onHslChange({ h: hsl.h, s: s * 100, l: l * 100 });
        }
    };

    // Calculate handle position from HSL
    const s_norm = hsl.s / 100;
    const l_norm = hsl.l / 100;
    const w_hue = s_norm;
    const w_white = l_norm - 0.5 * w_hue;
    const w_black = 1 - w_white - w_hue;
    
    const handlePos = {
        x: w_white * v_white.x + w_black * v_black.x + w_hue * v_hue.x,
        y: w_white * v_white.y + w_black * v_black.y + w_hue * v_hue.y,
    };

    return (
        <g ref={containerRef} onMouseDown={(e) => handleInteraction(e, false)} onMouseMove={(e) => handleInteraction(e, true)}>
            <defs>
                <clipPath id="triangle-clip"><polygon points={points} /></clipPath>
                <linearGradient id="triangle-hue-grad" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="white" /><stop offset="100%" stopColor={`hsl(${hsl.h}, 100%, 50%)`} /></linearGradient>
                <linearGradient id="triangle-dark-grad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="rgba(0,0,0,0)" /><stop offset="100%" stopColor="black" /></linearGradient>
            </defs>
            <g clipPath="url(#triangle-clip)">
                <rect x={v_black.x} y={v_white.y} width={size} height={h} fill="url(#triangle-hue-grad)" />
                <rect x={v_black.x} y={v_white.y} width={size} height={h} fill="url(#triangle-dark-grad)" style={{mixBlendMode: 'multiply'}}/>
            </g>
            <circle cx={handlePos.x} cy={handlePos.y} r={6} fill="none" stroke="#fff" strokeWidth={2} pointerEvents="none" style={{mixBlendMode: 'difference'}}/>
        </g>
    );
};


const Swatches: React.FC<{initialColor: string; currentColor: string}> = ({initialColor, currentColor}) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '40px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #1e1e1e' }}>
            <div style={{ background: currentColor, display: 'grid', placeContent: 'center' }}><Text size="xs">New</Text></div>
            <div style={{ background: initialColor, display: 'grid', placeContent: 'center' }}><Text size="xs">Current</Text></div>
        </div>
    );
};

const HarmonySelector: React.FC<{harmony: HarmonyRule, setHarmony: (h: HarmonyRule) => void}> = ({harmony, setHarmony}) => {
    return (
        <SegmentedControl value={harmony} onChange={v => setHarmony(v as HarmonyRule)} options={[
            {label: 'Comp', value: 'complementary'}, {label: 'Analog', value: 'analogous'}, {label: 'Triad', value: 'triadic'}, {label: 'Split', value: 'split'},
        ]} />
    );
}

const ColorInputs: React.FC<{value: string, onChange: (hex: string) => void, colorModel: ColorModel, setColorModel: (m: ColorModel) => void}> = 
    ({value, onChange, colorModel, setColorModel}) => {
    const [localHex, setLocalHex] = useState(value);
    
    useEffect(() => { setLocalHex(value); }, [value]);

    const { r, g, b } = useMemo(() => { const [r,g,b] = parseColor(value); return {r:Math.round(r), g:Math.round(g), b:Math.round(b)}; }, [value]);
    const { h: hsl_h, s: hsl_s, l: hsl_l } = useMemo(() => rgbToHsl(r, g, b), [r,g,b]);
    const hsv = useMemo(() => rgbToHsv(r, g, b), [r,g,b]);

    const handleLocalHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHex = e.target.value;
        setLocalHex(newHex);
        if (newHex.match(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/)) {
            onChange(newHex);
        }
    };
    
    const handleHslChange = (newHsl: {h?: number, s?: number, l?: number}) => {
        const finalHsl = {h: hsl_h, s: hsl_s, l: hsl_l, ...newHsl};
        const newRgb = hslToRgb(finalHsl.h, finalHsl.s, finalHsl.l);
        onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    };
    
    const handleHsvChange = (newHsv: {h?: number, s?: number, v?: number}) => {
        const finalHsv = {...hsv, ...newHsv};
        const newRgb = hsvToRgb(finalHsv.h, finalHsv.s, finalHsv.v);
        onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    };

    return (
        <Stack gap="0.5rem">
            <SegmentedControl value={colorModel} onChange={v => setColorModel(v as ColorModel)} options={[
                {label: 'HEX', value: 'HEX'}, {label: 'HSL', value: 'HSL'}, {label: 'HSV', value: 'HSV'}, {label: 'RGB', value: 'RGB'}
            ]}/>

            {colorModel === 'HEX' && (
                 <Stack direction="row" gap="0.5rem">
                    <Input value={localHex} onChange={handleLocalHexChange} />
                </Stack>
            )}
            {colorModel === 'RGB' && (
                 <Stack direction="row" gap="0.5rem">
                    <Input label="R" value={r} type="number" min={0} max={255} onChange={e => onChange(rgbToHex(Number(e.target.value), g, b))} />
                    <Input label="G" value={g} type="number" min={0} max={255} onChange={e => onChange(rgbToHex(r, Number(e.target.value), b))} />
                    <Input label="B" value={b} type="number" min={0} max={255} onChange={e => onChange(rgbToHex(r, g, Number(e.target.value)))} />
                </Stack>
            )}
             {colorModel === 'HSL' && (
                 <Stack direction="row" gap="0.5rem">
                    <Input label="H" value={Math.round(hsl_h)} type="number" min={0} max={360} onChange={e => handleHslChange({h: Number(e.target.value)})} />
                    <Input label="S" value={Math.round(hsl_s)} type="number" min={0} max={100} onChange={e => handleHslChange({s: Number(e.target.value)})} />
                    <Input label="L" value={Math.round(hsl_l)} type="number" min={0} max={100} onChange={e => handleHslChange({l: Number(e.target.value)})} />
                </Stack>
            )}
            {colorModel === 'HSV' && (
                 <Stack direction="row" gap="0.5rem">
                    <Input label="H" value={Math.round(hsv.h)} type="number" min={0} max={360} onChange={e => handleHsvChange({h: Number(e.target.value)})}/>
                    <Input label="S" value={Math.round(hsv.s)} type="number" min={0} max={100} onChange={e => handleHsvChange({s: Number(e.target.value)})}/>
                    <Input label="V" value={Math.round(hsv.v)} type="number" min={0} max={100} onChange={e => handleHsvChange({v: Number(e.target.value)})}/>
                </Stack>
            )}
        </Stack>
    )
};

export default ColorPicker;