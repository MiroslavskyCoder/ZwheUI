import React, { createContext, useContext } from 'react';

interface VideoContextType {
    videoRef: React.RefObject<HTMLVideoElement>;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    togglePlay: () => void;
}

export const VideoContext = createContext<VideoContextType | null>(null);

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideo must be used within a Video provider');
    }
    return context;
};
