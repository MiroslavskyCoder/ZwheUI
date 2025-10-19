
import React, { useState } from 'react';
import { Flex, Text, Stack, Card, SegmentedControl } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const FlexConfigurator: React.FC<{
    direction: React.CSSProperties['flexDirection'];
    setDirection: (d: any) => void;
    align: React.CSSProperties['alignItems'];
    setAlign: (a: any) => void;
    justify: React.CSSProperties['justifyContent'];
    setJustify: (j: any) => void;
    wrap: React.CSSProperties['flexWrap'];
    setWrap: (w: any) => void;
}> = ({ direction, setDirection, align, setAlign, justify, setJustify, wrap, setWrap }) => {
    return (
        <Stack gap="1.5rem">
            <Stack gap="0.5rem">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Direction</Text>
                <SegmentedControl value={direction} onChange={setDirection} options={[
                    { label: 'row', value: 'row' },
                    { label: 'column', value: 'column' },
                    { label: 'row-reverse', value: 'row-reverse' },
                    { label: 'column-reverse', value: 'column-reverse' }
                ]}/>
            </Stack>
            <Stack gap="0.5rem">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Align Items</Text>
                <SegmentedControl value={align} onChange={setAlign} options={[
                    { label: 'start', value: 'flex-start' },
                    { label: 'center', value: 'center' },
                    { label: 'end', value: 'flex-end' },
                    { label: 'stretch', value: 'stretch' }
                ]}/>
            </Stack>
            <Stack gap="0.5rem">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Justify Content</Text>
                <SegmentedControl value={justify} onChange={setJustify} options={[
                    { label: 'start', value: 'flex-start' },
                    { label: 'center', value: 'center' },
                    { label: 'end', value: 'flex-end' },
                    { label: 'space-between', value: 'space-between' }
                ]}/>
            </Stack>
            <Stack gap="0.5rem">
                <Text as="label" size="sm" weight="medium" color="textSecondary">Wrap</Text>
                <SegmentedControl value={wrap} onChange={setWrap} options={[
                    { label: 'nowrap', value: 'nowrap' },
                    { label: 'wrap', value: 'wrap' }
                ]}/>
            </Stack>
        </Stack>
    );
};

const documentation = `# Flex

A polymorphic layout primitive that renders a \`div\` by default but can be changed to any other HTML element using the \`as\` prop. It provides convenient props for controlling flexbox layouts.

## Props

*   \`as\` (React.ElementType, optional): The underlying HTML element to render.
*   \`direction\` (CSS \`flex-direction\`, optional)
*   \`align\` (CSS \`align-items\`, optional)
*   \`justify\` (CSS \`justify-content\`, optional)
*   \`wrap\` (CSS \`flex-wrap\`, optional)
*   \`gap\` (CSS \`gap\`, optional)

## Usage

\`\`\`tsx
<Flex direction="row" gap="1rem" align="center">
  <Card>Item A</Card>
  <Card>Item B</Card>
</Flex>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core';

type FlexProps<C extends React.ElementType> = {
    as?: C;
    direction?: React.CSSProperties['flexDirection'];
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    wrap?: React.CSSProperties['flexWrap'];
    gap?: React.CSSProperties['gap'];
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

export const Flex = <C extends React.ElementType = 'div'>({
    direction,
    align,
    justify,
    wrap,
    gap,
    as: Component = 'div' as C,
    className,
    ...props
}: FlexProps<C>) => {
    const createStyle = useStyles('flex');

    const flexClass = createStyle({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap: gap,
    });

    const finalClassName = [flexClass, className].filter(Boolean).join(' ');

    return React.createElement(Component, { ...props, className: finalClassName });
};`;


export const FlexDemo = () => {
    const { theme } = useTheme();
    const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('row');
    const [align, setAlign] = useState<React.CSSProperties['alignItems']>('center');
    const [justify, setJustify] = useState<React.CSSProperties['justifyContent']>('flex-start');
    const [wrap, setWrap] = useState<React.CSSProperties['flexWrap']>('wrap');

    const code = `<Flex direction="${direction}" align="${align}" justify="${justify}" wrap="${wrap}" gap="1rem">
    <Card><Text>Item 1</Text></Card>
    <Card><Text>Item 2</Text></Card>
    <Card><Text>Item 3</Text></Card>
</Flex>`;

    return (
        <DemoSection
            title="Flex"
            description="A layout component for arranging items with consistent spacing, powered by Flexbox."
            initialCode={code}
            propControls={
                <FlexConfigurator
                    direction={direction} setDirection={setDirection}
                    align={align} setAlign={setAlign}
                    justify={justify} setJustify={setJustify}
                    wrap={wrap} setWrap={setWrap}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
