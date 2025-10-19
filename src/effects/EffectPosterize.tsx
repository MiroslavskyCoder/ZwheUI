import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';

export const posterizeNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Posterize',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;
        const levels = 5; // Number of color levels
        const step = 255 / (levels - 1);

        for (let i = 0; i < data.length; i += 4) {
            newData[i] = Math.round(data[i] / step) * step;
            newData[i + 1] = Math.round(data[i + 1] / step) * step;
            newData[i + 2] = Math.round(data[i + 2] / step) * step;
            newData[i + 3] = data[i + 3];
        }
        return { image: newImageData };
    },
};