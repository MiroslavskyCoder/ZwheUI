
import { CSSProperties, StyleDefinition, StyleOptions, Theme } from './types'

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

// A robust function to convert a style object to a CSS string, ignoring nested objects.
const objectToCssString = (styleObject: CSSProperties): string => {
    return Object.entries(styleObject)
        .map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                return ''; // This function should not handle nested rules; they are parsed by the main function.
            }
            if (value === undefined) return '';
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            return `${cssKey}: ${value};`;
        })
        .filter(Boolean)
        .join(' ');
};

const toKebabCase = (str: string) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const parseMediaQuery = (query: string, theme?: Theme): string => {
    if (!theme?.breakpoints) {
        return query;
    }

    // Regex to find things like (property: 'breakpointKey') or (property: breakpointKey)
    const sassLikeQueryRegex = /\(\s*([a-zA-Z-]+)\s*:\s*['"]?(\w+)['"]?\s*\)/g;

    return query.replace(sassLikeQueryRegex, (match, property, key) => {
        const breakpointValue = theme.breakpoints[key];
        if (breakpointValue) {
            const cssProperty = toKebabCase(property);
            return `(${cssProperty}: ${breakpointValue})`;
        }
        return match; // Return original if breakpoint key not found
    });
};


export const createClassFlow = (
    styles: StyleDefinition,
    options: StyleOptions = {},
    theme?: Theme
): string => {
    const { prefix = 'zw', cache: useCache = true } = options;
    const styleStr = JSON.stringify(styles);
    
    if (useCache && cache.has(styleStr)) {
        return cache.get(styleStr)!;
    }

    const sheet = createStyleSheet();
    if (!sheet) return '';

    counter++;
    const className = `${prefix}-${hashCode(styleStr)}-${counter}`;
    
    const baseStyles: CSSProperties = {};
    const nestedRules: string[] = [];
    const keyframesRules: string[] = [];

    // Separate base properties from nested/at-rules
    for (const [key, value] of Object.entries(styles)) {
        if (key === '@media' || value === undefined) {
            continue; // Handle the special '@media' object separately for backward compatibility
        }

        if (typeof value === 'object' && value !== null) {
            if (key.startsWith('&')) {
                // Handle pseudo-selectors and nested selectors
                const selector = key.replace(/&/g, `.${className}`);
                nestedRules.push(`${selector} { ${objectToCssString(value as CSSProperties)} }`);
            } else if (key.startsWith('@keyframes')) {
                // Handle keyframes
                const keyframeContent = Object.entries(value)
                    .map(([frame, frameStyles]) => `${frame} { ${objectToCssString(frameStyles as CSSProperties)} }`)
                    .join(' ');
                keyframesRules.push(`${key} { ${keyframeContent} }`);
            } else if (key.startsWith('@')) {
                // Handle other at-rules like @supports or direct @media queries
                nestedRules.push(`${key} { .${className} { ${objectToCssString(value as CSSProperties)} } }`);
            }
        } else {
            baseStyles[key] = value as string | number;
        }
    }

    let cssRules = `.${className} { ${objectToCssString(baseStyles)} }`;
    
    // Process nested pseudo-selectors and at-rules
    if (nestedRules.length > 0) {
        cssRules += `\n${nestedRules.join('\n')}`;
    }

    // Handle the special top-level @media property for backward compatibility
    if (styles['@media']) {
        Object.entries(styles['@media']).forEach(([query, props]) => {
            const parsedQuery = parseMediaQuery(query, theme);
            cssRules += `\n@media ${parsedQuery} { .${className} { ${objectToCssString(props as CSSProperties)} } }`
        })
    }
    
    // Keyframes are always top-level rules
    if (keyframesRules.length > 0) {
        cssRules += `\n${keyframesRules.join('\n')}`;
    }


    sheet.textContent += `\n${cssRules}`;
    
    if (useCache) {
        cache.set(styleStr, className);
    }

    return className;
};


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
