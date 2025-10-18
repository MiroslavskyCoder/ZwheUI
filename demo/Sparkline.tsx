import React from 'react';
import { ChartSparkline, Sofa, Text, Stack, Card, Grid } from '../src/components';
import { useTheme } from '../src/core/theme/ThemeProvider';

const sparklineData1 = Array.from({ length: 20 }, (_, i) => ({ x: i, y: Math.random() * 30 + 10 }));
const sparklineData2 = Array.from({ length: 20 }, (_, i) => ({ x: i, y: 40 - Math.random() * 20 }));
const flatData = Array.from({ length: 20 }, (_, i) => ({ x: i, y: 25 }));


export const SparklineDemo = () => {
    const { theme } = useTheme();
    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Sparkline</Text>
                <Text>A small, lightweight chart, typically used inline to show a trend at a glance without axes or coordinates.</Text>
                <Grid minItemWidth="150px" gap="1rem">
                    <Card>
                        <Stack gap="0.5rem">
                            <Text size="0.875rem" color={theme.colors.textSecondary}>Revenue</Text>
                            <Text size="1.25rem" weight="600">$1,420</Text>
                            <ChartSparkline
                                data={sparklineData1}
                                xAccessor={d => d.x}
                                yAccessor={d => d.y}
                                height={40}
                            />
                        </Stack>
                    </Card>
                    <Card>
                        <Stack gap="0.5rem">
                            <Text size="0.875rem" color={theme.colors.textSecondary}>Subscriptions</Text>
                            <Text size="1.25rem" weight="600">2,312</Text>
                            <ChartSparkline
                                data={sparklineData2}
                                xAccessor={d => d.x}
                                yAccessor={d => d.y}
                                height={40}
                                color={theme.colors.accent}
                            />
                        </Stack>
                    </Card>
                     <Card>
                        <Stack gap="0.5rem">
                            <Text size="0.875rem" color={theme.colors.textSecondary}>Latency</Text>
                            <Text size="1.25rem" weight="600">25ms</Text>
                            <ChartSparkline
                                data={flatData}
                                xAccessor={d => d.x}
                                yAccessor={d => d.y}
                                height={40}
                                color={theme.colors.secondary}
                            />
                        </Stack>
                    </Card>
                </Grid>
            </Stack>
        </Sofa>
    );
}
