import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { applyConvolution } from './utils';

const embossKernel = [
    -2, -1, 0,
    -1,  1, 1,
     0,  1, 2
];

export const embossNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Emboss',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };
        const newImageData = applyConvolution(imageData, embossKernel, 128); // Add offset to make it gray
        return { image: newImageData };
    },
};