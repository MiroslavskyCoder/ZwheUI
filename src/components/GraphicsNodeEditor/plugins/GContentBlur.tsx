import React from 'react';
import { useGraphicsContext } from '../GraphicsContext';
import { useStyles } from '../../../core';

export const GContentBlur: React.FC = () => {
    const { isContentBlurred } = useGraphicsContext();
    const createStyle = useStyles('g-content-blur');

    const blurClass = createStyle({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: 'blur(4px)',
        zIndex: 5,
        pointerEvents: 'none',
        transition: 'backdrop-filter 0.3s ease',
    });

    if (!isContentBlurred) {
        return null;
    }

    return <div className={blurClass} />;
};
