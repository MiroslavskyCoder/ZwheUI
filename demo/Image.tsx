
import React, { useState } from 'react';
import { Image, Text, Stack, Grid, Icon, Input, SegmentedControl } from '../src/components';
import { ImageIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const ImageConfigurator: React.FC<{
    src: string;
    setSrc: (s: string) => void;
    fit: React.CSSProperties['objectFit'];
    setFit: (f: any) => void;
    radius: string;
    setRadius: (r: string) => void;
}> = ({ src, setSrc, fit, setFit, radius, setRadius }) => (
    <Stack gap="1.5rem">
        <Input label="Src Prop (URL)" value={src} onChange={e => setSrc(e.target.value)} placeholder="Enter image URL" />
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Fit Prop</Text>
            <SegmentedControl value={fit} onChange={setFit} options={[{label: 'Cover', value: 'cover'}, {label: 'Contain', value: 'contain'}, {label: 'Fill', value: 'fill'}]} />
        </Stack>
        <Input label="Radius Prop (e.g., 8px, 50%)" value={radius} onChange={e => setRadius(e.target.value)} />
    </Stack>
);

const documentation = `# Image

A component for displaying images with support for loading skeletons and fallback content.

## Props

*   \`fallbackSrc\` (string, optional): A fallback image URL to use if the primary \`src\` fails to load.
*   \`fallback\` (React.ReactNode, optional): A React node to display if the image fails to load and no \`fallbackSrc\` is provided.
*   \`fit\` (string, optional): The \`object-fit\` CSS property. Defaults to \`cover\`.
*   \`radius\` (string, optional): The \`border-radius\` of the image. Defaults to \`8px\`.
*   All other standard \`<img>\` attributes are supported.

## Usage

\`\`\`tsx
import { Image, Text } from './src/components';

<Image 
  src="https://example.com/image.jpg"
  alt="An example image"
  fallback={<Text>Image not available</Text>}
/>
\`\`\``;

const sourceCode = `import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Center } from '../Center/Center';
import { Skeleton } from '../Skeleton/Skeleton';
import { useStyles, useTheme } from '../../core';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    fallback?: React.ReactNode;
    fit?: React.CSSProperties['objectFit'];
    radius?: string;
}

export const Image: React.FC<ImageProps> = ({ src, fallbackSrc, fallback, fit = 'cover', radius = '8px', className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('image');
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

    const handleLoad = () => setStatus('loaded');
    const handleError = () => setStatus('error');

    const imageClass = createStyle({
        width: '100%',
        height: '100%',
        objectFit: fit,
        borderRadius: radius,
    });
    
    const finalSrc = status === 'error' && fallbackSrc ? fallbackSrc : src;

    return (
        <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
            {status === 'loading' && <Skeleton variant="rect" width="100%" height="100%" style={{ position: 'absolute', borderRadius: radius }} />}
            
            <img
                src={finalSrc}
                onLoad={handleLoad}
                onError={handleError}
                className={\`\${imageClass} \${className}\`}
                style={{ opacity: status === 'loading' ? 0 : 1 }}
                {...props}
            />
            
            {status === 'error' && !fallbackSrc && fallback && (
                <Center style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: theme.colors.border, borderRadius: radius }}>
                    {fallback}
                </Center>
            )}
        </Box>
    );
};`;

export const ImageDemo = () => {
    const [src, setSrc] = useState("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400");
    const [fit, setFit] = useState<React.CSSProperties['objectFit']>('cover');
    const [radius, setRadius] = useState('8px');
    
    // Remount image when src changes to reset loading state
    const imageKey = src + fit + radius;

    return (
        <DemoSection
            title="Image"
            description="A component for displaying images with loading states and fallbacks."
            livePreview={
                <div style={{width: '200px', height: '200px'}}>
                    <Image 
                        key={imageKey}
                        src={src} 
                        alt="Configurable image"
                        fit={fit}
                        radius={radius}
                        fallback={<Icon as={ImageIcon} size={48} />}
                    />
                </div>
            }
            propControls={
                <ImageConfigurator 
                    src={src} setSrc={setSrc}
                    fit={fit} setFit={setFit}
                    radius={radius} setRadius={setRadius}
                />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};