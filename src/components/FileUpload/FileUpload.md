# File Upload

A component that allows users to select a file by clicking or by dragging and dropping it into a designated area.

## Props

*   `onFileSelect` (function, required): A callback function that is triggered when a file is selected or cleared. It receives the `File` object or `null`.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { FileUpload } from './src/components';
import { useState } from 'react';

const [selectedFile, setSelectedFile] = useState(null);

<FileUpload onFileSelect={setSelectedFile} />
```
