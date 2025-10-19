
import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { SnackbarContext, SnackbarData, AddSnackbar } from './useSnackbar';
import { Snackbar } from './Snackbar';
import { useStyles } from '../../core/hooks/useStyles';

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [snackbars, setSnackbars] = useState<SnackbarData[]>([]);
    const createStyle = useStyles('snackbar-container');

    const addSnackbar: AddSnackbar = useCallback((options) => {
        const id = new Date().getTime().toString();
        const newSnackbar: SnackbarData = {
            id,
            duration: 5000,
            ...options,
        };
        setSnackbars(prev => [...prev, newSnackbar]);
    }, []);

    const removeSnackbar = useCallback((id: string) => {
        setSnackbars(prev => prev.filter(s => s.id !== id));
    }, []);

    const containerClass = createStyle({
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'grid',
        gap: '0.75rem',
        justifyItems: 'center',
    });

    return (
        <SnackbarContext.Provider value={{ addSnackbar }}>
            {children}
            {createPortal(
                <div className={containerClass}>
                    {snackbars.map(snackbar => (
                        <Snackbar key={snackbar.id} snackbar={snackbar} onDismiss={removeSnackbar} />
                    ))}
                </div>,
                document.body
            )}
        </SnackbarContext.Provider>
    );
};
