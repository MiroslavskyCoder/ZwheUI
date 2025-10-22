# Advanced Node Editor

The ZwheUI `GraphicsNodeEditor` is a powerful tool that goes beyond simple static nodes. You can create complex, interactive nodes with their own UI and internal state, and even build custom plugins to extend the editor's core functionality.

## Creating Custom Nodes with UI

A node can render a custom React component in its body. This allows you to create nodes with controls like sliders, inputs, or even file uploads.

### The `component` Property

To add a custom UI to a node, define a React component and pass it to the `component` property of the node definition. This component will receive three props:

-   `data`: The full `NodeData` object for the current node.
-   `inputs`: An object where keys are the `id` of the node's input sockets and values are the processed outputs from connected nodes.
-   `onUpdateData`: A function to update the node's internal `data` object.

### Example: A Slider Node

Let's create a "Slider" node that has a slider in its body and outputs the slider's value.

**1. The Node's UI Component:**

```tsx
import { Slider, Text } from 'zwheui';

const SliderComponent = ({ data, onUpdateData }) => {
  // Get the current value from the node's internal data, with a fallback.
  const value = data.data?.value ?? 50;
  
  return (
    <div style={{ padding: '8px', width: '200px' }}>
      <Text size="12px">Value: {value}</Text>
      <Slider 
        min={0} 
        max={100} 
        value={value} 
        // When the slider changes, call onUpdateData to save the new value.
        onChange={v => onUpdateData({ value: v })} 
      />
    </div>
  );
};
```

**2. The Node Definition:**

The `process` function is the key to making the node functional. It reads the internal `data` (updated by our `SliderComponent`) and returns it as an output.

```ts
import { NodeData } from 'zwheui';

export const sliderNodeType: Omit<NodeData, 'id' | 'position'> = {
  label: 'Slider Input',
  inputs: [],
  outputs: [{ id: 'value', label: 'Value', type: 'number' }],
  component: SliderComponent,
  // The process function gets the node's data and returns its outputs.
  process: (inputs, data) => {
    return { value: data?.value ?? 50 };
  },
  // Initial internal state for the node.
  data: { value: 50 },
};
```

Now, whenever the user adjusts the slider in the `SliderComponent`, `onUpdateData` is called, which updates the node's internal state. When the graph is processed, the `process` function reads this updated state and provides it to any connected nodes.

## Creating a Custom Plugin

Plugins are React components that are rendered inside the `GraphicsNodeEditorView`. They can use the `useGraphicsContext` hook to interact with the editor's state and add new functionality.

### Example: A "Reset View" Plugin

Let's create a simple plugin that adds a button to reset the pan and zoom of the canvas.

```tsx
import { Button, useGraphicsContext } from 'zwheui';

export const GResetView = () => {
  // Get the setters for pan and zoom from the context.
  const { setPan, setZoom } = useGraphicsContext();

  const handleReset = () => {
    setPan({ x: 0, y: 0 });
    setZoom(1);
  };

  return (
    <Button 
      onClick={handleReset}
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        zIndex: 100
      }}
    >
      Reset View
    </Button>
  );
};
```

### Using the Plugin

Now, you can pass this new `GResetView` component to the `plugins` array on `GraphicsNodeEditorView`.

```tsx
import { GraphicsNodeEditorView } from 'zwheui';
import { GZoom, GMenu } from 'zwheui/plugins';
import { GResetView } from './my-plugins/GResetView';

<GraphicsNodeEditorView 
  plugins={[GZoom, GMenu, GResetView]} 
/>
```

This plugin system is extremely powerful. You could use it to create:
-   A minimap of the node graph.
-   A search bar to find and focus nodes.
-   Tools for aligning or distributing nodes automatically.
-   A "history" panel with undo/redo functionality.
-   Anything you can imagine by manipulating the state provided by `useGraphicsContext`.
