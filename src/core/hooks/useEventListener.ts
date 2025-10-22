import { useRef, useEffect } from 'react';

export const useEventListener = <E extends Event>(
    eventName: string,
    handler: (event: E) => void,
    element: EventTarget | null = window
) => {
    // FIX: Provide an initial value to useRef to prevent "Expected 1 arguments, but got 0" error.
    const savedHandler = useRef<((event: E) => void) | undefined>(undefined);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!element?.addEventListener) return;

        const eventListener = (event: Event) => savedHandler.current?.(event as E);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};
