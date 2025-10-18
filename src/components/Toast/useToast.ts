
import { createContext, useContext } from 'react';

export interface ToastOptions {
    title: string;
    description?: string;
    variant?: 'info' | 'success' | 'warning' | 'error';
    duration?: number;
}

export interface ToastData extends ToastOptions {
    id: string;
}

export type AddToast = (options: ToastOptions) => void;

export const ToastContext = createContext<{ addToast: AddToast } | null>(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
