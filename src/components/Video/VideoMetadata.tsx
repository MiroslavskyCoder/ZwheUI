import React from 'react';
import { useVideo } from './VideoContext';
import { Text } from '../Text/Text';

// FIX: Add style prop to allow for custom styling.
export const VideoMetadata: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => {
    const { duration, videoRef } = useVideo();
    const videoElement = videoRef.current;

    return (
        <div className={className} style={style}>
            <Text size="12px" color="textSecondary">
                {videoElement ? `Dimensions: ${videoElement.videoWidth}x${videoElement.videoHeight}` : 'Loading...'}
                {' | '}
                Duration: {duration.toFixed(2)}s
            </Text>
        </div>
    );
};
