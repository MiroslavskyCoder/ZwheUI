import React, { useState } from 'react';
import { Icon, Text, Stack, Button, Input, Slider } from '../src/components';
import { 
    HomeIcon, SettingsIcon, UserIcon, LoginIcon, SendIcon
} from '../src/icons';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const IconConfigurator: React.FC<{
    size: number;
    setSize: (s: number) => void;
    color: string;
    setColor: (c: string) => void;
}> = ({ size, setSize, color, setColor }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Size ({size}px)</Text>
            <Slider value={size} onChange={setSize} min={12} max={48} />
        </Stack>
        <Input label="Color" value={color} onChange={e => setColor(e.target.value)} />
    </Stack>
);

const documentation = `# Icon

A flexible component for rendering SVG icons, allowing for consistent sizing and coloring across the application.

## Props

*   \`as\` (React.ElementType, required): The SVG icon component to render (e.g., \`HomeIcon\`).
*   \`size\` (number | string, optional, default: '1em'): The width and height of the icon.
*   \`className\` (string, optional): Additional CSS classes for custom styling.
*   All other standard SVG attributes are supported (e.g., \`color\`, \`strokeWidth\`).

## Usage

First, import the \`Icon\` component and the specific icon you want to use.

\`\`\`tsx
import { Icon } from './src/components';
import { HomeIcon, SettingsIcon } from './src/icons';

// Basic usage
<Icon as={HomeIcon} />

// With custom size and color
<Icon as={SettingsIcon} size={24} color="#60a5fa" />

// Inside another component, like a Button
<Button>
  <Icon as={HomeIcon} size={16} />
  <span>Dashboard</span>
</Button>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface IconProps extends React.SVGAttributes<SVGElement> {
    as: React.ElementType;
    size?: number | string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ as, size = '1em', className = '', ...props }) => {
    const createStyle = useStyles('icon');
    const { theme } = useTheme();

    const iconClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit', // Inherit color by default
    });

    const IconComponent = as;
    
    const combinedClassName = \`\${iconClass} \${className}\`;

    const style = {
        width: size,
        height: size,
    };

    return (
        <span className={combinedClassName} style={style}>
            <IconComponent {...props} />
        </span>
    );
};`;

export const IconDemo = () => {
    const { theme } = useTheme();
    const [size, setSize] = useState(24);
    const [color, setColor] = useState(theme.colors.primary);

    return (
        <DemoSection
            title="Icon"
            description="A flexible component for rendering SVG icons with consistent sizing and coloring."
            livePreview={
                <Stack direction="row" gap="1.5rem" align="center">
                    <Icon as={HomeIcon} size={size} color={color} />
                    <Icon as={SettingsIcon} size={size} color={color} />
                    <Icon as={UserIcon} size={size} color={color} />
                    <Icon as={LoginIcon} size={size} color={color} />
                    <Icon as={SendIcon} size={size} color={color} />
                </Stack>
            }
            propControls={
                <IconConfigurator size={size} setSize={setSize} color={color} setColor={setColor} />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
