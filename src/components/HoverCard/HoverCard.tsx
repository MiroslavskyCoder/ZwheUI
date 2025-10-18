
import React, { useState, useRef } from 'react';
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper';
import { PopoverContent as StyledContent } from '../Popover/Popover'; // Reuse styles

interface HoverCardContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HoverCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // FIX: Explicitly provide `undefined` as the initial value to `useRef` to resolve "Expected 1 arguments, but got 0" error in some environments.
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const handleOpen = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleClose = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 100); // Small delay to allow moving mouse into card
    };
    
    const contextValue = { isOpen, setIsOpen, handleOpen, handleClose };

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                {children}
            </div>
        </Popper>
    );
};

export const HoverCardTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <PopperTrigger>{children}</PopperTrigger>;
};

export const HoverCardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return <StyledContent className={className}>{children}</StyledContent>;
};
