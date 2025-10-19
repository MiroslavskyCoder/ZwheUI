import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    colSpan?: number;
    rowSpan?: number;
}

const GridItem: React.FC<GridItemProps> = ({
    colSpan,
    rowSpan,
    className = '',
    children,
    ...props
}) => {
    const createStyle = useStyles('grid-item');
    const itemClass = createStyle({
        gridColumn: colSpan ? `span ${colSpan}` : undefined,
        gridRow: rowSpan ? `span ${rowSpan}` : undefined,
    });
    return (
        <div className={`${itemClass} ${className}`} {...props}>
            {children}
        </div>
    );
};
GridItem.displayName = 'Grid.Item';


interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    minItemWidth?: string;
    gap?: string;
    columns?: number;
    alignItems?: string;
    justifyContent?: string;
    flow?: 'row' | 'column';
}

export const Grid: React.FC<GridProps> & { Item: typeof GridItem } = ({ 
    minItemWidth = '350px', 
    gap = '1.5rem', 
    columns,
    alignItems,
    justifyContent,
    flow = 'row',
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
        gridAutoFlow: flow,
        '@media': {
            // On small screens, force a single column layout for better readability on auto-fit grids
            "(maxWidth: 'sm')": {
                gridTemplateColumns: columns ? undefined : '1fr',
            },
        },
    });

    return (
        <div className={`${gridClass} ${className}`} {...props}>
            {children}
        </div>
    );
};

Grid.Item = GridItem;