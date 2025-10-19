import React, { useState } from 'react';
import { Avatar, AvatarGroup, Sofa, Text, Stack, Input, Slider } from '../src/components';
import { DemoSection } from './DemoSection';

const AvatarConfigurator: React.FC<{
    size: number;
    setSize: (s: number) => void;
    fallback: string;
    setFallback: (f: string) => void;
    src: string;
    setSrc: (s: string) => void;
    groupMax: number;
    setGroupMax: (m: number) => void;
}> = ({ size, setSize, fallback, setFallback, src, setSrc, groupMax, setGroupMax }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Avatar: Size ({size}px)</Text>
            <Slider value={size} onChange={setSize} min={20} max={80} />
        </Stack>
        <Input label="Avatar: Fallback" value={fallback} onChange={e => setFallback(e.target.value)} />
        <Input label="Avatar: Src (URL)" value={src} onChange={e => setSrc(e.target.value)} placeholder="Enter image URL" />
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">AvatarGroup: Max ({groupMax})</Text>
            <Slider value={groupMax} onChange={setGroupMax} min={1} max={5} />
        </Stack>
    </Stack>
);

const documentation = `# Avatar & AvatarGroup

Components for displaying user profile images or initials.

## Components

*   **Avatar**: Displays a single avatar image with a fallback to initials.
*   **AvatarGroup**: Displays a stacked collection of avatars, with an indicator for overflow.

## Props

### Avatar
*   \`src\` (string, optional): The URL of the image to display.
*   \`alt\` (string, optional): Alternative text for the image.
*   \`fallback\` (string, required): The initials or text to display if the image fails to load.
*   \`size\` (number, optional, default: 40): The width and height of the avatar in pixels.

### AvatarGroup
*   \`children\` (React.ReactNode): A series of \`Avatar\` components.
*   \`max\` (number, optional, default: 3): The maximum number of avatars to display before showing an overflow count.

## Usage

\`\`\`tsx
import { Avatar, AvatarGroup } from './src/components';

// Single Avatar
<Avatar src="path/to/image.jpg" fallback="JD" />

// Avatar Group
<AvatarGroup max={3}>
    <Avatar src="path/to/user1.jpg" fallback="U1" />
    <Avatar src="path/to/user2.jpg" fallback="U2" />
    <Avatar fallback="U3" />
    <Avatar fallback="U4" />
</AvatarGroup>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, size = 40, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('avatar');

    const containerClass = createStyle({
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.colors.border,
        color: theme.colors.textSecondary,
        fontWeight: '500',
        fontSize: \`\${size * 0.45}px\`,
        userSelect: 'none',
    });

    const imageClass = createStyle({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    });

    return (
        <div className={\`\${containerClass} \${className}\`} {...props}>
            {src ? (
                <img src={src} alt={alt} className={imageClass} />
            ) : (
                <span>{fallback}</span>
            )}
        </div>
    );
};


interface AvatarGroupProps {
    children: React.ReactNode;
    max?: number;
    className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max = 3, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('avatar-group');
    const avatars = React.Children.toArray(children);
    const visibleAvatars = avatars.slice(0, max);
    const hiddenCount = avatars.length - max;

    const groupClass = createStyle({
        display: 'inline-flex',
        '& > *:not(:first-child)': {
            marginLeft: '-12px', // Overlap avatars
        },
         '& > *': {
            border: \`2px solid \${theme.colors.background}\`,
        }
    });
    
    const excessClass = createStyle({
        backgroundColor: theme.colors.secondary,
        color: theme.colors.text,
    });

    return (
        <div className={\`\${groupClass} \${className}\`}>
            {visibleAvatars}
            {hiddenCount > 0 && <Avatar fallback={\`+\${hiddenCount}\`} className={excessClass} />}
        </div>
    );
};`;

export const AvatarDemo = () => {
    const [size, setSize] = useState(40);
    const [fallback, setFallback] = useState('ZW');
    const [src, setSrc] = useState('https://i.pravatar.cc/150?u=a042581f4e29026704d');
    const [groupMax, setGroupMax] = useState(3);

    return (
        <DemoSection
            title="Avatar"
            description="An image element with a fallback for representing a user. Includes an AvatarGroup for stacking."
            livePreview={
                <Stack gap="2rem" align="center">
                    <Avatar size={size} fallback={fallback} src={src} />
                    <AvatarGroup max={groupMax}>
                        <Avatar fallback="A" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar fallback="B" src="https://i.pravatar.cc/150?u=a042581f4e29026704e" />
                        <Avatar fallback="C" src="https://i.pravatar.cc/150?u=a042581f4e29026704f" />
                        <Avatar fallback="D" />
                        <Avatar fallback="E" />
                    </AvatarGroup>
                </Stack>
            }
            propControls={
                <AvatarConfigurator 
                    size={size} setSize={setSize}
                    fallback={fallback} setFallback={setFallback}
                    src={src} setSrc={setSrc}
                    groupMax={groupMax} setGroupMax={setGroupMax}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
