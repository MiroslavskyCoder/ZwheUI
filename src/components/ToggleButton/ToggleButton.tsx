import React, { createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider'; 

const ToggleButtonDivider: React.FC = () => {
    const { theme } = useTheme();
    const createStyle = useStyles('toggle-button-divider');
    const dividerClass = createStyle({
        width: '1px',
        backgroundColor: theme.colors.border,
        margin: '0.5rem 0',
    });
    return <div className={dividerClass} />;
};


interface ToggleButtonGroupContextType {
    value: string | string[] | null;
    onChange: (value: string | string[] | null) => void;
    type: 'single' | 'multiple';
    hasCustomDividers: boolean;
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
    maxSplit?: number;
    maxWidth?: string;
}

interface ToggleButtonGroupFC extends React.FC<ToggleButtonGroupProps> {
    Divider: React.FC;
}

export const ToggleButtonGroup: ToggleButtonGroupFC = ({ children, value, onChange, type = 'single', className, maxSplit, maxWidth }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('toggle-button-group');

    const childrenArray = React.Children.toArray(children);
    const isSplitByMax = maxSplit && maxSplit > 0;

    const hasCustomDividers = childrenArray.some(
        (child) => React.isValidElement(child) && child.type === ToggleButtonDivider
    );

    let content: React.ReactNode;

    if (isSplitByMax) {
        // If using maxSplit, we create distinct visual rows.
        const rows: React.ReactNode[][] = [];
        const buttonsOnly = childrenArray.filter(
            (c) => React.isValidElement(c) && c.type !== ToggleButtonDivider
        );

        for (let i = 0; i < buttonsOnly.length; i += maxSplit!) {
            rows.push(buttonsOnly.slice(i, i + maxSplit!));
        }

        const rowContainerClass = createStyle({
            display: 'inline-flex',
            borderRadius: '8px',
            overflow: 'hidden',
            border: `1px solid ${theme.colors.border}`,
        });
        
        content = rows.map((row, index) => (
            <div key={index} className={rowContainerClass}>
                {row}
            </div>
        ));
    } else {
        content = childrenArray;
    }

    const containerClass = createStyle({
        display: isSplitByMax ? 'flex' : 'inline-flex',
        flexDirection: isSplitByMax ? 'column' : 'row',
        alignItems: isSplitByMax ? 'center' : 'stretch',
        gap: isSplitByMax ? '8px' : '0',
        flexWrap: 'wrap', // for maxWidth behavior
        
        // If not splitting by maxSplit, apply the single-group container styles
        borderRadius: !isSplitByMax ? '8px' : '0',
        overflow: !isSplitByMax ? 'hidden' : 'visible',
        border: !isSplitByMax ? `1px solid ${theme.colors.border}` : 'none',
        maxWidth: maxWidth,
    });
    
    const contextValue = { value, onChange, type, hasCustomDividers };

    return (
        <ToggleButtonGroupContext.Provider value={contextValue}>
            <div className={`${containerClass} ${className}`} role={type === 'single' ? 'radiogroup' : 'group'}>
                {content}
            </div>
        </ToggleButtonGroupContext.Provider>
    );
};
ToggleButtonGroup.Divider = ToggleButtonDivider;


interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ children, value, ...props }) => {
    const { value: groupValue, onChange, type, hasCustomDividers } = useToggleButtonGroup();
    const { theme } = useTheme();
    const createStyle = useStyles('toggle-button');

    const isActive = type === 'multiple' ? (groupValue as string[])?.includes(value) : groupValue === value;

    const buttonClass = createStyle({
        padding: '0.5rem 1rem',
        border: 'none',
        borderRight: hasCustomDividers ? 'none' : `1px solid ${theme.colors.border}`,
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