
import React from 'react';
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
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.colors.border,
        color: theme.colors.textSecondary,
        fontWeight: '500',
        fontSize: `${size * 0.45}px`,
        userSelect: 'none',
    });

    const imageClass = createStyle({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    });

    return (
        <div className={`${containerClass} ${className}`} {...props}>
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
            border: `2px solid ${theme.colors.background}`,
        }
    });
    
    const excessClass = createStyle({
        backgroundColor: theme.colors.secondary,
        color: theme.colors.text,
    });

    return (
        <div className={`${groupClass} ${className}`}>
            {visibleAvatars}
            {hiddenCount > 0 && <Avatar fallback={`+${hiddenCount}`} className={excessClass} />}
        </div>
    );
};
