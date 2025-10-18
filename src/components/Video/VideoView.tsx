import React from 'react';
import { useVideo } from './VideoContext';
import { useStyles } from '../../core/hooks/useStyles';

interface VideoViewProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}

export const VideoView: React.FC<VideoViewProps> = ({ className = '', children, ...props }) => {
    const { videoRef } = useVideo();
    const createStyle = useStyles('video-view');
    
    const videoClass = createStyle({
        width: '100%',
        borderRadius: '8px',
        display: 'block',
    });

    return (
        <video ref={videoRef} className={`${videoClass} ${className}`} {...props}>
            {children}
            Your browser does not support the video tag.
        </video>
    );
};
