import React from 'react';
import { Sofa, Text, Stack, GraphicsNodeEditor } from '../src/components';
import { NodeData, ConnectionData } from '../src/components/GraphicsNodeEditor/GraphicsContext';
import { numberNodeType, addNodeType, displayNodeType, sliderNodeType, subtractNodeType } from '../src/components/GraphicsNodeEditor/nodeTypes';
import { GZoom } from '../src/components/GraphicsNodeEditor/plugins/GZoom';

const initialNodes: NodeData[] = [
    {
        ...numberNodeType,
        id: 'num1',
        position: { x: 50, y: 50 },
        data: { value: 100 },
    },
    {
        ...sliderNodeType,
        id: 'slider1',
        position: { x: 50, y: 200 },
        data: { value: 50 },
    },
    {
        ...addNodeType,
        id: 'add1',
        position: { x: 350, y: 80 },
    },
    {
        ...subtractNodeType,
        id: 'sub1',
        position: { x: 350, y: 220 },
    },
    {
        ...displayNodeType,
        id: 'display1',
        position: { x: 650, y: 80 },
    },
    {
        ...displayNodeType,
        id: 'display2',
        position: { x: 650, y: 220 },
    }
];

const initialConnections: ConnectionData[] = [
    { sourceNodeId: 'num1', sourceSocketId: 'value', targetNodeId: 'add1', targetSocketId: 'a' },
    { sourceNodeId: 'slider1', sourceSocketId: 'value', targetNodeId: 'add1', targetSocketId: 'b' },
    { sourceNodeId: 'num1', sourceSocketId: 'value', targetNodeId: 'sub1', targetSocketId: 'a' },
    { sourceNodeId: 'slider1', sourceSocketId: 'value', targetNodeId: 'sub1', targetSocketId: 'b' },
    { sourceNodeId: 'add1', sourceSocketId: 'result', targetNodeId: 'display1', targetSocketId: 'value' },
    { sourceNodeId: 'sub1', sourceSocketId: 'result', targetNodeId: 'display2', targetSocketId: 'value' },
];

export const GraphicsNodeEditorDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Graphics Node Editor</Text>
      <Text>A visual editor for creating and connecting nodes. Use the scroll wheel to zoom and drag the background to pan. Click "Process Graph" to see the results.</Text>
      <div style={{ height: '600px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        <GraphicsNodeEditor 
            initialNodes={initialNodes}
            initialConnections={initialConnections}
            plugins={[GZoom]}
        />
      </div>
    </Stack>
  </Sofa>
);