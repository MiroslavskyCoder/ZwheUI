
import React from 'react'
import { DemoApp } from './demo/DemoApp'
import { ToastProvider } from './src/components/Toast/ToastProvider'
import { SnackbarProvider } from './src/components/Snackbar/SnackbarProvider'
import { ThemeProvider } from './src'
import * as ZwheUIComponents from './src/components';

// Expose all components to the window object for the AI App Creator's iframe preview
if (typeof window !== 'undefined') {
    (window as any).ZwheUI = {
        ...ZwheUIComponents,
        ThemeProvider,
        ToastProvider,
        SnackbarProvider
    };
}

const App = () => {
    return (
        <ThemeProvider>
            <ToastProvider>
                <SnackbarProvider>
                    <DemoApp />
                </SnackbarProvider>
            </ToastProvider>
        </ThemeProvider>
    )
}

export default App