


import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './src/core/theme/ThemeProvider'
import { DemoApp } from './demo/DemoApp'
import { ToastProvider } from './src/components'


const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <ToastProvider>
                    <DemoApp />
                </ToastProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App