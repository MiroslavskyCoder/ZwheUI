
import React from 'react';
import { XmlRenderer, ComponentMap } from '../XmlRenderer/XmlRenderer';
import { Sofa } from '../Sofa/Sofa';
import { Center } from '../Center/Center';
import * as components from '..';
import * as icons from '../../icons';

// FIX: Filter the components object to only include actual components (which start with a capital letter by convention)
// to prevent passing hooks or other functions to the XmlRenderer, which would cause a type error.
const filteredComponents: ComponentMap = {};
for (const key in components) {
    if (key[0] >= 'A' && key[0] <= 'Z') {
        (filteredComponents as any)[key] = (components as any)[key];
    }
}
const componentMap: ComponentMap = { ...filteredComponents, ...icons };

interface CodePreviewProps {
    code: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
    return (
        <Center style={{ minHeight: '150px', padding: '1rem', width: '100%' }}>
            <XmlRenderer xml={code} components={componentMap} />
        </Center>
    );
};