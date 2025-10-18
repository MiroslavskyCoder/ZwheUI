import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    minItemWidth?: string;
    gap?: string;
}

export const Grid: React.FC<GridProps> = ({ minItemWidth = '350px', gap = '1.5rem', className = '', children, ...props }) => {
    const createStyle = useStyles('grid');
    
    const gridClass = createStyle({
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
        gap: gap,
    });

    return (
        <div className={`${gridClass} ${className}`} {...props}>
            {children}
        </div>
    );
};
