
import React, { createContext, useContext } from 'react'
import { Theme } from '../css/types'
import { ThemeMode, useThemeSwitch } from '../hooks/useThemeSwitch'

export { defaultTheme } from '../hooks/useThemeSwitch';
export type { Theme };


interface ThemeContextType {
    theme: Theme;
    mode: ThemeMode;
    switchTheme: (newMode: ThemeMode, theme?: Theme) => void;
    setCustomTheme: (theme: Theme | null) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: Theme;
    mode?: ThemeMode;
    lazyOptimize?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme: controlledTheme, mode: controlledMode, lazyOptimize }) => {
    // The provider uses the hook to manage its state when uncontrolled.
    const { currentTheme, mode, switchTheme, setCustomTheme } = useThemeSwitch();

    // If theme and mode are provided as props, they take precedence (controlled mode).
    const finalTheme = controlledTheme || currentTheme;
    const finalMode = controlledMode || mode;
    
    // When controlled, the switch functions from the hook might cause confusion.
    // However, allowing them enables switching away from a controlled theme, which could be a feature.
    // We will keep them for now. A more robust implementation might accept onChange handlers.
    const value = { 
        theme: finalTheme, 
        mode: finalMode, 
        switchTheme, 
        setCustomTheme 
    };

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
