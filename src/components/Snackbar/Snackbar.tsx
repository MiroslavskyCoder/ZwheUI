import React, { useEffect, useState } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { SnackbarData } from './useSnackbar';
import { Text } from '../Text/Text';
import { Button } from '../Button';

interface SnackbarProps {
    snackbar: SnackbarData;
    onDismiss: (id: string) => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({ snackbar, onDismiss }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('snackbar');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animate in after component has mounted
        const showTimer = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        const duration = snackbar.duration || 5000;
        
        // Timer to start the hide animation
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, duration);
        
        // Timer to unmount the component after the hide animation is complete
        const removeTimer = setTimeout(() => {
             onDismiss(snackbar.id);
        }, duration + 300); // 300ms for the exit animation

        return () => {
            cancelAnimationFrame(showTimer);
            clearTimeout(hideTimer);
            clearTimeout(removeTimer);
        };
    }, [snackbar, onDismiss]);

    const containerClass = createStyle({
        backgroundColor: '#323232',
        borderRadius: '4px',
        boxShadow: `0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)`,
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.md,
        minWidth: '344px',
        maxWidth: '568px',
        color: '#fff',
    });
    
    const actionButtonClass = createStyle({
        color: theme.colors.primary,
        fontWeight: '600',
        padding: '0.25rem 0.5rem',
        backgroundColor: 'transparent',
        '&:hover:not(:disabled)': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }
    });

    const handleActionClick = () => {
        snackbar.action?.onClick();
        setIsVisible(false);
        // Immediately start dismiss process on action click, waiting for animation
        setTimeout(() => onDismiss(snackbar.id), 300);
    };

    return (
        <div 
            className={containerClass} 
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
            role="alert"
            aria-live="assertive"
        >
            <Text size="14px" color="inherit">{snackbar.message}</Text>
            {snackbar.action && (
                <Button variant="secondary" className={actionButtonClass} onClick={handleActionClick}>
                    {snackbar.action.label}
                </Button>
            )}
        </div>
    );
};
