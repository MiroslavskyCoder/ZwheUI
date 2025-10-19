# Graphics Node Editor

A visual, interactive editor for creating and manipulating node-based graphs. This component features a plugin system for extensibility, a smooth interactive canvas, and a hook-based architecture for flexible external control.

## Features

*   **Smooth Pan & Zoom**: Drag the background to pan the canvas and use the mouse wheel to zoom in and out with a "zoom-to-cursor" behavior (via the `GZoom` plugin).
*   **Fluid Node Dragging**: Nodes can be dragged around the canvas with a smooth, responsive feel without using the native HTML5 drag-and-drop API.
*   **Dynamic Curved Connections**: Create connections between compatible input and output sockets by dragging. Lines are rendered as curves, and their color can be determined by the source socket.
*   **Interactive Connections**: Right-click any connection line to open a context menu with options to delete, change color, or transform the line style between curved and straight.
*   **External Control via Hooks**: The editor's core logic is exposed through a `useGraphicsContext` hook, allowing you to trigger graph processing and access state from outside the component.
*   **Plugin System**: Extend the editor's functionality by passing custom plugin components. The first official plugin is `GZoom`.
*   **Custom Node Components**: Nodes can render custom React components in their body, allowing for rich UIs like sliders and inputs directly within the graph.
*   **Type-Safe & Composable**: Built with TypeScript and React Context for a robust and extensible architecture.

## Architecture

The editor is split into two main components: `GraphicsProvider` and `GraphicsNodeEditorView`. This separation allows for flexible control over the editor's state and actions from anywhere within the provider's scope.

*   **`GraphicsProvider`**: A React Context provider that manages all the state for nodes, connections, pan/zoom, and graph processing.
*   **`GraphicsNodeEditorView`**: The visual component that renders the editor canvas, nodes, and connections. It must be a child of `GraphicsProvider`.
*   **`useGraphicsContext`**: A hook that provides access to the editor's state and functions, such as `processGraph`.

## Usage

Wrap the `GraphicsNodeEditorView` with `GraphicsProvider` and use the `useGraphicsContext` hook to interact with it.

```tsx
import { 
    GraphicsProvider, 
    GraphicsNodeEditorView, 
    Button, 
    useGraphicsContext 
} from './src/components';
import { GZoom } from './src/components/GraphicsNodeEditor/plugins/GZoom';
import { initialNodes, initialConnections } from './demo/GraphicsNodeEditor';

// A component that uses the context to control the editor
const EditorWithControls = () => {
    const { processGraph } = useGraphicsContext();
    return (
        <div>
            <Button onClick={processGraph}>Process Graph</Button>
            <div style={{ height: '600px', marginTop: '1rem' }}>
                <GraphicsNodeEditorView plugins={[GZoom]} />
            </div>
        </div>
    );
}

// Main setup in your app
<GraphicsProvider
    initialNodes={initialNodes}
    initialConnections={initialConnections}
>
    <EditorWithControls />
</GraphicsProvider>
```

## Data Structures

### NodeData
To create a new type of node, you define a `NodeData` template.

```ts
interface NodeData {
    id: string;
    label: string;
    position: { x: number; y: number };
    inputs: SocketData[];
    outputs: SocketData[];
    component?: React.FC<{ 
        data: NodeData; 
        inputs: Record<string, any>; 
        onUpdateData: (newData: Record<string, any>) => void;
    }>;
    process?: (inputs: Record<string, any>, data: NodeData['data']) => Record<string, any>;
    data?: Record<string, any>;
}

interface SocketData {
    id: string;
    label: string;
    value?: any; // Default value if input is not connected
    color?: string; // Default color for outgoing connections
}
```

### ConnectionData
Connections can also be customized.

```ts
interface ConnectionData {
    id: string;
    sourceNodeId: string;
    sourceSocketId: string;
    targetNodeId: string;
    targetSocketId: string;
    color?: string; // Overrides the source socket's color
    type?: 'curved' | 'straight'; // Style of the connection line
}
```
