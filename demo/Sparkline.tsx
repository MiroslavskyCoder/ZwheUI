import React from 'react';
import { ChartSparkline, Text, Stack, Card, Grid } from '../src/components';
import { useTheme } from '../src/core/theme/ThemeProvider';
import { DemoSection } from './DemoSection';

const sparklineData1 = Array.from({ length: 20 }, (_, i) => ({ x: i, y: Math.random() * 30 + 10 }));
const sparklineData2 = Array.from({ length: 20 }, (_, i) => ({ x: i, y: 40 - Math.random() * 20 }));
const flatData = Array.from({ length: 20 }, (_, i) => ({ x: i, y: 25 }));

const documentation = `# ChartSparkline

A small, lightweight, standalone chart. It's typically used inline to show a trend at a glance, without axes or coordinates.

## Props

*   \`data\` (array, required): The dataset to be visualized.
*   \`xAccessor\` (function, required): A function to access the x-value from a data point.
*   \`yAccessor\` (function, required): A function to access the y-value from a data point.
*   \`width\` (number | string, optional): The width of the SVG element.
*   \`height\` (number | string, optional): The height of the SVG element.
*   \`color\` (string, optional): The color of the line and area fill. Defaults to the theme's primary color.

## Usage

\`\`\`tsx
import { ChartSparkline } from './src/components';

const data = Array.from({ length: 20 }, (_, i) => ({ x: i, y: Math.random() * 30 }));

<ChartSparkline
  data={data}
  xAccessor={d => d.x}
  yAccessor={d => d.y}
  height={40}
/>
\`\`\``;

const sourceCode = `import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { createLinearScale } from '../../core/utils/scale';
import { hexToRgba } from '../../core/color/utils';

interface ChartSparklineProps { /*...*/ }

export const ChartSparkline: React.FC<ChartSparklineProps> = (props) => {
    /* ... internal logic for calculating path and scales ... */

    return (
        <svg 
            width={width} 
            height={height} 
            viewBox={\`0 0 \${viewBoxWidth} \${viewBoxHeight}\`} 
            preserveAspectRatio="none"
        >
            <path d={areaPath} fill={hexToRgba(lineColor, 0.1)} />
            <path d={linePath} fill="none" stroke={lineColor} />
            <circle cx={lastPoint.x} cy={lastPoint.y} r={strokeWidth * 1.2} fill={lineColor} />
        </svg>
    );
};`;


export const SparklineDemo = () => {
    const { theme } = useTheme();
    return (
        <DemoSection
            title="Sparkline"
            description="A small, lightweight chart, typically used inline to show a trend at a glance."
            livePreview={
                <Grid minItemWidth="150px" gap="1rem">
                    <Card>
                        <Stack gap="0.5rem">
                            <Text size="0.875rem" color={theme.colors.textSecondary}>Revenue</Text>
                            <Text size="1.25rem" weight="600">$1,420</Text>
                            <ChartSparkline data={sparklineData1} xAccessor={d => d.x} yAccessor={d => d.y} height={40} />
                        </Stack>
                    </Card>
                    <Card>
                        <Stack gap="0.5rem">
                            <Text size="0.875rem" color={theme.colors.textSecondary}>Subscriptions</Text>
                            <Text size="1.25rem" weight="600">2,312</Text>
                            <ChartSparkline data={sparklineData2} xAccessor={d => d.x} yAccessor={d => d.y} height={40} color={theme.colors.accent} />
                        </Stack>
                    </Card>
                     <Card>
                        <Stack gap="0.5rem">
                            <Text size="0.875rem" color={theme.colors.textSecondary}>Latency</Text>
                            <Text size="1.25rem" weight="600">25ms</Text>
                            <ChartSparkline data={flatData} xAccessor={d => d.x} yAccessor={d => d.y} height={40} color={theme.colors.secondary} />
                        </Stack>
                    </Card>
                </Grid>
            }
            propControls={<Text color="textSecondary">This is a presentational component. Its props are demonstrated in the preview.</Text>}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
}