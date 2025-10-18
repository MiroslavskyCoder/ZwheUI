import { useEffect, useRef } from 'react';

export const usePrevious = <T,>(value: T) => {
    // FIX: Explicitly provide `undefined` as the initial value to `useRef` to fix potential "Expected 1 arguments, but got 0" errors in some environments.
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
        ref.current = value
    }, [value])
    return ref.current
}
