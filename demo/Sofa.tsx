import React from 'react';
import { Sofa, Text, Stack } from '../src/components';

export const SofaDemo = () => (
    <Sofa
        title="Sofa"
        description="A styled container component used throughout this showcase. It now supports `title` and `description` props directly."
    >
        <Text>This is the child content, rendered after the title and description.</Text>
    </Sofa>
);