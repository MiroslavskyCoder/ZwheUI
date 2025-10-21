import React from 'react';
import { useAudio } from './AudioContext';
import { Slider } from '../Slider/Slider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Card } from '../Card/Card';

const bandLabels = ['Bass Boost', 'Mid', 'Treble'];

export const AudioFilters: React.FC = () => {
    const { eqBands, setEqBands, isGraphReady } = useAudio();
    
    if (!isGraphReady) {
        return <Text size="12px" color="textSecondary" style={{textAlign: 'center', padding: '1rem'}}>Play audio to enable effects.</Text>;
    }

    const handleGainChange = (index: number, newGain: number) => {
        setEqBands(currentBands => 
            currentBands.map((band, i) => i === index ? { ...band, gain: newGain } : band)
        );
    };

    return (
        <Card>
            <Card.Body>
                <Stack gap="1rem">
                    <Text weight="600" style={{textAlign: 'center'}}>Equalizer</Text>
                    {eqBands.map((band, index) => (
                        <Stack key={band.freq} gap="0.25rem">
                            <Text as="span" size="14px">{bandLabels[index] || `${band.freq} Hz`}</Text>
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
            </Card.Body>
        </Card>
    );
};
