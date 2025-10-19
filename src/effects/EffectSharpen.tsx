import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { applyConvolution } from './utils';

const sharpenKernel = [
     0, -1,  0,
    -1,  5, -1,
     0, -1,  0
];

export const sharpenNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Sharpen',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };
        const newImageData = applyConvolution(imageData, sharpenKernel);
        return { image: newImageData };
    },
};