# Graphics Node Editor

ZwheUI includes a powerful, interactive editor for creating and manipulating node-based graphs. This is ideal for applications like visual programming, shader editors, or complex configuration tools.

## Core Architecture

The editor is split into a provider and a view, allowing for flexible control and state management.

- **`GraphicsProvider`**: A React Context provider that holds the state for all nodes, connections, and canvas transformations (pan/zoom). It must wrap any component that needs to interact with the editor.
- **`GraphicsNodeEditorView`**: The component that renders the visual editor canvas, nodes, and connections.
- **`useGraphicsContext`**: A hook for accessing the editor's state and functions (e.g., `processGraph`, `createNode`).

## Basic Setup

```tsx
import { GraphicsProvider, GraphicsNodeEditorView } from 'zwheui';

const initialNodes = [/* ... your node data ... */];
const initialConnections = [/* ... your connection data ... */];

const MyEditor = () => (
  <div style={{ height: '600px', width: '100%' }}>
    <GraphicsProvider 
      initialNodes={initialNodes} 
      initialConnections={initialConnections}
    >
      <GraphicsNodeEditorView />
    </GraphicsProvider>
  </div>
);
```

## Plugins

You can extend the editor's functionality by passing plugin components to `GraphicsNodeEditorView`. Plugins are simple components that use the `useGraphicsContext` hook to add features.

- **`GZoom`**: Enables pan-and-zoom functionality using the mouse wheel and dragging the background.
- **`GMenu`**: Enables a right-click context menu on the canvas to add new nodes.

```tsx
import { GZoom, GMenu } from 'zwheui';

<GraphicsNodeEditorView plugins={[GZoom, GMenu]} />
```

## Defining Custom Nodes

The true power of the editor comes from defining your own nodes. A node is a JavaScript object that defines its appearance, inputs, outputs, and logic.

### `NodeData` Structure
```ts
const myCustomNodeType = {
  label: 'My Node',
  // Sockets for input data
  inputs: [ { id: 'a', label: 'Input A', type: 'number', value: 0 } ],
  // Sockets for output data
  outputs: [ { id: 'result', label: 'Result', type: 'number' } ],
  // Optional React component for the node's body
  component: MyNodeUI,
  // The logic function
  process: (inputs, data) => {
    // inputs = { a: 10 }
    // data = internal state from MyNodeUI
    return { result: inputs.a * (data.multiplier || 2) };
  },
  // Initial internal data for the node
  data: { multiplier: 2 },
};
```

To make a node available in the right-click menu (`GMenu`), pass it in the `creatableNodeTypes` prop on `GraphicsProvider`.

## Processing the Graph

You can trigger the graph execution from any component within the `GraphicsProvider`. The `processGraph` function calculates the output of each node based on its connections and updates the editor's state.

```tsx
const Controls = () => {
  const { processGraph } = useGraphicsContext();
  return <Button onClick={processGraph}>Run Graph</Button>;
};
```
