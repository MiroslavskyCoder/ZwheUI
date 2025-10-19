
import React from 'react';
import { Box } from '../Box/Box';
import { useStyles } from '../../core';

interface AspectRatioProps extends React.ComponentProps<typeof Box<'div'>> {
    ratio?: number;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = 16 / 9, children, className = '', ...props }) => {
    const createStyle = useStyles('aspect-ratio');
    
    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
        '&::before': {
            content: '""',
            display: 'block',
            paddingBottom: `${100 / ratio}%`,
        },
    });

    const contentClass = createStyle({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    });

    return (
        <Box className={`${containerClass} ${className}`} {...props}>
            <div className={contentClass}>
                {children}
            </div>
        </Box>
    );
};
