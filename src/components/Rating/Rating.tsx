import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface RatingProps {
    value: number
    onChange?: (value: number) => void
    max?: number
    readonly?: boolean
    size?: 'small' | 'medium' | 'large'
    className?: string
}

export const Rating: React.FC<RatingProps> = ({
    value,
    onChange,
    max = 5,
    readonly = false,
    size = 'medium',
    className = ''
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('rating')

    const containerClass = createStyle({
        display: 'inline-grid',
        gridAutoFlow: 'column',
        gap: theme.spacing.xs,
        padding: theme.spacing.sm,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(8px)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    })

    const sizes = {
        small: '16px',
        medium: '24px',
        large: '32px'
    }

    const starClass = createStyle({
        width: sizes[size],
        height: sizes[size],
        cursor: readonly ? 'default' : 'pointer',
        position: 'relative',
        transition: 'all 0.2s ease',
        '&::before': {
            content: '"★"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: sizes[size],
            color: 'rgba(255, 255, 255, 0.2)',
            textShadow: 'none',
            transition: 'all 0.2s ease'
        },
        '&[data-filled="true"]::before': {
            color: theme.colors.primary,
            textShadow: `0 0 10px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}`
        },
        '&:hover::before': readonly ? undefined : {
            transform: 'translate(-50%, -50%) scale(1.1)',
            textShadow: `0 0 15px ${theme.colors.primary}, 0 0 30px ${theme.colors.primary}`
        }
    })

    const handleClick = (index: number) => {
        if (!readonly && onChange) {
        onChange(index + 1)
        }
    }

    return (
        <div className={`${containerClass} ${className}`}>
            {Array.from({ length: max }, (_, i) => (
                <span
                    key={i}
                    className={starClass}
                    data-filled={i < value}
                    onClick={() => handleClick(i)}
                />
            ))}
        </div>
    )
}

export default Rating