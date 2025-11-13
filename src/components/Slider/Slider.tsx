import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface Mark {
  value: number;
  label?: React.ReactNode;
}

export interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    marks?: Mark[];
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
    marks,
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

    const isDiscrete = !!marks && marks.length > 0;

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
        
        if (isDiscrete && marks) {
            const index = Math.round(percentage * (marks.length - 1));
            const newValue = marks[index].value;
            if (newValue !== value) {
                onChange(newValue);
            }
        } else {
            const rawValue = percentage * (max - min) + min;
            const steps = (rawValue - min) / step;
            const roundedSteps = Math.round(steps);
            const newValue = roundedSteps * step + min;
            onChange(Math.max(min, Math.min(max, newValue)));
        }
    }, [disabled, min, max, step, onChange, isDiscrete, marks, value]);

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
        
        let newValue: number;
        if (isDiscrete && marks) {
            const currentIndex = marks.findIndex(mark => mark.value === value);
            let newIndex = currentIndex;

            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                newIndex = Math.min(marks.length - 1, currentIndex + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                newIndex = Math.max(0, currentIndex - 1);
            } else {
                return;
            }

            if (newIndex !== currentIndex) {
                 e.preventDefault();
                 onChange(marks[newIndex].value);
            }
        } else {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                newValue = value + step;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                newValue = value - step;
            } else {
                return;
            }
            
            e.preventDefault();
            onChange(Math.max(min, Math.min(max, newValue)));
        }
    };

    const getPercentage = useCallback(() => {
        if (isDiscrete && marks) {
            const index = marks.findIndex(mark => mark.value === value);
            if (index === -1) {
                // Find closest mark if value is not exact
                const closest = marks.reduce((prev, curr) => 
                    (Math.abs(curr.value - value) < Math.abs(prev.value - value) ? curr : prev)
                );
                const closestIndex = marks.findIndex(m => m.value === closest.value);
                return (closestIndex / (marks.length - 1)) * 100;
            }
            return (index / (marks.length - 1)) * 100;
        }
        if (max === min) return 0;
        return ((value - min) / (max - min)) * 100;
    }, [isDiscrete, marks, value, min, max]);

    const percentage = getPercentage();

    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
        padding: isDiscrete ? `${theme.spacing.lg} ${theme.spacing.sm}` : `${theme.spacing.md} ${theme.spacing.sm}`,
        userSelect: 'none',
        marginTop: isDiscrete ? '1rem' : '0'
    });

    const marksContainerClass = createStyle({
        position: 'absolute',
        top: '0',
        left: theme.spacing.sm,
        right: theme.spacing.sm,
        height: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    });

    const markLabelClass = createStyle({
        transform: 'translateX(-50%)',
        fontSize: theme.typography.fontSizes.sm,
        color: theme.colors.textSecondary,
    });

    const trackClass = createStyle({
        height: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '3px',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
    });

    const trackTickClass = createStyle({
        position: 'absolute',
        top: '50%',
        width: '2px',
        height: '10px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '1px',
    });

    const progressClass = createStyle({
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        backgroundColor: sliderColor,
        borderRadius: '3px',
        width: `${percentage}%`,
        boxShadow: `0 0 10px ${sliderColor}`,
        transition: isDragging ? 'none' : 'width 0.1s ease',
        pointerEvents: 'none',
    });

    const thumbClass = createStyle({
        width: '20px',
        height: '20px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: `${percentage}%`,
        transform: 'translate(-50%, -50%)',
        cursor: disabled ? 'not-allowed' : 'grab',
        boxShadow: `0 0 15px ${sliderColor}`,
        transition: isDragging ? 'none' : 'all 0.2s ease',
        '&:hover': disabled ? undefined : {
            transform: 'translate(-50%, -50%) scale(1.1)',
            boxShadow: `0 0 20px ${sliderColor}`
        },
        '&:active': disabled ? undefined : {
            cursor: 'grabbing',
            transform: 'translate(-50%, -50%) scale(0.95)'
        },
        '&:focus': {
            outline: 'none',
        },
         '&:focus-visible': {
            transform: 'translate(-50%, -50%) scale(1.1)',
            boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${sliderColor}`
        }
    });

    const valueClass = createStyle({
        position: 'absolute',
        top: '-28px',
        left: `${percentage}%`,
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
            {isDiscrete && (
                <div className={marksContainerClass}>
                    {marks.map((mark, index) => (
                        <span key={index} className={markLabelClass} style={{ position: 'absolute', left: `${(index / (marks.length - 1)) * 100}%` }}>
                            {mark.label}
                        </span>
                    ))}
                </div>
            )}
            <div
                ref={trackRef}
                className={trackClass}
                onMouseDown={handleInteractionStart}
                onTouchStart={handleInteractionStart}
            >
                <div className={progressClass} />
                {isDiscrete && marks.map((mark, index) => {
                    const markIndex = marks.findIndex(m => m.value === value);
                    const isActive = markIndex !== -1 && index <= markIndex;
                    const isFirstOrLast = index === 0 || index === marks.length - 1;
                    return (
                         <div
                            key={index}
                            className={trackTickClass}
                            style={{
                                left: `${(index / (marks.length - 1)) * 100}%`,
                                backgroundColor: isActive ? sliderColor : 'rgba(255, 255, 255, 0.3)',
                                height: isFirstOrLast ? '10px' : '6px', // Taller ticks for ends
                            }}
                        />
                    )
                })}
                <div
                    className={thumbClass}
                    onKeyDown={handleKeyDown}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-valuenow={value}
                    aria-valuemin={isDiscrete ? marks[0].value : min}
                    aria-valuemax={isDiscrete ? marks[marks.length-1].value : max}
                    aria-disabled={disabled}
                    aria-orientation="horizontal"
                />
                {(showValue || isDragging) && (
                    <div className={valueClass}>
                        {isDiscrete ? marks.find(m => m.value === value)?.label || value : value}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Slider;