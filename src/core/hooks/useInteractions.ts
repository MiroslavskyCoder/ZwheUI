import { useEffect, useRef, useState, useCallback } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(callback: () => void) => {
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [callback])

    return ref
}

export const useHover = () => {
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleMouseEnter = () => setIsHovered(true)
        const handleMouseLeave = () => setIsHovered(false)

        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter)
            element.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return [ref, isHovered] as const
}

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') return initialValue

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error)
            return initialValue
        }
    })

    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error)
        }
    }, [key, storedValue])

    return [storedValue, setValue] as const
}

export const useDebounce = <T,>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}

export const useDraggable = (
    elementRef: React.RefObject<HTMLElement>,
    handleRef: React.RefObject<HTMLElement>,
    initialPosition?: { x: number; y: number }
) => {
    const dragInfo = useRef<{ startX: number, startY: number, startLeft: number, startTop: number }>();

    useEffect(() => {
        const element = elementRef.current;
        const handle = handleRef.current;
        if (!element || !handle) return;
        
        if (initialPosition) {
            element.style.left = `${initialPosition.x}px`;
            element.style.top = `${initialPosition.y}px`;
        }

        const onMouseDown = (e: MouseEvent) => {
            dragInfo.current = {
                startX: e.clientX,
                startY: e.clientY,
                startLeft: element.offsetLeft,
                startTop: element.offsetTop,
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (moveEvent: MouseEvent) => {
            if (!dragInfo.current) return;
            const newX = dragInfo.current.startLeft + moveEvent.clientX - dragInfo.current.startX;
            const newY = dragInfo.current.startTop + moveEvent.clientY - dragInfo.current.startY;
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        handle.addEventListener('mousedown', onMouseDown);
        return () => {
            handle.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [elementRef, handleRef, initialPosition]);
};