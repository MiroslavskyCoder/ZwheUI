
import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon/Icon';
import { useStyles } from '../../core';

interface IconButtonProps extends Omit<ButtonProps, 'children'> {
    icon: React.ElementType;
    'aria-label': string;
    isRound?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, 'aria-label': ariaLabel, isRound, className = '', ...props }) => {
    const createStyle = useStyles('icon-button');
    
    const iconButtonClass = createStyle({
        padding: '0.5rem',
        borderRadius: isRound ? '50%' : undefined,
    });

    return (
        <Button className={`${iconButtonClass} ${className}`} aria-label={ariaLabel} {...props}>
            <Icon as={icon} size="1.25em" />
        </Button>
    );
};
