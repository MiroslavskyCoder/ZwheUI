# File Upload

A component that allows users to select a file by clicking or by dragging and dropping it into a designated area.

## Props

*   `onFileSelect` (function, required): A callback function that is triggered when a file is selected or cleared. It receives the `File` object or `null`.
*   `type` (enum: 'file' | 'avatar' | 'image', optional, default: 'file'): Determines the component's behavior.
    *   `'file'`: Default behavior, accepts any file type and shows the file name.
    *   `'avatar'`: Shows a circular preview for uploaded images. Only accepts image files.
    *   `'image'`: Shows a rectangular preview and automatically compresses/resizes uploaded images before calling `onFileSelect`.
*   `quality` (number, optional, default: 0.8): The quality for JPEG compression when `type` is `'image'` (a value from 0 to 1).
*   `maxWidth` (number, optional, default: 1024): The maximum width or height for image resizing when `type` is `'image'`.
*   `disableFileName` (boolean, optional, default: false): If true, the file name text will not be displayed after a file is selected.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { FileUpload } from './src/components';
import { useState } from 'react';

const [selectedFile, setSelectedFile] = useState(null);

// For image upload with compression and no filename
<FileUpload type="image" onFileSelect={setSelectedFile} disableFileName={true} />

// For avatar upload
<FileUpload type="avatar" onFileSelect={setSelectedFile} />
```