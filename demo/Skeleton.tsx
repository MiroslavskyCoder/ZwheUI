import React, { useState } from 'react';
import { Skeleton, Text, Stack, Input, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const SkeletonConfigurator: React.FC<{
    variant: 'text' | 'rect' | 'circle';
    setVariant: (v: any) => void;
    width: string;
    setWidth: (w: string) => void;
    height: string;
    setHeight: (h: string) => void;
}> = ({ variant, setVariant, width, setWidth, height, setHeight }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Variant Prop</Text>
            <SegmentedControl value={variant} onChange={setVariant} options={[{label: 'Text', value: 'text'}, {label: 'Rect', value: 'rect'}, {label: 'Circle', value: 'circle'}]} />
        </Stack>
        <Input label="Width Prop" value={width} onChange={e => setWidth(e.target.value)} />
        <Input label="Height Prop" value={height} onChange={e => setHeight(e.target.value)} />
    </Stack>
);

const documentation = `# Skeleton

A placeholder component used to indicate that content is loading. It shows a shimmering shape that mimics the final content's structure, improving perceived performance.

## Props

*   \`width\` (string, optional, default: '100%'): The width of the skeleton shape.
*   \`height\` (string, optional, default: '1rem'): The height of the skeleton shape.
*   \`variant\` (enum: 'text' | 'rect' | 'circle', optional, default: 'text'): The shape of the skeleton placeholder.
*   All other standard HTML \`<div>\` attributes are supported.

## Usage

\`\`\`tsx
import { Skeleton, Stack } from './src/components';

<Stack gap="0.5rem">
    <Skeleton width="80%" height="1.2rem" />
    <Skeleton variant="circle" width="40px" height="40px" />
    <Skeleton variant="rect" height="100px" />
</Stack>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    variant?: 'text' | 'rect' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = '1rem',
    variant = 'text',
    className = '',
    style,
    ...props
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('skeleton');

    const animationClass = createStyle({
        '@keyframes shimmer': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
        },
        animation: 'shimmer 2s infinite linear',
        backgroundImage: \`linear-gradient(90deg, \${theme.colors.border} 25%, rgba(255,255,255,0.1) 50%, \${theme.colors.border} 75%)\`,
        backgroundSize: '2000px 100%',
    });

    const baseClass = createStyle({
        backgroundColor: theme.colors.border,
        width,
        height,
        borderRadius: variant === 'circle' ? '50%' : (variant === 'text' ? '4px' : '8px'),
    });

    return (
        <div
            className={\`\${baseClass} \${animationClass} \${className}\`}
            style={style}
            {...props}
        />
    );
};`;

export const SkeletonDemo = () => {
    const [variant, setVariant] = useState<'text' | 'rect' | 'circle'>('text');
    const [width, setWidth] = useState('80%');
    const [height, setHeight] = useState('1rem');

    return (
        <DemoSection
            title="Skeleton"
            description="A placeholder component to indicate that content is loading, improving perceived performance."
            livePreview={
                <Skeleton variant={variant} width={width} height={height} />
            }
            propControls={
                <SkeletonConfigurator 
                    variant={variant} setVariant={setVariant}
                    width={width} setWidth={setWidth}
                    height={height} setHeight={setHeight}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
