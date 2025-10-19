
import { createContext, useContext } from 'react';

export interface SnackbarAction {
    label: string;
    onClick: () => void;
}

export interface SnackbarOptions {
    message: string;
    action?: SnackbarAction;
    duration?: number;
}

export interface SnackbarData extends SnackbarOptions {
    id: string;
}

export type AddSnackbar = (options: SnackbarOptions) => void;

export const SnackbarContext = createContext<{ addSnackbar: AddSnackbar } | null>(null);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};
