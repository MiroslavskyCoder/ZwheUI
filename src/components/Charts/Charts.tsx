

import React from 'react';
import { ChartsDisplay } from './ChartsDisplay';
import { ChartsProvider } from './ChartsProvider';
import { ChartDimensions } from './ChartsContext';

interface ChartsProps {
    data: any[];
    xAccessor: (d: any, i: number) => any;
    yAccessor: (d: any, i: number) => any;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Charts: React.FC<ChartsProps> = ({ data, xAccessor, yAccessor, children, className, style }) => {
    return (
        // FIX: Pass style prop down to ChartsDisplay.
        <ChartsDisplay className={className} style={style}>
            {(dimensions: ChartDimensions) => (
                <ChartsProvider data={data} xAccessor={xAccessor} yAccessor={yAccessor} dimensions={dimensions}>
                    <svg width={dimensions.width} height={dimensions.height}>
                        <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
                            {children}
                        </g>
                    </svg>
                </ChartsProvider>
            )}
        </ChartsDisplay>
    );
};
