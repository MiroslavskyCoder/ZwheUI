
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    Sofa, Stack, Text, Button, Grid, Slider,
    GraphicsProvider, GraphicsNodeEditorView, useGraphicsContext,
    NodeData, ConnectionData, FileUpload, useToast, Icon,
    GZoom, GMenu, Card, Spinner
} from '../src/components';
import { 
    brightnessContrastNodeType, 
    grayscaleNodeType, 
    invertNodeType,
    saturationNodeType,
    tintNodeType,
    vignetteMaskNodeType
} from '../src/effects';
import { useTheme } from '../src/core';
import { PlayIcon, PauseIcon } from '../src/icons';
import { GoogleGenAI, Type } from "@google/genai";
import { processGraph } from '../src/components/GraphicsNodeEditor/graphProcessor';

// --- Node Types for Video Editor ---
const videoSourceNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Video Source',
    inputs: [],
    outputs: [{ id: 'image', label: 'Frame', type: 'image', color: '#9333ea' }],
    process: (inputs, data) => ({ image: data?.frameData ?? null }),
    data: { frameData: null },
};

const videoOutputNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Final Output',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [],
};

const creatableNodeTypes = {
    'Color/Brightness & Contrast': brightnessContrastNodeType,
    'Color/Saturation': saturationNodeType,
    'Color/Grayscale': grayscaleNodeType,
    'Color/Invert': invertNodeType,
    'Color/Tint': tintNodeType,
    'Effect/Vignette': vignetteMaskNodeType,
};


// --- UI Components for the Editor ---

const Timeline = ({ duration, currentTime, onSeek, waveform, isPlaying, onTogglePlay }) => {
    const { theme } = useTheme();
    const waveformRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (waveformRef.current && waveform) {
            const canvas = waveformRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);
            
            ctx.fillStyle = theme.colors.border;
            const step = width / waveform.length;
            const amp = height / 2;
            for (let i = 0; i < waveform.length; i++) {
                const min = waveform[i][0] * amp;
                const max = waveform[i][1] * amp;
                ctx.fillRect(i * step, amp + min, step, max - min);
            }
        }
    }, [waveform, theme.colors.border]);

    return (
        <Card title="Timeline">
            <Stack gap="1rem">
                <canvas ref={waveformRef} width="600" height="70" style={{width: '100%', height: '70px', background: 'rgba(0,0,0,0.2)'}} />
                <Stack direction="row" align="center" gap="1rem">
                    <Button onClick={onTogglePlay} disabled={!duration}>
                        <Icon as={isPlaying ? PauseIcon : PlayIcon} />
                    </Button>
                    <Slider value={currentTime} onChange={onSeek} max={duration} />
                    <Text size="sm">{new Date(currentTime * 1000).toISOString().substr(14, 5)} / {new Date(duration * 1000).toISOString().substr(14, 5)}</Text>
                </Stack>
            </Stack>
        </Card>
    );
};

