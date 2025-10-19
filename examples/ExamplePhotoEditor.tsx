
import React from 'react';
import { Sofa, Text, Stack, Button, GraphicsProvider, GraphicsNodeEditorView, useGraphicsContext } from '../src/components';
import { NodeData, ConnectionData } from '../src/components/GraphicsNodeEditor/GraphicsContext';
import { 
    loadImageNodeType, 
    displayImageNodeType, 
    grayscaleNodeType,
    // FIX: Corrected import path for creatableImageNodeTypes.
    creatableImageNodeTypes 
} from '../src/components/GraphicsNodeEditor/imageNodeTypes';
import { GZoom } from '../src/components/GraphicsNodeEditor/plugins/GZoom';
import { GMenu } from '../src/components/GraphicsNodeEditor/plugins/GMenu';

const initialNodes: NodeData[] = [
    {
        ...loadImageNodeType,
        id: 'load1',
        position: { x: 50, y: 150 },
    },
    {
        ...grayscaleNodeType,
        id: 'grayscale1',
        position: { x: 400, y: 150 },
    },
    {
        ...displayImageNodeType,
        id: 'display1',
        position: { x: 750, y: 150 },
    }
];

const initialConnections: ConnectionData[] = [
    { id: 'conn-1', sourceNodeId: 'load1', sourceSocketId: 'image', targetNodeId: 'grayscale1', targetSocketId: 'image' },
    { id: 'conn-2', sourceNodeId: 'grayscale1', sourceSocketId: 'image', targetNodeId: 'display1', targetSocketId: 'value' },
];


const EditorWithControls = () => {
    const { processGraph } = useGraphicsContext();
    return (
        <Stack gap="1rem">
            <Stack direction="row" justify="space-between" align="center">
                <Text>Upload an image, connect nodes to apply effects, and click "Process Graph" to see the result.</Text>
                <Button onClick={processGraph}>Process Graph</Button>
            </Stack>
            <div style={{ height: '600px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                <GraphicsNodeEditorView plugins={[GZoom, GMenu]} />
            </div>
        </Stack>
    )
}

export const ExamplePhotoEditor = () => {
  return (
    <Sofa>
      <Stack gap="1rem">
        <Text as="h2" size="1.5rem" weight="600">Example: Photo Editor</Text>
        <GraphicsProvider
          initialNodes={initialNodes}
          initialConnections={initialConnections}
          creatableNodeTypes={creatableImageNodeTypes}
        >
          <EditorWithControls />
        </GraphicsProvider>
      </Stack>
    </Sofa>
  );
};
