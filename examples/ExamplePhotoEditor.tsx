import React, { useState, useRef, useEffect, useCallback, useReducer } from 'react';
import {
    Sofa, Stack, Text, FileUpload, Card, Slider, Checkbox, Button, useToast, Grid, Center, Spinner,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent, IconButton, Icon, Divider
} from '../src/components';
import { 
    MagicWandIcon, RedoIcon, DownloadIcon
} from '../src/icons';
import { GoogleGenAI } from "@google/genai";
import { useTheme } from '../src/core';

// --- Web Worker for Image Processing ---
const workerScript = `
self.onmessage = (e) => {
    const { imageData, settings } = e.data;
    if (!imageData) return;

    const createImageData = (width, height) => {
        try {
            return new ImageData(width, height);
        } catch (e) {
            const canvas = new OffscreenCanvas(width, height);
            const ctx = canvas.getContext('2d');
            return ctx.createImageData(width, height);
        }
    };
    
    // --- Effect Functions (self-contained for the worker) ---
    // These functions take ImageData and return new ImageData

    const applyGrayscale = (dIn) => {
        const dOut = new Uint8ClampedArray(dIn.length);
        for (let i = 0; i < dIn.length; i += 4) {
            const avg = (dIn[i] + dIn[i + 1] + dIn[i + 2]) / 3;
            dOut[i] = dOut[i + 1] = dOut[i + 2] = avg;
            dOut[i + 3] = dIn[i + 3];
        }
        return dOut;
    };

    const applySepia = (dIn) => {
        const dOut = new Uint8ClampedArray(dIn.length);
        for (let i = 0; i < dIn.length; i += 4) {
            const r = dIn[i], g = dIn[i+1], b = dIn[i+2];
            dOut[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
            dOut[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
            dOut[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
            dOut[i + 3] = dIn[i + 3];
        }
        return dOut;
    };
    
    const applyInvert = (dIn) => {
        const dOut = new Uint8ClampedArray(dIn.length);
        for (let i = 0; i < dIn.length; i += 4) {
            dOut[i] = 255 - dIn[i];
            dOut[i + 1] = 255 - dIn[i + 1];
            dOut[i + 2] = 255 - dIn[i + 2];
            dOut[i + 3] = dIn[i + 3];
        }
        return dOut;
    };

    // --- Main Processing Logic ---
    let processedData = new Uint8ClampedArray(imageData.data.buffer);
    const { width, height } = imageData;
    
    // Apply filters first
    if (settings.grayscale) processedData = applyGrayscale(processedData);
    if (settings.sepia) processedData = applySepia(processedData);
    if (settings.invert) processedData = applyInvert(processedData);

    // Apply adjustments
    const brightness = settings.brightness || 0;
    const contrast = settings.contrast || 0;
    const saturation = settings.saturation || 0;
    const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    const saturationFactor = saturation / 100 + 1.0;

    for (let i = 0; i < processedData.length; i += 4) {
        // Brightness & Contrast
        let r = processedData[i] + brightness;
        let g = processedData[i+1] + brightness;
        let b = processedData[i+2] + brightness;
        
        r = contrastFactor * (r - 128) + 128;
        g = contrastFactor * (g - 128) + 128;
        b = contrastFactor * (b - 128) + 128;

        // Saturation (only if not grayscale/sepia)
        if (!settings.grayscale && !settings.sepia) {
            const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
            r = gray + saturationFactor * (r - gray);
            g = gray + saturationFactor * (g - gray);
            b = gray + saturationFactor * (b - gray);
        }
        
        processedData[i] = Math.max(0, Math.min(255, r));
        processedData[i+1] = Math.max(0, Math.min(255, g));
        processedData[i+2] = Math.max(0, Math.min(255, b));
    }
    
    const finalImageData = createImageData(width, height);
    finalImageData.data.set(processedData);
    postMessage({ processedImageData: finalImageData });
};
`;

const initialSettings = {
    brightness: 0, contrast: 0, saturation: 0,
    grayscale: false, sepia: false, invert: false,
};

const historyReducer = (state, action) => {
    const { past, present, future } = state;
    switch (action.type) {
        case 'SET':
            if (action.payload === present) return state;
            return {
                past: [...past, present],
                present: action.payload,
                future: [],
            };
        case 'UNDO':
            if (past.length === 0) return state;
            const previous = past[past.length - 1];
            const newPast = past.slice(0, past.length - 1);
            return {
                past: newPast,
                present: previous,
                future: [present, ...future],
            };
        case 'REDO':
            if (future.length === 0) return state;
            const next = future[0];
            const newFuture = future.slice(1);
            return {
                past: [...past, present],
                present: next,
                future: newFuture,
            };
        case 'RESET':
            return {
                past: [],
                present: action.payload,
                future: [],
            };
        default:
            return state;
    }
};