const PropertiesPanel = ({ onAutoGrade, isGrading }) => {
    const { processGraph } = useGraphicsContext();
    return (
        <Card title="Effects & Properties">
            <Stack gap="1rem">
                <Text size="sm" color="textSecondary">Build your effect chain below. Right-click the grid to add new nodes.</Text>
                 <Stack direction="row" gap="1rem">
                    <Button onClick={processGraph} variant="primary">Apply Effects to Current Frame</Button>
                    <Button onClick={onAutoGrade} variant="secondary" disabled={isGrading}>
                        {isGrading ? <Spinner size={20}/> : "AI Auto Grade"}
                    </Button>
                </Stack>
                <div style={{ height: '500px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                    <GraphicsNodeEditorView plugins={[GZoom, GMenu]} />
                </div>
            </Stack>
        </Card>
    );
};

// --- Main Editor Logic ---
const VideoEditorUI = () => {
    const { theme } = useTheme();
    const { addToast } = useToast();
    const { nodes, setNodes, updateNode, connections } = useGraphicsContext();
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [waveform, setWaveform] = useState<[number, number][] | null>(null);
    const [isGrading, setIsGrading] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const processCanvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | undefined>(undefined);

    const handleFileSelect = (file: File | null) => {
        if (videoSrc) URL.revokeObjectURL(videoSrc);
        setVideoFile(file);
        setVideoSrc(file ? URL.createObjectURL(file) : null);
        setIsPlaying(false);
        setCurrentTime(0);
        setWaveform(null);
    };

    const extractAudioWaveform = async (file: File) => {
        if (!file) return;
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const data = audioBuffer.getChannelData(0);
        const samples = 200; // Number of waveform points
        const step = Math.floor(data.length / samples);
        const waveformData: [number, number][] = [];
        for (let i = 0; i < samples; i++) {
            let min = 1.0;
            let max = -1.0;
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            waveformData.push([min, max]);
        }
        setWaveform(waveformData);
    };

    const handleMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            if(videoFile) extractAudioWaveform(videoFile);
        }
    };
    
    const handleSeek = (time: number) => {
        const video = videoRef.current;
        if (video) {
            const seekedTime = Math.min(duration, Math.max(0, time));
            video.currentTime = seekedTime;
            setCurrentTime(seekedTime);

            if (!isPlaying) {
                const onSeeked = () => {
                    if (videoRef.current) {
                        processFrame();
                        videoRef.current.removeEventListener('seeked', onSeeked);
                    }
                };
                video.addEventListener('seeked', onSeeked);
            }
        }
    };

    const handleTogglePlay = () => setIsPlaying(p => !p);

    const processFrame = useCallback(() => {
        const video = videoRef.current;
        const previewCanvas = previewCanvasRef.current;
        const processCanvas = processCanvasRef.current;
        if (!video || !previewCanvas || !processCanvas) return;

        // Ensure canvas dimensions are set
        if (video.videoWidth > 0 && (processCanvas.width !== video.videoWidth || processCanvas.height !== video.videoHeight)) {
            processCanvas.width = video.videoWidth;
            processCanvas.height = video.videoHeight;
        }

        const pCtx = processCanvas.getContext('2d');
        if (!pCtx) return;

        // Draw current video frame to processing canvas
        pCtx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const frameData = pCtx.getImageData(0, 0, video.videoWidth, video.videoHeight);
        
        // Find the source and output nodes
        const sourceNode = nodes.find(n => n.id === 'source');
        const outputNode = nodes.find(n => n.id === 'output');
        if (!sourceNode || !outputNode) return;
        
        // Manually run the graph
        const outputs = processGraph(nodes, connections);
        
        // Update source node data for next frame
        updateNode('source', { data: { frameData } });

        // Get final image from output node's input
        const finalImageData = outputs[outputNode.id]?.[outputNode.inputs[0].id];

        // Draw result to visible canvas
        const previewCtx = previewCanvas.getContext('2d');
        if (previewCtx) {
            if (finalImageData instanceof ImageData) {
                if(previewCanvas.width !== finalImageData.width || previewCanvas.height !== finalImageData.height){
                    previewCanvas.width = finalImageData.width;
                    previewCanvas.height = finalImageData.height;
                }
                previewCtx.putImageData(finalImageData, 0, 0);
            } else { // If no effects, just draw the original
                if(previewCanvas.width !== video.videoWidth || previewCanvas.height !== video.videoHeight){
                    previewCanvas.width = video.videoWidth;
                    previewCanvas.height = video.videoHeight;
                }
                previewCtx.drawImage(video, 0, 0);
            }
        }
    }, [nodes, connections, updateNode]);


    useEffect(() => {
        const video = videoRef.current;
        if (video && videoSrc) {
            const processFirstFrame = () => {
                if (video.readyState >= 1 && video.videoWidth > 0) { // HAVE_METADATA and dimensions are known
                    const previewCanvas = previewCanvasRef.current;
                    const processCanvas = processCanvasRef.current;
                    if (previewCanvas && processCanvas) {
                        previewCanvas.width = video.videoWidth;
                        previewCanvas.height = video.videoHeight;
                        processCanvas.width = video.videoWidth;
                        processCanvas.height = video.videoHeight;
                        processFrame();
                    }
                }
            };
            video.addEventListener('loadeddata', processFirstFrame);
            video.addEventListener('canplay', processFirstFrame); // Fallback
            return () => {
                video.removeEventListener('loadeddata', processFirstFrame);
                video.removeEventListener('canplay', processFirstFrame);
            };
        }
    }, [videoSrc, processFrame]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const tick = () => {
            if (!video || video.paused || video.ended) {
                if (video && video.ended) {
                    video.currentTime = 0;
                    setCurrentTime(0);
                }
                setIsPlaying(false);
                return;
            }
            setCurrentTime(video.currentTime);
            
            const previewCanvas = previewCanvasRef.current;
            const previewCtx = previewCanvas?.getContext('2d');
            if (previewCtx && video.videoWidth > 0) {
                if (previewCanvas.width !== video.videoWidth || previewCanvas.height !== video.videoHeight) {
                    previewCanvas.width = video.videoWidth;
                    previewCanvas.height = video.videoHeight;
                }
                previewCtx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
            }

            animationFrameRef.current = requestAnimationFrame(tick);
        };

        if (isPlaying) {
            video.play().catch(e => console.error("Play interrupted", e));
            animationFrameRef.current = requestAnimationFrame(tick);
        } else {
            video.pause();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA
                processFrame();
            }
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPlaying, processFrame]);

    const handleAutoGrade = useCallback(async () => {
        if (!(window as any).aistudio) {
            addToast({ title: 'AI Studio context not found', variant: 'error' });
            return;
        }

        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await (window as any).aistudio.openSelectKey();
        }
        
        const video = videoRef.current;
        if (!video) {
            addToast({ title: 'No video loaded', variant: 'warning' });
            return;
        }

        setIsGrading(true);
        try {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(video, 0, 0);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
            const base64Data = dataUrl.split(',')[1];
            
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-flash-latest',
                contents: {
                    parts: [
                        { text: "You are a professional film colorist. Analyze this image and suggest adjustments for brightness, contrast, and saturation. Your goal is a balanced, cinematic look. Return only a JSON object with keys 'brightness', 'contrast', and 'saturation', with integer values from -100 to 100." },
                        { inlineData: { mimeType: 'image/jpeg', data: base64Data } }
                    ]
                },
                config: {
                    responseMimeType: 'application/json',
                }
            });
            
            const result = JSON.parse(response.text);

            // Find the color correction nodes and update them
            const bcNode = nodes.find(n => n.label === 'Brightness / Contrast');
            const satNode = nodes.find(n => n.label === 'Saturation');

            if (bcNode && (result.brightness !== undefined && result.contrast !== undefined)) {
                updateNode(bcNode.id, { data: { brightness: result.brightness, contrast: result.contrast } });
            }
            if (satNode && result.saturation !== undefined) {
                updateNode(satNode.id, { data: { saturation: result.saturation } });
            }

            addToast({ title: "AI Color Grade Applied!", variant: 'success' });
        } catch (error) {
            console.error(error);
            addToast({ title: "AI Grading Failed", description: error.message, variant: 'error' });
        } finally {
            setIsGrading(false);
        }
    }, [addToast, nodes, updateNode]);


    return (
        <Stack gap="1.5rem">
            <FileUpload onFileSelect={handleFileSelect} />
            <Grid columns={2} gap="1.5rem" minItemWidth="400px">
                <Grid.Item>
                    <Card title="Preview">
                        <canvas ref={previewCanvasRef} style={{ width: '100%', background: '#000', borderRadius: '4px' }}/>
                        <video ref={videoRef} src={videoSrc} onLoadedMetadata={handleMetadata} style={{ display: 'none' }} crossOrigin="anonymous"/>
                        <canvas ref={processCanvasRef} style={{ display: 'none' }} />
                    </Card>
                </Grid.Item>
                <Grid.Item>
                     <PropertiesPanel onAutoGrade={handleAutoGrade} isGrading={isGrading} />
                </Grid.Item>
                <Grid.Item colSpan={2}>
                    <Timeline duration={duration} currentTime={currentTime} onSeek={handleSeek} waveform={waveform} isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />
                </Grid.Item>
            </Grid>
        </Stack>
    );
};


export const ExampleVideoEditor = () => {
    const initialNodes: NodeData[] = [
        { ...videoSourceNodeType, id: 'source', position: { x: 50, y: 200 } },
        { ...brightnessContrastNodeType, id: 'bc1', position: { x: 300, y: 100 } },
        { ...saturationNodeType, id: 'sat1', position: { x: 300, y: 300 } },
        { ...videoOutputNodeType, id: 'output', position: { x: 600, y: 200 } },
    ];
    const initialConnections: ConnectionData[] = [];

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Example: Video Editor</Text>
                <Text>A functional video editor with a node-based effects engine and AI-powered color grading. Upload a video to begin.</Text>
                <GraphicsProvider
                    initialNodes={initialNodes}
                    initialConnections={initialConnections}
                    creatableNodeTypes={creatableNodeTypes}
                >
                    <VideoEditorUI />
                </GraphicsProvider>
            </Stack>
        </Sofa>
    );
};
