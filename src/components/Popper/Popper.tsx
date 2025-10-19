
import React, { createContext, useContext, useState, useRef, useLayoutEffect, useCallback } from 'react';
import { useFade } from '../../core/hooks/useAnimation';

interface PopperContextType {
    isOpen: boolean;
    // FIX: Changed type to allow functional updates like `setIsOpen(prev => !prev)`.
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    triggerRef: React.MutableRefObject<HTMLElement | null>;
    popperRef: React.MutableRefObject<HTMLDivElement | null>;
    setPosition: () => void;
}

const PopperContext = createContext<PopperContextType | null>(null);

export const usePopperContext = () => {
    const context = useContext(PopperContext);
    if (!context) throw new Error('Popper components must be used within a Popper provider.');
    return context;
};

export const Popper: React.FC<{ children: React.ReactNode; isOpen?: boolean; setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ children, ...props }) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const triggerRef = useRef<HTMLElement | null>(null);
    const popperRef = useRef<HTMLDivElement | null>(null);
    
    const isOpen = props.isOpen ?? internalIsOpen;
    const setIsOpen = props.setIsOpen ?? setInternalIsOpen;

    const setPosition = useCallback(() => {
        if (triggerRef.current && popperRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            popperRef.current.style.position = 'fixed';
            popperRef.current.style.top = `${triggerRect.bottom + 4}px`;
            popperRef.current.style.left = `${triggerRect.left}px`;
        }
    }, []);

    useLayoutEffect(() => {
        if (isOpen) {
            setPosition();
            window.addEventListener('scroll', setPosition, true);
            window.addEventListener('resize', setPosition);
        }
        return () => {
            window.removeEventListener('scroll', setPosition, true);
            window.removeEventListener('resize', setPosition);
        };
    }, [isOpen, setPosition]);

    const contextValue = { isOpen, setIsOpen, triggerRef, popperRef, setPosition };

    return <PopperContext.Provider value={contextValue}>{children}</PopperContext.Provider>;
};

export const PopperTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setIsOpen, triggerRef, setPosition } = usePopperContext();
    const child = React.Children.only(children) as React.ReactElement<any>;

    const ref = (node: HTMLElement | null) => {
        triggerRef.current = node;
        const childRef = (child as any).ref;
        if (typeof childRef === 'function') {
            childRef(node);
        } else if (childRef) {
            (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
    };

    return React.cloneElement(child, {
        ref,
        onClick: (e: React.MouseEvent) => {
            setIsOpen(prev => !prev);
            setPosition();
            child.props.onClick?.(e);
        },
    });
};

export const PopperContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const { isOpen, popperRef } = usePopperContext();
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    if (!isRendered) return null;

    return (
        <div ref={popperRef} className={className} style={{ ...fadeStyle, zIndex: 100 }}>
            {children}
        </div>
    );
};