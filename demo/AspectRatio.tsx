
import React, { useState } from 'react';
import { AspectRatio, Sofa, Text, Stack, Center, SegmentedControl } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const AspectRatioConfigurator: React.FC<{
    ratio: number;
    setRatio: (r: number) => void;
}> = ({ ratio, setRatio }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Ratio Prop</Text>
        <SegmentedControl 
            value={String(ratio)} 
            onChange={(val) => setRatio(Number(val))} 
            options={[
                { label: '16 / 9', value: String(16/9) },
                { label: '4 / 3', value: String(4/3) },
                { label: '1 / 1', value: '1' },
                { label: '9 / 16', value: String(9/16) },
            ]}
        />
    </Stack>
);

const documentation = `# AspectRatio

A layout component that wraps its children in a container that maintains a specific aspect ratio. Useful for videos, images, or any embedded content.

## Props

*   \`ratio\` (number, optional): The aspect ratio, calculated as \`width / height\`. Defaults to \`16 / 9\`.
*   All other \`Box\` props are supported.

## Usage

\`\`\`tsx
import { AspectRatio } from './src/components';

<AspectRatio ratio={4 / 3}>
  <img src="path/to/image.jpg" alt="A landscape image" />
</AspectRatio>
\`\`\``;

const sourceCode = `import React from 'react';
import { Box } from '../Box/Box';
import { useStyles } from '../../core';

interface AspectRatioProps extends React.ComponentProps<typeof Box<'div'>> {
    ratio?: number;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = 16 / 9, children, className = '', ...props }) => {
    const createStyle = useStyles('aspect-ratio');
    
    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
        '&::before': {
            content: '""',
            display: 'block',
            paddingBottom: \`\${100 / ratio}%\`,
        },
    });

    const contentClass = createStyle({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    });

    return (
        <Box className={\`\${containerClass} \${className}\`} {...props}>
            <div className={contentClass}>
                {children}
            </div>
        </Box>
    );
};`;

export const AspectRatioDemo = () => {
    const { theme } = useTheme();
    const [ratio, setRatio] = useState(16 / 9);

    return (
        <DemoSection
            title="AspectRatio"
            description="A container that maintains a fixed aspect ratio."
            livePreview={
                <AspectRatio ratio={ratio} style={{ backgroundColor: theme.colors.background, borderRadius: '8px' }}>
                    <Center>
                        <Text>{ratio === 16/9 ? '16 / 9' : ratio === 4/3 ? '4 / 3' : ratio === 1 ? '1 / 1' : '9 / 16'}</Text>
                    </Center>
                </AspectRatio>
            }
            propControls={
                <AspectRatioConfigurator ratio={ratio} setRatio={setRatio} />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};