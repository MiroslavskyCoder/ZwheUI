
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { useStyles, useTheme } from '../../core';
import { Flex } from '../Flex/Flex';

interface PinInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
}

export const PinInput: React.FC<PinInputProps> = ({ length = 4, value = '', onChange }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('pin-input');
    const [localValue, setLocalValue] = useState(value);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = [...localValue];
        newValue[index] = e.target.value.slice(-1); // Only take the last character
        const finalValue = newValue.join('').slice(0, length);
        setLocalValue(finalValue);
        onChange?.(finalValue);

        // Focus next input
        if (e.target.value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length);
        setLocalValue(pastedData);
        onChange?.(pastedData);
        // Focus the last relevant input
        const lastIndex = Math.min(length - 1, pastedData.length -1);
        inputRefs.current[lastIndex]?.focus();
    };

    const inputClass = createStyle({
        width: '40px',
        height: '40px',
        textAlign: 'center',
        fontSize: '1.25rem',
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '6px',
        color: theme.colors.text,
        transition: 'all 0.2s',
        '&:focus': {
            outline: 'none',
            borderColor: theme.colors.primary,
            boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.primary}`,
        }
    });

    return (
        <Flex gap="0.5rem">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    // FIX: Wrap ref callback in curly braces to prevent returning a value.
                    ref={el => { inputRefs.current[index] = el; }}
                    className={inputClass}
                    type="text"
                    maxLength={1}
                    value={localValue[index] || ''}
                    onChange={e => handleChange(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                />
            ))}
        </Flex>
    );
};
