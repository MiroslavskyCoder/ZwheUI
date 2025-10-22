import React, { useState } from 'react';
import { Text, Stack, Textarea } from '../src/components';
import { DemoSection } from './DemoSection';
import { CodePreview } from '../src/components/Code/CodePreview';

const initialCode = `<Stack gap="1rem" align="center">
    <Text as="h3" size="1.25rem">Live Preview</Text>
    <Text color="textSecondary">This is rendered from the code below.</Text>
    <Button variant="primary">Click Me</Button>
</Stack>`;

const documentation = `# CodePreview

A component that takes a string of XML-like markup and renders it as live React components from this library.

## Props
*   \`code\` (string, required): The XML-like string to parse and render.
`;

const sourceCode = `import React from 'react';
import { XmlRenderer, ComponentMap } from '../XmlRenderer/XmlRenderer';
import * as components from '..';
import * as icons from '../../icons';

const componentMap: ComponentMap = { ...components, ...icons };

export const CodePreview: React.FC<{ code: string }> = ({ code }) => {
    return (
        <XmlRenderer xml={code} components={componentMap} />
    );
};`;

export const CodePreviewDemo = () => {
    const [code, setCode] = useState(initialCode);

    return (
        <DemoSection
            title="Code Preview"
            description="A component that renders live React components from an XML-like string. It's the engine for the demo previews."
            initialCode={code}
            propControls={
                 <Textarea value={code} onChange={e => setCode(e.target.value)} rows={8} style={{fontFamily: 'monospace'}} />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};