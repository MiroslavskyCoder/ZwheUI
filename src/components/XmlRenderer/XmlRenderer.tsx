
import React from 'react'
import { Layer } from '../Layer/Layer'
import { Stack } from '../Stack/Stack'

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
            attrs[a.name] = a.value
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
    const tag = el.tagName.toLowerCase()
    const Comp = map[tag] || map['div'] || 'div'
    const props = parseAttributes(el)

    const children = Array.from(el.childNodes).map((childNode, index) => {
        const childElement = nodeToElement(childNode, map);
        if (React.isValidElement(childElement)) {
            return React.cloneElement(childElement, { key: index });
        }
        return childElement;
    }).filter(child => child != null);

    return React.createElement(Comp as any, props, ...children);
}

export const XmlRenderer: React.FC<XmlRendererProps> = ({ xml, components = {} }) => {
    const map = { ...defaultMap, ...components }

    if (typeof window === 'undefined' || typeof window.DOMParser === 'undefined') {
        // server-side or no DOMParser: very simple fallback
        return <div>{xml}</div>
    }

    try {
        const parser = new DOMParser()
        const doc = parser.parseFromString(xml, 'text/xml')

        const result = Array.from(doc.childNodes).map((n, index) => {
            const el = nodeToElement(n, map);
            if (React.isValidElement(el)) {
                return React.cloneElement(el, { key: index });
            }
            return el;
        }).filter(el => el != null);

        return <>{result}</>
    } catch (err) {
        return <div>{xml}</div>
    }
}

export default XmlRenderer