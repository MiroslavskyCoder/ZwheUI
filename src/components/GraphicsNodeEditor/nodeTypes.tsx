import React from 'react';
import { NodeData } from './GraphicsContext';
import { Input, Slider, Text } from '..';

// --- Custom Components for Node Bodies ---

const NumberComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const value = data.data?.value ?? 0;
    return (
        <div style={{ padding: '0 8px' }}>
            <Input 
                type="number"
                label="Value"
                value={value}
                onChange={e => onUpdateData({ value: parseFloat(e.target.value) || 0 })}
            />
        </div>
    );
};

const SliderComponent: React.FC<{ data: NodeData; onUpdateData: (d: any) => void; }> = ({ data, onUpdateData }) => {
    const value = data.data?.value ?? 50;
    return (
        <div style={{ padding: '8px' }}>
            <Slider 
                min={0}
                max={100}
                value={value}
                onChange={v => onUpdateData({ value: v })}
                showValue
            />
        </div>
    );
};

const DisplayComponent: React.FC<{ inputs: Record<string, any> }> = ({ inputs }) => {
    const value = inputs.value;
    const displayValue = typeof value === 'object' ? JSON.stringify(value, null, 2) : value?.toString() ?? 'N/A';

    return (
        <div style={{ padding: '8px', minWidth: '100px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}>
            <Text as="pre" size="12px" style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                {displayValue}
            </Text>
        </div>
    );
};

// --- Node Type Definitions ---

export const numberNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Number Input',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', type: 'number', color: '#60a5fa' }],
    component: NumberComponent,
    process: (inputs, data) => ({ value: data?.value ?? 0 }),
    data: { value: 10 },
};

export const sliderNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Slider Input',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', type: 'number', color: '#f59e0b' }],
    component: SliderComponent,
    process: (inputs, data) => ({ value: data?.value ?? 50 }),
    data: { value: 50 },
};

export const addNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Add',
    inputs: [
        { id: 'a', label: 'A', type: 'number', value: 0 },
        { id: 'b', label: 'B', type: 'number', value: 0 },
    ],
    outputs: [{ id: 'result', label: 'Result', type: 'number', color: '#10b981' }],
    process: (inputs) => ({ result: (inputs.a ?? 0) + (inputs.b ?? 0) }),
};

export const subtractNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Subtract',
    inputs: [
        { id: 'a', label: 'A', type: 'number', value: 0 },
        { id: 'b', label: 'B', type: 'number', value: 0 },
    ],
    outputs: [{ id: 'result', label: 'Result', type: 'number', color: '#ef4444' }],
    process: (inputs) => ({ result: (inputs.a ?? 0) - (inputs.b ?? 0) }),
};

export const displayNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'Display',
    inputs: [{ id: 'value', label: 'Value', type: 'any' }],
    outputs: [],
    component: DisplayComponent,
};

export const openGLNodeType: Omit<NodeData, 'id' | 'position'> = {
    label: 'GPU Shader (Concept)',
    inputs: [
        { id: 'color', label: 'Color', type: 'any' },
        { id: 'position', label: 'Position', type: 'any' },
    ],
    outputs: [{ id: 'fragColor', label: 'Frag Color', type: 'any' }],
    process: (inputs) => ({ fragColor: inputs.color ?? { r: 0, g: 0, b: 0, a: 1 } }),
    component: () => <Text size="12px" color="textSecondary">This node simulates a shader.</Text>
};

export const creatableNodeTypes = {
    'Number Input': numberNodeType,
    'Slider Input': sliderNodeType,
    'Add': addNodeType,
    'Subtract': subtractNodeType,
    'Display': displayNodeType,
};