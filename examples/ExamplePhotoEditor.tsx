import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    Sofa, Stack, Text, FileUpload, Card, Slider, Checkbox, Button, useToast, Grid, Center, Spinner
} from '../src/components';

// --- Effect Processing Functions (extracted from node types) ---

const createImageData = (width: number, height: number): ImageData => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error("Could not get canvas context");
    return ctx.createImageData(width, height);
};

const applyBrightnessContrast = (imageData: ImageData, brightness: number, contrast: number): ImageData => {
    const newImageData = createImageData(imageData.width, imageData.height);
    const d = imageData.data;
    const newD = newImageData.data;
    const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

    for (let i = 0; i < d.length; i += 4) {
        let r = d[i] + brightness;
        let g = d[i+1] + brightness;
        let b = d[i+2] + brightness;
        
        r = factor * (r - 128) + 128;
        g = factor * (g - 128) + 128;
        b = factor * (b - 128) + 128;
        
        newD[i] = Math.max(0, Math.min(255, r));
        newD[i+1] = Math.max(0, Math.min(255, g));
        newD[i+2] = Math.max(0, Math.min(255, b));
        newD[i+3] = d[i+3];
    }
    return newImageData;
};

const applySaturation = (imageData: ImageData, saturation: number): ImageData => {
    const newImageData = createImageData(imageData.width, imageData.height);
    const d = imageData.data;
    const newD = newImageData.data;
    const s = saturation / 100 + 1.0;

    for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i+1];
        const b = d[i+2];
        const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;

        newD[i] = Math.max(0, Math.min(255, gray + s * (r - gray)));
        newD[i+1] = Math.max(0, Math.min(255, gray + s * (g - gray)));
        newD[i+2] = Math.max(0, Math.min(255, gray + s * (b - gray)));
        newD[i+3] = d[i+3];
    }
    return newImageData;
};

const applyGrayscale = (imageData: ImageData): ImageData => {
    const newImageData = createImageData(imageData.width, imageData.height);
    const data = imageData.data;
    const newData = newImageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        newData[i] = avg;
        newData[i + 1] = avg;
        newData[i + 2] = avg;
        newData[i + 3] = data[i + 3];
    }
    return newImageData;
};

