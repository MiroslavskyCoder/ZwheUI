import React, { createContext, useContext } from 'react';

interface AudioContextType {
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    togglePlay: () => void;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an Audio provider');
    }
    return context;
};
