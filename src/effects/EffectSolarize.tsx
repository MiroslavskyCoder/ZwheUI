import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';

export const solarizeNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Solarize',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;
        const threshold = 128;

        for (let i = 0; i < data.length; i += 4) {
            newData[i] = data[i] > threshold ? 255 - data[i] : data[i];
            newData[i + 1] = data[i + 1] > threshold ? 255 - data[i + 1] : data[i + 1];
            newData[i + 2] = data[i + 2] > threshold ? 255 - data[i + 2] : data[i + 2];
            newData[i + 3] = data[i + 3];
        }
        return { image: newImageData };
    },
};