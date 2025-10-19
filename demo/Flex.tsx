import React, { useState } from 'react';
import { Flex, Text, Stack, Card, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const FlexConfigurator: React.FC<{
    direction: React.CSSProperties['flexDirection'];
    setDirection: (d: any) => void;
    align: React.CSSProperties['alignItems'];
    setAlign: (a: any) => void;
    justify: React.CSSProperties['justifyContent'];
    setJustify: (j: any) => void;
}> = ({ direction, setDirection, align, setAlign, justify, setJustify }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Direction</Text>
            <SegmentedControl value={direction} onChange={setDirection} options={[{ label: 'row', value: 'row' }, { label: 'column', value: 'column' }]}/>
        </Stack>
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Align Items</Text>
            <SegmentedControl value={align} onChange={setAlign} options={[{ label: 'start', value: 'flex-start' }, { label: 'center', value: 'center' }, { label: 'end', value: 'flex-end' }]}/>
        </Stack>
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Justify Content</Text>
            <SegmentedControl value={justify} onChange={setJustify} options={[{ label: 'start', value: 'flex-start' }, { label: 'center', value: 'center' }, { label: 'end', value: 'flex-end' }, { label: 'space-between', value: 'space-between' }]}/>
        </Stack>
    </Stack>
);

const documentation = `# Flex

A layout component that extends \`Box\` to provide convenient props for creating flexbox layouts.

## Props

*   \`direction\` (string, optional): The \`flex-direction\`.
*   \`align\` (string, optional): The \`align-items\`.
*   \`justify\` (string, optional): The \`justify-content\`.
*   \`wrap\` (string, optional): The \`flex-wrap\`.
*   \`gap\` (string, optional): The \`gap\` between items.
*   All other \`Box\` props are supported.

## Usage

\`\`\`tsx
import { Flex, Box } from './src/components';

<Flex gap="1rem" align="center">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>
\`\`\``;

const sourceCode = `import React from 'react';
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
    const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('row');
    const [align, setAlign] = useState<React.CSSProperties['alignItems']>('center');
    const [justify, setJustify] = useState<React.CSSProperties['justifyContent']>('space-between');

    return (
        <DemoSection
            title="Flex"
            description="A Box with `display: flex` and convenient props for flexbox layouts."
            livePreview={
                <Flex direction={direction} align={align} justify={justify} gap="1rem" style={{width: '100%', minHeight: '100px', backgroundColor: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px'}}>
                    <Card><Text>Item 1</Text></Card>
                    <Card><Text>Item 2</Text></Card>
                    <Card><Text>Item 3</Text></Card>
                </Flex>
            }
            propControls={
                <FlexConfigurator
                    direction={direction} setDirection={setDirection}
                    align={align} setAlign={setAlign}
                    justify={justify} setJustify={setJustify}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
