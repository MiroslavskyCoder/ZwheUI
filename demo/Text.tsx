

import React, { useState } from 'react';
import { Text, Stack, Input, SegmentedControl } from '../src/components';
import { useTheme } from '../../core/theme/ThemeProvider';
import { DemoSection } from './DemoSection';

const TextConfigurator: React.FC<{
    as: any; setAs: (a: any) => void;
    size: string; setSize: (s: string) => void;
    weight: string; setWeight: (w: string) => void;
    color: string; setColor: (c: string) => void;
}> = ({ as, setAs, size, setSize, weight, setWeight, color, setColor }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">As Prop</Text>
            <SegmentedControl value={as} onChange={setAs} options={[
                {label: 'p', value: 'p'}, {label: 'span', value: 'span'}, {label: 'h1', value: 'h1'}, {label: 'h2', value: 'h2'}
            ]} />
        </Stack>
        <Input label="Size Prop" value={size} onChange={e => setSize(e.target.value)} />
        <Input label="Weight Prop" value={weight} onChange={e => setWeight(e.target.value)} />
        <Input label="Color Prop" value={color} onChange={e => setColor(e.target.value)} />
    </Stack>
);

const documentation = `# Text

A versatile and polymorphic component for rendering text with consistent, theme-based typography styles. It can be rendered as different HTML elements using the \`as\` prop.

## Props

*   \`as\` (enum: 'p' | 'span' | 'h1' ... , optional): The underlying HTML element.
*   \`size\` (string, optional): The font size (e.g., '1rem', '14px').
*   \`weight\` (string | number, optional): The font weight.
*   \`color\` (string, optional): The text color.

## Usage

\`\`\`tsx
<Text as="h2" size="1.5rem" weight="600">
  Section Title
</Text>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

type TextProps<C extends React.ElementType> = {
    as?: C;
    size?: string;
    weight?: string | number;
    color?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'size' | 'weight' | 'color'>;

type AllowedTags = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre' | 'label';

export const Text = <C extends AllowedTags = 'p'>({
    as: Component = 'p' as C,
    size,
    weight,
    color,
    className = '',
    style,
    ...props
}: TextProps<C>) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text');

    const textClass = createStyle({
        fontSize: size || theme.typography.fontSizes.base,
        fontWeight: String(weight || theme.typography.fontWeights.normal),
        color: color || theme.colors.text,
        lineHeight: theme.typography.lineHeights.normal,
    });

    return React.createElement(Component, {
        className: \`\${textClass} \${className}\`,
        style,
        ...props,
    });
};`;

export const TextDemo = () => {
    const { theme } = useTheme();
    const [as, setAs] = useState('p');
    const [size, setSize] = useState('1rem');
    const [weight, setWeight] = useState('400');
    const [color, setColor] = useState(theme.colors.text);

    const code = `<Text as="${as}" size="${size}" weight="${weight}" color="${color}">
    This is a configurable Text component.
</Text>`;
    
    return (
        <DemoSection
            title="Text"
            description="A versatile component for rendering text with consistent typography styles."
            initialCode={code}
            propControls={
                <TextConfigurator 
                    as={as} setAs={setAs}
                    size={size} setSize={setSize}
                    weight={weight} setWeight={setWeight}
                    color={color} setColor={setColor}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};