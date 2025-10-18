
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface StepperProps {
    activeStep: number;
    steps: { label: string; description?: string }[];
    className?: string;
}

export const Stepper: React.FC<StepperProps> = ({ activeStep, steps, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('stepper');

    const containerClass = createStyle({
        display: 'flex',
        alignItems: 'flex-start',
    });
    
    const stepClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flex: 1,
        '&:last-child': {
            flex: '0 1 auto',
        },
        '&:last-child > div:last-child': { // Hide connector on last step
             display: 'none',
        },
    });
    
    const stepContentClass = createStyle({
        textAlign: 'center',
        minWidth: '60px'
    });

    const circleClass = (index: number) => createStyle({
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        transition: 'all 0.3s',
        backgroundColor: index <= activeStep ? theme.colors.primary : theme.colors.border,
        color: index <= activeStep ? '#fff' : theme.colors.textSecondary,
        border: `2px solid ${index <= activeStep ? theme.colors.primary : 'transparent'}`,
        margin: '0 auto',
        marginBottom: theme.spacing.sm,
    });
    
    const connectorClass = (index: number) => createStyle({
        height: '2px',
        flex: 1,
        backgroundColor: index < activeStep ? theme.colors.primary : theme.colors.border,
        transition: 'background-color 0.3s',
        margin: '0 -1px',
        position: 'relative',
        top: '16px' // align with center of circle
    });

    return (
        <div className={`${containerClass} ${className}`}>
            {steps.map((step, index) => (
                <div key={index} className={stepClass}>
                    <div className={stepContentClass}>
                        <div className={circleClass(index)}>{index + 1}</div>
                        <Text size="14px" weight={index === activeStep ? 600 : 400}>
                            {step.label}
                        </Text>
                    </div>
                    <div className={connectorClass(index)} />
                </div>
            ))}
        </div>
    );
};
