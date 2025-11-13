import React from 'react'
import { Layer } from '../Layer/Layer'
import { Stack } from '../Stack/Stack' 
import * as icons from '../../icons';
import CircularProgress from '../Progress/CircularProgress';

export type ComponentMap = {
    [tag: string]: React.ElementType
}

export interface XmlRendererProps {
    xml: string
    components?: ComponentMap
}

const defaultMap: ComponentMap = {
    layer: Layer,
    layout: Stack, 
    div: 'div',
    span: 'span',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    a: 'a',
    img: 'img',
    ul: 'ul',
    ol: 'ol',
    li: 'li',
    button: 'button',
    input: 'input',
    textarea: 'textarea',
    select: 'select',
    option: 'option',
    form: 'form',
    label: 'label',
    fieldset: 'fieldset',
    legend: 'legend',
    table: 'table',
    thead: 'thead',
    tbody: 'tbody',
    tfoot: 'tfoot',
    tr: 'tr',
    th: 'th',
    td: 'td',
    iframe: 'iframe',
    video: 'video',
    audio: 'audio',
    canvas: 'canvas',
    svg: 'svg',
    path: 'path',
    circle: 'circle',
    rect: 'rect',
    polyline: 'polyline',
    polygon: 'polygon',
    line: 'line',
    text: 'text',
    tspan: 'tspan',
    g: 'g',
    defs: 'defs',
    use: 'use',
    symbol: 'symbol',
    marker: 'marker',
    pattern: 'pattern',
    clipPath: 'clipPath',
    mask: 'mask',
    linearGradient: 'linearGradient',
    radialGradient: 'radialGradient',
    stop: 'stop',
    foreignObject: 'foreignObject' 
}

/**
 * A forgiving attribute parser that attempts to convert attribute values
 * to their correct JavaScript types (boolean, number, object, array).
 * It supports JSON-formatted strings for complex types.
 */
function parseAttributes(node: Element) {
    const attrs: { [k: string]: any } = {}
    for (let i = 0; i < node.attributes.length; i++) {
        const attr = node.attributes[i];
        const name = attr.name;
        const value = attr.value;

        // Don't try to parse empty strings into something else
        if (value === '') {
            attrs[name] = value;
            continue;
        }
        
        // 1. Check for explicit booleans
        if (value === 'true') {
            attrs[name] = true;
            continue;
        }
        if (value === 'false') {
            attrs[name] = false;
            continue;
        }
        
        // 2. Check for numbers
        // This check ensures "123" is a number but "123px" is not, and it avoids empty or whitespace-only strings.
        if (!isNaN(Number(value)) && isFinite(Number(value)) && value.trim() !== '') {
            attrs[name] = Number(value);
            continue;
        }

        // 3. Check for JSON objects or arrays
        const trimmedValue = value.trim();
        if ((trimmedValue.startsWith('{') && trimmedValue.endsWith('}')) || (trimmedValue.startsWith('[') && trimmedValue.endsWith(']'))) {
            try {
                attrs[name] = JSON.parse(trimmedValue);
                continue;
            } catch (e) {
                // Not valid JSON, fall through to treat as a plain string.
            }
        }
        
        // 4. Fallback to string
        attrs[name] = value;
    }
    return attrs;
}


function nodeToElement(node: Node, map: ComponentMap): React.ReactNode {
    if (node.nodeType === Node.TEXT_NODE) {
        // Ignore whitespace-only text nodes between elements, which the HTML parser creates
        if (node.textContent?.trim() === '') {
            return null;
        }
        return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return null;

    const el = node as Element;
    // DOMParser with text/html lowercases all tags.
    const tag = el.tagName.toLowerCase();
    
    // Find the component in the map. Case-insensitive search to be more robust.
    const mapKey = Object.keys(map).find(k => k.toLowerCase() === tag);
    const Comp = mapKey ? map[mapKey] : tag; // Fallback to the tag name itself for standard HTML

    const props = parseAttributes(el);

    const children = Array.from(el.childNodes).map((childNode, index) => {
        const childElement = nodeToElement(childNode, map);
        // Assign a key for React's reconciliation algorithm
        if (React.isValidElement(childElement)) {
            return React.cloneElement(childElement, { key: index });
        }
        return childElement;
    }).filter(child => child !== null);

    if (children.length > 0) {
        return React.createElement(Comp as any, props, ...children);
    }
    return React.createElement(Comp as any, props);
}  

export const XmlRenderer: React.FC<XmlRendererProps> = ({ xml, components: customComponents = {} }) => {
    // The component map needs to be case-insensitive for lookup, but React components are PascalCase.
    // The keys will be lowercased later during lookup.
    const map = { ...defaultMap, ...icons, ...customComponents }

    if (typeof window === 'undefined' || typeof window.DOMParser === 'undefined') {
        // server-side or no DOMParser: very simple fallback
        return <div>{xml}</div>
    }

    try {
        const parser = new DOMParser()
        // Use 'text/html' parser which is more lenient and handles entities like '&' automatically.
        const doc = parser.parseFromString(xml, 'text/html');

        // Check for parsing errors reported by some browsers in the body
        if (doc.body.firstChild?.nodeName === 'PARSERERROR') {
            console.error('XML parsing error:', doc.body.textContent);
            return <div style={{ color: 'red', fontFamily: 'monospace' }}>XML Parsing Error. Check console for details.</div>;
        }

        // The HTML parser creates a full document, our content will be in the body.
        const result = Array.from(doc.body.childNodes).map((n, index) => {
            const el = nodeToElement(n, map);
            if (React.isValidElement(el)) {
                return React.cloneElement(el, { key: index });
            }
            return el;
        }).filter(el => el != null);

        return <>{result}</>
    } catch (err) {
        console.error('Error rendering XML:', err);
        return <div style={{ color: 'red', fontFamily: 'monospace' }}>Error rendering component. Check console.</div>
    }
}

export default XmlRenderer;