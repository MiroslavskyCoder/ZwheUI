import React from 'react';
import { XmlRenderer, ComponentMap } from '../XmlRenderer/XmlRenderer';
import { Sofa } from '../Sofa/Sofa';
import { Center } from '../Center/Center';
import * as components from '..';
import * as icons from '../../icons';
 
const componentMap: ComponentMap = { ...icons };

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