export const ExamplePhotoEditor = () => {
    const { addToast } = useToast();
    const [originalImageData, setOriginalImageData] = useState(null);
    const [displayImageData, setDisplayImageData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isGrading, setIsGrading] = useState(false);
    const [isKeySelected, setIsKeySelected] = useState(false);
    
    const [history, dispatch] = useReducer(historyReducer, {
        past: [],
        present: initialSettings,
        future: [],
    });

    const settings = history.present;
    
    const canvasRef = useRef(null);
    const workerRef = useRef<Worker | null>(null);

    // Check for API Key on mount
    useEffect(() => {
        const checkApiKey = async () => {
            if ((window as any).aistudio) {
                const hasKey = await (window as any).aistudio.hasSelectedApiKey();
                setIsKeySelected(hasKey);
            }
        };
        checkApiKey();
    }, []);

    // Initialize Web Worker
    useEffect(() => {
        const blob = new Blob([workerScript], { type: 'application/javascript' });
        const worker = new Worker(URL.createObjectURL(blob));
        workerRef.current = worker;

        worker.onmessage = (e) => {
            setDisplayImageData(e.data.processedImageData);
        };
        
        return () => worker.terminate();
    }, []);

    // Apply effects whenever settings change
    useEffect(() => {
        if (originalImageData && workerRef.current) {
            // Transfer buffer to worker to avoid copying
            const transferable = {
                ...originalImageData,
                data: originalImageData.data.buffer
            };
            workerRef.current.postMessage({ imageData: transferable, settings }, [transferable.data]);
        }
    }, [originalImageData, settings]);

    // Update canvas when display data changes
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && displayImageData) {
            canvas.width = displayImageData.width;
            canvas.height = displayImageData.height;
            const ctx = canvas.getContext('2d');
            ctx?.putImageData(displayImageData, 0, 0);
        } else if (canvas && !originalImageData) {
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [displayImageData, originalImageData]);

    const handleFileSelect = (file) => {
        if (!file) {
            setOriginalImageData(null);
            setDisplayImageData(null);
            dispatch({ type: 'RESET', payload: initialSettings });
            return;
        }
        setIsLoading(true);
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(0, 0, img.width, img.height);
                    setOriginalImageData(imageData);
                    dispatch({ type: 'RESET', payload: initialSettings });
                }
                setIsLoading(false);
            };
            if (e.target?.result && typeof e.target.result === 'string') {
                img.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    };

    const handleSettingChange = (key, value) => {
        dispatch({ type: 'SET', payload: { ...settings, [key]: value } });
    };
    
    const handleDownload = () => {
        if (!canvasRef.current) return;
        const link = document.createElement('a');
        link.download = 'edited-image.png';
        link.href = canvasRef.current.toDataURL('image/png');
        link.click();
    };

    const handleAutoGrade = async () => {
        if (!(window as any).aistudio) {
            addToast({ title: 'AI Studio context not found', variant: 'error' });
            return;
        }

        if (!isKeySelected) {
            await (window as any).aistudio.openSelectKey();
            setIsKeySelected(true); // Assume success to avoid race condition
        }
        
        if (!canvasRef.current) {
            addToast({ title: 'No image loaded', variant: 'warning' });
            return;
        }

        setIsGrading(true);
        try {
            const canvas = canvasRef.current;
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
            const base64Data = dataUrl.split(',')[1];
            
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: {
                    parts: [
                        { text: "You are a professional photo colorist. Analyze this image and suggest adjustments for brightness, contrast, and saturation. Your goal is a balanced, cinematic, and appealing look. Return ONLY a JSON object with keys 'brightness', 'contrast', and 'saturation', with integer values from -100 to 100." },
                        { inlineData: { mimeType: 'image/jpeg', data: base64Data } }
                    ]
                },
                config: { responseMimeType: 'application/json' }
            });
            
            const result = JSON.parse(response.text);
            const newSettings = { 
                ...settings, 
                brightness: result.brightness ?? settings.brightness,
                contrast: result.contrast ?? settings.contrast,
                saturation: result.saturation ?? settings.saturation,
            };
            dispatch({ type: 'SET', payload: newSettings });

            addToast({ title: "AI Color Grade Applied!", variant: 'success' });
        } catch (error: any) {
            console.error(error);
             if (error.message && error.message.includes('Requested entity was not found.')) {
                addToast({ title: 'API Key Error', description: 'Please select a valid key.', variant: 'error' });
                setIsKeySelected(false);
            } else {
                addToast({ title: "AI Grading Failed", description: error.message, variant: 'error' });
            }
        } finally {
            setIsGrading(false);
        }
    };


    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Advanced Photo Editor</Text>
                <Grid minItemWidth='250px' gap="1.5rem" style={{alignItems: 'start'}}>
                    <Grid.Item>
                        <Toolbar history={history} dispatch={dispatch} onDownload={handleDownload} onAutoGrade={handleAutoGrade} isGrading={isGrading} disabled={!originalImageData || isLoading} />
                    </Grid.Item>
                    <Grid.Item colSpan={2}>
                        <Card>
                             <Card.Body>
                                <Center style={{ minHeight: '400px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '1rem', overflow: 'hidden' }}>
                                    {isLoading && <Spinner />}
                                    {!isLoading && !originalImageData && <FileUpload onFileSelect={handleFileSelect} type="image" />}
                                    <canvas ref={canvasRef} style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', display: originalImageData ? 'block' : 'none' }} />
                                 </Center>
                             </Card.Body>
                        </Card>
                    </Grid.Item>
                    <Grid.Item colSpan={3}>
                         <ControlsPanel settings={settings} onSettingChange={handleSettingChange} disabled={!originalImageData || isLoading}/>
                    </Grid.Item>
                </Grid>
            </Stack>
        </Sofa>
    );
};


