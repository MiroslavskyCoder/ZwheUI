
import React, { useRef, useState, useEffect } from 'react';
import { AudioContext, EQBand } from './AudioContext';

const defaultEqBands: EQBand[] = [
  { label: 'Bass Boost', freq: 100, gain: 0, q: 1, type: 'lowshelf' }, // Bass
  { label: 'Mid', freq: 1000, gain: 0, q: 1, type: 'peaking' }, // Mid
  { label: 'Treble', freq: 10000, gain: 0, q: 1, type: 'highshelf' }, // Treble
];

export const Audio: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [eqBands, setEqBands] = useState<EQBand[]>(defaultEqBands);
    
    // Refs for Web Audio API
    const audioCtxRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
    const eqNodesRef = useRef<BiquadFilterNode[]>([]);
    const analyserNodeRef = useRef<AnalyserNode | null>(null);
    const isGraphReady = useRef(false);

    const setupAudioGraph = () => {
        if (isGraphReady.current || !audioRef.current) return;

        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioCtxRef.current = ctx;

        const source = ctx.createMediaElementSource(audioRef.current);
        sourceNodeRef.current = source;

        // Create EQ nodes
        const nodes: BiquadFilterNode[] = defaultEqBands.map(band => {
            const node = ctx.createBiquadFilter();
            node.type = band.type;
            node.frequency.value = band.freq;
            node.gain.value = band.gain;
            node.Q.value = band.q;
            return node;
        });
        eqNodesRef.current = nodes;

        // Create Analyser for FFT visualization
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyserNodeRef.current = analyser;

        // Connect graph: source -> eq1 -> eq2 -> ... -> analyser -> destination
        let lastNode: AudioNode = source;
        nodes.forEach(node => {
            lastNode.connect(node);
            lastNode = node;
        });
        lastNode.connect(analyser);
        analyser.connect(ctx.destination);
        
        isGraphReady.current = true;
        // Force a re-render to provide the analyserNode to consumers
        setEqBands([...eqBands]); 
    };
    
    const togglePlay = () => {
        // AudioContext must be resumed after a user gesture
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }

        if (!isGraphReady.current) {
            setupAudioGraph();
        }
        
        const audio = audioRef.current;
        if (audio) {
            audio.paused ? audio.play() : audio.pause();
        }
    };

    const seek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
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

    // Effect to update EQ gains when state changes
    useEffect(() => {
        if (isGraphReady.current) {
            eqBands.forEach((band, index) => {
                if (eqNodesRef.current[index]) {
                    eqNodesRef.current[index].gain.value = band.gain;
                }
            });
        }
    }, [eqBands]);

    const contextValue = {
        audioRef,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
        seek,
        eqBands,
        setEqBands,
        analyserNode: analyserNodeRef.current,
        isGraphReady: isGraphReady.current,
    };

    return (
        <AudioContext.Provider value={contextValue}>
            <div className={className}>
                {children}
            </div>
        </AudioContext.Provider>
    );
};