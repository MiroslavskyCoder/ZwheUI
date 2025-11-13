import { CSSProperties, StyleDefinition, StyleOptions, Theme } from './types'

let styleSheet: HTMLStyleElement | null = null
// Cache for generated class names to avoid re-injecting styles
const cache = new Map<string, string>()

// Simple hash function to generate a unique ID from a string
const hashCode = (str: string): string => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36)
}

// Creates or reuses a single <style> tag in the document's head for all generated styles
const createStyleSheet = () => {
    if (typeof document === 'undefined') {
        return null; // Don't do anything on the server
    }
    if (!styleSheet) {
        styleSheet = document.createElement('style')
        styleSheet.setAttribute('data-zwheui', '')
        document.head.appendChild(styleSheet)
    }
    return styleSheet
}

// --- Theme Value Resolution Helpers ---

const propertyToThemeScaleMap: Record<string, keyof Theme> = {
  borderRadius: 'radii',
};

const valueFunctionsToThemeScaleMap: Record<string, keyof Theme> = {
  blur: 'blur',
};

const resolveValue = (key: string, value: any, theme?: Theme): any => {
    if (!theme || typeof value !== 'string') {
        return value;
    }

    const directScaleKey = (propertyToThemeScaleMap as any)[key];
    if (directScaleKey) {
        const scale = (theme as any)[directScaleKey];
        if (scale && scale[value]) {
            return scale[value];
        }
    }

    const functionalRegex = /(\w+)\((.+)\)/;
    const match = value.match(functionalRegex);

    if (match) {
        const [, funcName, themeKey] = match;
        const funcScaleKey = (valueFunctionsToThemeScaleMap as any)[funcName];
        if (funcScaleKey) {
            const scale = (theme as any)[funcScaleKey];
            if (scale && scale[themeKey]) {
                return `${funcName}(${scale[themeKey]})`;
            }
        }
    }
    
    return value;
}

const toKebabCase = (str: string) => str.replace(/([A-Z])/g, '-$1').toLowerCase();

// This function converts a style object of simple key-value pairs into a CSS string.
const toCssPropertiesString = (styleObject: CSSProperties, theme?: Theme): string => {
    return Object.entries(styleObject)
        .map(([key, value]) => {
            if (typeof value === 'object' || value === undefined) return '';
            const resolvedValue = resolveValue(key, value, theme);
            const cssKey = toKebabCase(key);
            return `${cssKey}: ${resolvedValue};`;
        })
        .filter(Boolean)
        .join(' ');
};

// This is the new recursive parser.
const generateCssRecursively = (
    selector: string,
    styles: CSSProperties,
    theme?: Theme
): string => {
    const baseStyles: CSSProperties = {};
    const nestedRules: string[] = [];

    // Separate base properties from nested rules
    for (const [key, value] of Object.entries(styles)) {
        if (typeof value === 'object' && value !== null) {
            if (key.startsWith('@media')) {
                const mediaCss = generateCssRecursively(selector, value as CSSProperties, theme);
                if (mediaCss) {
                    nestedRules.push(`${key} { ${mediaCss} }`);
                }
            } else {
                // Handle nested selectors like '&:hover' or '& > child'
                const newSelector = key.includes('&') 
                    ? key.replace(/&/g, selector)
                    : `${selector} ${key}`;
                
                const nestedCss = generateCssRecursively(newSelector, value as CSSProperties, theme);
                if (nestedCss) {
                    nestedRules.push(nestedCss);
                }
            }
        } else if (value !== undefined) {
            baseStyles[key] = value;
        }
    }

    let css = '';
    const baseCssString = toCssPropertiesString(baseStyles, theme);

    if (baseCssString) {
        css += `${selector} { ${baseCssString} }`;
    }

    if (nestedRules.length > 0) {
        css += (css ? '\n' : '') + nestedRules.join('\n');
    }

    return css;
};

export const createClassFlow = (
    styles: StyleDefinition,
    options: StyleOptions = {},
    theme?: Theme
): string => {
    const { prefix = 'zw', cache: useCache = true } = options;
    // Key must be unique to style object AND theme object to support theme switching.
    const styleStr = JSON.stringify({ styles, theme });
    const className = `${prefix}-${hashCode(styleStr)}`;

    // If this className has been processed before, just return it.
    if (useCache && cache.has(className)) {
        return className;
    }

    const keyframesRules: string[] = [];
    const mainStyles: StyleDefinition = {};

    // Separate @keyframes rules, as they are top-level and not tied to a selector
    for (const [key, value] of Object.entries(styles)) {
        if (key.startsWith('@keyframes')) {
            const keyframeContent = Object.entries(value as CSSProperties)
                .map(([frame, frameStyles]) => `${frame} { ${toCssPropertiesString(frameStyles as CSSProperties, theme)} }`)
                .join(' ');
            keyframesRules.push(`${key} { ${keyframeContent} }`);
        } else {
            mainStyles[key] = value;
        }
    }

    // Generate the main CSS rules, including nested selectors and media queries
    let cssRules = generateCssRecursively(`.${className}`, mainStyles, theme);
    
    // Prepend keyframes if any exist
    if (keyframesRules.length > 0) {
        cssRules = keyframesRules.join('\n') + (cssRules ? `\n${cssRules}` : '');
    }

    // On the client side, inject the generated CSS into the stylesheet.
    const sheet = createStyleSheet();
    if (sheet && cssRules) {
        // Appending to textContent is faster than insertRule for multiple rules
        sheet.textContent += `\n${cssRules}`;
    }
    
    // Cache the className to indicate it has been processed for this session.
    if (useCache) {
        cache.set(className, className);
    }

    return className;
};

// This function is still useful for clearing styles, e.g., in tests
export const clearStyles = () => {
    if (styleSheet) {
        styleSheet.remove();
        styleSheet = null;
    }
    cache.clear();
}

// This function is useful for combining class names safely
export const combineClasses = (...classes: (string | undefined | false)[]): string => {
    return classes.filter(Boolean).join(' ');
}
