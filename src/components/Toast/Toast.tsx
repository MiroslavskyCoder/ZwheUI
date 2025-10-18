
import React, { useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';
import { ToastData } from './useToast';
import { Text } from '../Text/Text';

// --- SVG Icon Components ---
const InfoIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>;
const SuccessIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>;
const WarningIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>;
const ErrorIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>;


interface ToastProps {
    toast: ToastData;
    onDismiss: (id: string) => void;
}

const icons = {
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    error: ErrorIcon,
};

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('toast');
    const { isRendered, isVisible, show, hide } = useFade(false);

    useEffect(() => {
        show();
        const timer = setTimeout(() => {
            hide();
        }, toast.duration);
        
        const removeTimer = setTimeout(() => {
             onDismiss(toast.id);
        }, toast.duration + 300); // Wait for fade out animation

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, [toast, onDismiss, show, hide]);

    const variantColors = {
        info: theme.colors.primary,
        success: '#10b981',
        warning: theme.colors.accent,
        error: '#ef4444',
    };

    const containerClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        borderLeft: `5px solid ${variantColors[toast.variant]}`,
        boxShadow: `0 8px 24px rgba(0,0,0,0.5)`,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        width: '360px',
        maxWidth: '90vw',
         '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    const iconContainerClass = createStyle({
        color: variantColors[toast.variant],
        flexShrink: 0,
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });

    if (!isRendered) return null;

    const IconComponent = icons[toast.variant];

    return (
        <div 
            className={containerClass} 
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'all 0.3s cubic-bezier(0.21, 1.02, 0.73, 1)',
                transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            }}
            role="alert"
            aria-live="assertive"
        >
            <div className={iconContainerClass}>
                <IconComponent />
            </div>
            <div>
                <Text weight="600">{toast.title}</Text>
                {toast.description && <Text size="14px" color={theme.colors.textSecondary}>{toast.description}</Text>}
            </div>
        </div>
    );
};