const applySepia = (imageData: ImageData): ImageData => {
    const newImageData = createImageData(imageData.width, imageData.height);
    const data = imageData.data;
    const newData = newImageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2];
        newData[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
        newData[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
        newData[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
        newData[i + 3] = data[i + 3];
    }
    return newImageData;
};

const applyInvert = (imageData: ImageData): ImageData => {
    const newImageData = createImageData(imageData.width, imageData.height);
    const data = imageData.data;
    const newData = newImageData.data;

    for (let i = 0; i < data.length; i += 4) {
        newData[i] = 255 - data[i];
        newData[i + 1] = 255 - data[i + 1];
        newData[i + 2] = 255 - data[i + 2];
        newData[i + 3] = data[i + 3];
    }
    return newImageData;
};

export const ExamplePhotoEditor = () => {
    const { addToast } = useToast();
    const [originalImageData, setOriginalImageData] = useState<ImageData | null>(null);
    const [displayImageData, setDisplayImageData] = useState<ImageData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Controls state
    const [brightness, setBrightness] = useState(0);
    const [contrast, setContrast] = useState(0);
    const [saturation, setSaturation] = useState(0);
    const [grayscale, setGrayscale] = useState(false);
    const [sepia, setSepia] = useState(false);
    const [invert, setInvert] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const applyAllEffects = useCallback(() => {
        if (!originalImageData) return;

        let currentImageData = createImageData(originalImageData.width, originalImageData.height);
        currentImageData.data.set(originalImageData.data);

        // Apply filters in a logical order
        if (grayscale) currentImageData = applyGrayscale(currentImageData);
        if (sepia) currentImageData = applySepia(currentImageData);
        if (invert) currentImageData = applyInvert(currentImageData);
        
        // Color adjustments often come after tonal ones
        if (!grayscale && !sepia) {
             currentImageData = applySaturation(currentImageData, saturation);
        }
        currentImageData = applyBrightnessContrast(currentImageData, brightness, contrast);
        
        setDisplayImageData(currentImageData);
    }, [originalImageData, brightness, contrast, saturation, grayscale, sepia, invert]);
    
    useEffect(() => {
        applyAllEffects();
    }, [applyAllEffects]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && displayImageData) {
            canvas.width = displayImageData.width;
            canvas.height = displayImageData.height;
            const ctx = canvas.getContext('2d');
            ctx?.putImageData(displayImageData, 0, 0);
        } else if (canvas && !originalImageData) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
    }, [displayImageData, originalImageData]);

    const handleFileSelect = (file: File | null) => {
        if (!file) {
            setOriginalImageData(null);
            setDisplayImageData(null);
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
                }
                setIsLoading(false);
            };
            img.onerror = () => {
                 addToast({ title: 'Error', description: 'Could not load image file.', variant: 'error' });
                 setIsLoading(false);
            };
            img.src = e.target?.result as string;
        };
        reader.onerror = () => {
             addToast({ title: 'Error', description: 'Could not read file.', variant: 'error' });
             setIsLoading(false);
        };
        reader.readAsDataURL(file);
    };

    const resetControls = () => {
        setBrightness(0);
        setContrast(0);
        setSaturation(0);
        setGrayscale(false);
        setSepia(false);
        setInvert(false);
    };

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">Example: Photo Editor</Text>
                <Text>A basic photo editor with client-side image processing. Upload an image to apply filters and adjustments.</Text>

                <FileUpload onFileSelect={handleFileSelect} type="image" />

                <Grid minItemWidth='300px' gap="1.5rem" style={{alignItems: 'start'}}>
                    <Grid.Item>
                        <Card>
                           <Card.Header><Card.Title>Controls</Card.Title></Card.Header>
                           <Card.Body>
                                <Stack gap="1.5rem">
                                    <Stack gap="0.5rem">
                                        <Text size="sm">Brightness ({brightness})</Text>
                                        <Slider value={brightness} onChange={setBrightness} min={-100} max={100} step={1} />
                                    </Stack>
                                    <Stack gap="0.5rem">
                                        <Text size="sm">Contrast ({contrast})</Text>
                                        <Slider value={contrast} onChange={setContrast} min={-100} max={100} step={1} />
                                    </Stack>
                                     <Stack gap="0.5rem">
                                        <Text size="sm">Saturation ({saturation})</Text>
                                        <Slider value={saturation} onChange={setSaturation} min={-100} max={100} step={1} disabled={grayscale || sepia}/>
                                    </Stack>
                                    <Stack direction="row" gap="1rem">
                                        <Checkbox label="Grayscale" checked={grayscale} onChange={e => setGrayscale(e.target.checked)} />
                                        <Checkbox label="Sepia" checked={sepia} onChange={e => setSepia(e.target.checked)} />
                                        <Checkbox label="Invert" checked={invert} onChange={e => setInvert(e.target.checked)} />
                                    </Stack>
                                </Stack>
                           </Card.Body>
                           <Card.Footer>
                                <Button variant="secondary" onClick={resetControls}>Reset All</Button>
                           </Card.Footer>
                        </Card>
                    </Grid.Item>
                     <Grid.Item>
                         <Card>
                             <Card.Header><Card.Title>Preview</Card.Title></Card.Header>
                             <Card.Body>
                                 <Center style={{ minHeight: '300px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                                     {isLoading && <Spinner />}
                                     {!isLoading && !originalImageData && <Text color="textSecondary">Upload an image to start</Text>}
                                     <canvas ref={canvasRef} style={{ maxWidth: '100%', borderRadius: '4px', display: originalImageData ? 'block' : 'none' }} />
                                 </Center>
                             </Card.Body>
                         </Card>
                     </Grid.Item>
                </Grid>
            </Stack>
        </Sofa>
    )
};
