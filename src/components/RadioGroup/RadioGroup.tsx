
import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface RadioGroupContextType {
    value: string;
    onChange: (value: string) => void;
    name: string;
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

const useRadioGroup = () => {
    const context = useContext(RadioGroupContext);
    if (!context) throw new Error('RadioGroupItem must be used within a RadioGroup.');
    return context;
};

interface RadioGroupProps {
    children: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    name: string;
    label?: string;
    className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, value, onChange, name, label, className }) => {
    return (
        <RadioGroupContext.Provider value={{ value, onChange, name }}>
            <div role="radiogroup" aria-label={label} className={className}>
                {label && <Text as="span" style={{marginBottom: '0.5rem', display: 'block'}}>{label}</Text>}
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};

interface RadioGroupItemProps {
    value: string;
    label: string;
    className?: string;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, label, className }) => {
    const { value: selectedValue, onChange, name } = useRadioGroup();
    const { theme } = useTheme();
    const createStyle = useStyles('radio-item');
    const isChecked = selectedValue === value;

    const containerClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
        cursor: 'pointer',
        padding: `${theme.spacing.sm} 0`,
    });

    const radioClass = createStyle({
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        border: `2px solid ${isChecked ? theme.colors.primary : theme.colors.border}`,
        display: 'grid',
        placeContent: 'center',
        transition: 'all 0.2s',
    });
    
    const indicatorClass = createStyle({
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: theme.colors.primary,
        transform: isChecked ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.2s',
    });

    return (
        <label className={`${containerClass} ${className}`}>
            <input 
                type="radio" 
                name={name} 
                value={value} 
                checked={isChecked} 
                onChange={() => onChange(value)}
                style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} 
            />
            <span className={radioClass}>
                <span className={indicatorClass}></span>
            </span>
            <Text as="span">{label}</Text>
        </label>
    );
};
