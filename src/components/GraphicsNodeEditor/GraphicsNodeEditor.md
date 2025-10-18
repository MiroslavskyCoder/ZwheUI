# Graphics Node Editor

A component for creating and visualizing node-based graphs. It provides a canvas where users can add, move, and connect nodes, suitable for building visual programming interfaces, flowcharts, or complex diagrams.

## Components & Hooks

*   **GraphicsNodeEditor**: The main wrapper that provides the canvas and renders nodes and connections.
*   **GraphicsProvider**: A context provider that manages the state of the entire graph (nodes, connections, pan, zoom).
*   **useGraphics**: A hook to access the graph's state (`state`) and update it (`dispatch`).

## Data Structures

```ts
// Represents a single node on the canvas
interface NodeData {
    id: string;
    label: string;
    position: { x: number; y: number };
    inputs: number; // Number of input sockets
    outputs: number; // Number of output sockets
}

// Represents a connection between two nodes
interface ConnectionData {
    id: string;
    fromNode: string; // ID of the source node
    fromSocket: number; // Index of the source socket
    toNode: string; // ID of the target node
    toSocket: number; // Index of the target socket
}
```

## Usage

```tsx
import { GraphicsNodeEditor } from './src/components';

const initialNodes = {
  'node-1': { id: 'node-1', label: 'Input Node', position: { x: 50, y: 50 }, inputs: 0, outputs: 1 },
  'node-2': { id: 'node-2', label: 'Output Node', position: { x: 350, y: 80 }, inputs: 1, outputs: 0 },
};

const initialConnections = [
  { id: 'conn-1', fromNode: 'node-1', fromSocket: 0, toNode: 'node-2', toSocket: 0 },
];

<GraphicsNodeEditor nodes={initialNodes} connections={initialConnections} />
```

**Note:** The interactive features like dragging nodes, panning, zooming, and creating new connections require complex event handling. The current version is a simplified, display-only representation of the architecture.
