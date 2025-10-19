import React, { useState } from 'react';
import { IconButton, Text, Stack, Checkbox, SegmentedControl } from '../src/components';
import { SettingsIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const IconButtonConfigurator: React.FC<{
    variant: 'primary' | 'secondary' | 'accent';
    setVariant: (v: any) => void;
    isRound: boolean;
    setIsRound: (r: boolean) => void;
}> = ({ variant, setVariant, isRound, setIsRound }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Variant Prop</Text>
            <SegmentedControl value={variant} onChange={setVariant} options={[{label: 'Primary', value: 'primary'}, {label: 'Secondary', value: 'secondary'}, {label: 'Accent', value: 'accent'}]} />
        </Stack>
        <Checkbox label="Is Round Prop" checked={isRound} onChange={e => setIsRound(e.target.checked)} />
    </Stack>
);

const documentation = `# IconButton

A button variant for rendering only an icon. It's crucial to provide an \`aria-label\` for accessibility.

## Props

*   \`icon\` (React.ElementType, required): The icon component to render.
*   \`aria-label\` (string, required): A label for accessibility, as the button has no visible text.
*   \`isRound\` (boolean, optional): If true, the button will be circular.
*   All other \`Button\` props (except \`children\`) are supported.

## Usage

\`\`\`tsx
import { IconButton } from './src/components';
import { SettingsIcon } from './src/icons';

<IconButton
  icon={SettingsIcon}
  aria-label="Settings"
  onClick={() => alert('Settings clicked')}
/>

<IconButton
  icon={SettingsIcon}
  aria-label="Settings"
  isRound
/>
\`\`\``;

const sourceCode = `import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon/Icon';
import { useStyles } from '../../core';

interface IconButtonProps extends Omit<ButtonProps, 'children'> {
    icon: React.ElementType;
    'aria-label': string;
    isRound?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, 'aria-label': ariaLabel, isRound, className = '', ...props }) => {
    const createStyle = useStyles('icon-button');
    
    const iconButtonClass = createStyle({
        padding: '0.5rem',
        borderRadius: isRound ? '50%' : undefined,
    });

    return (
        <Button className={\`\${iconButtonClass} \${className}\`} aria-label={ariaLabel} {...props}>
            <Icon as={icon} size="1.25em" />
        </Button>
    );
};`;

export const IconButtonDemo = () => {
    const [variant, setVariant] = useState<'primary' | 'secondary' | 'accent'>('primary');
    const [isRound, setIsRound] = useState(false);

    return (
        <DemoSection
            title="Icon Button"
            description="A button for rendering a single icon."
            livePreview={
                <IconButton icon={SettingsIcon} aria-label="Settings" variant={variant} isRound={isRound} />
            }
            propControls={
                <IconButtonConfigurator 
                    variant={variant}
                    setVariant={setVariant}
                    isRound={isRound}
                    setIsRound={setIsRound}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
