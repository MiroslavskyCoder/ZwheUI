
import React from 'react';
import { ChartsDisplay } from './ChartsDisplay';
import { ChartsProvider } from './ChartsProvider';
import { ChartDimensions } from './ChartsContext';
import { ChartLine } from './ChartLine';
import { ChartArea } from './ChartArea';
import { ChartBar } from './ChartBar';

export interface SeriesDef {
  type: 'line' | 'area' | 'bar';
  dataKey: string;
  color?: string;
}

interface ChartsProps {
    dataset: any[];
    xAxis: { dataKey: string }[];
    series: SeriesDef[];
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Charts: React.FC<ChartsProps> = ({ dataset, xAxis, series, children, className, style }) => {
    return (
        <ChartsDisplay className={className} style={style}>
            {(dimensions: ChartDimensions) => (
                <ChartsProvider dataset={dataset} xAxis={xAxis} series={series} dimensions={dimensions}>
                    <svg width={dimensions.width} height={dimensions.height}>
                        <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
                            {series.map(s => {
                                const yAccessor = (d: any) => d[s.dataKey];
                                switch (s.type) {
                                    case 'line':
                                        return <ChartLine key={`${s.type}-${s.dataKey}`} yAccessor={yAccessor} color={s.color} />;
                                    case 'area':
                                        return <ChartArea key={`${s.type}-${s.dataKey}`} yAccessor={yAccessor} color={s.color} />;
                                    case 'bar':
                                        return <ChartBar key={`${s.type}-${s.dataKey}`} yAccessor={yAccessor} color={s.color} />;
                                    default:
                                        return null;
                                }
                            })}
                            {children}
                        </g>
                    </svg>
                </ChartsProvider>
            )}
        </ChartsDisplay>
    );
};