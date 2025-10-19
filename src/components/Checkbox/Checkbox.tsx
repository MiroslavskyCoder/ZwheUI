import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', checked, disabled, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('checkbox');
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: theme.spacing.sm,
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.6 : 1,
    });
    
    const customCheckboxClass = createStyle({
        width: '18px',
        height: '18px',
        border: '2px solid',
        borderRadius: '4px',
        display: 'grid',
        placeContent: 'center',
        transition: 'all 0.2s',
        backgroundColor: checked ? theme.colors.primary : 'transparent',
        borderColor: checked ? theme.colors.primary : theme.colors.border,
    });

    const inputClass = createStyle({
        position: 'absolute',
        opacity: 0,
        height: 0,
        width: 0,
        '&:focus-visible + div': {
            boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.primary}`,
        }
    });

    return (
        <label htmlFor={id} className={`${containerClass} ${className}`}>
            <input 
                type="checkbox" 
                id={id} 
                checked={checked} 
                disabled={disabled}
                {...props} 
                className={inputClass}
            />
            <div className={customCheckboxClass}>
                 {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.background} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
            </div>
            {label && <span style={{color: theme.colors.text}}>{label}</span>}
        </label>
    );
};