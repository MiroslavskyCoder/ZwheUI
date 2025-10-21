
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Center } from '../Center/Center';
import { Skeleton } from '../Skeleton/Skeleton';
import { useStyles, useTheme } from '../../core';

// FIX: Export ImageProps to allow it to be imported and used in other components like Card.
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    fallback?: React.ReactNode;
    fit?: React.CSSProperties['objectFit'];
    radius?: string;
}

export const Image: React.FC<ImageProps> = ({ src, fallbackSrc, fallback, fit = 'cover', radius = '8px', className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('image');
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

    const handleLoad = () => setStatus('loaded');
    const handleError = () => setStatus('error');

    const imageClass = createStyle({
        width: '100%',
        height: '100%',
        objectFit: fit,
        borderRadius: radius,
    });
    
    const finalSrc = status === 'error' && fallbackSrc ? fallbackSrc : src;

    return (
        <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
            {status === 'loading' && <Skeleton variant="rect" width="100%" height="100%" style={{ position: 'absolute', borderRadius: radius }} />}
            
            <img
                src={finalSrc}
                onLoad={handleLoad}
                onError={handleError}
                className={`${imageClass} ${className}`}
                style={{ opacity: status === 'loading' ? 0 : 1 }}
                {...props}
            />
            
            {status === 'error' && !fallbackSrc && fallback && (
                <Center style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: theme.colors.border, borderRadius: radius }}>
                    {fallback}
                </Center>
            )}
        </Box>
    );
};
