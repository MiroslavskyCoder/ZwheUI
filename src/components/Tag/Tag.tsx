
import React from 'react';
import { useStyles, useTheme } from '../../core';
import { hexToRgba } from '../../core/color/utils';
import { Icon } from '../Icon/Icon';
import { TimesIcon } from '../../icons';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline';
    colorScheme?: 'primary' | 'accent' | 'success' | 'error';
    size?: 'sm' | 'md' | 'lg';
}

const Tag: React.FC<TagProps> = ({ children, variant = 'solid', colorScheme = 'primary', size = 'md', className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('tag');

    const colors = {
        primary: theme.colors.primary,
        accent: theme.colors.accent,
        success: '#10b981',
        error: '#ef4444',
    };
    
    const baseColor = colors[colorScheme];

    const variantStyles = {
        solid: { backgroundColor: hexToRgba(baseColor, 0.2), color: baseColor, border: '1px solid transparent' },
        outline: { backgroundColor: 'transparent', color: baseColor, border: `1px solid ${baseColor}` },
    };
    
    const sizeStyles = {
        sm: { padding: '0.1rem 0.4rem', fontSize: '11px' },
        md: { padding: '0.125rem 0.625rem', fontSize: '12px' },
        lg: { padding: '0.25rem 0.75rem', fontSize: '14px' },
    };

    const tagClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontWeight: '500',
        borderRadius: '999px',
        lineHeight: '1.25',
        ...variantStyles[variant],
        ...sizeStyles[size],
    });

    return (
        <span className={`${tagClass} ${className}`} {...props}>
            {children}
        </span>
    );
};

const TagCloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const createStyle = useStyles('tag-close-button');
    const buttonClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'inherit',
        opacity: 0.6,
        marginLeft: '0.25rem',
        '&:hover': {
            opacity: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }
    });

    return (
        <button className={buttonClass} aria-label="Remove tag" {...props}>
            <Icon as={TimesIcon} size="0.8em" />
        </button>
    )
};


interface CompoundTag {
    (props: TagProps): React.ReactElement;
    CloseButton: typeof TagCloseButton;
}

const CompoundTag = Tag as CompoundTag;
CompoundTag.CloseButton = TagCloseButton;

export { CompoundTag as Tag };
