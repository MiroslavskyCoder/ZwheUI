
import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

// --- COMPONENT-SPECIFIC TYPES ---

interface RadarDataPoint {
    axis: string;
    value: number;
}

export interface RadarSeries {
    series: string;
    color: string;
    values: RadarDataPoint[];
}

interface ChartRadarProps {
    data: RadarSeries[];
    size?: number;
    maxValue?: number;
    className?: string;
    gridLevels?: number;
}


// --- RADAR CHART COMPONENT ---

export const ChartRadar: React.FC<ChartRadarProps> = ({
    data,
    size = 300,
    maxValue: propMaxValue,
    className = '',
    gridLevels = 5,
}) => {
    const { theme } = useTheme();

    // --- VALIDATION & INITIAL CALCULATION ---

    if (!data || data.length === 0 || !data[0].values || data[0].values.length === 0) {
        return null;
    }

    const axes = data[0].values.map(v => v.axis);
    const numAxes = axes.length;
    const angleSlice = (Math.PI * 2) / numAxes;

    const center = size / 2;
    const radius = center * 0.75; // Leave space for labels

    const maxValue = propMaxValue || Math.max(...data.flatMap(series => series.values.map(v => v.value)));

    // --- SVG RENDER HELPERS ---

    const renderGrid = () => (
        <g className="radar-grid">
            {/* Concentric polygons for levels */}
            {Array.from({ length: gridLevels }).map((_, i) => {
                const levelRadius = radius * ((i + 1) / gridLevels);
                const points = Array.from({ length: numAxes }).map((__, j) => {
                    const angle = angleSlice * j - Math.PI / 2;
                    const x = center + levelRadius * Math.cos(angle);
                    const y = center + levelRadius * Math.sin(angle);
                    return `${x.toFixed(2)},${y.toFixed(2)}`;
                }).join(' ');
                return (
                    <polygon
                        key={`grid-level-${i}`}
                        points={points}
                        stroke={theme.colors.border}
                        strokeWidth="1"
                        fill="none"
                    />
                );
            })}

            {/* Spokes from center to edge */}
            {axes.map((_, i) => {
                const angle = angleSlice * i - Math.PI / 2;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                return (
                    <line
                        key={`spoke-${i}`}
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke={theme.colors.border}
                        strokeWidth="1"
                    />
                );
            })}
        </g>
    );

    const renderLabels = () => (
        <g className="radar-labels">
            {axes.map((axis, i) => {
                const angle = angleSlice * i - Math.PI / 2;
                const labelRadius = radius * 1.15;
                const x = center + labelRadius * Math.cos(angle);
                const y = center + labelRadius * Math.sin(angle);
                return (
                    <text
                        key={`label-${i}`}
                        x={x}
                        y={y}
                        textAnchor={Math.abs(x - center) < 1 ? 'middle' : x > center ? 'start' : 'end'}
                        dominantBaseline="middle"
                        fontSize="12px"
                        fill={theme.colors.textSecondary}
                    >
                        {axis}
                    </text>
                );
            })}
        </g>
    );

    const renderData = () => (
        <g className="radar-data">
            {data.map((series, seriesIndex) => {
                const points = series.values.map((point, i) => {
                    const pointRadius = (point.value / maxValue) * radius;
                    const angle = angleSlice * i - Math.PI / 2;
                    const x = center + pointRadius * Math.cos(angle);
                    const y = center + pointRadius * Math.sin(angle);
                    return `${x.toFixed(2)},${y.toFixed(2)}`;
                }).join(' ');

                return (
                    <polygon
                        key={`series-${seriesIndex}`}
                        points={points}
                        stroke={series.color}
                        strokeWidth="2"
                        fill={hexToRgba(series.color, 0.25)}
                        style={{ transition: 'all 0.3s' }}
                    />
                );
            })}
        </g>
    );

    return (
        <div className={className} style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={size} height={size}>
                {renderGrid()}
                {renderData()}
                {renderLabels()}
            </svg>
        </div>
    );
};
