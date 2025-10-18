
import React, { createContext } from 'react';
import { Scale } from '../../core/utils/scale';

// Define the shape of our scaling functions
export interface ChartDimensions {
    width: number;
    height: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    boundedWidth: number;
    boundedHeight: number;
}

export interface ChartsContextType {
    data: any[];
    xAccessor: (d: any, i: number) => any;
    yAccessor: (d: any, i: number) => any;
    xScale: Scale;
    yScale: Scale;
    dimensions: ChartDimensions;
}

export const ChartsContext = createContext<ChartsContextType | null>(null);
