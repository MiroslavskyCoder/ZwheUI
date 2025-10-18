import { CSSProperties, StyleDefinition, StyleOptions } from './types'

let styleSheet: HTMLStyleElement | null = null
const cache = new Map<string, string>()
let counter = 0

const hashCode = (str: string): string => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
    }
    return Math.abs(hash).toString(36)
}

const createStyleSheet = () => {
    if (!styleSheet && typeof document !== 'undefined') {
        styleSheet = document.createElement('style')
        styleSheet.setAttribute('data-zwheui', '')
        document.head.appendChild(styleSheet)
    }
    return styleSheet
}

const toCSSString = (props: CSSProperties): string => {
    return Object.entries(props)
        .map(([key, value]) => {
        if (value === undefined) return ''
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
            return `${cssKey}: ${value};`
        })
        .filter(Boolean)
        .join(' ')
}

export const createClassFlow = (
    styles: StyleDefinition,
    options: StyleOptions = {}
): string => {
    const { prefix = 'zw', cache: useCache = true } = options
    const styleStr = JSON.stringify(styles)
    
    if (useCache && cache.has(styleStr)) {
        return cache.get(styleStr)!
    }

    const sheet = createStyleSheet()
    if (!sheet) return ''

    counter++
    const className = `${prefix}-${hashCode(styleStr)}-${counter}`
    let cssRules = `.${className} { ${toCSSString(styles)} }`

    // Handle media queries
    if (styles['@media']) {
        Object.entries(styles['@media']).forEach(([query, props]) => {
            cssRules += `\n@media ${query} { .${className} { ${toCSSString(props)} } }`
        })
    }

    sheet.textContent += `\n${cssRules}`
    
    if (useCache) {
        cache.set(styleStr, className)
    }

    return className
}

export const clearStyles = () => {
    if (styleSheet) {
        styleSheet.remove()
        styleSheet = null
    }
    cache.clear()
    counter = 0
}

export const combineClasses = (...classes: (string | undefined | false)[]): string => {
    return classes.filter(Boolean).join(' ')
}