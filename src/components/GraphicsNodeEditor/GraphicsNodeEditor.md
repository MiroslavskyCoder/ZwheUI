
# Graphics Node Editor

A visual, interactive editor for creating and manipulating node-based graphs. This component now supports functional data processing, allowing you to build complex data flows where the output of one node becomes the input of another.

## Features

*   **Draggable Nodes**: Pan and arrange nodes freely on an infinite canvas.
*   **Connectable Sockets**: Create connections between compatible input and output sockets by dragging.
*   **Data Processing**: A "Process Graph" button triggers a dependency-aware evaluation of the entire graph.
*   **Custom Node Components**: Nodes can render custom React components in their body, allowing for rich, interactive UIs like sliders, inputs, or data visualizations directly within the graph.
*   **Type-Safe & Composable**: Built with TypeScript and React Context for a robust and extensible architecture.

## Usage

The editor is initialized with a set of nodes and connections.

```tsx
import { GraphicsNodeEditor } from './src/components';
import { initialNodes, initialConnections } from './demo/data'; // Example data

<div style={{ height: '600px' }}>
    <GraphicsNodeEditor 
        initialNodes={initialNodes}
        initialConnections={initialConnections}
    />
</div>
```

## Creating Custom Nodes

To create a new type of node, you define a `NodeData` template. This is the core of the editor's extensibility.

### NodeData Structure
```ts
interface NodeData {
    id: string;
    label: string;
    position: { x: number; y: number };
    inputs: SocketData[];
    outputs: SocketData[];
    // Renders the body of the node
    component?: React.FC<{ 
        data: NodeData; 
        inputs: Record<string, any>; // Processed input values
        onUpdateData: (newData: Record<string, any>) => void;
    }>;
    // The logic function for the node
    process?: (inputs: Record<string, any>, data: NodeData['data']) => Record<string, any>;
    // Instance-specific data
    data?: Record<string, any>;
}
```

### Example: An 'Add' Node

This node takes two numbers and outputs their sum.

```tsx
// In a file like `nodeTypes.tsx`

export const addNodeType = {
    label: 'Add',
    inputs: [
        { id: 'a', label: 'A', value: 0 }, // 'value' is a default if not connected
        { id: 'b', label: 'B', value: 0 },
    ],
    outputs: [{ id: 'result', label: 'Result' }],
    // The core logic
    process: (inputs) => ({ result: (inputs.a ?? 0) + (inputs.b ?? 0) }),
};

// To use it:
const myAddNode = {
    ...addNodeType,
    id: 'my-adder',
    position: { x: 100, y: 100 },
};
```

### Example: An 'Input' Node with a Custom Component

This node provides a number that can be edited directly in the UI.

```tsx
// Custom component for the node's body
const NumberComponent = ({ data, onUpdateData }) => {
    const value = data.data?.value ?? 0;
    return (
        <Input 
            type="number"
            value={value}
            onChange={e => onUpdateData({ value: parseFloat(e.target.value) || 0 })}
        />
    );
};

// Node type definition
export const numberNodeType = {
    label: 'Number Input',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value' }],
    component: NumberComponent, // Assign the custom UI
    process: (inputs, data) => ({ value: data?.value ?? 0 }), // Output its own data value
    data: { value: 10 }, // Initial instance data
};
```
