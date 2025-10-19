import React, { useState } from 'react';
import { FileUpload, Text, Stack } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# File Upload

A component that allows users to select a file by clicking or by dragging and dropping it into a designated area.

## Props

*   \`onFileSelect\` (function, required): A callback function that is triggered when a file is selected or cleared. It receives the \`File\` object or \`null\`.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { FileUpload } from './src/components';
import { useState } from 'react';

const [selectedFile, setSelectedFile] = useState(null);

<FileUpload onFileSelect={setSelectedFile} />
\`\`\``;

const sourceCode = `import React, { useState, useRef, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('file-upload');
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            onFileSelect(file);
        } else {
            setFileName('');
            onFileSelect(null);
        }
    };

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragIn = useCallback((e: React.DragEvent) => {
        handleDrag(e);
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    }, [handleDrag]);
    
    const handleDragOut = useCallback((e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
    }, [handleDrag]);
    
    const handleDrop = useCallback((e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
         if (file) {
            setFileName(file.name);
            onFileSelect(file);
        }
    }, [handleDrag, onFileSelect]);

    const handleClick = () => {
        fileInputRef.current?.click();
    };
    
    const containerClass = createStyle({
        width: '100%',
        padding: theme.spacing.lg,
        border: \`2px dashed \${isDragging ? theme.colors.primary : theme.colors.border}\`,
        borderRadius: '8px',
        backgroundColor: isDragging ? 'rgba(59, 130, 246, 0.1)' : theme.colors.backgroundSecondary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    return (
        <div 
            className={\`\${containerClass} \${className}\`}
            onClick={handleClick}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
            <Text>
                {fileName ? \`Selected: \${fileName}\` : 'Drag & drop a file here, or click to select'}
            </Text>
            <Text size="12px" color={theme.colors.textSecondary}>Max file size: 10MB</Text>
        </div>
    );
};`;

export const FileUploadDemo = () => {
    const [file, setFile] = useState<File | null>(null);

    return (
        <DemoSection
            title="File Upload"
            description="A drag-and-drop file input component."
            livePreview={
                <Stack gap="1rem" style={{width: '100%'}}>
                    <FileUpload onFileSelect={setFile} />
                    {file && <Text size="14px">File ready for upload: {file.name} ({Math.round(file.size / 1024)} KB)</Text>}
                </Stack>
            }
            propControls={
                <Text color="textSecondary">The main prop, `onFileSelect`, is a callback. Use the Preview tab to test the file selection and drag-and-drop functionality.</Text>
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
