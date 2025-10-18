
import React, { useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';
import { ToastData } from './useToast';
import { Text } from '../Text/Text';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../../icons';

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
        }, toast.duration! + 300); // Wait for fade out animation

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
        borderLeft: `5px solid ${variantColors[toast.variant!]}`,
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
        color: variantColors[toast.variant!],
        flexShrink: 0,
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });

    if (!isRendered) return null;

    const IconComponent = icons[toast.variant!];

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
