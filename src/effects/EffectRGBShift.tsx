import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';

export const rgbShiftNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'RGB Shift',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;
        const width = imageData.width;
        const offset = 10;

        for (let i = 0; i < data.length; i += 4) {
            const x = (i / 4) % width;
            
            const rIndex = (i - offset * 4);
            const bIndex = (i + offset * 4);

            newData[i] = (x > offset) ? data[rIndex] : 0; // Red
            newData[i + 1] = data[i + 1]; // Green
            newData[i + 2] = (x < width - offset) ? data[bIndex + 2] : 0; // Blue
            newData[i + 3] = data[i + 3]; // Alpha
        }
        return { image: newImageData };
    },
};