import { useCallback, useEffect, useRef, useState } from 'react'

interface UseTransitionOptions {
    duration?: number
    delay?: number
    timingFunction?: string
}

export const useTransition = (initialState: boolean = false, options: UseTransitionOptions = {}) => {
    const {
        duration = 300,
        delay = 0,
        timingFunction = 'ease'
    } = options

    const [isVisible, setIsVisible] = useState(initialState)
    const [isRendered, setIsRendered] = useState(initialState)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // FIX: This effect syncs the internal state of the hook with the controlling prop.
    useEffect(() => {
        setIsVisible(initialState);
    }, [initialState]);

    useEffect(() => {
        if (isVisible) {
            setIsRendered(true)
        } else {
            timeoutRef.current = setTimeout(() => {
                setIsRendered(false)
            }, duration)
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [isVisible, duration])

    const style = {
        transition: `opacity ${duration}ms ${timingFunction} ${delay}ms`,
        opacity: isVisible ? 1 : 0
    }

    const show = useCallback(() => setIsVisible(true), []);
    const hide = useCallback(() => setIsVisible(false), []);
    const toggle = useCallback(() => setIsVisible(prev => !prev), []);

    return {
        isVisible,
        isRendered,
        style,
        show,
        hide,
        toggle
    }
}

export const useFade = (initialState: boolean = false, duration: number = 300) => {
    return useTransition(initialState, { duration })
}

export const useSlide = (
    initialState: boolean = false,
    options: UseTransitionOptions & { direction?: 'left' | 'right' | 'up' | 'down' } = {}
) => {
    const {
        direction = 'right',
        duration = 300,
        delay = 0,
        timingFunction = 'ease'
    } = options

    const [isVisible, setIsVisible] = useState(initialState)
    const [isRendered, setIsRendered] = useState(initialState)

    // FIX: This effect syncs the internal state of the hook with the controlling prop.
    useEffect(() => {
        setIsVisible(initialState);
    }, [initialState]);

    useEffect(() => {
        if (isVisible) {
            setIsRendered(true)
        } else {
        const timeout = setTimeout(() => {
            setIsRendered(false)
        }, duration)
            return () => clearTimeout(timeout)
        }
    }, [isVisible, duration])

    const getTransform = useCallback(() => {
        const distance = '100%'
        switch (direction) {
        case 'left':
            return `translateX(${isVisible ? '0' : `-${distance}`})`
        case 'right':
            return `translateX(${isVisible ? '0' : distance})`
        case 'up':
            return `translateY(${isVisible ? '0' : `-${distance}`})`
        case 'down':
            return `translateY(${isVisible ? '0' : distance})`
        }
    }, [direction, isVisible])

    const style = {
        transition: `transform ${duration}ms ${timingFunction} ${delay}ms`,
        transform: getTransform()
    }

    const show = useCallback(() => setIsVisible(true), []);
    const hide = useCallback(() => setIsVisible(false), []);
    const toggle = useCallback(() => setIsVisible(prev => !prev), []);

    return {
        isVisible,
        isRendered,
        style,
        show,
        hide,
        toggle
    }
}