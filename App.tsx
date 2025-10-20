
import React from 'react'
import { DemoApp } from './demo/DemoApp'
import { ToastProvider } from './src/components/Toast/ToastProvider'
import { SnackbarProvider } from './src/components/Snackbar/SnackbarProvider'
import { ThemeProvider } from './src'


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