import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Button } from '../Button/Button';

interface ToggleButtonGroupContextType {
    value: string | string[] | null;
    onChange: (value: string | string[] | null) => void;
    type: 'single' | 'multiple';
}

const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType | null>(null);

export const useToggleButtonGroup = () => {
    const context = useContext(ToggleButtonGroupContext);
    if (!context) {
        throw new Error('ToggleButton must be used within a ToggleButtonGroup.');
    }
    return context;
};

interface ToggleButtonGroupProps {
    children: React.ReactNode;
    value: string | string[] | null;
    onChange: (value: string | string[] | null) => void;
    type?: 'single' | 'multiple';
    className?: string;
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ children, value, onChange, type = 'single', className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('toggle-button-group');

    const containerClass = createStyle({
        display: 'inline-flex',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `1px solid ${theme.colors.border}`,
    });

    return (
        <ToggleButtonGroupContext.Provider value={{ value, onChange, type }}>
            <div className={`${containerClass} ${className}`} role={type === 'single' ? 'radiogroup' : 'group'}>
                {children}
            </div>
        </ToggleButtonGroupContext.Provider>
    );
};

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ children, value, ...props }) => {
    const { value: groupValue, onChange, type } = useToggleButtonGroup();
    const { theme } = useTheme();
    const createStyle = useStyles('toggle-button');

    const isActive = type === 'multiple' ? (groupValue as string[])?.includes(value) : groupValue === value;

    const buttonClass = createStyle({
        padding: '0.5rem 1rem',
        border: 'none',
        borderRight: `1px solid ${theme.colors.border}`,
        backgroundColor: isActive ? theme.colors.primary : 'transparent',
        color: isActive ? '#fff' : theme.colors.textSecondary,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:last-child': {
            borderRight: 'none',
        },
        '&:hover': {
            backgroundColor: isActive ? theme.colors.primary : 'rgba(255, 255, 255, 0.05)',
        }
    });

    const handleClick = () => {
        if (type === 'single') {
            onChange(value);
        } else {
            const currentValue = (groupValue as string[] | null) || [];
            const newValues = currentValue.includes(value)
                ? currentValue.filter(v => v !== value)
                : [...currentValue, value];
            onChange(newValues);
        }
    };

    return (
        <button className={buttonClass} onClick={handleClick} aria-pressed={isActive} {...props}>
            {children}
        </button>
    );
};
