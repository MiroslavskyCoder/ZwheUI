import React, { useState } from 'react';
import { Spinner, Text, Stack, Slider } from '../src/components';
import { DemoSection } from './DemoSection';

const SpinnerConfigurator: React.FC<{
    size: number;
    setSize: (s: number) => void;
}> = ({ size, setSize }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Size Prop</Text>
        <Slider value={size} onChange={setSize} min={12} max={48} showValue />
    </Stack>
);

const documentation = `# Spinner

A simple, circular loading indicator that uses a spinning animation. It is an alternative to \`CircularProgress\` for when a simpler visual is needed.

## Props

*   \`size\` (number, optional, default: 24): The width and height of the spinner in pixels.
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

\`\`\`tsx
import { Spinner } from './src/components';

<Spinner size={32} />
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SpinnerProps {
    size?: number;
    className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 24, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('spinner');

    const spinnerClass = createStyle({
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        border: '2px solid transparent',
        borderTopColor: theme.colors.primary,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    });

    return <div className={\`\${spinnerClass} \${className}\`} role="status" aria-label="Loading"></div>;
};`;

export const SpinnerDemo = () => {
    const [size, setSize] = useState(24);
    return (
        <DemoSection
            title="Spinner"
            description="A simple loading indicator."
            livePreview={<Spinner size={size} />}
            propControls={<SpinnerConfigurator size={size} setSize={setSize} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};