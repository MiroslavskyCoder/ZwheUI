
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SegmentedControlProps {
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, value, onChange, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('segmented-control');

    const containerClass = createStyle({
        display: 'inline-flex',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        padding: '4px',
        border: `1px solid ${theme.colors.border}`,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    const optionClass = createStyle({
        padding: '6px 16px',
        border: 'none',
        background: 'transparent',
        color: theme.colors.textSecondary,
        cursor: 'pointer',
        borderRadius: '6px',
        transition: 'all 0.2s',
        '&[data-active="true"]': {
            backgroundColor: theme.colors.backgroundSecondary,
            color: theme.colors.text,
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        },
    });

    return (
        <div className={`${containerClass} ${className}`}>
            {options.map(option => (
                <button
                    key={option.value}
                    className={optionClass}
                    data-active={value === option.value}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};