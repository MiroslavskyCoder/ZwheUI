import React, { useRef, useState, useEffect } from 'react';
import { VideoContext } from './VideoContext';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Video: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const { theme } = useTheme();
    const createStyle = useStyles('video-container');

    const containerClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) {
            video.paused ? video.play() : video.pause();
        }
    };

    const seek = (time: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    };

    const handleSetVolume = (newVolume: number) => {
        if (videoRef.current) {
            const clampedVolume = Math.max(0, Math.min(1, newVolume));
            videoRef.current.muted = clampedVolume === 0;
            videoRef.current.volume = clampedVolume;
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
        }
    };


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleLoadedMetadata = () => {
            setDuration(video.duration);
            setVolume(video.volume);
            setIsMuted(video.muted);
        };
        const handleVolumeChange = () => {
            setVolume(video.volume);
            setIsMuted(video.muted);
        };

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('volumechange', handleVolumeChange);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('volumechange', handleVolumeChange);
        };
    }, []);

    const contextValue = {
        videoRef,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
        volume,
        isMuted,
        seek,
        setVolume: handleSetVolume,
        toggleMute,
    };

    return (
        <VideoContext.Provider value={contextValue}>
            <div className={`${containerClass} ${className}`}>
                {children}
            </div>
        </VideoContext.Provider>
    );
};