
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column';
    gap?: string;
    align?: string;
    justify?: string;
}

export const Stack: React.FC<StackProps> = ({ 
    direction = 'column', 
    gap = '1rem', 
    align, 
    justify, 
    className = '', 
    children, 
    ...props 
}) => {
    const createStyle = useStyles('stack');
    
    const stackClass = createStyle({
        display: 'grid',
        gridAutoFlow: direction === 'row' ? 'column' : 'row',
        gap: gap,
        alignItems: align,
        justifyItems: justify,
    });

    return (
        <div className={`${stackClass} ${className}`} {...props}>
            {children}
        </div>
    );
};
