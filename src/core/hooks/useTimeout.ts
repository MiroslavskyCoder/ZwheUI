import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the timeout.
    useEffect(() => {
        if (delay !== null) {
            const id = setTimeout(() => savedCallback.current(), delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
};
