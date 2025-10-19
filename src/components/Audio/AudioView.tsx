
import React from 'react';
import { useAudio } from './AudioContext';
import { useStyles } from '../../core/hooks/useStyles';

interface AudioViewProps extends React.AudioHTMLAttributes<HTMLAudioElement> {}

export const AudioView: React.FC<AudioViewProps> = ({ className = '', children, ...props }) => {
    const { audioRef } = useAudio();
    const createStyle = useStyles('audio-view');
    
    // Hide the default audio player as we are providing custom controls
    const audioClass = createStyle({
        display: 'none',
    });

    return (
        <audio ref={audioRef} className={`${audioClass} ${className}`} {...props}>
            {children}
            Your browser does not support the audio element.
        </audio>
    );
};
