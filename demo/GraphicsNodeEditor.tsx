import React from 'react';
import { Sofa, Text, Stack, GraphicsNodeEditor } from '../src/components';

const initialNodes = {
  'node-1': { id: 'node-1', label: 'Input A', position: { x: 50, y: 50 }, inputs: 0, outputs: 1 },
  'node-2': { id: 'node-2', label: 'Input B', position: { x: 50, y: 180 }, inputs: 0, outputs: 1 },
  'node-3': { id: 'node-3', label: 'Add Operation', position: { x: 350, y: 110 }, inputs: 2, outputs: 1 },
  'node-4': { id: 'node-4', label: 'Result', position: { x: 650, y: 110 }, inputs: 1, outputs: 0 },
};

const initialConnections = [
  { id: 'conn-1', fromNode: 'node-1', fromSocket: 0, toNode: 'node-3', toSocket: 0 },
  { id: 'conn-2', fromNode: 'node-2', fromSocket: 0, toNode: 'node-3', toSocket: 1 },
  { id: 'conn-3', fromNode: 'node-3', fromSocket: 0, toNode: 'node-4', toSocket: 0 },
];

export const GraphicsNodeEditorDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Example: Graphics Node Editor</Text>
      <Text>A visual editor for creating and connecting nodes. This is a display-only demonstration of the component's structure.</Text>
      <GraphicsNodeEditor nodes={initialNodes} connections={initialConnections} />
    </Stack>
  </Sofa>
);
