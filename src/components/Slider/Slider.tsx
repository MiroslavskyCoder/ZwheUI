import React, { useState, useRef, useEffect } from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface SliderProps {
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    showValue?: boolean
    className?: string
    color?: string
}

export const Slider: React.FC<SliderProps> = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    showValue = false,
    className = '',
    color,
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('slider')
    const [isDragging, setIsDragging] = useState(false)
    const trackRef = useRef<HTMLDivElement>(null)
    const sliderColor = color || theme.colors.primary

    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
        padding: `${theme.spacing.md} ${theme.spacing.sm}`,
        userSelect: 'none'
    })

    const trackClass = createStyle({
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
    })

    const progressClass = createStyle({
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        backgroundColor: sliderColor,
        borderRadius: '2px',
        width: `${((value - min) / (max - min)) * 100}%`,
        boxShadow: `0 0 10px ${sliderColor}`,
        transition: isDragging ? 'none' : 'all 0.2s ease'
    })

    const thumbClass = createStyle({
        width: '16px',
        height: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: `2px solid ${sliderColor}`,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: `${((value - min) / (max - min)) * 100}%`,
        transform: 'translate(-50%, -50%)',
        cursor: disabled ? 'not-allowed' : 'grab',
        boxShadow: `0 0 10px ${sliderColor}`,
        transition: isDragging ? 'none' : 'all 0.2s ease',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(4px)',
        },
        '&:hover': disabled ? undefined : {
            transform: 'translate(-50%, -50%) scale(1.2)',
            boxShadow: `0 0 15px ${sliderColor}`
        },
        '&:active': disabled ? undefined : {
            cursor: 'grabbing',
            transform: 'translate(-50%, -50%) scale(0.95)'
        }
    })

    const valueClass = createStyle({
        position: 'absolute',
        top: '-24px',
        left: `${((value - min) / (max - min)) * 100}%`,
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: sliderColor,
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '12px',
        pointerEvents: 'none',
        opacity: isDragging || showValue ? 1 : 0,
        transition: 'opacity 0.2s ease',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(4px)',
        },
    })

    const handleMove = (clientX: number) => {
        if (disabled || !trackRef.current) return

        const rect = trackRef.current.getBoundingClientRect()
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
        const newValue = Math.round((percentage * (max - min) + min) / step) * step
        onChange(Math.max(min, Math.min(max, newValue)))
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!disabled) {
        setIsDragging(true)
        handleMove(e.clientX)
        }
    }

    useEffect(() => {
        if (isDragging) {
        const handleMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX)
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
        }
    }, [isDragging])

    return (
        <div className={`${containerClass} ${className}`}>
            <div
                ref={trackRef}
                className={trackClass}
                onMouseDown={handleMouseDown}
            >
                <div className={progressClass} />
                <div className={thumbClass} />
                {(showValue || isDragging) && (
                    <div className={valueClass}>{value}</div>
                )}
            </div>
        </div>
    )
}

export default Slider