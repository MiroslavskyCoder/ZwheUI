import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { hexToRgba } from '../../core/color/utils';

interface ChartHeatmapProps {
    data: number[][]; // 2D array of values
    rowLabels: string[];
    colLabels: string[];
    className?: string;
}

export const ChartHeatmap: React.FC<ChartHeatmapProps> = ({ data, rowLabels, colLabels, className = '' }) => {
    const { theme } = useTheme();
    if (!data.length || !data[0].length) return null;

    const numRows = data.length;
    const numCols = data[0].length;
    const maxValue = Math.max(...data.flat());
    const color = theme.colors.primary;

    const cellWidth = 30;
    const cellHeight = 20;
    const rowLabelOffset = 40;
    const colLabelOffset = 20;
    const gridWidth = numCols * cellWidth;
    const gridHeight = numRows * cellHeight;
    const width = gridWidth + rowLabelOffset;
    const height = gridHeight + colLabelOffset;

    return (
        <div className={className} style={{ display: 'grid', placeItems: 'center' }}>
            <svg width={width} height={height}>
                {/* Column Labels */}
                {colLabels.map((label, i) => (
                    <text
                        key={`col-${i}`}
                        x={rowLabelOffset + i * cellWidth + cellWidth / 2}
                        y={height - 5}
                        textAnchor="middle"
                        fontSize="12"
                        fill={theme.colors.textSecondary}
                    >
                        {label}
                    </text>
                ))}

                {/* Row Labels */}
                {rowLabels.map((label, i) => (
                     <text
                        key={`row-${i}`}
                        x={rowLabelOffset - 8}
                        y={i * cellHeight + cellHeight / 2}
                        textAnchor="end"
                        alignmentBaseline="middle"
                        fontSize="12"
                        fill={theme.colors.textSecondary}
                    >
                        {label}
                    </text>
                ))}

                {/* Heatmap Cells */}
                <g transform={`translate(${rowLabelOffset}, 0)`}>
                {data.map((row, i) =>
                    row.map((value, j) => (
                        <rect
                            key={`${i}-${j}`}
                            x={j * cellWidth}
                            y={i * cellHeight}
                            width={cellWidth - 2}
                            height={cellHeight - 2}
                            fill={hexToRgba(color, value / maxValue)}
                            rx="2"
                            ry="2"
                        />
                    ))
                )}
                </g>
            </svg>
        </div>
    );
};