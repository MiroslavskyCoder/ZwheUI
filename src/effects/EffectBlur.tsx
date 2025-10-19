import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { createImageData } from './utils';

export const blurNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Blur',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };

        const newImageData = createImageData(imageData.width, imageData.height);
        const data = imageData.data;
        const newData = newImageData.data;
        const width = imageData.width;

        for (let i = 0; i < data.length; i += 4) {
            const y = Math.floor((i / 4) / width);
            const x = (i / 4) % width;
            
            let r = 0, g = 0, b = 0, count = 0;

            for (let j = -1; j <= 1; j++) {
                for (let k = -1; k <= 1; k++) {
                    const nx = x + k;
                    const ny = y + j;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < imageData.height) {
                        const nIndex = (ny * width + nx) * 4;
                        r += data[nIndex];
                        g += data[nIndex + 1];
                        b += data[nIndex + 2];
                        count++;
                    }
                }
            }
            
            newData[i] = r / count;
            newData[i + 1] = g / count;
            newData[i + 2] = b / count;
            newData[i + 3] = data[i + 3];
        }
        return { image: newImageData };
    },
};