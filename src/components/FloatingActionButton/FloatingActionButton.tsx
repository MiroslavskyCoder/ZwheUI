import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon/Icon';
import { useStyles } from '../../core';

interface FloatingActionButtonProps extends Omit<ButtonProps, 'variant'> {
    icon: React.ElementType;
    label: string; // for accessibility
    position?: { bottom?: string; right?: string; top?: string; left?: string };
    size?: 'small' | 'medium' | 'large';
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
    icon,
    label,
    position = { bottom: '2rem', right: '2rem' },
    size = 'medium',
    className = '',
    ...props
}) => {
    const createStyle = useStyles('fab');

    const sizes = {
        small: { wrapper: '40px', icon: 18 },
        medium: { wrapper: '56px', icon: 24 },
        large: { wrapper: '72px', icon: 32 },
    };

    const fabClass = createStyle({
        position: 'fixed',
        ...position,
        width: sizes[size].wrapper,
        height: sizes[size].wrapper,
        borderRadius: '50%',
        padding: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 40,
    });

    return (
        <Button
            variant="primary"
            className={`${fabClass} ${className}`}
            aria-label={label}
            {...props}
        >
            <Icon as={icon} size={sizes[size].icon} />
        </Button>
    );
};
