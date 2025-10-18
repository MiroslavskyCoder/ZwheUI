
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ label, id, checked, disabled, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('switch');

    const containerClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
    });
    
    const trackClass = createStyle({
        width: '40px',
        height: '22px',
        borderRadius: '999px',
        backgroundColor: checked ? theme.colors.primary : theme.colors.border,
        position: 'relative',
        transition: 'background-color 0.2s',
    });
    
    const thumbClass = createStyle({
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: '2px',
        left: checked ? '20px' : '2px',
        transition: 'left 0.2s ease',
    });

    return (
        <label htmlFor={id} className={containerClass}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                disabled={disabled}
                role="switch"
                aria-checked={checked}
                {...props}
                style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            />
            <div className={trackClass}>
                <div className={thumbClass}></div>
            </div>
            {label && <span>{label}</span>}
        </label>
    );
};