const Toolbar = ({ history, dispatch, onDownload, onAutoGrade, isGrading, disabled }) => (
    <Card>
        <Card.Body>
            <Stack gap="1rem" align="center">
                <IconButton icon={MagicWandIcon} aria-label="AI Auto Grade" onClick={onAutoGrade} disabled={disabled || isGrading} />
                <Divider />
                <IconButton icon={UndoIcon} aria-label="Undo" onClick={() => dispatch({ type: 'UNDO' })} disabled={history.past.length === 0 || disabled} />
                <IconButton icon={RedoIcon} aria-label="Redo" onClick={() => dispatch({ type: 'REDO' })} disabled={history.future.length === 0 || disabled} />
                <Divider />
                <IconButton icon={DownloadIcon} aria-label="Download" onClick={onDownload} disabled={disabled} />
            </Stack>
        </Card.Body>
    </Card>
);

const ControlsPanel = ({ settings, onSettingChange, disabled }) => {
    return (
        <Card>
            <Card.Body>
                <Accordion defaultValue="adjustments">
                    <AccordionItem value="adjustments">
                        <AccordionTrigger><Text weight="600">Adjustments</Text></AccordionTrigger>
                        <AccordionContent>
                            <Stack gap="1rem" style={{paddingTop: '1rem'}}>
                                <Stack><Text size="sm">Brightness ({settings.brightness})</Text><Slider value={settings.brightness} onChange={v => onSettingChange('brightness', v)} min={-100} max={100} disabled={disabled}/></Stack>
                                <Stack><Text size="sm">Contrast ({settings.contrast})</Text><Slider value={settings.contrast} onChange={v => onSettingChange('contrast', v)} min={-100} max={100} disabled={disabled}/></Stack>
                                <Stack><Text size="sm">Saturation ({settings.saturation})</Text><Slider value={settings.saturation} onChange={v => onSettingChange('saturation', v)} min={-100} max={100} disabled={disabled || settings.grayscale || settings.sepia}/></Stack>
                            </Stack>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="effects">
                        <AccordionTrigger><Text weight="600">Effects</Text></AccordionTrigger>
                        <AccordionContent>
                            <Stack gap="1rem" style={{paddingTop: '1rem'}}>
                                <Checkbox label="Grayscale" checked={settings.grayscale} onChange={e => onSettingChange('grayscale', e.target.checked)} disabled={disabled} />
                                <Checkbox label="Sepia" checked={settings.sepia} onChange={e => onSettingChange('sepia', e.target.checked)} disabled={disabled} />
                                <Checkbox label="Invert" checked={settings.invert} onChange={e => onSettingChange('invert', e.target.checked)} disabled={disabled} />
                            </Stack>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card.Body>
        </Card>
    )
};

// --- Local Icons ---
const UndoIcon = () => <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12.5 8C9.81 8 7.45 8.99 5.6 10.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>;
