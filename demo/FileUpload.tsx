import React, { useState } from 'react';
import { FileUpload, Text, Stack, SegmentedControl, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# File Upload

A component that allows users to select a file by clicking or by dragging and dropping it into a designated area.

## Props

*   \`onFileSelect\` (function, required): A callback function that is triggered when a file is selected or cleared. It receives the \`File\` object or \`null\`.
*   \`type\` (enum: 'file' | 'avatar' | 'image', optional, default: 'file'): Determines the component's behavior.
    *   \`avatar\`: Shows a circular preview for uploaded images.
    *   \`image\`: Shows a rectangular preview and automatically compresses uploaded images.
*   \`quality\` (number, optional, default: 0.8): The quality for image compression (0 to 1).
*   \`maxWidth\` (number, optional, default: 1024): The maximum width/height for image resizing.
*   \`disableFileName\` (boolean, optional, default: false): If true, the file name text will not be displayed after a file is selected.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { FileUpload } from './src/components';
import { useState } from 'react';

const [selectedFile, setSelectedFile] = useState(null);

// For image upload with compression and no filename
<FileUpload type="image" onFileSelect={setSelectedFile} disableFileName={true} />
\`\`\``;

const sourceCode = `import React, { useState, useRef, useCallback, useEffect } from 'react';
// ... imports

export interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    className?: string;
    type?: 'file' | 'avatar' | 'image';
    quality?: number; // for type="image"
    maxWidth?: number; // for type="image"
    disableFileName?: boolean;
}

// ... helper for image compression ...

export const FileUpload: React.FC<FileUploadProps> = (props) => {
    const { disableFileName = false } = props;
    // ... internal logic for state, previews, and compression ...

    if (previewSrc && (type === 'avatar' || type === 'image')) {
        return (
            <div className={previewContainerClass}>
                {/* ... preview rendering ... */}
                {!disableFileName && <Text>{fileName}</Text>}
                <IconButton 
                    icon={TimesIcon} 
                    onClick={() => processFile(null)}
                />
            </div>
        )
    }

    return (
        <div /* dropzone props */ >
            <input type="file" /* ... */ />
            {fileName ? (
                <Stack>
                    {!disableFileName && <Text>Selected: {fileName}</Text>}
                    <Text size="12px" color="textSecondary">...</Text>
                </Stack>
             ) : ( /* ... placeholder text ... */)}
        </div>
    )
};`;

export const FileUploadDemo = () => {
    const [file, setFile] = useState<File | null>(null);
    const [type, setType] = useState<'file' | 'avatar' | 'image'>('file');
    const [disableFileName, setDisableFileName] = useState(false);

    const handleTypeChange = (newType: any) => {
        setType(newType);
        setFile(null); // Reset file on type change for a cleaner demo
    };

    return (
        <DemoSection
            title="File Upload"
            description="A drag-and-drop file input component with support for image previews and client-side compression."
            livePreview={
                <Stack gap="1rem" style={{width: '100%'}}>
                    <FileUpload 
                        key={`${type}-${disableFileName}`} // Re-mount when props change
                        onFileSelect={setFile} 
                        type={type} 
                        disableFileName={disableFileName}
                    />
                    {file && (
                        <Text size="14px" color="textSecondary">
                            File selected: <strong>{file.name}</strong> ({(file.size / 1024).toFixed(1)} KB)
                        </Text>
                    )}
                </Stack>
            }
            propControls={
                <Stack gap="1rem">
                    <Text as="label" size="sm" weight="medium" color="textSecondary">Type Prop</Text>
                    <SegmentedControl 
                        value={type}
                        onChange={handleTypeChange}
                        options={[
                            { label: 'File', value: 'file' },
                            { label: 'Avatar', value: 'avatar' },
                            { label: 'Image', value: 'image' }
                        ]}
                    />
                    <Checkbox
                        label="Disable File Name"
                        checked={disableFileName}
                        onChange={(e) => setDisableFileName(e.target.checked)}
                    />
                </Stack>
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};