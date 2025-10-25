
import React, { useState, useRef, useEffect } from 'react';
import { 
    Audio, AudioFile, Text, Sofa, Stack, AudioView, AudioControls, AudioVisualizer, 
    AudioEffectsPanel, FileUpload, Checkbox, Button, Spinner, useToast, Slider,
    // FIX: Imported missing Accordion components.
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '../src/components';

// Imports for the new offline processing demo
import AudioChunk from '../src/lib/audio/AudioChunk.js';
import AudioMultiProcessor from '../src/lib/audio/AudioMultiProcessor.js';
import { Bufferish } from '../src/lib/audio/bufferish.js';
import { BassBoost, Chorus, Reverb, Delay } from '../src/lib/audio/effects';


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
    const [effects, setEffects] = useState({
        bassBoost: { enabled: true, gain: 8, frequency: 120 },
        chorus: { enabled: false, rate: 1.0, depth: 0.003, mix: 0.6 },
        reverb: { enabled: false, roomSize: 0.5, damping: 0.5, mix: 0.3 },
        delay: { enabled: false, delayTime: 0.3, feedback: 0.4, mix: 0.4 },
    });
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
            if (sourceNodeRef.current) sourceNodeRef.current.stop();
            if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            
            const audioCtx = audioCtxRef.current;
            const arrayBuffer = await audioFile.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer.slice(0));

            const pcm = toInterleavedInt16(audioBuffer);
            const bufferish = new Bufferish(pcm.buffer);
            const audioChunk = new AudioChunk(bufferish, {
                sampleRate: audioBuffer.sampleRate,
                channels: audioBuffer.numberOfChannels,
                bitDepth: 16
            });
            
            const processor = new AudioMultiProcessor({ trace: console.log });
            if (effects.bassBoost.enabled) processor.addEffect(new BassBoost(effects.bassBoost));
            if (effects.chorus.enabled) processor.addEffect(new Chorus(effects.chorus));
            if (effects.reverb.enabled) processor.addEffect(new Reverb(effects.reverb));
            if (effects.delay.enabled) processor.addEffect(new Delay(effects.delay));
            
            const processedChunk = processor.process(audioChunk);
            const processedAudioBuffer = toAudioBuffer(processedChunk, audioCtx);

            const source = audioCtx.createBufferSource();
            source.buffer = processedAudioBuffer;
            source.connect(audioCtx.destination);
            source.start();
            sourceNodeRef.current = source;

        } catch (error: any) {
            console.error("Error processing audio:", error);
            addToast({ title: 'Processing Error', description: error.message, variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h3" size="1.25rem" weight="600">Offline Effects Demo</Text>
                <Text>Upload a file, configure effects, and click "Apply & Play" to hear the result. This uses non-realtime processing on the entire file.</Text>
                <FileUpload onFileSelect={setAudioFile} />
                
                <Accordion defaultValue="bassBoost">
                    <AccordionItem value="bassBoost">
                        <AccordionTrigger><Checkbox label="Bass Boost" checked={effects.bassBoost.enabled} onClick={e => e.stopPropagation()} onChange={e => setEffects(p => ({...p, bassBoost: {...p.bassBoost, enabled: e.target.checked}}))} /></AccordionTrigger>
                        <AccordionContent><Stack><Text size="sm">Gain</Text><Slider value={effects.bassBoost.gain} onChange={v => setEffects(p => ({...p, bassBoost: {...p.bassBoost, gain: v}}))} min={0} max={24} step={1} showValue/></Stack></AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="chorus">
                        <AccordionTrigger><Checkbox label="Chorus" checked={effects.chorus.enabled} onClick={e => e.stopPropagation()} onChange={e => setEffects(p => ({...p, chorus: {...p.chorus, enabled: e.target.checked}}))} /></AccordionTrigger>
                        <AccordionContent><Stack><Text size="sm">Mix</Text><Slider value={effects.chorus.mix} onChange={v => setEffects(p => ({...p, chorus: {...p.chorus, mix: v}}))} min={0} max={1} step={0.1} showValue/></Stack></AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="reverb">
                        <AccordionTrigger><Checkbox label="Reverb" checked={effects.reverb.enabled} onClick={e => e.stopPropagation()} onChange={e => setEffects(p => ({...p, reverb: {...p.reverb, enabled: e.target.checked}}))} /></AccordionTrigger>
                        <AccordionContent><Stack><Text size="sm">Mix</Text><Slider value={effects.reverb.mix} onChange={v => setEffects(p => ({...p, reverb: {...p.reverb, mix: v}}))} min={0} max={1} step={0.1} showValue/></Stack></AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="delay">
                        <AccordionTrigger><Checkbox label="Delay" checked={effects.delay.enabled} onClick={e => e.stopPropagation()} onChange={e => setEffects(p => ({...p, delay: {...p.delay, enabled: e.target.checked}}))} /></AccordionTrigger>
                        <AccordionContent><Stack><Text size="sm">Mix</Text><Slider value={effects.delay.mix} onChange={v => setEffects(p => ({...p, delay: {...p.delay, mix: v}}))} min={0} max={1} step={0.1} showValue/></Stack></AccordionContent>
                    </AccordionItem>
                </Accordion>

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
        <Text as="h2" size="1.5rem" weight="600">Example: Real-Time Audio Player</Text>
        <Text>A composable audio player with Web Audio API effects like EQ, Reverb, Chorus, Delay and a real-time FFT visualizer. These effects are applied live to the audio stream.</Text>
        <Audio>
                <AudioView crossOrigin="anonymous">
                    <AudioFile src="https://cdn.pixabay.com/audio/2022/08/03/audio_51f6922b13.mp3" type="audio/mpeg" />
                </AudioView>
                <AudioVisualizer />
                <AudioControls />
                <AudioEffectsPanel />
        </Audio>
      </Stack>
      <OfflineEffectsDemo />
    </Stack>
  </Sofa>
);