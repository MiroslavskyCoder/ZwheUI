import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';
import { Avatar } from '../Avatar/Avatar';
import { Image } from '../Image/Image';
import { IconButton } from '../IconButton/IconButton';
import { TimesIcon } from '../../icons';
import { useToast } from '../Toast/useToast';
import { Stack } from '../Stack/Stack';

export interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    className?: string;
    type?: 'file' | 'avatar' | 'image';
    quality?: number; // for type="image"
    maxWidth?: number; // for type="image"
    disableFileName?: boolean;
}

const compressImage = (file: File, quality: number, maxWidth: number): Promise<File> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
            if (!event.target?.result) {
                return reject(new Error("Couldn't read file"));
            }
            const img = document.createElement('img');
            img.src = event.target.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width, height } = img;

                if (width > maxWidth || height > maxWidth) {
                    if (width > height) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    } else {
                        width = Math.round((width * maxWidth) / height);
                        height = maxWidth;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return reject(new Error("Couldn't get canvas context"));
                }
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(blob => {
                    if (blob) {
                        resolve(new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now()
                        }));
                    } else {
                        reject(new Error('Canvas to Blob conversion failed'));
                    }
                }, 'image/jpeg', quality);
            };
            img.onerror = reject;
        };
        reader.onerror = reject;
    });
};


export const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    className,
    type = 'file',
    quality = 0.8,
    maxWidth = 1024,
    disableFileName = false
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('file-upload');
    const { addToast } = useToast();
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState('');
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        return () => {
            if (previewSrc) {
                URL.revokeObjectURL(previewSrc);
            }
        }
    }, [previewSrc]);

    const processFile = useCallback(async (file: File | null) => {
        if (previewSrc) {
            URL.revokeObjectURL(previewSrc);
            setPreviewSrc(null);
        }

        if (!file) {
            setFileName('');
            onFileSelect(null);
            if (fileInputRef.current) fileInputRef.current.value = ''; // Reset input
            return;
        }

        const isImage = file.type.startsWith('image/');

        if ((type === 'avatar' || type === 'image') && !isImage) {
            addToast({ title: 'Invalid File Type', description: `Please upload an image file.`, variant: 'error' });
            return;
        }
        
        if (type === 'image' && isImage) {
            try {
                const originalSize = file.size;
                const compressedFile = await compressImage(file, quality, maxWidth);
                setPreviewSrc(URL.createObjectURL(compressedFile));
                const newSize = compressedFile.size;
                const reduction = Math.round(((originalSize - newSize) / originalSize) * 100);
                setFileName(`${compressedFile.name} (${(newSize / 1024).toFixed(1)}KB, ~${reduction}% smaller)`);
                onFileSelect(compressedFile);
            } catch (error) {
                addToast({ title: 'Image Compression Failed', description: 'Using original file instead.', variant: 'warning' });
                setPreviewSrc(URL.createObjectURL(file));
                setFileName(file.name);
                onFileSelect(file);
            }
        } else if (type === 'avatar' && isImage) {
            setPreviewSrc(URL.createObjectURL(file));
            setFileName(file.name);
            onFileSelect(file);
        } else { // type is 'file'
            setFileName(file.name);
            onFileSelect(file);
        }
    }, [type, quality, maxWidth, onFileSelect, addToast, previewSrc]);

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
        processFile(e.dataTransfer.files?.[0] || null);
    }, [handleDrag, processFile]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        processFile(e.target.files?.[0] || null);
    };

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
        minHeight: '150px',
        position: 'relative',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    const closeButtonClass = createStyle({
        position: 'absolute',
        top: '8px',
        right: '8px',
    });

    if (previewSrc && (type === 'avatar' || type === 'image')) {
        return (
            <div className={`${containerClass} ${className}`}>
                {type === 'avatar' && <Avatar src={previewSrc} fallback=".." size={128} />}
                {type === 'image' && <Image src={previewSrc} alt="Preview" style={{ maxHeight: '150px', width: 'auto', borderRadius: '4px' }} />}
                {!disableFileName && <Text size="12px" color={theme.colors.textSecondary} style={{marginTop: '1rem'}}>{fileName}</Text>}
                <IconButton 
                    icon={TimesIcon} 
                    aria-label="Remove file" 
                    onClick={(e) => { e.stopPropagation(); processFile(null); }}
                    className={closeButtonClass}
                    variant="secondary"
                    isRound
                />
            </div>
        )
    }

    return (
        <div 
            className={`${containerClass} ${className}`}
            onClick={handleClick}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
                accept={type === 'image' || type === 'avatar' ? 'image/*' : undefined} 
            />
            {fileName ? (
                <Stack>
                    {!disableFileName && <Text>Selected: {fileName}</Text>}
                     <Text size="12px" color={theme.colors.textSecondary}>Click or drop another file to replace</Text>
                </Stack>
            ) : (
                <Stack>
                    <Text>Drag & drop a file here, or click to select</Text>
                    <Text size="12px" color={theme.colors.textSecondary}>
                        {type === 'image' ? 'Image will be compressed' : type === 'avatar' ? 'Image for avatar' : 'Any file type'}
                    </Text>
                </Stack>
            )}
        </div>
    );
};