import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';
import { Slider, Text } from '../components';

const ThresholdComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const threshold = data.data?.threshold ?? 128;
    return (
        <div style={{ padding: '8px', width: '200px' }}>
            <Text size="12px" as="span">Threshold ({threshold})</Text>
            <Slider min={0} max={255} value={threshold} onChange={v => onUpdateData({ threshold: v })} />
        </div>
    );
};

export const thresholdNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Threshold',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    component: ThresholdComponent,
    data: { threshold: 128 },
    process: (inputs, data) => {
        const imageData = inputs.image as ImageData;
        const { threshold = 128 } = data || {};
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const d = imageData.data;
        const newD = newImageData.data;

        for (let i = 0; i < d.length; i += 4) {
            const avg = (d[i] + d[i + 1] + d[i + 2]) / 3;
            const value = avg > threshold ? 255 : 0;
            newD[i] = value;
            newD[i + 1] = value;
            newD[i + 2] = value;
            newD[i + 3] = d[i + 3];
        }
        return { image: newImageData };
    },
};