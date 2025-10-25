import React, { useRef, useState, useEffect } from 'react';
import { AudioContext, EQBand, EffectsState } from './AudioContext';
import AudioChunk from '../../lib/audio/AudioChunk.js';
import AudioMultiProcessor from '../../lib/audio/AudioMultiProcessor.js';
import { Bufferish } from '../../lib/audio/bufferish.js';
import * as Effects from '../../lib/audio/effects';


const defaultEqBands: EQBand[] = [
  { label: 'Bass', freq: 100, gain: 0, q: 1, type: 'lowshelf' },
  { label: 'Mid', freq: 1000, gain: 0, q: 1, type: 'peaking' },
  { label: 'Treble', freq: 10000, gain: 0, q: 1, type: 'highshelf' },
];

const defaultEffectsState: EffectsState = {
    bassBoost: { enabled: false, options: { gain: 6, frequency: 100 } },
    chorus: { enabled: false, options: { rate: 1.5, depth: 0.002, mix: 0.7 } },
    delay: { enabled: false, options: { delayTime: 0.5, feedback: 0.4, mix: 0.5 } },
    phaser: { enabled: false, options: { rate: 0.5, depth: 0.8, feedback: 0.7, mix: 0.5 } },
    reverb: { enabled: false, options: { roomSize: 0.8, damping: 0.5, mix: 0.33 } },
    pitchShifter: { enabled: false, options: { shift: 1.0 } },
    eqJs: { enabled: false, options: { lowGain: 1.0, midGain: 1.0, highGain: 1.0 } },
    hq: { enabled: false, options: { clarity: 0.5 } },
    curveSmartEQ: { enabled: false, options: { curvePoints: [{f: 100, g: 0}, {f: 1000, g: 0}, {f: 5000, g: 0}] } },
};

// --- Web Audio API Conversion Helpers ---

function toInterleavedInt16(inputBuffer: AudioBuffer): Int16Array {
    const numChannels = inputBuffer.numberOfChannels;
    const length = inputBuffer.length;
    const result = new Int16Array(length * numChannels);
    const channels = [];
    for (let i = 0; i < numChannels; i++) {
        channels.push(inputBuffer.getChannelData(i));
    }

    for (let i = 0; i < length; i++) {
        for (let ch = 0; ch < numChannels; ch++) {
            let sample = channels[ch][i];
            sample = Math.max(-1, Math.min(1, sample));
            result[i * numChannels + ch] = sample < 0 ? sample * 32768 : sample * 32767;
        }
    }
    return result;
}

function fromInterleavedInt16(outputBuffer: AudioBuffer, processedPcm: Int16Array) {
    const numChannels = outputBuffer.numberOfChannels;
    const length = outputBuffer.length;
    const channels = [];
    for (let i = 0; i < numChannels; i++) {
        channels.push(outputBuffer.getChannelData(i));
    }
    
    for (let i = 0; i < length; i++) {
        for (let ch = 0; ch < numChannels; ch++) {
            const sample = processedPcm[i * numChannels + ch];
            channels[ch][i] = sample / (sample < 0 ? 32768 : 32767);
        }
    }
}


export const Audio: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [eqBands, setEqBands] = useState<EQBand[]>(defaultEqBands);
    const [effectsState, setEffectsState] = useState<EffectsState>(defaultEffectsState);
    
    const audioCtxRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
    const eqNodesRef = useRef<BiquadFilterNode[]>([]);
    const analyserNodeRef = useRef<AnalyserNode | null>(null);
    const processorRef = useRef<AudioMultiProcessor | null>(null);
    const isGraphReady = useRef(false);

    const setupAudioGraph = () => {
        if (isGraphReady.current || !audioRef.current) return;

        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioCtxRef.current = ctx;

        const source = ctx.createMediaElementSource(audioRef.current);
        sourceNodeRef.current = source;

        // 1. Create native EQ nodes (performant)
        const eqNodes: BiquadFilterNode[] = defaultEqBands.map(band => {
            const node = ctx.createBiquadFilter();
            node.type = band.type;
            node.frequency.value = band.freq;
            node.gain.value = band.gain;
            node.Q.value = band.q;
            return node;
        });
        eqNodesRef.current = eqNodes;

        // Chain EQ nodes
        let lastNode: AudioNode = source;
        eqNodes.forEach(node => {
            lastNode.connect(node);
            lastNode = node;
        });
        
        // 2. Create ScriptProcessor for custom JS effects
        const bufferSize = 4096;
        const scriptProcessor = ctx.createScriptProcessor(bufferSize, 2, 2);
        
        scriptProcessor.onaudioprocess = (e) => {
            const inputBuffer = e.inputBuffer;
            const outputBuffer = e.outputBuffer;
            
            if (!processorRef.current || processorRef.current.getEffects().length === 0) {
                // Passthrough if no effects are active
                for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
                    outputBuffer.copyToChannel(inputBuffer.getChannelData(channel), channel);
                }
                return;
            }

            const interleavedPcm = toInterleavedInt16(inputBuffer);
            const bufferish = new Bufferish(interleavedPcm.buffer);
            const audioChunk = new AudioChunk(bufferish, {
                sampleRate: inputBuffer.sampleRate,
                channels: inputBuffer.numberOfChannels,
                bitDepth: 16
            });

            const processedChunk = processorRef.current.process(audioChunk);

            const processedPcm = new Int16Array(processedChunk.buffer.arrayBuffer);
            fromInterleavedInt16(outputBuffer, processedPcm);
        };
        lastNode.connect(scriptProcessor);

        // 3. Create Analyser for visualization
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyserNodeRef.current = analyser;

        // 4. Connect to destination
        scriptProcessor.connect(analyser);
        analyser.connect(ctx.destination);
        
        isGraphReady.current = true;
        setEqBands([...eqBands]); // Force re-render to provide analyserNode
    };
    
    const togglePlay = () => {
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
        if (!isGraphReady.current) setupAudioGraph();
        
        audioRef.current?.paused ? audioRef.current?.play() : audioRef.current?.pause();
    };

    const seek = (time: number) => {
        if (audioRef.current) audioRef.current.currentTime = time;
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

    useEffect(() => {
        if (isGraphReady.current) {
            eqBands.forEach((band, index) => {
                if (eqNodesRef.current[index]) {
                    eqNodesRef.current[index].gain.setTargetAtTime(band.gain, audioCtxRef.current!.currentTime, 0.1);
                }
            });
        }
    }, [eqBands]);

    useEffect(() => {
        const processor = new AudioMultiProcessor({ trace: () => {} });
        
        const effectClassMap: Record<string, string> = {
            eqJs: 'EQ',
            curveSmartEQ: 'CurveSmartEQ',
        };

        for (const [name, state] of Object.entries(effectsState)) {
            if (state.enabled) {
                const className = effectClassMap[name] || (name.charAt(0).toUpperCase() + name.slice(1));
                const EffectClass = (Effects as any)[className];
                if (EffectClass) {
                    processor.addEffect(new EffectClass(state.options, { sampleRate: audioCtxRef.current?.sampleRate || 44100 }));
                }
            }
        }
        processorRef.current = processor;
    }, [effectsState]);

    const contextValue = {
        audioRef,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
        seek,
        eqBands,
        setEqBands,
        effectsState,
        setEffectsState,
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