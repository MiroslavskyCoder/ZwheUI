import React, { useCallback, useRef } from 'react'
import { StyleDefinition, StyleOptions } from '../css/types'
import { createClassFlow } from '../css/createClassFlow'

export const useStyles = (prefix?: string) => {
    const cacheRef = useRef(new Map<string, string>())

    const createStyle = useCallback(
        (styles: StyleDefinition, options: Omit<StyleOptions, 'prefix'> = {}) => {
            return createClassFlow(styles, { ...options, prefix })
        },
        [prefix]
    )

    return createStyle
}

export const withStyles = <P extends object>(
    Component: React.ComponentType<P>,
    styles: StyleDefinition | ((props: P) => StyleDefinition),
    options: StyleOptions = {}
) => {
    return (props: P) => {
        const className = createClassFlow(
            typeof styles === 'function' ? styles(props) : styles,
            options
        )

        // Avoid JSX in .ts files to keep parsing safe; use createElement
        return (React as any).createElement(Component as any, { ...(props as any), className })
    }
}
