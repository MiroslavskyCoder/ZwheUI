import React, { useState } from 'react';
import { Box, Text, Stack, Input } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const BoxConfigurator: React.FC<{
    as: React.ElementType;
    setAs: (as: any) => void;
}> = ({ as, setAs }) => (
    // FIX: The `as` prop can be a component, which is not a valid `value` for an input.
    // Conditionally render the string value or an empty string.
    <Input label="As Prop" value={typeof as === 'string' ? as : ''} onChange={e => setAs(e.target.value)} />
);

const documentation = `# Box

A polymorphic layout primitive that renders a \`div\` by default but can be changed to any other HTML element using the \`as\` prop.

## Props

*   \`as\` (React.ElementType, optional): The underlying HTML element to render. Defaults to \`div\`.
*   All other standard HTML attributes for the rendered element are supported.

## Usage

\`\`\`tsx
import { Box } from './src/components';

// Renders a div
<Box style={{ padding: '1rem', background: '#333' }}>
  This is a box.
</Box>

// Renders a section element
<Box as="section">
  This is a section.
</Box>
\`\`\``;

const sourceCode = `import React from 'react';

type BoxProps<C extends React.ElementType> = {
    as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

export const Box = <C extends React.ElementType = 'div'>({
    as: Component = 'div' as C,
    ...props
}: BoxProps<C>) => {
    return React.createElement(Component, props);
};`;

export const BoxDemo = () => {
    const { theme } = useTheme();
    const [as, setAs] = useState<React.ElementType>('div');

    return (
        <DemoSection
            title="Box"
            description="A polymorphic layout primitive, a foundational building block for other components."
            livePreview={
                <Box as={as} style={{ padding: '1rem', backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}`, borderRadius: '8px' }}>
                    <Text>This is a &lt;{typeof as === 'string' ? as : 'Component'}&gt; element.</Text>
                </Box>
            }
            propControls={
                <BoxConfigurator as={as} setAs={setAs} />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};