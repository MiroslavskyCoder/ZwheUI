# Graphics Node Editor

A visual, interactive editor for creating and manipulating node-based graphs. This component now supports functional data processing, a plugin system for extensibility, and a smooth, interactive canvas with panning and zooming.

## Features

*   **Smooth Pan & Zoom**: Drag the background to pan the canvas and use the mouse wheel to zoom in and out with a "zoom-to-cursor" behavior.
*   **Fluid Node Dragging**: Nodes can be dragged around the canvas with a smooth, responsive feel.
*   **Dynamic Curved Connections**: Create connections between compatible input and output sockets by dragging. Lines are rendered as curves, and their color can be determined by the source socket.
*   **Plugin System**: Extend the editor's functionality by passing custom plugin components. The first official plugin is `GZoom`.
*   **Data Processing**: A "Process Graph" button triggers a dependency-aware evaluation of the entire graph.
*   **Custom Node Components**: Nodes can render custom React components in their body, allowing for rich UIs like sliders and inputs directly within the graph.
*   **Type-Safe & Composable**: Built with TypeScript and React Context for a robust and extensible architecture.

## Usage

The editor is initialized with nodes, connections, and optional plugins.

```tsx
import { GraphicsNodeEditor } from './src/components';
import { GZoom } from './src/components/GraphicsNodeEditor/plugins/GZoom';
import { initialNodes, initialConnections } from './demo/data'; // Example data

<div style={{ height: '600px' }}>
    <GraphicsNodeEditor 
        initialNodes={initialNodes}
        initialConnections={initialConnections}
        plugins={[GZoom]}
    />
</div>
```

## Creating Custom Nodes

To create a new type of node, you define a `NodeData` template.

### NodeData Structure
```ts
interface NodeData {
    id: string;
    label: string;
    position: { x: number; y: number };
    inputs: SocketData[];
    outputs: SocketData[];
    component?: React.FC<{...}>;
    process?: (inputs, data) => outputs;
    data?: Record<string, any>;
}

interface SocketData {
    id: string;
    label: string;
    value?: any; // Default value if not connected
    color?: string; // For outgoing connections
}
```

### Example: An 'Add' Node

This node takes two numbers and outputs their sum, with a green connection line.

```tsx
// In a file like `nodeTypes.tsx`

export const addNodeType = {
    label: 'Add',
    inputs: [
        { id: 'a', label: 'A', value: 0 },
        { id: 'b', label: 'B', value: 0 },
    ],
    outputs: [{ id: 'result', label: 'Result', color: '#10b981' }],
    process: (inputs) => ({ result: (inputs.a ?? 0) + (inputs.b ?? 0) }),
};
```

### Example: An 'Input' Node with a Custom Component

This node provides a number that can be edited directly in the UI.

```tsx
// Custom component for the node's body
const SliderComponent = ({ data, onUpdateData }) => {
    return <Slider value={data.data.value} onChange={v => onUpdateData({ value: v })} />;
};

// Node type definition
export const sliderNodeType = {
    label: 'Slider Input',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', color: '#f59e0b' }],
    component: SliderComponent, // Assign the custom UI
    process: (inputs, data) => ({ value: data?.value ?? 50 }),
    data: { value: 50 }, // Initial instance data
};
```