import React, { useCallback, useRef } from 'react'
import { StyleDefinition, StyleOptions } from '../css/types'
import { createClassFlow } from '../css/createClassFlow'
import { useTheme } from '../theme/ThemeProvider'

export const useStyles = (prefix?: string) => {
    const { theme } = useTheme()
    const cacheRef = useRef(new Map<string, string>())

    const createStyle = useCallback(
        (styles: StyleDefinition, options: Omit<StyleOptions, 'prefix'> = {}) => {
            return createClassFlow(styles, { ...options, prefix }, theme)
        },
        [prefix, theme]
    )

    return createStyle
}

export const withStyles = <P extends object>(
    Component: React.ComponentType<P>,
    styles: StyleDefinition | ((props: P) => StyleDefinition),
    options: StyleOptions = {}
) => {
    return (props: P) => {
        const { theme } = useTheme();
        const className = createClassFlow(
            typeof styles === 'function' ? styles(props) : styles,
            options,
            theme
        )

        // Avoid JSX in .ts files to keep parsing safe; use createElement
        return (React as any).createElement(Component as any, { ...(props as any), className })
    }
}