
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSlide } from '../../core/hooks/useAnimation';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Backdrop } from '../Backdrop/Backdrop';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    position?: 'left' | 'right';
    className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, title, position = 'right', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('drawer');
    const { isRendered, style: slideStyle } = useSlide(isOpen, { direction: position });
    const drawerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const titleId = useRef(`drawer-title-${Math.random().toString(36).substring(2, 9)}`).current;

    useEffect(() => {
        if (isOpen) {
            // 1. Store the triggering element and lock body scroll
            const originalBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            triggerRef.current = document.activeElement as HTMLElement;

            // 2. Focus the drawer container after it appears
            const focusTimeout = setTimeout(() => {
                drawerRef.current?.focus();
            }, 100);

            // 3. Handle keyboard events for focus trapping and closing
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }

                if (e.key === 'Tab') {
                    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                    );
                    if (!focusableElements || focusableElements.length === 0) {
                        e.preventDefault();
                        return;
                    };

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else { // Tab
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            
            document.addEventListener('keydown', handleKeyDown);

            // 4. Cleanup on close
            return () => {
                document.body.style.overflow = originalBodyOverflow;
                clearTimeout(focusTimeout);
                document.removeEventListener('keydown', handleKeyDown);
                triggerRef.current?.focus();
            };
        }
    }, [isOpen, onClose]);
    
    if (!isRendered) return null;

    const drawerClass = createStyle({
        position: 'fixed',
        top: 0,
        bottom: 0,
        [position]: 0,
        width: '320px',
        maxWidth: '90vw',
        backgroundColor: theme.colors.backgroundSecondary,
        borderLeft: position === 'right' ? `1px solid ${theme.colors.border}` : 'none',
        borderRight: position === 'left' ? `1px solid ${theme.colors.border}` : 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
         '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:focus': {
            outline: 'none',
        }
    });
    
    const headerClass = createStyle({
        padding: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
    });
    
    const contentClass = createStyle({
        padding: theme.spacing.md,
        overflowY: 'auto',
        flex: 1,
    });

    const closeButtonClass = createStyle({
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: theme.colors.textSecondary,
        padding: '4px',
        '&:hover': { color: theme.colors.text }
    });

    return createPortal(
        <>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <div 
                ref={drawerRef}
                className={`${drawerClass} ${className}`} 
                style={slideStyle}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                <div className={headerClass}>
                    {title && <h2 id={titleId} style={{ fontSize: '1.125rem', fontWeight: 600, color: theme.colors.text }}>{title}</h2>}
                    <button className={closeButtonClass} onClick={onClose} aria-label="Close drawer">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                 <div className={contentClass}>
                    {children}
                 </div>
            </div>
        </>,
        document.body
    );
};