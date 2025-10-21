import React, { useRef, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    className = ''
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('modal');
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    const modalRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const titleId = useRef(`modal-title-${Math.random().toString(36).substring(2, 9)}`).current;

    useEffect(() => {
        if (isOpen) {
            const originalBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            triggerRef.current = document.activeElement as HTMLElement;
            
            // Focus the first focusable element in the modal after it appears
            const focusTimeout = setTimeout(() => {
                if (modalRef.current) {
                    // Prioritize focusing the first user-input field.
                    const firstInput = modalRef.current.querySelector<HTMLElement>(
                        'input:not([disabled]), textarea:not([disabled]), select:not([disabled])'
                    );
                    
                    if (firstInput) {
                        firstInput.focus();
                    } else {
                        // Otherwise, find the first focusable element (could be a button).
                        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                        );
                        if (focusableElements.length > 0) {
                            focusableElements[0].focus();
                        } else {
                            modalRef.current.focus(); // Fallback to container
                        }
                    }
                }
            }, 100);

            const handleKeyDown = (e: KeyboardEvent) => {  
                if (e.key === 'Escape') {
                    onClose();
                }

                if (e.key === 'Tab') {
                    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
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
            return () => {
                document.body.style.overflow = originalBodyOverflow;
                clearTimeout(focusTimeout);
                document.removeEventListener('keydown', handleKeyDown);
                // triggerRef.current?.focus();
            };
        }
    }, [isOpen, onClose]);


    if (!isRendered) return null;

    const containerClass = createStyle({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'grid',
        placeItems: 'center',
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
        },
    });

    const modalClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        padding: theme.spacing.lg,
        maxWidth: '400px',
        width: '90%',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:focus': {
            outline: 'none',
        }
    });

    const titleClass = title && createStyle({
        fontSize: '16px',
        fontWeight: String(theme.typography.fontWeights.semibold),
        marginBottom: theme.spacing.sm,
        color: theme.colors.text
    });

    const closeButtonClass = createStyle({
        position: 'absolute',
        top: '12px',
        right: '12px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: '#888',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        transition: 'background-color 0.2s, color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#FFF'
        }
    });

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only close if the click is on the backdrop container itself, not on a child (the modal content).
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={containerClass} style={fadeStyle} onClick={handleContainerClick}>
            <div
                ref={modalRef}
                className={`${modalClass} ${className}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                {title && <h2 id={titleId} className={titleClass}>{title}</h2>}
                    <button className={closeButtonClass} onClick={onClose} aria-label="Close modal">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;