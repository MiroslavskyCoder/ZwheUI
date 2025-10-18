
import React, { useState, useRef, useCallback } from 'react';
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
        border: `2px dashed ${isDragging ? theme.colors.primary : theme.colors.border}`,
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
            className={`${containerClass} ${className}`}
            onClick={handleClick}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
            <Text>
                {fileName ? `Selected: ${fileName}` : 'Drag & drop a file here, or click to select'}
            </Text>
            <Text size="12px" color={theme.colors.textSecondary}>Max file size: 10MB</Text>
        </div>
    );
};