import { useEffect, useState } from 'react'
import { Theme } from '../css/types'
import { useTheme } from '../theme/ThemeProvider'

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        setMatches(media.matches)

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches)
        }

        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [query])

    return matches
}

export const useBreakpoint = (breakpoint: keyof Theme['breakpoints']): boolean => {
    const { theme } = useTheme()
    return useMediaQuery(`(min-width: ${theme.breakpoints[breakpoint]})`)
}

export const useResponsiveValue = <T,>(
    values: { [key in keyof Theme['breakpoints']]?: T } & { default: T }
): T => {
    const { theme } = useTheme()
    const breakpoints = Object.keys(theme.breakpoints) as Array<keyof Theme['breakpoints']>
    
    const matches = breakpoints.map(bp => ({
        breakpoint: bp,
        matches: useBreakpoint(bp)
    }))

    // Find the largest matching breakpoint
    const match = [...matches]
        .reverse()
        .find(m => m.matches && values[m.breakpoint] !== undefined)

    return match ? values[match.breakpoint]! : values.default
}