import React from 'react';
import { NodeData } from '../components/GraphicsNodeEditor/GraphicsContext';
import { applyConvolution } from './utils';

const edgeDetectionKernel = [
    -1, -1, -1,
    -1,  8, -1,
    -1, -1, -1
];

export const edgeDetectionNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Edge Detection',
    inputs: [{ id: 'image', label: 'Image', type: 'image' }],
    outputs: [{ id: 'image', label: 'Image', type: 'image', color: '#9333ea' }],
    process: (inputs) => {
        const imageData = inputs.image as ImageData;
        if (!imageData) return { image: null };
        const newImageData = applyConvolution(imageData, edgeDetectionKernel);
        return { image: newImageData };
    },
};