import React, { useState, useRef, useEffect } from 'react';
import { 
    Audio, AudioFile, Text, Sofa, Stack, AudioView, AudioControls, AudioVisualizer, 
    AudioFilters, FileUpload, Checkbox, Button, Spinner, useToast 
} from '../src/components';

// Imports for the new offline processing demo
import AudioChunk from '../src/lib/audio/AudioChunk.js';
import AudioMultiProcessor from '../src/lib/audio/AudioMultiProcessor.js';
import { Bufferish } from '../src/lib/audio/bufferish.js';
import { BassBoost, Chorus } from '../src/lib/audio/effects';


// --- Helper functions for offline processing ---

// Converts a Web Audio API AudioBuffer (non-interleaved Float32) to an interleaved Int16Array
function toInterleavedInt16(audioBuffer: AudioBuffer): Int16Array {
    const numChannels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length;
    const result = new Int16Array(length * numChannels);
    const channels = [];
    for (let i = 0; i < numChannels; i++) {
        channels.push(audioBuffer.getChannelData(i));
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

// Converts a processed AudioChunk (interleaved Int16) back to a Web Audio API AudioBuffer
function toAudioBuffer(audioChunk: any, audioCtx: AudioContext): AudioBuffer {
    const { sampleRate, channels } = audioChunk.format;
    const interleaved = new Int16Array(audioChunk.buffer.arrayBuffer);
    const frameCount = interleaved.length / channels;
    const audioBuffer = audioCtx.createBuffer(channels, frameCount, sampleRate);
    
    for (let ch = 0; ch < channels; ch++) {
        const channelData = audioBuffer.getChannelData(ch);
        for (let i = 0; i < frameCount; i++) {
            const sample = interleaved[i * channels + ch];
            channelData[i] = sample / 32768.0;
        }
    }
    return audioBuffer;
}


const OfflineEffectsDemo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [effects, setEffects] = useState({ chorus: false, bassBoost: true });
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
    const { addToast } = useToast();

    const handleProcessAndPlay = async () => {
        if (!audioFile) {
            addToast({ title: 'No file selected', description: 'Please upload an audio file first.', variant: 'warning' });
            return;
        }
        setIsLoading(true);

        try {
            // Stop any currently playing audio
            if (sourceNodeRef.current) {
                sourceNodeRef.current.stop();
            }

            // 1. Get AudioContext
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            const audioCtx = audioCtxRef.current;

            // 2. Read and Decode file
            const arrayBuffer = await audioFile.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer.slice(0)); // slice to create a copy

            // 3. Convert to AudioChunk format
            const pcm = toInterleavedInt16(audioBuffer);
            const bufferish = new Bufferish(pcm.buffer);
            const audioChunk = new AudioChunk(bufferish, {
                sampleRate: audioBuffer.sampleRate,
                channels: audioBuffer.numberOfChannels,
                bitDepth: 16
            });
            
            // 4. Process with selected effects
            const processor = new AudioMultiProcessor({ trace: console.log });
            if (effects.bassBoost) processor.addEffect(new BassBoost({ gain: 8, frequency: 120 }));
            if (effects.chorus) {
                if(audioChunk.format.channels > 1) {
                    addToast({title: "Chorus Warning", description: "Chorus effect works best on mono audio.", variant: "warning"})
                }
                processor.addEffect(new Chorus({ rate: 1, depth: 0.003, mix: 0.6 }));
            }
            const processedChunk = processor.process(audioChunk);
            
            // 5. Convert back to AudioBuffer
            const processedAudioBuffer = toAudioBuffer(processedChunk, audioCtx);

            // 6. Play
            const source = audioCtx.createBufferSource();
            source.buffer = processedAudioBuffer;
            source.connect(audioCtx.destination);
            source.start();
            sourceNodeRef.current = source;

        } catch (error) {
            console.error("Error processing audio:", error);
            addToast({ title: 'Processing Error', description: error.message, variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h3" size="1.25rem" weight="600">Offline Effects Demo</Text>
                <Text>Upload a file, select effects, and click "Apply & Play" to hear the result. This uses the newly added non-realtime audio processing library.</Text>
                <FileUpload onFileSelect={setAudioFile} />
                <Stack direction="row" gap="1rem">
                    <Checkbox label="Bass Boost" checked={effects.bassBoost} onChange={e => setEffects(p => ({...p, bassBoost: e.target.checked}))} />
                    <Checkbox label="Chorus" checked={effects.chorus} onChange={e => setEffects(p => ({...p, chorus: e.target.checked}))} />
                </Stack>
                <Button onClick={handleProcessAndPlay} disabled={isLoading || !audioFile} style={{alignSelf: 'start'}}>
                    {isLoading ? <Spinner /> : "Apply Effects & Play"}
                </Button>
            </Stack>
        </Sofa>
    )
}


export const ExampleAudio = () => (
  <Sofa>
    <Stack gap="2rem">
      <Stack gap="1rem">
        <Text as="h2" size="1.5rem" weight="600">Example: Audio Player</Text>
        <Text>A demonstration of a styled, composable audio player with custom controls, a real-time visualizer, and EQ effects.</Text>
        <Audio>
                <AudioView crossOrigin="anonymous">
                    <AudioFile src="https://cdn.pixabay.com/audio/2022/08/03/audio_51f6922b13.mp3" type="audio/mpeg" />
                </AudioView>
                <AudioVisualizer />
                <AudioControls />
                <AudioFilters />
        </Audio>
      </Stack>
      <OfflineEffectsDemo />
    </Stack>
  </Sofa>
);
