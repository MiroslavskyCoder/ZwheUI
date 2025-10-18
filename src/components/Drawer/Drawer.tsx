
import React from 'react';
import ReactDOM from 'react-dom';
import { useFade, useSlide } from '../../core/hooks/useAnimation';
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

    return ReactDOM.createPortal(
        <>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <div className={`${drawerClass} ${className}`} style={slideStyle}>
                <div className={headerClass}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: theme.colors.text }}>{title}</h2>
                    <button className={closeButtonClass} onClick={onClose}>
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
