# XML Renderer

A component that parses an XML-like string and renders it into corresponding React components from the library. It's a powerful tool for dynamic layout generation.

## Props

*   `xml` (string, required): The XML string to be parsed and rendered.
*   `components` (object, optional): A map of tag names to React components. This allows you to extend the default renderer with your own custom components.

## Default Mapped Components
*   `layer` -> `Layer`
*   `layout` -> `Layout`
*   `div`, `span`, `p` -> standard HTML tags

## Usage

```tsx
import { XmlRenderer, Card, Text } from './src/components';

const sampleXml = `
<layout direction="column" gap="1rem">
  <Card>
    <Text>This Card is rendered from an XML string.</Text>
  </Card>
</layout>
`;

// You must provide any non-default components you use in the XML.
<XmlRenderer xml={sampleXml} components={{ Card, Text }} />
```
