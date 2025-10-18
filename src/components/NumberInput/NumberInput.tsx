
import React from 'react';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button';
import { Layout } from '../Layout/Layout';
import { useStyles } from '../../core/hooks/useStyles';

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min, max, step = 1, className }) => {
    const createStyle = useStyles('number-input');

    const handleStep = (direction: 'up' | 'down') => {
        const newValue = value + (direction === 'up' ? step : -step);
        if (min !== undefined && newValue < min) return;
        if (max !== undefined && newValue > max) return;
        onChange(newValue);
    };

    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
    });

    const stepperButtonClass = createStyle({
        padding: '0 4px',
        minWidth: '24px',
        height: '100%',
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <TextInput
                type="number"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value, 10))}
                min={min}
                max={max}
                step={step}
                style={{ borderRadius: '0.375rem 0 0 0.375rem', borderRight: 0 }}
            />
            <Layout direction="column" gap="2px" style={{height: '100%'}}>
                <Button variant="secondary" onClick={() => handleStep('up')} className={stepperButtonClass} style={{borderRadius: '0 0.375rem 0 0', height: '50%'}}>+</Button>
                <Button variant="secondary" onClick={() => handleStep('down')} className={stepperButtonClass} style={{borderRadius: '0 0 0.375rem 0', height: '50%'}}>-</Button>
            </Layout>
        </div>
    );
};
