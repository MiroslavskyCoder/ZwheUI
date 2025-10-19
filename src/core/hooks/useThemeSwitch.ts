import { useCallback, useEffect, useState } from 'react'
import { Theme } from '../css/types'

export const defaultTheme: Theme = {
    colors: {
        primary: '#60a5fa', // A nice blue from the charts
        secondary: '#4b5563', // A darker gray for borders/secondary elements
        accent: '#b45309', // amber-700, WCAG AA compliant with white text
        background: '#000000', // Main background, pure black
        backgroundSecondary: 'rgba(28, 28, 28, 0.75)', // A slightly off-black glassy background
        border: 'rgba(255, 255, 255, 0.15)', // A slightly brighter border for better definition
        text: '#e6edf3', // Main text color
        textSecondary: '#7d8590', // Lighter text color for labels
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2.5rem'
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    },
    typography: {
        fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem'
        },
        fontWeights: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        lineHeights: {
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75
        }
    },
    radii: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
    },
    blur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
    },
    maxWidths: {
        xs: '640px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1536px',
        container: '1280px',
    }
}


export type ThemeMode = 'light' | 'dark' | 'custom'

const darkTheme: Theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        primary: '#60a5fa', // blue-400
        secondary: '#94a3b8',
        background: '#1f2937',
        text: '#f3f4f6'
    }
}

// A simple light theme example
const lightTheme: Theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        primary: '#1d4ed8', // blue-700, WCAG AA compliant with white text
        secondary: '#6b7280',
        background: '#f3f4f6',
        backgroundSecondary: 'rgba(255, 255, 255, 0.75)',
        border: 'rgba(0, 0, 0, 0.1)',
        text: '#1f2937',
        textSecondary: '#4b5563',
    }
}


const THEME_STORAGE_KEY = 'zwheui-theme-mode'

export const useThemeSwitch = () => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        if (typeof window === 'undefined') return 'dark'
        return (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || 'dark'
    })

    const [customTheme, setCustomTheme] = useState<Theme | null>(null)

    const getThemeByMode = useCallback((currentMode: ThemeMode): Theme => {
        switch (currentMode) {
        case 'dark':
            return darkTheme
        case 'light':
            return lightTheme
        case 'custom':
            return customTheme || defaultTheme
        default:
            return darkTheme
        }
    }, [customTheme])

    const switchTheme = useCallback((newMode: ThemeMode, theme?: Theme) => {
        setMode(newMode)
        if (newMode === 'custom' && theme) {
            setCustomTheme(theme)
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem(THEME_STORAGE_KEY, newMode)
        }
    }, [])

    return {
        mode,
        switchTheme,
        currentTheme: getThemeByMode(mode),
        setCustomTheme
    }
}