import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    showValue?: boolean;
    className?: string;
    color?: string;
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
    const { theme } = useTheme();
    const createStyle = useStyles('slider');
    const [isDragging, setIsDragging] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const sliderColor = color || theme.colors.primary;

    const getClientX = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent): number => {
        if ('touches' in e && e.touches.length > 0) {
            return e.touches[0].clientX;
        }
        return (e as MouseEvent).clientX;
    };

    const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (disabled || !trackRef.current) return;

        const clientX = getClientX(e);
        const rect = trackRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        
        const rawValue = percentage * (max - min) + min;
        const steps = (rawValue - min) / step;
        const roundedSteps = Math.round(steps);
        const newValue = roundedSteps * step + min;

        onChange(Math.max(min, Math.min(max, newValue)));
    }, [disabled, min, max, step, onChange]);

    const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
        if (disabled) return;
        handleMove(e);
        setIsDragging(true);
    };

    useEffect(() => {
        if (isDragging) {
            const handleInteractionMove = (e: MouseEvent | TouchEvent) => handleMove(e);
            const stopDragging = () => setIsDragging(false);

            document.addEventListener('mousemove', handleInteractionMove);
            document.addEventListener('touchmove', handleInteractionMove);
            document.addEventListener('mouseup', stopDragging);
            document.addEventListener('touchend', stopDragging);

            return () => {
                document.removeEventListener('mousemove', handleInteractionMove);
                document.removeEventListener('touchmove', handleInteractionMove);
                document.removeEventListener('mouseup', stopDragging);
                document.removeEventListener('touchend', stopDragging);
            };
        }
    }, [isDragging, handleMove]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;
        
        let newValue = value;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            newValue = value + step;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            newValue = value - step;
        } else {
            return;
        }
        
        e.preventDefault();
        onChange(Math.max(min, Math.min(max, newValue)));
    };

    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
        padding: `${theme.spacing.md} ${theme.spacing.sm}`,
        userSelect: 'none'
    });

    const trackClass = createStyle({
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
    });

    const progressClass = createStyle({
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        backgroundColor: sliderColor,
        borderRadius: '2px',
        width: `${((value - min) / (max - min)) * 100}%`,
        boxShadow: `0 0 10px ${sliderColor}`,
        transition: isDragging ? 'none' : 'width 0.1s ease',
        pointerEvents: 'none',
    });

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
        },
        '&:focus': {
            outline: 'none',
            transform: 'translate(-50%, -50%) scale(1.2)',
            boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${sliderColor}`
        }
    });

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
        transition: 'opacity 0.2s ease, left 0.1s ease',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(4px)',
        },
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <div
                ref={trackRef}
                className={trackClass}
                onMouseDown={handleInteractionStart}
                onTouchStart={handleInteractionStart}
            >
                <div className={progressClass} />
                <div
                    className={thumbClass}
                    onKeyDown={handleKeyDown}
                    onMouseDown={(e) => { e.stopPropagation(); handleInteractionStart(e); }}
                    onTouchStart={(e) => { e.stopPropagation(); handleInteractionStart(e); }}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-valuenow={value}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-disabled={disabled}
                    aria-orientation="horizontal"
                />
                {(showValue || isDragging) && (
                    <div className={valueClass}>{value}</div>
                )}
            </div>
        </div>
    );
}

export default Slider;