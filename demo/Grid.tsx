
import React, { useState } from 'react';
import { Grid, Text, Stack, Card, Input, Slider } from '../src/components';
import { DemoSection } from './DemoSection';

const GridConfigurator: React.FC<{
    columns: number;
    setColumns: (c: number) => void;
    minItemWidth: number;
    setMinItemWidth: (w: number) => void;
    gap: number;
    setGap: (g: number) => void;
}> = ({ columns, setColumns, minItemWidth, setMinItemWidth, gap, setGap }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Columns (fixed, overrides min width)</Text>
            <Slider value={columns} onChange={setColumns} min={0} max={6} step={1} showValue />
            <Text size="xs" color="textSecondary">Set to 0 to use responsive mode with minItemWidth.</Text>
        </Stack>
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Min Item Width (px, responsive mode)</Text>
            <Slider value={minItemWidth} onChange={setMinItemWidth} min={80} max={300} step={10} showValue />
        </Stack>
         <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Gap (rem)</Text>
            <Slider value={gap} onChange={setGap} min={0} max={4} step={0.5} showValue />
        </Stack>
    </Stack>
);

const documentation = `# Grid

A responsive grid layout component. It automatically adjusts the number of columns to fit its container, or uses a fixed number of columns. Now includes a \`Grid.Item\` sub-component for controlling column and row spans.

## Components

*   **Grid**: The main grid container.
*   **Grid.Item**: A wrapper for a grid item, allowing control over its span.

## Props

### Grid
*   \`minItemWidth\` (string, optional, default: '350px'): The minimum width for each item in a responsive grid.
*   \`gap\` (string, optional, default: '1.5rem'): The space between grid items.
*   \`columns\` (number, optional): A fixed number of columns. Overrides \`minItemWidth\`.

### Grid.Item
*   \`colSpan\` (number, optional): The number of columns the item should span.
*   \`rowSpan\` (number, optional): The number of rows the item should span.
`;

const fullSourceCode = `import React from 'react';
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
        gridColumn: colSpan ? \`span \${colSpan}\` : undefined,
        gridRow: rowSpan ? \`span \${rowSpan}\` : undefined,
    });
    return (
        <div className={\`\${itemClass} \${className}\`} {...props}>
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
        gridTemplateColumns: columns ? \`repeat(\${columns}, 1fr)\` : \`repeat(auto-fit, minmax(\${minItemWidth}, 1fr))\`,
        gap: gap,
        alignItems: alignItems,
        justifyContent: justifyContent,
        gridAutoFlow: flow,
        '@media': {
            "(maxWidth: 'sm')": {
                gridTemplateColumns: columns ? undefined : '1fr',
            },
        },
    });

    return (
        <div className={\`\${gridClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};

Grid.Item = GridItem;`;

export const GridDemo = () => {
    const [columns, setColumns] = useState(0);
    const [minItemWidth, setMinItemWidth] = useState(150);
    const [gap, setGap] = useState(1);

    const gridProps = columns > 0 
        ? `columns="${columns}"` 
        : `minItemWidth="${minItemWidth}px"`;

    const code = `<Grid ${gridProps} gap="${gap}rem">
    <Grid.Item colSpan="${columns > 2 ? 2 : 1}"><Card><Text>Item A</Text></Card></Grid.Item>
    <Grid.Item><Card><Text>Item B</Text></Card></Grid.Item>
    <Grid.Item><Card><Text>Item C</Text></Card></Grid.Item>
    <Grid.Item><Card><Text>Item D</Text></Card></Grid.Item>
</Grid>`;


    return (
        <DemoSection
            title="Grid"
            description="A responsive grid layout with support for fixed columns, auto-fit columns, and spanning."
            initialCode={code}
            propControls={
                <GridConfigurator
                    columns={columns} setColumns={setColumns}
                    minItemWidth={minItemWidth} setMinItemWidth={setMinItemWidth}
                    gap={gap} setGap={setGap}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
