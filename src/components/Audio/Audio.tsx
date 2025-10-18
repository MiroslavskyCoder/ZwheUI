import React, { useRef, useState, useEffect } from 'react';
import { AudioContext } from './AudioContext';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { AudioFile } from './AudioFile';

export const Audio: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const { theme } = useTheme();
    const createStyle = useStyles('audio-container');
    
    const containerClass = createStyle({
        padding: theme.spacing.md,
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.paused ? audio.play() : audio.pause();
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleLoadedMetadata = () => setDuration(audio.duration);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    const audioFileElement = React.Children.toArray(children).find(child => (React.isValidElement(child) && child.type === AudioFile));
    
    const contextValue = {
        audioRef,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
    };

    return (
        <AudioContext.Provider value={contextValue}>
            <div className={`${containerClass} ${className}`}>
                 <audio ref={audioRef} style={{ display: 'none' }} >{audioFileElement}</audio>
                 {React.Children.toArray(children).filter(child => !(React.isValidElement(child) && child.type === AudioFile))}
            </div>
        </AudioContext.Provider>
    );
};