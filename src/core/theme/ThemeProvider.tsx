

import React, { createContext, useContext } from 'react'
import { Theme } from '../css/types'
import { ThemeMode, useThemeSwitch } from '../hooks/useThemeSwitch'

export { defaultTheme } from '../hooks/useThemeSwitch';
export type { Theme };


// The new context provides the current theme and the functions to change it.
interface ThemeContextType {
    theme: Theme;
    mode: ThemeMode;
    switchTheme: (newMode: ThemeMode, theme?: Theme) => void;
    setCustomTheme: (theme: Theme | null) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    // The provider now uses the hook to manage its state.
    const { currentTheme, mode, switchTheme, setCustomTheme } = useThemeSwitch();

    const value = { theme: currentTheme, mode, switchTheme, setCustomTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
