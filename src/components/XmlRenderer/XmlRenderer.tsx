import React from 'react'
import { Layer } from '../Layer/Layer'
import { Stack } from '../Stack/Stack' 
import * as icons from '../../icons';

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

function parseAttributes(node: Element) {
    const attrs: { [k: string]: any } = {}
    for (let i = 0; i < node.attributes.length; i++) {
        const a = node.attributes[i]
        if (a.name === 'style') {
            try {
                // Attempt to parse the style attribute as JSON
                attrs.style = JSON.parse(a.value);
            } catch (e) {
                console.error("Failed to parse style attribute JSON:", a.value, e);
                // Fallback to treating it as a string if parsing fails
                attrs.style = a.value;
            }
        } else {
             if (a.value === 'true') {
                attrs[a.name] = true;
            } else if (a.value === 'false') {
                attrs[a.name] = false;
            } else {
                attrs[a.name] = a.value
            }
        }
    }
    return attrs
}

function nodeToElement(node: Node, map: ComponentMap): React.ReactNode {
    if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return null

    const el = node as Element
    const tag = el.tagName
    const Comp = map[tag] || map[tag.toLowerCase()] || 'div';
    const props = parseAttributes(el)

    const children = Array.from(el.childNodes).map((childNode, index) => {
        const childElement = nodeToElement(childNode, map);
        if (React.isValidElement(childElement)) {
            return React.cloneElement(childElement, { key: index });
        }
        return childElement;
    }).filter(child => child != null);

    if (children.length > 0) {
        return React.createElement(Comp as any, props, ...children);
    }
    return React.createElement(Comp as any, props);
}  

export const XmlRenderer: React.FC<XmlRendererProps> = ({ xml, components: customComponents = {} }) => {
    const map = { ...defaultMap, ...icons, ...customComponents }

    if (typeof window === 'undefined' || typeof window.DOMParser === 'undefined') {
        // server-side or no DOMParser: very simple fallback
        return <div>{xml}</div>
    }

    try {
        const parser = new DOMParser()
        const sanitizedXml = xml.replace(/&(?![a-zA-Z0-9#]+;)/g, '&amp;');
        const doc = parser.parseFromString(`<root>${sanitizedXml}</root>`, 'text/xml')

        // Check for parsing errors
        const parseError = doc.querySelector('parsererror');
        if (parseError) {
            console.error('XML parsing error:', parseError.textContent);
            return <div style={{ color: 'red', fontFamily: 'monospace' }}>XML Parsing Error. Check console for details.</div>;
        }

        const result = Array.from(doc.documentElement.childNodes).map((n, index) => {
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

export default XmlRenderer