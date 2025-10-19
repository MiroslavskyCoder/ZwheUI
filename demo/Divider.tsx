import React, { useState } from 'react';
import { Divider, Text, Stack, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const DividerConfigurator: React.FC<{
    orientation: 'horizontal' | 'vertical';
    setOrientation: (o: any) => void;
}> = ({ orientation, setOrientation }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Orientation Prop</Text>
        <SegmentedControl value={orientation} onChange={setOrientation} options={[{label: 'Horizontal', value: 'horizontal'}, {label: 'Vertical', value: 'vertical'}]} />
    </Stack>
);

const documentation = `# Divider

A component to visually separate content, either horizontally or vertically.

## Props

*   \`orientation\` (enum: 'horizontal' | 'vertical', optional): The orientation of the divider. Defaults to \`horizontal\`.
*   All other standard \`<hr>\` attributes are supported.

## Usage

\`\`\`tsx
import { Divider, Stack, Text } from './src/components';

// Horizontal divider
<Stack>
  <Text>Content above</Text>
  <Divider />
  <Text>Content below</Text>
</Stack>

// Vertical divider
<Stack direction="row" align="center">
  <Text>Left</Text>
  <Divider orientation="vertical" style={{ height: '24px' }}/>
  <Text>Right</Text>
</Stack>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('divider');
    const dividerClass = createStyle({
        border: 'none',
        backgroundColor: theme.colors.border,
        ...(orientation === 'horizontal' 
            ? { height: '1px', width: '100%', margin: '0.5rem 0' }
            : { width: '1px', height: 'auto', alignSelf: 'stretch', margin: '0 0.5rem' }
        ),
    });
    return <hr className={\`\${dividerClass} \${className}\`} {...props} />;
}`;

export const DividerDemo = () => {
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

    return (
        <DemoSection
            title="Divider"
            description="A component to visually separate content, either horizontally or vertically."
            livePreview={
                orientation === 'horizontal' ? (
                    <Stack align="stretch" style={{width: '200px'}}>
                        <Text>Content A</Text>
                        <Divider orientation="horizontal" />
                        <Text>Content B</Text>
                    </Stack>
                ) : (
                    <Stack direction="row" align="center" style={{ height: '40px' }}>
                        <Text>Item 1</Text>
                        <Divider orientation="vertical" />
                        <Text>Item 2</Text>
                    </Stack>
                )
            }
            propControls={<DividerConfigurator orientation={orientation} setOrientation={setOrientation} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
