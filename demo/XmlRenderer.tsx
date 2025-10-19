

import React, { useState } from 'react';
import { XmlRenderer, Text, Stack, Card, Textarea } from '../src/components';
import { DemoSection } from './DemoSection';

const sampleXml = `<Stack gap="1rem">
  <Card title="From XML">
    <Text>This is a Card inside a Stack.</Text>
  </Card>
  <Layer z="10">
    <Card variant="glass">
      <Text>This Card is in a Layer component rendered from XML.</Text>
    </Card>
  </Layer>
</Stack>
`;

const XmlRendererConfigurator: React.FC<{
    xml: string;
    setXml: (xml: string) => void;
}> = ({ xml, setXml }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">XML Prop</Text>
        <Textarea value={xml} onChange={e => setXml(e.target.value)} rows={8} style={{fontFamily: 'monospace'}} />
    </Stack>
);

const documentation = `# XML Renderer

A component that parses an XML-like string and renders it into corresponding React components from the library. It's a powerful tool for dynamic layout generation.

## Props

*   \`xml\` (string, required): The XML string to be parsed and rendered.
*   \`components\` (object, optional): A map of tag names to React components.

## Default Mapped Components
*   \`layer\` -> \`Layer\`
*   \`layout\` -> \`Stack\`
*   \`div\`, \`span\`, \`p\` -> standard HTML tags`;

const fullSourceCode = `import React from 'react'
import { Layer } from '../Layer/Layer'
import { Stack } from '../Stack/Stack'

export type ComponentMap = { [tag: string]: React.ElementType; };
export interface XmlRendererProps { xml: string; components?: ComponentMap; }

const defaultMap: ComponentMap = { /* ... */ };
function parseAttributes(node: Element) { /* ... */ }
function nodeToElement(node: Node, map: ComponentMap): React.ReactNode { /* ... */ }

export const XmlRenderer: React.FC<XmlRendererProps> = ({ xml, components = {} }) => {
    const map = { ...defaultMap, ...components };
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, 'text/xml');
        const result = Array.from(doc.childNodes).map(/*...*/);
        return <>{result}</>;
    } catch (err) {
        return <div>{xml}</div>;
    }
};`;

export const XmlRendererDemo = () => {
    const [xml, setXml] = useState(sampleXml);

    return (
        <DemoSection
            title="XML Renderer"
            description="A component that parses an XML-like string and renders it into corresponding React components."
            initialCode={xml}
            propControls={<Text color="textSecondary">The XML for this component is directly editable in the 'Editable Code' panel.</Text>}
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};