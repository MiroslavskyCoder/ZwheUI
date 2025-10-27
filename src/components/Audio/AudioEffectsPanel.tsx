import React from 'react';
import { useAudio } from './AudioContext';
import { Slider } from '../Slider/Slider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Card } from '../Card/Card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion/Accordion';
import { Checkbox } from '../Checkbox/Checkbox';

const EQSection: React.FC = () => {
    const { eqBands, setEqBands } = useAudio();

    const handleGainChange = (index: number, newGain: number) => {
        setEqBands(currentBands =>
            currentBands.map((band, i) => i === index ? { ...band, gain: newGain } : band)
        );
    };

    return (
        <Stack gap="1rem">
            {eqBands.map((band, index) => (
                <Stack key={band.freq} gap="0.25rem">
                    <Text as="span" size="14px">{band.label || `${band.freq} Hz`}</Text>
                    <Slider
                        value={band.gain}
                        onChange={(gain) => handleGainChange(index, gain)}
                        min={-12}
                        max={12}
                        step={1}
                        showValue
                    />
                </Stack>
            ))}
        </Stack>
    );
};

interface ParamConfig {
    key: string;
    label: string;
    min: number;
    max: number;
    step: number;
}

const EffectSection: React.FC<{ effectName: string; paramsConfig: ParamConfig[] }> = ({ effectName, paramsConfig }) => {
    const { effectsState, setEffectsState } = useAudio();
    const effect = effectsState[effectName];
    if (!effect) return null;

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEffectsState(prev => ({
            ...prev,
            [effectName]: { ...prev[effectName], enabled: e.target.checked }
        }));
    };

    const handleOptionChange = (optionKey: string, value: number) => {
        setEffectsState(prev => ({
            ...prev,
            [effectName]: {
                ...prev[effectName],
                options: { ...prev[effectName].options, [optionKey]: value }
            }
        }));
    };

    return (
        <Stack gap="1rem">
            <Checkbox label="Enable" checked={effect.enabled} onChange={handleToggle} onClick={e => e.stopPropagation()} />
            {effect.enabled && paramsConfig.map(param => (
                <Stack key={param.key} gap="0.25rem">
                    <Text as="span" size="14px">{param.label} ({effect.options[param.key]})</Text>
                    <Slider
                        value={effect.options[param.key] as number}
                        onChange={(val) => handleOptionChange(param.key, val)}
                        min={param.min}
                        max={param.max}
                        step={param.step}
                        showValue
                    />
                </Stack>
            ))}
        </Stack>
    );
};

const CurveSmartEQSection: React.FC = () => {
    const { effectsState, setEffectsState } = useAudio();
    const effect = effectsState.curveSmartEQ;
    if (!effect) return null;

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEffectsState(prev => ({
            ...prev,
            curveSmartEQ: { ...prev.curveSmartEQ, enabled: e.target.checked }
        }));
    };
    
    const handleGainChange = (index: number, newGain: number) => {
        setEffectsState(prev => {
            const newCurvePoints = [...prev.curveSmartEQ.options.curvePoints];
            newCurvePoints[index] = { ...newCurvePoints[index], g: newGain };
            return {
                ...prev,
                curveSmartEQ: {
                    ...prev.curveSmartEQ,
                    options: {
                        ...prev.curveSmartEQ.options,
                        curvePoints: newCurvePoints,
                    },
                },
            };
        });
    };

    return (
        <Stack gap="1rem">
            <Checkbox label="Enable" checked={effect.enabled} onChange={handleToggle} onClick={e => e.stopPropagation()} />
            {effect.enabled && effect.options.curvePoints.map((point: {f: number, g: number}, index: number) => (
                <Stack key={index} gap="0.25rem">
                    <Text as="span" size="14px">{point.f} Hz Gain ({point.g}dB)</Text>
                    <Slider
                        value={point.g}
                        onChange={(gain) => handleGainChange(index, gain)}
                        min={-12}
                        max={12}
                        step={1}
                        showValue
                    />
                </Stack>
            ))}
        </Stack>
    );
};

