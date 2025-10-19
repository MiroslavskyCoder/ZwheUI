
import React from 'react';
import { Stack } from '../Stack/Stack';
import { useStyles } from '../../core';

interface ButtonGroupProps extends React.ComponentProps<typeof Stack> {
    isAttached?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ isAttached, className, children, ...props }) => {
    const createStyle = useStyles('button-group');
    
    const attachedClass = isAttached ? createStyle({
        '& > button:not(:first-child)': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        '& > button:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
        },
    }) : '';

    return (
        // FIX: The `gap` prop for Stack expects a string. Changed 0 to '0'.
        <Stack direction="row" gap={isAttached ? '0' : '0.5rem'} className={`${attachedClass} ${className}`} {...props}>
            {children}
        </Stack>
    );
};
