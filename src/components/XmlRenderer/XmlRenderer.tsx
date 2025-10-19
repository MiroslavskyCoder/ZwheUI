
import React from 'react'
import { Layer } from '../Layer/Layer'
import { Stack } from '../Stack/Stack'
import * as components from '..';
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
    p: 'p'
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

// FIX: Destructure all hooks from the components import to prevent type errors when creating the component map.
// FIX: Also destructure XmlRenderer to prevent a circular dependency.
const { useTreeItem, useToast, useSnackbar, useAudio, useVideo, usePopperContext, XmlRenderer: _, ...renderableComponents } = components;
const allComponentsMap = { ...renderableComponents, ...icons };

export const XmlRenderer: React.FC<XmlRendererProps> = ({ xml, components = {} }) => {
    const map = { ...defaultMap, ...allComponentsMap, ...components }

    if (typeof window === 'undefined' || typeof window.DOMParser === 'undefined') {
        // server-side or no DOMParser: very simple fallback
        return <div>{xml}</div>
    }

    try {
        const parser = new DOMParser()
        const doc = parser.parseFromString(`<root>${xml}</root>`, 'text/xml')

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