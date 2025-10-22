import React, { useState } from 'react';
import { Blockquote, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const BlockquoteConfigurator: React.FC<{
    cite: string;
    setCite: (c: string) => void;
}> = ({ cite, setCite }) => (
    <Input label="Cite Prop" value={cite} onChange={e => setCite(e.target.value)} />
);

const documentation = `# Blockquote

A component for displaying quoted text with an optional citation.

## Props
*   \`cite\` (string, optional): The source of the quotation, displayed as a footer.
*   All other standard \`<blockquote>\` attributes are supported.
`;

const sourceCode = `import React from 'react';
import { useStyles, useTheme } from '../../core';
import { Text } from '../Text/Text';

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
    cite?: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({ children, cite, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('blockquote');

    const quoteClass = createStyle({
        paddingLeft: theme.spacing.md,
        borderLeft: \`4px solid \${theme.colors.border}\`,
        color: theme.colors.textSecondary,
        margin: \`\${theme.spacing.md} 0\`,
    });

    return (
        <blockquote className={\`\${quoteClass} \${className}\`} {...props}>
            <Text as="p" color="inherit" style={{ fontStyle: 'italic' }}>
                {children}
            </Text>
            {cite && (
                <Text as="footer" size="sm" color="inherit" style={{ marginTop: theme.spacing.sm }}>
                    &mdash; {cite}
                </Text>
            )}
        </blockquote>
    );
};`;

export const BlockquoteDemo = () => {
    const [cite, setCite] = useState('A wise person');

    return (
        <DemoSection
            title="Blockquote"
            description="A component for displaying quoted text."
            livePreview={
                <Blockquote cite={cite}>
                    The only way to do great work is to love what you do.
                </Blockquote>
            }
            propControls={<BlockquoteConfigurator cite={cite} setCite={setCite} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};