import React from 'react';
import { Layer, Card, Text } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Layer

A layout utility for controlling the stacking order of elements using \`z-index\`.

## Props
*   \`z\` (number, optional, default: 0): The \`z-index\` value.
*   \`children\` (React.ReactNode): The content to render.
`;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface LayerProps {
    children?: React.ReactNode;
    z?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const Layer: React.FC<LayerProps> = ({ children, z = 0, className = '', style }) => {
    const createStyle = useStyles('layer');
    const { theme } = useTheme();

    const base = createStyle({
        position: 'relative',
        zIndex: z,
        background: 'transparent',
        color: theme.colors.text
    });

    return (
        <div className={\`\${base} \${className}\`} style={style} data-layer={z}>
            {children}
        </div>
    );
};`;

export const LayerDemo = () => {
    return (
        <DemoSection
            title="Layer"
            description="A utility component for controlling the stacking order (z-index) of elements."
            livePreview={
                <div style={{ position: 'relative', height: '150px', width: '250px' }}>
                    <Layer z={0}>
                        <Card>
                            <Text>This is the base layer (z=0).</Text>
                        </Card>
                    </Layer>
                    <Layer z={10} style={{ position: 'absolute', top: '40px', left: '40px' }}>
                        <Card variant="glass">
                            <Text>This is the top layer (z=10).</Text>
                        </Card>
                    </Layer>
                </div>
            }
            propControls={<Text color="textSecondary">This is a presentational demo. The \`z\` prop controls the stack order.</Text>}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};