const effectParams: Record<string, ParamConfig[]> = {
    bassBoost: [
        { key: 'gain', label: 'Gain (dB)', min: 0, max: 24, step: 1 },
        { key: 'frequency', label: 'Frequency (Hz)', min: 20, max: 400, step: 10 },
    ],
    chorus: [
        { key: 'rate', label: 'Rate (Hz)', min: 0.1, max: 8, step: 0.1 },
        { key: 'depth', label: 'Depth', min: 0.001, max: 0.01, step: 0.001 },
        { key: 'mix', label: 'Mix', min: 0, max: 1, step: 0.05 },
    ],
    compressor: [
        { key: 'threshold', label: 'Threshold (dB)', min: -60, max: 0, step: 1 },
        { key: 'ratio', label: 'Ratio', min: 1, max: 20, step: 1 },
        { key: 'attack', label: 'Attack (s)', min: 0.001, max: 0.1, step: 0.001 },
        { key: 'release', label: 'Release (s)', min: 0.01, max: 1, step: 0.01 },
    ],
    delay: [
        { key: 'delayTime', label: 'Time (s)', min: 0, max: 1, step: 0.05 },
        { key: 'feedback', label: 'Feedback', min: 0, max: 0.9, step: 0.05 },
        { key: 'mix', label: 'Mix', min: 0, max: 1, step: 0.05 },
    ],
    phaser: [
        { key: 'rate', label: 'Rate (Hz)', min: 0.1, max: 5, step: 0.1 },
        { key: 'depth', label: 'Depth', min: 0, max: 1, step: 0.1 },
        { key: 'feedback', label: 'Feedback', min: 0, max: 0.9, step: 0.05 },
        { key: 'mix', label: 'Mix', min: 0, max: 1, step: 0.05 },
    ],
    reverb: [
        { key: 'roomSize', label: 'Room Size', min: 0, max: 1, step: 0.05 },
        { key: 'damping', label: 'Damping', min: 0, max: 1, step: 0.05 },
        { key: 'mix', label: 'Mix', min: 0, max: 1, step: 0.05 },
    ],
    pitchShifter: [
        { key: 'shift', label: 'Shift (semitones)', min: -20, max: 20, step: 1 },
    ],
    eqJs: [
        { key: 'lowGain', label: 'Low Gain', min: 0, max: 2, step: 0.1 },
        { key: 'midGain', label: 'Mid Gain', min: 0, max: 2, step: 0.1 },
        { key: 'highGain', label: 'High Gain', min: 0, max: 2, step: 0.1 },
    ],
    hq: [
        { key: 'clarity', label: 'Clarity', min: 0, max: 1, step: 0.05 },
    ],
};

export const AudioEffectsPanel: React.FC = () => {
    const { isGraphReady } = useAudio();
    
    if (!isGraphReady) {
        return <Text size="12px" color="textSecondary" style={{textAlign: 'center', padding: '1rem'}}>Play audio to enable effects panel.</Text>;
    }

    return (
        <Card>
            <Card.Body>
                <Accordion defaultValue="eq" >
                    <AccordionItem value="eq">
                        <AccordionTrigger><Text weight="600">Equalizer (Native)</Text></AccordionTrigger>
                        <AccordionContent><EQSection /></AccordionContent>
                    </AccordionItem>
                     {Object.entries(effectParams).map(([key, params]) => {
                         const title = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').replace('Js', ' (JS)');
                         return (
                            <AccordionItem key={key} value={key}>
                                <AccordionTrigger><Text weight="600">{title}</Text></AccordionTrigger>
                                <AccordionContent><EffectSection effectName={key} paramsConfig={params} /></AccordionContent>
                            </AccordionItem>
                         )
                     })}
                     <AccordionItem value="curveSmartEQ">
                        <AccordionTrigger><Text weight="600">Curve Smart EQ</Text></AccordionTrigger>
                        <AccordionContent><CurveSmartEQSection /></AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card.Body>
        </Card>
    );
};