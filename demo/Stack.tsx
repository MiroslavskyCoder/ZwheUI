
import React, { useState } from 'react';
import { Stack, Sofa, Text, Card, Input, Checkbox, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';
import { useTheme } from '../src/core';

const StackConfigurator: React.FC<{
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    setDirection: (d: any) => void;
    gap: string;
    setGap: (g: string) => void;
    align: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    setAlign: (a: any) => void;
    justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    setJustify: (j: any) => void;
    wrap: boolean;
    setWrap: (w: boolean) => void;
}> = ({ direction, setDirection, gap, setGap, align, setAlign, justify, setJustify, wrap, setWrap }) => {
    const { theme } = useTheme();

    return (
        <Stack gap="1.5rem">
            <Stack gap="4px">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Direction</Text>
                <SegmentedControl value={direction} onChange={setDirection} options={[
                    { label: 'row', value: 'row' }, { label: 'column', value: 'column' }, { label: 'row-reverse', value: 'row-reverse' }, { label: 'column-reverse', value: 'column-reverse' }
                ]}/>
            </Stack>
             <Input label="Gap" value={gap} onChange={(e) => setGap(e.target.value)} />
             <Stack gap="4px">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Align Items</Text>
                <SegmentedControl value={align} onChange={setAlign} options={[
                    { label: 'start', value: 'start' }, { label: 'center', value: 'center' }, { label: 'end', value: 'end' }, { label: 'stretch', value: 'stretch' }
                ]}/>
            </Stack>
             <Stack gap="4px">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Justify Content</Text>
                <SegmentedControl value={justify} onChange={setJustify} options={[
                    { label: 'start', value: 'start' }, { label: 'center', value: 'center' }, { label: 'end', value: 'end' }, { label: 'space-between', value: 'space-between' }
                ]}/>
            </Stack>
            <Checkbox label="Wrap" checked={wrap} onChange={e => setWrap(e.target.checked)} />
        </Stack>
    );
}

const documentation = `# Stack

A layout component for arranging items in a vertical or horizontal stack with a consistent gap between them. It is built on \`flexbox\`.

## Props

*   \`direction\` (enum: 'row' | 'column' | 'row-reverse' | 'column-reverse', optional, default: 'column'): The direction to stack the items (\`flex-direction\`).
*   \`gap\` (string, optional, default: '1rem'): The space between items.
*   \`align\` (string, optional): The alignment of items along the cross axis (\`align-items\`).
*   \`justify\` (string, optional): The alignment of items along the main axis (\`justify-content\`).
*   \`wrap\` (boolean, optional, default: false): Whether to wrap items to the next line (\`flex-wrap\`).
*   All other standard HTML \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
import { Stack, Card } from './src/components';

// Vertical Stack
<Stack gap="1rem">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</Stack>

// Wrapped Horizontal Stack
<Stack direction="row" gap="1rem" align="center" wrap={true}>
  <Card>Item A</Card>
  <Card>Item B</Card>
  <Card>Item C</Card>
</Stack>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    // FIX: Add \`row-reverse\` and \`column-reverse\` to support more flexbox layouts.
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
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
        <div className={\`\${stackClass} \${className}\`} {...props}>
            {children}
        </div>
    );
};`;

export const StackDemo = () => {
    const [direction, setDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
    const [gap, setGap] = useState('1rem');
    const [align, setAlign] = useState<'start' | 'center' | 'end' | 'stretch' | 'baseline'>('center');
    const [justify, setJustify] = useState<'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'>('start');
    const [wrap, setWrap] = useState(true);

    return (
      <DemoSection
        title="Stack"
        description="A layout component for arranging items with consistent spacing, powered by Flexbox."
        livePreview={
            <Stack direction={direction} gap={gap} align={align} justify={justify} wrap={wrap} style={{width: '100%', minHeight: '100px', backgroundColor: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px'}}>
                <Card><Text>Item 1</Text></Card>
                <Card><Text>Item 2</Text></Card>
                <Card><Text>Item 3</Text></Card>
            </Stack>
        }
        propControls={
            <StackConfigurator 
                direction={direction}
                setDirection={setDirection}
                gap={gap}
                setGap={setGap}
                align={align}
                setAlign={setAlign}
                justify={justify}
                setJustify={setJustify}
                wrap={wrap}
                setWrap={setWrap}
            />
        }
        documentation={documentation}
        sourceCode={sourceCode}
      />
    );
};
