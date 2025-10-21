import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';
import { Slider, Text } from '../components';

const VignetteComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const size = data.data?.size ?? 0.5;
    const feather = data.data?.feather ?? 0.5;
    return (
        <div style={{ padding: '8px', width: '200px' }}>
            <Text size="12px" as="span">Size ({size.toFixed(2)})</Text>
            <Slider min={0} max={1} step={0.01} value={size} onChange={v => onUpdateData({ size: v })} />
            <Text size="12px" as="span">Feather ({feather.toFixed(2)})</Text>
            <Slider min={0} max={1} step={0.01} value={feather} onChange={v => onUpdateData({ feather: v })} />
        </div>
    );
};

export const vignetteMaskNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Vignette Mask',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    component: VignetteComponent,
    data: { size: 0.5, feather: 0.5 },
    process: (inputs, data) => {
        const imageData = inputs.image as ImageData;
        const { size = 0.5, feather = 0.5 } = data || {};
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const d = imageData.data;
        const newD = newImageData.data;
        const width = imageData.width;
        const height = imageData.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

        for (let i = 0; i < d.length; i += 4) {
            const x = (i / 4) % width;
            const y = Math.floor((i / 4) / width);

            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy) / maxDist;

            let vignette = 1.0;
            const start = size;
            const end = start + feather;

            if (dist > start) {
                if (dist < end) {
                    vignette = 1.0 - (dist - start) / feather;
                } else {
                    vignette = 0;
                }
            }
            
            newD[i] = d[i] * vignette;
            newD[i+1] = d[i+1] * vignette;
            newD[i+2] = d[i+2] * vignette;
            newD[i+3] = d[i+3];
        }
        return { image: newImageData };
    },
};