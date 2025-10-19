import React, { useState } from 'react';
import { Badge, Text, Stack, Input, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const BadgeConfigurator: React.FC<{
    variant: 'solid' | 'outline';
    setVariant: (v: any) => void;
    colorScheme: 'primary' | 'accent' | 'success' | 'error';
    setColorScheme: (c: any) => void;
    childrenText: string;
    setChildrenText: (t: string) => void;
}> = ({ variant, setVariant, colorScheme, setColorScheme, childrenText, setChildrenText }) => (
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
    </Stack>
);

const documentation = `# Badge

A small component used to highlight status, metadata, or other snippet-sized information.

## Props

*   \`children\` (React.ReactNode): The content to display inside the badge.
*   \`variant\` (enum: 'solid' | 'outline', optional, default: 'solid'): The visual style of the badge.
*   \`colorScheme\` (enum: 'primary' | 'accent' | 'success' | 'error', optional, default: 'primary'): The color theme of the badge.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Badge } from './src/components';

<Badge colorScheme="success">
  Active
</Badge>

<Badge colorScheme="error" variant="outline">
  Offline
</Badge>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline';
    colorScheme?: 'primary' | 'accent' | 'success' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'solid', colorScheme = 'primary', className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('badge');

    const colors = {
        primary: theme.colors.primary,
        accent: theme.colors.accent,
        success: '#10b981',
        error: '#ef4444',
    };
    
    const baseColor = colors[colorScheme];

    const variantStyles = {
        solid: {
            backgroundColor: hexToRgba(baseColor, 0.2),
            color: baseColor,
            border: '1px solid transparent',
        },
        outline: {
            backgroundColor: 'transparent',
            color: baseColor,
            border: \`1px solid \${baseColor}\`,
        },
    };

    const badgeClass = createStyle({
        display: 'inline-block',
        padding: '0.125rem 0.625rem',
        fontSize: '0.75rem',
        fontWeight: '500',
        borderRadius: '999px',
        lineHeight: '1.25',
        ...variantStyles[variant],
    });

    return (
        <span className={\`\${badgeClass} \${className}\`} {...props}>
            {children}
        </span>
    );
};`;

export const BadgeDemo = () => {
    const [variant, setVariant] = useState<'solid' | 'outline'>('solid');
    const [colorScheme, setColorScheme] = useState<'primary' | 'accent' | 'success' | 'error'>('primary');
    const [childrenText, setChildrenText] = useState('New');

    return (
        <DemoSection
            title="Badge"
            description="A small component to highlight status or metadata."
            livePreview={
                <Badge variant={variant} colorScheme={colorScheme}>{childrenText}</Badge>
            }
            propControls={
                <BadgeConfigurator 
                    variant={variant} setVariant={setVariant}
                    colorScheme={colorScheme} setColorScheme={setColorScheme}
                    childrenText={childrenText} setChildrenText={setChildrenText}
                />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};