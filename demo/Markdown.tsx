import React, { useState } from 'react';
import { Markdown, Text, Stack, Textarea } from '../src/components';
import { DemoSection } from './DemoSection';

const initialMarkdown = `# Welcome to ZwheUI Markdown

This is a live demo of the \`Markdown\` component.

## Features

- Supports GitHub Flavored Markdown (GFM) like tables.
- Renders standard Markdown elements.
- Provides syntax highlighting for code blocks.

| Feature         | Status  |
| --------------- | ------- |
| **Tables**      | ✅ Done |
| **Code Blocks** | ✅ Done |
| **Styling**     | ✅ Done |

\`\`\`javascript
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
}
\`\`\`

> This is a blockquote. You can write important notes here.
`;

const MarkdownConfigurator: React.FC<{
    content: string;
    setContent: (c: string) => void;
}> = ({ content, setContent }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Markdown Content</Text>
        <Textarea value={content} onChange={e => setContent(e.target.value)} rows={10} style={{ fontFamily: 'monospace' }}/>
    </Stack>
);

const documentation = `# Markdown

A component that renders Markdown content with support for GitHub Flavored Markdown (GFM) features like tables, and includes syntax highlighting for code blocks.

## Props
*   \`children\` (string, required): The Markdown string to render.
`;

const fullSourceCode = `import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useStyles, useTheme } from '../../core';

export const Markdown: React.FC<{ children: string }> = ({ children }) => {
    // ... styling and component logic
    return (
        <div className={containerClass}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {children}
            </ReactMarkdown>
        </div>
    );
};`;

export const MarkdownDemo = () => {
    const [content, setContent] = useState(initialMarkdown);

    return (
        <DemoSection
            title="Markdown Renderer"
            description="Renders Markdown with GFM support and syntax highlighting."
            livePreview={<Markdown>{content}</Markdown>}
            propControls={<MarkdownConfigurator content={content} setContent={setContent} />}
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
