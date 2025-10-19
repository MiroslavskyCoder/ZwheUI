import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ToastContext, ToastData, AddToast } from './useToast';
import { Toast } from './Toast';
import { useStyles } from '../../core/hooks/useStyles';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);
    const createStyle = useStyles('toast-container');

    const addToast: AddToast = useCallback((options) => {
        const id = new Date().getTime().toString();
        const newToast: ToastData = {
            id,
            duration: 5000,
            variant: 'info',
            ...options,
        };
        setToasts(prev => [...prev, newToast]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const containerClass = createStyle({
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        display: 'grid',
        gap: '0.75rem',
    });

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {createPortal(
                <div className={containerClass}>
                    {toasts.map(toast => (
                        <Toast key={toast.id} toast={toast} onDismiss={removeToast} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};