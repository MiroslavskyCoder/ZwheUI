
import React, { useMemo } from 'react';
import { ChartsContext, ChartDimensions } from './ChartsContext';
import { createLinearScale } from '../../core/utils/scale';
import { SeriesDef } from './Charts';

interface ChartsProviderProps {
    dataset: any[];
    xAxis: { dataKey: string }[];
    series: SeriesDef[];
    dimensions: ChartDimensions;
    children: React.ReactNode;
}

export const ChartsProvider: React.FC<ChartsProviderProps> = ({
    dataset,
    xAxis,
    series,
    dimensions,
    children,
}) => {
    const xAccessor = useMemo(() => (d: any) => d[xAxis[0].dataKey], [xAxis]);

    const xDomain: [number, number] = useMemo(() => {
        if (!dataset || dataset.length === 0) return [0, 1];
        const values = dataset.map(xAccessor);
        return [Math.min(...values), Math.max(...values)];
    }, [dataset, xAccessor]);

    const yDomain: [number, number] = useMemo(() => {
        if (!dataset || dataset.length === 0 || series.length === 0) return [0, 1];

        const allYValues = series.flatMap(s => dataset.map(d => d[s.dataKey]));
        if (allYValues.length === 0) return [0, 1];

        const min = Math.min(...allYValues);
        const max = Math.max(...allYValues);

        return [min, max === min ? min + 1 : max];
    }, [dataset, series]);

    const xScale = useMemo(() =>
        createLinearScale(xDomain, [0, dimensions.boundedWidth]),
        [xDomain, dimensions.boundedWidth]
    );

    const yScale = useMemo(() =>
        createLinearScale(yDomain, [dimensions.boundedHeight, 0]), // Inverted for SVG coordinates
        [yDomain, dimensions.boundedHeight]
    );

    const contextValue = {
        dataset,
        xAccessor,
        xScale,
        yScale,
        dimensions,
    };

    return (
        <ChartsContext.Provider value={contextValue}>
            {children}
        </ChartsContext.Provider>
    );
};