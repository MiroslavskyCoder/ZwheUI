import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    minItemWidth?: string;
    gap?: string;
    columns?: number;
    alignItems?: string;
    justifyContent?: string;
}

export const Grid: React.FC<GridProps> = ({ 
    minItemWidth = '350px', 
    gap = '1.5rem', 
    columns,
    alignItems,
    justifyContent,
    className = '', 
    children, 
    ...props 
}) => {
    const createStyle = useStyles('grid');
    
    const gridClass = createStyle({
        display: 'grid',
        gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
        gap: gap,
        alignItems: alignItems,
        justifyContent: justifyContent,
    });

    return (
        <div className={`${gridClass} ${className}`} {...props}>
            {children}
        </div>
    );
};