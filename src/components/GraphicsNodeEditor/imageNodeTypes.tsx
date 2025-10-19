import React, { useState, useEffect, useRef } from 'react';
import { NodeData } from './GraphicsContext';
import { FileUpload, Slider, Text, Stack } from '..';

// --- Helper function to work with ImageData ---
const createImageData = (width: number, height: number): ImageData => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    return ctx!.createImageData(width, height);
};


// --- Custom Components for Node Bodies ---

const LoadImageComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ onUpdateData }) => {
    const handleFileSelect = (file: File | null) => {
        if (!file) {
            onUpdateData({ imageData: null });
            return;
        }

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
                    onUpdateData({ imageData });
                }
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    return (
        <div style={{ padding: '8px', minWidth: '250px' }}>
            <FileUpload onFileSelect={handleFileSelect} />
        </div>
    );
};

const DisplayImageComponent: React.FC<{ inputs: Record<string, any> }> = ({ inputs }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageData = inputs.value as ImageData | undefined;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && imageData) {
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            const ctx = canvas.getContext('2d');
            ctx?.putImageData(imageData, 0, 0);
        }
    }, [imageData]);

    return (
        <div style={{ padding: '8px', background: 'rgba(0,0,0,0.3)', minHeight: '100px', minWidth: '100px' }}>
            {imageData ? (
                <canvas ref={canvasRef} style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
            ) : (
                <Text size="12px" color="textSecondary">Connect an image source</Text>
            )}
        </div>
    );
};


const BrightnessContrastComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const brightness = data.data?.brightness ?? 0;
    const contrast = data.data?.contrast ?? 0;
    return (
        <div style={{ padding: '8px', width: '200px' }}>
            <Stack>
                {/* FIX: Type '"label"' is not assignable to type 'AllowedTags'. */}
                <Text size="12px" as="span">Brightness ({brightness})</Text>
                <Slider min={-100} max={100} value={brightness} onChange={v => onUpdateData({ brightness: v })} />
                {/* FIX: Type '"label"' is not assignable to type 'AllowedTags'. */}
                <Text size="12px" as="span">Contrast ({contrast})</Text>
                <Slider min={-100} max={100} value={contrast} onChange={v => onUpdateData({ contrast: v })} />
            </Stack>
        </div>
    );
};


// --- Node Type Definitions ---

export const loadImageNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Load Image',
    inputs: [],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    component: LoadImageComponent,
    process: (inputs, data) => ({ image: data?.imageData ?? null }),
    data: { imageData: null },
};

export const displayImageNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Display Image',
    inputs: [{ id: 'value', label: 'Image', type: 'image' }],
    outputs: [],
    component: DisplayImageComponent,
};

export const grayscaleNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Grayscale',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };
        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            newData[i] = avg;
            newData[i + 1] = avg;
            newData[i + 2] = avg;
            newData[i + 3] = data[i + 3]; // Alpha
        }
        return { image: newImageData };
    },
};

export const invertNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Invert Colors',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };
        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;

        for (let i = 0; i < data.length; i += 4) {
            newData[i] = 255 - data[i];
            newData[i + 1] = 255 - data[i + 1];
            newData[i + 2] = 255 - data[i + 2];
            newData[i + 3] = data[i + 3]; // Alpha
        }
        return { image: newImageData };
    },
};

export const sepiaNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Sepia',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };
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
        return { image: newImageData };
    },
};

export const brightnessContrastNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Brightness / Contrast',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    component: BrightnessContrastComponent,
    data: { brightness: 0, contrast: 0 },
    process: (inputs, data) => {
        const imageData = inputs.image as ImageData;
        const { brightness = 0, contrast = 0 } = data || {};
        if (!imageData) return { image: null };

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
        return { image: newImageData };
    },
};


export const creatableImageNodeTypes = {
    'Load Image': loadImageNodeType,
    'Display Image': displayImageNodeType,
    'Grayscale': grayscaleNodeType,
    'Invert Colors': invertNodeType,
    'Sepia': sepiaNodeType,
    'Brightness / Contrast': brightnessContrastNodeType,
};