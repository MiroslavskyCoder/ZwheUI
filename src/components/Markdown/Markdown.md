# Markdown

A component that renders Markdown content with support for GitHub Flavored Markdown (GFM) features like tables, and includes syntax highlighting for code blocks.

## Props

*   `children` (string, required): The Markdown string to render.

## Features

*   Supports all standard Markdown syntax.
*   Supports GFM extensions (tables, strikethrough, etc.) via `remark-gfm`.
*   Automatic syntax highlighting for fenced code blocks using `react-syntax-highlighter`.

## Usage

```tsx
import { Markdown } from './src/components';

const markdownContent = `
# Hello, Markdown!

This is a paragraph with **bold** and *italic* text.

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`
`;

<Markdown>{markdownContent}</Markdown>
```
