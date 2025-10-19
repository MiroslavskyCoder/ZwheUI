import React, { useState } from 'react';
import { Center, Text, Stack, Card, Input } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const CenterConfigurator: React.FC<{
    as: React.ElementType;
    setAs: (as: any) => void;
}> = ({ as, setAs }) => (
    // FIX: The `as` prop can be a component, which is not a valid `value` for an input.
    // Conditionally render the string value or an empty string.
    <Input label="As Prop" value={typeof as === 'string' ? as : ''} onChange={e => setAs(e.target.value)} />
);

const documentation = `# Center

A layout component that centers its children both horizontally and vertically. It is built on top of the \`Flex\` component.

## Props

*   All \`Flex\` props are supported.

## Usage

\`\`\`tsx
import { Center } from './src/components';

<Center style={{ height: '100px', background: '#333' }}>
  <p>Centered Content</p>
</Center>
\`\`\``;

const sourceCode = `import React from 'react';
import { Flex } from '../Flex/Flex';

type CenterProps<C extends React.ElementType> = React.ComponentProps<typeof Flex<C>>;

export const Center = <C extends React.ElementType = 'div'>(props: CenterProps<C>) => {
    return (
        <Flex
            align="center"
            justify="center"
            {...props}
        />
    );
};`;

export const CenterDemo = () => {
    const { theme } = useTheme();
    const [as, setAs] = useState<React.ElementType>('div');
    return (
        <DemoSection
            title="Center"
            description="A layout component to center its children both horizontally and vertically."
            livePreview={
                <Center as={as} style={{ height: '100px', width: '100%', backgroundColor: theme.colors.background, borderRadius: '8px' }}>
                    <Card><Text>Perfectly Centered</Text></Card>
                </Center>
            }
            propControls={<CenterConfigurator as={as} setAs={setAs} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};