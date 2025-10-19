
import React from 'react'
import { ThemeProvider } from './src/core/theme/ThemeProvider'
import { DemoApp } from './demo/DemoApp'
import { ToastProvider, SnackbarProvider } from './src/components'


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