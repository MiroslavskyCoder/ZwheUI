import React, { useState } from 'react';
import { Text, Stack, FloatingActionButton, SegmentedControl } from '../src/components';
import { PlusIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const FABConfigurator: React.FC<{
    size: 'small' | 'medium' | 'large';
    setSize: (s: any) => void;
}> = ({ size, setSize }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Size Prop</Text>
        <SegmentedControl value={size} onChange={setSize} options={[{label: 'Small', value: 'small'}, {label: 'Medium', value: 'medium'}, {label: 'Large', value: 'large'}]} />
    </Stack>
);

const documentation = `# Floating Action Button (FAB)

A circular button that appears in front of all screen content, typically used for a primary or common action.

## Props

*   \`icon\` (React.ElementType, required): The icon component to display inside the button.
*   \`label\` (string, required): An accessible label for the button, as it has no visible text.
*   \`position\` (object, optional): An object with \`top\`, \`bottom\`, \`left\`, \`right\` properties to position the FAB. Defaults to \`{ bottom: '2rem', right: '2rem' }\`.
*   \`size\` (enum: 'small' | 'medium' | 'large', optional, default: 'medium'): The size of the button.
*   All other props are passed down to the underlying \`Button\` component (e.g., \`onClick\`).

## Usage

\`\`\`tsx
import { FloatingActionButton } from './src/components';
import { PlusIcon } from './src/icons';

<FloatingActionButton
  icon={PlusIcon}
  label="Add new item"
  onClick={() => alert('FAB clicked!')}
/>
\`\`\``;

const sourceCode = `import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon/Icon';
import { useStyles } from '../../core';

interface FloatingActionButtonProps extends Omit<ButtonProps, 'variant'> {
    icon: React.ElementType;
    label: string; // for accessibility
    position?: { bottom?: string; right?: string; top?: string; left?: string };
    size?: 'small' | 'medium' | 'large';
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
    icon,
    label,
    position = { bottom: '2rem', right: '2rem' },
    size = 'medium',
    className = '',
    ...props
}) => {
    const createStyle = useStyles('fab');

    const sizes = {
        small: { wrapper: '40px', icon: 18 },
        medium: { wrapper: '56px', icon: 24 },
        large: { wrapper: '72px', icon: 32 },
    };

    const fabClass = createStyle({
        position: 'fixed',
        ...position,
        width: sizes[size].wrapper,
        height: sizes[size].wrapper,
        borderRadius: '50%',
        padding: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 40,
    });

    return (
        <Button
            variant="primary"
            className={\`\${fabClass} \${className}\`}
            aria-label={label}
            {...props}
        >
            <Icon as={icon} size={sizes[size].icon} />
        </Button>
    );
};`;

export const FloatingActionButtonDemo = () => {
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');

    return (
        <>
            <DemoSection
                title="Floating Action Button"
                description='A circular button for a primary action that "floats" above the UI. The button is fixed to the viewport, not this container.'
                livePreview={
                    <Text color="textSecondary">
                        The FAB is positioned at the bottom right of the screen. Change its props below.
                    </Text>
                }
                propControls={
                    <FABConfigurator size={size} setSize={setSize} />
                }
                documentation={documentation}
                fullSourceCode={sourceCode}
            />
            <FloatingActionButton
                key={size} // Re-mount on size change to see effect
                icon={PlusIcon}
                label="Add new item"
                onClick={() => alert('FAB clicked!')}
                size={size}
            />
        </>
    );
};