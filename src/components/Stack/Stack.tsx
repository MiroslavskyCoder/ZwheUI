import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column';
    gap?: string;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: boolean;
}

export const Stack: React.FC<StackProps> = ({ 
    direction = 'column', 
    gap = '1rem', 
    align, 
    justify, 
    wrap = false,
    className = '', 
    children, 
    ...props 
}) => {
    const createStyle = useStyles('stack');
    
    const stackClass = createStyle({
        display: 'flex',
        flexDirection: direction,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
    });

    return (
        <div className={`${stackClass} ${className}`} {...props}>
            {children}
        </div>
    );
};