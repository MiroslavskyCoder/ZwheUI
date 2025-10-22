# CodePreview

A component that takes a string of XML-like markup and renders it as live React components from this library. It serves as the engine for the "Live Preview" panels in the documentation.

## Props

*   `code` (string, required): The XML-like string to parse and render.

## Usage

The component automatically has access to all exported components from `ZwheUI`.

```tsx
import { CodePreview } from './src/components';

const myCode = `
<Stack gap="1rem">
    <Text>Hello from XML!</Text>
    <Button>Click Me</Button>
</Stack>
`;

<CodePreview code={myCode} />
```