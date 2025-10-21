import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';
import { Slider, Text } from '../components';

const SaturationComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const saturation = data.data?.saturation ?? 0;
    return (
        <div style={{ padding: '8px', width: '200px' }}>
            <Text size="12px" as="span">Saturation ({saturation})</Text>
            <Slider min={-100} max={100} value={saturation} onChange={v => onUpdateData({ saturation: v })} />
        </div>
    );
};

export const saturationNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Saturation',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    component: SaturationComponent,
    data: { saturation: 0 },
    process: (inputs, data) => {
        const imageData = inputs.image as ImageData;
        const { saturation = 0 } = data || {};
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const d = imageData.data;
        const newD = newImageData.data;
        const s = saturation / 100 + 1.0; // Convert to factor: 0 (grayscale) to 2 (doubled saturation)

        for (let i = 0; i < d.length; i += 4) {
            const r = d[i];
            const g = d[i+1];
            const b = d[i+2];
            const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b; // Standard luminance calculation

            newD[i] = Math.max(0, Math.min(255, gray + s * (r - gray)));
            newD[i+1] = Math.max(0, Math.min(255, gray + s * (g - gray)));
            newD[i+2] = Math.max(0, Math.min(255, gray + s * (b - gray)));
            newD[i+3] = d[i+3];
        }
        return { image: newImageData };
    },
};
