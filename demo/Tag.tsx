import React, { useState } from 'react';
import { Tag, Text, Stack, Input, SegmentedControl, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const TagConfigurator: React.FC<{
    variant: 'solid' | 'outline';
    setVariant: (v: any) => void;
    colorScheme: 'primary' | 'accent' | 'success' | 'error';
    setColorScheme: (c: any) => void;
    size: 'sm' | 'md' | 'lg';
    setSize: (s: any) => void;
    childrenText: string;
    setChildrenText: (t: string) => void;
    showClose: boolean;
    setShowClose: (s: boolean) => void;
}> = ({ variant, setVariant, colorScheme, setColorScheme, size, setSize, childrenText, setChildrenText, showClose, setShowClose }) => (
    <Stack gap="1.5rem">
        <Input label="Children Prop (Text)" value={childrenText} onChange={e => setChildrenText(e.target.value)} />
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Variant Prop</Text>
            <SegmentedControl value={variant} onChange={setVariant} options={[{ label: 'Solid', value: 'solid' }, { label: 'Outline', value: 'outline' }]}/>
        </Stack>
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Color Scheme Prop</Text>
            <SegmentedControl value={colorScheme} onChange={setColorScheme} options={[
                { label: 'Primary', value: 'primary' }, 
                { label: 'Accent', value: 'accent' },
                { label: 'Success', value: 'success' },
                { label: 'Error', value: 'error' },
            ]}/>
        </Stack>
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Size Prop</Text>
            <SegmentedControl value={size} onChange={setSize} options={[{label: 'Small', value: 'sm'}, {label: 'Medium', value: 'md'}, {label: 'Large', value: 'lg'}]} />
        </Stack>
        <Checkbox label="Show Close Button" checked={showClose} onChange={e => setShowClose(e.target.checked)} />
    </Stack>
);

const documentation = `# Tag

A component for labeling and categorizing content. It's similar to a \`Badge\` but supports different sizes and can include an optional close button.

## Props

*   \`variant\` (enum: 'solid' | 'outline', optional): The visual style.
*   \`colorScheme\` (enum: 'primary' | 'accent' | 'success' | 'error', optional): The color theme.
*   \`size\` (enum: 'sm' | 'md' | 'lg', optional): The size of the tag.

## Components

*   **Tag.CloseButton**: An optional button to render inside the tag, typically for removal.

## Usage

\`\`\`tsx
import { Tag } from './src/components';

<Tag colorScheme="success" size="lg">
  Completed
  <Tag.CloseButton onClick={() => alert('Closing!')} />
</Tag>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles, useTheme } from '../../core';
import { hexToRgba } from '../../core/color/utils';
import { Icon } from '../Icon/Icon';
import { TimesIcon } from '../../icons';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> { /* ... */ }

const Tag: React.FC<TagProps> = ({ children, variant = 'solid', colorScheme = 'primary', size = 'md', className = '', ...props }) => {
    /* ...styles... */
    return <span className={\`\${tagClass} \${className}\`} {...props}>{children}</span>;
};

const TagCloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    /* ...styles... */
    return (
        <button className={buttonClass} aria-label="Remove tag" {...props}>
            <Icon as={TimesIcon} size="0.8em" />
        </button>
    );
};

interface CompoundTag { (props: TagProps): React.ReactElement; CloseButton: typeof TagCloseButton; }
const CompoundTag = Tag as CompoundTag;
CompoundTag.CloseButton = TagCloseButton;
export { CompoundTag as Tag };`;

export const TagDemo = () => {
    const [variant, setVariant] = useState<'solid' | 'outline'>('solid');
    const [colorScheme, setColorScheme] = useState<'primary' | 'accent' | 'success' | 'error'>('primary');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [childrenText, setChildrenText] = useState('React');
    const [showClose, setShowClose] = useState(true);

    return (
        <DemoSection
            title="Tag"
            description="A label for categorizing content, with sizes and an optional close button."
            livePreview={
                <Tag variant={variant} colorScheme={colorScheme} size={size}>
                    {childrenText}
                    {showClose && <Tag.CloseButton />}
                </Tag>
            }
            propControls={
                <TagConfigurator
                    variant={variant} setVariant={setVariant}
                    colorScheme={colorScheme} setColorScheme={setColorScheme}
                    size={size} setSize={setSize}
                    childrenText={childrenText} setChildrenText={setChildrenText}
                    showClose={showClose} setShowClose={setShowClose}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
