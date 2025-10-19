import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';

export const pixelateNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Pixelate',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;
        const width = imageData.width;
        const height = imageData.height;
        const pixelSize = 10;

        for (let y = 0; y < height; y += pixelSize) {
            for (let x = 0; x < width; x += pixelSize) {
                const startIdx = (y * width + x) * 4;
                const r = data[startIdx];
                const g = data[startIdx + 1];
                const b = data[startIdx + 2];
                
                for (let j = 0; j < pixelSize; j++) {
                    for (let i = 0; i < pixelSize; i++) {
                        const currentX = x + i;
                        const currentY = y + j;
                        if (currentX < width && currentY < height) {
                            const idx = (currentY * width + currentX) * 4;
                            newData[idx] = r;
                            newData[idx + 1] = g;
                            newData[idx + 2] = b;
                            newData[idx + 3] = data[idx + 3];
                        }
                    }
                }
            }
        }
        return { image: newImageData };
    },
};