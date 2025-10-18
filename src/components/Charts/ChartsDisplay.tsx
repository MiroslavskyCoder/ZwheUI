

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChartDimensions } from './ChartsContext';

interface ChartsDisplayProps {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    children: (dimensions: ChartDimensions) => React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const ChartsDisplay: React.FC<ChartsDisplayProps> = ({
    marginTop = 40,
    marginRight = 30,
    marginBottom = 50,
    marginLeft = 60,
    children,
    className = '',
    style,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // We need to check for ref.current to exist
        if (!ref.current) return;
        
        // Set initial dimensions
        const rect = ref.current.getBoundingClientRect();
        setWidth(rect.width);
        setHeight(rect.height);

        const observer = new ResizeObserver(([entry]) => {
            if (entry) {
                setWidth(entry.contentRect.width);
                setHeight(entry.contentRect.height);
            }
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const dimensions: ChartDimensions = useMemo(() => {
        const boundedWidth = Math.max(0, width - marginLeft - marginRight);
        const boundedHeight = Math.max(0, height - marginTop - marginBottom);
        return {
            width,
            height,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            boundedWidth,
            boundedHeight,
        };
    }, [width, height, marginTop, marginRight, marginBottom, marginLeft]);

    return (
        // FIX: Apply the passed style prop to the container div.
        <div ref={ref} className={className} style={{ width: '100%', height: '100%', minHeight: '300px', ...style }}>
            {width > 0 && height > 0 && children(dimensions)}
        </div>
    );
};
