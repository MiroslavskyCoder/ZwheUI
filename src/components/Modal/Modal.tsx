import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'
import { useFade } from '../../core/hooks/useAnimation'

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    className?: string
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    className = ''
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('modal')
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200)

    if (!isRendered) return null

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
    })

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
    })

    const titleClass = title && createStyle({
        fontSize: '16px',
        fontWeight: String(theme.typography.fontWeights.semibold),
        marginBottom: theme.spacing.sm,
        color: theme.colors.text
    })

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
    })

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only close if the click is on the backdrop container itself, not on a child (the modal content).
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={containerClass} style={fadeStyle} onClick={handleContainerClick}>
            <div
                className={`${modalClass} ${className}`}
            >
                {title && <h2 className={titleClass}>{title}</h2>}
                <button className={closeButtonClass} onClick={onClose}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal