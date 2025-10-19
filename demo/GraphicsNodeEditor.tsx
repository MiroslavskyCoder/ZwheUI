
import React from 'react';
import { Sofa, Text, Stack, GraphicsNodeEditor } from '../src/components';
import { NodeData, ConnectionData } from '../src/components/GraphicsNodeEditor/GraphicsContext';
import { numberNodeType, addNodeType, displayNodeType, sliderNodeType, openGLNodeType } from '../src/components/GraphicsNodeEditor/nodeTypes';

const initialNodes: NodeData[] = [
    {
        ...numberNodeType,
        id: 'num1',
        position: { x: 50, y: 50 },
        data: { value: 42 },
    },
    {
        ...sliderNodeType,
        id: 'slider1',
        position: { x: 50, y: 200 },
        data: { value: 33 },
    },
    {
        ...addNodeType,
        id: 'add1',
        position: { x: 350, y: 125 },
    },
    {
        ...displayNodeType,
        id: 'display1',
        position: { x: 650, y: 125 },
    },
    {
        ...openGLNodeType,
        id: 'gpu1',
        position: { x: 350, y: 350 },
    }
];

const initialConnections: ConnectionData[] = [
    { sourceNodeId: 'num1', sourceSocketId: 'value', targetNodeId: 'add1', targetSocketId: 'a' },
    { sourceNodeId: 'slider1', sourceSocketId: 'value', targetNodeId: 'add1', targetSocketId: 'b' },
    { sourceNodeId: 'add1', sourceSocketId: 'result', targetNodeId: 'display1', targetSocketId: 'value' },
];

export const GraphicsNodeEditorDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Graphics Node Editor</Text>
      <Text>A visual editor for creating and connecting nodes. Now with data processing! Connect the nodes and click "Process Graph" to see the result.</Text>
      <div style={{ height: '600px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        <GraphicsNodeEditor 
            initialNodes={initialNodes}
            initialConnections={initialConnections}
        />
      </div>
    </Stack>
  </Sofa>
);
