
import React from 'react';
import {
    Charts, ChartArea, ChartAxis, ChartBar, ChartHeatmap, ChartLine, ChartRadar, RadarSeries,
    ChartRadial, ChartTooltip, Sofa, Stack, Text
} from '../src/components';
import { useTheme } from '../src/core/theme/ThemeProvider';

const timeSeriesData = Array.from({ length: 50 }, (_, i) => ({
    x: i,
    y1: Math.sin(i / 5) * 50 + 50,
    y2: Math.cos(i / 5) * 25 + 30,
}));

const barData = [
    { x: 1, y: 50 }, { x: 2, y: 90 }, { x: 3, y: 30 }, { x: 4, y: 70 }, { x: 5, y: 45 },
];

const heatmapData = {
    data: [
        [10, 50, 20],
        [80, 10, 90],
        [40, 70, 30],
    ],
    rowLabels: ['Alpha', 'Beta', 'Gamma'],
    colLabels: ['X', 'Y', 'Z'],
};

const radarData: RadarSeries[] = [
    {
        series: 'Product A',
        color: '#60a5fa',
        values: [
            { axis: 'Usability', value: 8 },
            { axis: 'Performance', value: 9 },
            { axis: 'Features', value: 6 },
            { axis: 'Support', value: 7 },
            { axis: 'Price', value: 5 },
        ]
    },
    {
        series: 'Product B',
        color: '#f59e0b',
        values: [
            { axis: 'Usability', value: 6 },
            { axis: 'Performance', value: 7 },
            { axis: 'Features', value: 9 },
            { axis: 'Support', value: 8 },
            { axis: 'Price', value: 8 },
        ]
    }
];

const radialData = [
    { value: 45, color: '#60a5fa', label: 'Desktop' },
    { value: 35, color: '#f59e0b', label: 'Mobile' },
    { value: 20, color: '#4b5563', label: 'Tablet' },
]


export const ChartsDemo = () => {
    const { theme } = useTheme();
    return (
        <Sofa>
            <Stack gap="2rem">
                <Text as="h2" size="1.5rem" weight="600">Line & Area Chart</Text>
                <Charts data={timeSeriesData} xAccessor={d => d.x} yAccessor={d => d.y1} className="h-[300px]" style={{height: '300px'}}>
                    <ChartAxis dimension="x" />
                    <ChartAxis dimension="y" />
                    <ChartArea yAccessor={d => d.y2} color={theme.colors.accent} />
                    <ChartLine yAccessor={d => d.y2} color={theme.colors.accent} />
                    <ChartArea yAccessor={d => d.y1} />
                    <ChartLine yAccessor={d => d.y1} />
                    <ChartTooltip series={[
                        { key: 'y1', label: 'Series 1', color: theme.colors.primary, accessor: d => d.y1 },
                        { key: 'y2', label: 'Series 2', color: theme.colors.accent, accessor: d => d.y2 },
                    ]} />
                </Charts>

                <Text as="h2" size="1.5rem" weight="600">Bar Chart</Text>
                <Charts data={barData} xAccessor={d => d.x} yAccessor={d => d.y} className="h-[300px]" style={{height: '300px'}}>
                    <ChartAxis dimension="x" />
                    <ChartAxis dimension="y" />
                    <ChartBar />
                </Charts>

                <Text as="h2" size="1.5rem" weight="600">Specialty Charts</Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div>
                        <Text className="text-center mb-4">Radar Chart</Text>
                        <ChartRadar data={radarData} size={250} />
                    </div>
                     <div>
                        <Text className="text-center mb-4">Radial Chart</Text>
                        <ChartRadial data={radialData} size={250} />
                    </div>
                    <div>
                         <Text className="text-center mb-4">Heatmap</Text>
                        <ChartHeatmap {...heatmapData} />
                    </div>
                </div>
            </Stack>
        </Sofa>
    );
};
