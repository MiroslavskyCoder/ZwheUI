import React from 'react';
import { Sofa, Text, Stack, Button, GraphicsEditor } from '../src/components';
import { NodeData, ConnectionData } from '../src/components/GraphicsNodeEditor/GraphicsContext';
import { numberNodeType, addNodeType, displayNodeType, sliderNodeType, subtractNodeType, creatableNodeTypes } from '../src/components/GraphicsNodeEditor/nodeTypes';

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
        ...displayNodeType,
        id: 'display1',
        position: { x: 650, y: 80 },
    }
];

const initialConnections: ConnectionData[] = [
    { id: 'conn-1', sourceNodeId: 'num1', sourceSocketId: 'value', targetNodeId: 'add1', targetSocketId: 'a' },
    { id: 'conn-2', sourceNodeId: 'slider1', sourceSocketId: 'value', targetNodeId: 'add1', targetSocketId: 'b' },
    { id: 'conn-5', sourceNodeId: 'add1', sourceSocketId: 'result', targetNodeId: 'display1', targetSocketId: 'value' },
];


export const GraphicsNodeEditorDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Graphics Editor: Fast</Text>
       <div style={{ height: '700px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
            <GraphicsEditor
                initialNodes={initialNodes}
                initialConnections={initialConnections}
                creatableNodeTypes={creatableNodeTypes}
            />
        </div>
    </Stack>
  </Sofa>
);