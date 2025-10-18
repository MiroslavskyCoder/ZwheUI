
import React, { useMemo } from 'react';
import { ChartsContext, ChartDimensions } from './ChartsContext';
import { createLinearScale } from '../../core/utils/scale';

interface ChartsProviderProps {
    data: any[];
    xAccessor: (d: any, i: number) => any;
    yAccessor: (d: any, i: number) => any;
    dimensions: ChartDimensions;
    children: React.ReactNode;
    xDomain?: [number, number];
}

export const ChartsProvider: React.FC<ChartsProviderProps> = ({
    data,
    xAccessor,
    yAccessor,
    dimensions,
    children,
    xDomain: xDomainProp,
}) => {

    const fullXDomain: [number, number] = useMemo(() => {
        if (!data || data.length === 0) return [0, 1];
        const values = data.map(xAccessor);
        return [Math.min(...values), Math.max(...values)];
    }, [data, xAccessor]);

    const xDomain = xDomainProp || fullXDomain;

    const yDomain: [number, number] = useMemo(() => {
        if (!data || data.length === 0) return [0, 1];
        
        const visibleData = data.filter(d => {
            const xVal = xAccessor(d, 0); // index doesn't matter for this check
            return xVal >= xDomain[0] && xVal <= xDomain[1];
        });

        // Use a small subset of data for performance if the visible range is large
        const sampleData = visibleData.length > 1000 
            ? visibleData.filter((_, i) => i % Math.floor(visibleData.length / 1000) === 0)
            : visibleData;
            
        if (sampleData.length === 0) {
            return [0, 1]; // Fallback if no data is in view
        }

        const values = sampleData.map(yAccessor);
        const min = Math.min(...values);
        const max = Math.max(...values);
        
        return [min, max === min ? min + 1 : max];
    }, [data, yAccessor, xAccessor, xDomain]);

    const xScale = useMemo(() => 
        createLinearScale(xDomain, [0, dimensions.boundedWidth]),
        [xDomain, dimensions.boundedWidth]
    );

    const yScale = useMemo(() => 
        createLinearScale(yDomain, [dimensions.boundedHeight, 0]), // Inverted for SVG coordinates
        [yDomain, dimensions.boundedHeight]
    );

    const contextValue = {
        data,
        xAccessor,
        yAccessor,
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
