import React, { createContext, useContext } from 'react';

interface VideoContextType {
    videoRef: React.RefObject<HTMLVideoElement>;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    togglePlay: () => void;
    volume: number;
    isMuted: boolean;
    seek: (time: number) => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
}

export const VideoContext = createContext<VideoContextType | null>(null);

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideo must be used within a Video provider');
    }
    return context;
};