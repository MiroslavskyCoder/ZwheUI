import React from 'react';
import { Stat, Grid } from '../src/components';
import { DemoSection } from './DemoSection';
import { UsersIcon, CoinsIcon, ShoppingCartIcon } from '../src/icons';

const documentation = `# Stat

A component for displaying a single statistic, typically including a label, a value, and optional contextual information like a trend indicator or help text.

## Props
*   \`label\` (string, required): The title for the statistic.
*   \`value\` (string, required): The main value of the statistic.
*   \`icon\` (React.ElementType, optional): An icon to display.
*   \`helpText\` (string, optional): Additional descriptive text.
*   \`indicator\` (enum: 'up' | 'down', optional): Displays a trend arrow.
*   \`change\` (string, optional): Text to display next to the trend indicator.
`;

const fullSourceCode = `import React from 'react';
import { Card, Stack, Text, Icon } from '..';
import { useStyles, useTheme } from '../../core';
import { ArrowUpIcon, ArrowDownIcon } from '../../icons';

interface StatProps { /* ... */ }

export const Stat: React.FC<StatProps> = ({ label, value, icon, helpText, indicator, change }) => {
    // ... component logic
    return (
        <Card>
            {/* ... component structure ... */}
        </Card>
    );
};`;


export const StatDemo = () => {
    return (
        <DemoSection
            title="Stat"
            description="A component for displaying key statistics and data points."
            livePreview={
                <Grid minItemWidth="200px" gap="1rem">
                    <Stat
                        label="Total Users"
                        value="12,403"
                        icon={UsersIcon}
                        indicator="up"
                        change="+5.2%"
                        helpText="since last month"
                    />
                    <Stat
                        label="Revenue"
                        value="$4,805"
                        icon={CoinsIcon}
                        indicator="down"
                        change="-1.8%"
                        helpText="since last month"
                    />
                    <Stat
                        label="Sales"
                        value="852"
                        icon={ShoppingCartIcon}
                        helpText="in the last 24h"
                    />
                </Grid>
            }
            propControls={
                <p>This is a presentational demo. See documentation for prop details.</p>
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
