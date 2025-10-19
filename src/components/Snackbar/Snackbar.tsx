
import React, { useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';
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
    const { isRendered, isVisible, show, hide } = useFade(false, 200);

    useEffect(() => {
        show();
        const duration = snackbar.duration || 5000;
        const timer = setTimeout(() => {
            hide();
        }, duration);
        
        const removeTimer = setTimeout(() => {
             onDismiss(snackbar.id);
        }, duration + 300); // Wait for fade out animation

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, [snackbar, onDismiss, show, hide]);

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

    if (!isRendered) return null;

    const handleActionClick = () => {
        snackbar.action?.onClick();
        hide();
        // Immediately start dismiss process on action click
        setTimeout(() => onDismiss(snackbar.id), 200);
    };

    return (
        <div 
            className={containerClass} 
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'opacity 0.2s, transform 0.2s',
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
