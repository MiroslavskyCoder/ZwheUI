
import React from 'react'
import { DemoApp } from './demo/DemoApp'
import { ToastProvider } from './src/components/Toast/ToastProvider'
import { SnackbarProvider } from './src/components/Snackbar/SnackbarProvider'


const App = () => {
    return (
        <ToastProvider>
            <SnackbarProvider>
                <DemoApp />
            </SnackbarProvider>
        </ToastProvider>
    )
}

export default App