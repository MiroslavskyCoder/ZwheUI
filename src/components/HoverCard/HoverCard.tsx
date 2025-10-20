
import React, { useState, useRef } from 'react';
import { Popper, PopperTrigger, usePopperContext } from '../Popper/Popper';
import { useStyles, useTheme } from '../../core';
import { useTransition } from '../../core/hooks/useAnimation';

export const HoverCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
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

export const HoverCardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('popover-content');
    const isDark = theme.colors.background.startsWith('#');

    const contentClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '6px',
        border: `1px solid ${theme.colors.border}`,
        boxShadow: `0 4px 12px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}`,
        zIndex: '50',
        overflow: 'hidden',
        padding: '4px',
        minWidth: '150px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    const { isOpen, popperRef } = usePopperContext();
    const { isRendered, isVisible } = useTransition(isOpen, { duration: 150 });

    const animationStyle: React.CSSProperties = {
        transition: 'opacity 150ms ease-in-out, transform 150ms ease-in-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(4px)',
        zIndex: 100,
    };
    
    if (!isRendered) return null;

    return (
        <div ref={popperRef} className={`${contentClass} ${className}`} style={animationStyle}>
            {children}
        </div>
    );
};
