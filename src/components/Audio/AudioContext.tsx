import React, { createContext, useContext } from 'react';

export interface EQBand {
    freq: number;
    gain: number;
    q: number;
    type: BiquadFilterType;
    label?: string;
}

// State for individual real-time effects
export interface EffectOptions {
    [key: string]: any;
}

export interface EffectsState {
    [effectName: string]: {
        enabled: boolean;
        options: EffectOptions;
    };
}

interface AudioContextType {
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    togglePlay: () => void;
    seek: (time: number) => void;
    
    eqBands: EQBand[];
    setEqBands: React.Dispatch<React.SetStateAction<EQBand[]>>;
    
    effectsState: EffectsState;
    setEffectsState: React.Dispatch<React.SetStateAction<EffectsState>>;

    analyserNode: AnalyserNode | null;
    isGraphReady: boolean;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an Audio provider');
    }
    return context;
};