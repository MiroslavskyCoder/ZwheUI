

import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface CardProps {
    title?: string
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'glass'
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void
}

export const Card: React.FC<CardProps> = ({
    title,
    children,
    className = '',
    variant = 'default',
    onClick
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('card')

    const cardClass = createStyle({
        padding: theme.spacing.md,
        borderRadius: '6px',
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        height: '100%',
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: `0 8px 24px rgba(0, 0, 0, 0.5)`,
        },
        // Add a visible focus state for keyboard accessibility
        '&:focus-visible': onClick ? {
            outline: `2px solid ${theme.colors.primary}`,
            outlineOffset: '2px',
        } : {},
    })

    const titleClass = title && createStyle({
        fontSize: theme.typography.fontSizes.base,
        fontWeight: String(theme.typography.fontWeights.semibold),
        marginBottom: theme.spacing.md,
        color: theme.colors.text
    })

    // Handle keyboard events for clickable cards
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault(); // Prevent space from scrolling
            onClick(event);
        }
    };

    // Add ARIA attributes and keyboard event listener if the card is clickable
    const interactiveProps = onClick ? {
        role: 'button',
        tabIndex: 0,
        onKeyDown: handleKeyDown,
    } : {};

    return (
        <div 
            className={`${cardClass} ${className}`} 
            onClick={onClick ? (e) => onClick(e) : undefined}
            {...interactiveProps}
        >
            {title && <h3 className={titleClass}>{title}</h3>}
            {children}
        </div>
    )
}

export default Card