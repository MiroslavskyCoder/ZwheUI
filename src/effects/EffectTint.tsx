import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';
import { Slider, Stack, Text } from '../components';

const TintComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const r = data.data?.r ?? 0;
    const g = data.data?.g ?? 0;
    const b = data.data?.b ?? 0;
    return (
        <div style={{ padding: '8px', width: '200px' }}>
            <Stack>
                <Text size="12px" as="span" color="#ef4444">Red ({r})</Text>
                <Slider min={-255} max={255} value={r} onChange={v => onUpdateData({ r: v })} color="#ef4444"/>
                <Text size="12px" as="span" color="#10b981">Green ({g})</Text>
                <Slider min={-255} max={255} value={g} onChange={v => onUpdateData({ g: v })} color="#10b981"/>
                <Text size="12px" as="span" color="#3b82f6">Blue ({b})</Text>
                <Slider min={-255} max={255} value={b} onChange={v => onUpdateData({ b: v })} color="#3b82f6"/>
            </Stack>
        </div>
    );
};

export const tintNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Tint',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    component: TintComponent,
    data: { r: 0, g: 0, b: 0 },
    process: (inputs, data) => {
        const imageData = inputs.image as ImageData;
        const { r = 0, g = 0, b = 0 } = data || {};
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const d = imageData.data;
        const newD = newImageData.data;

        for (let i = 0; i < d.length; i += 4) {
            newD[i] = Math.max(0, Math.min(255, d[i] + r));
            newD[i+1] = Math.max(0, Math.min(255, d[i+1] + g));
            newD[i+2] = Math.max(0, Math.min(255, d[i+2] + b));
            newD[i+3] = d[i+3];
        }
        return { image: newImageData };
    },
};