import React, { useRef, useLayoutEffect } from 'react';
import { useStyles } from '../../core';

interface CollapseProps {
    in: boolean;
    children: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ in: inProp, children }) => {
    const createStyle = useStyles('collapse');
    const contentRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const wrapperClass = createStyle({
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
    });

    useLayoutEffect(() => {
        if (wrapperRef.current && contentRef.current) {
            wrapperRef.current.style.maxHeight = inProp ? `${contentRef.current.scrollHeight}px` : '0px';
        }
    }, [inProp]);

    return (
        <div ref={wrapperRef} className={wrapperClass}>
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};
