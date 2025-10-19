

import React, { useState } from 'react';
import { Card, Sofa, Text, Stack, Input, SegmentedControl, Checkbox, Textarea, Error } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const CardConfigurator: React.FC<{
    title: string;
    setTitle: (t: string) => void;
    childrenText: string;
    setChildrenText: (t: string) => void;
    variant: 'default' | 'glass';
    setVariant: (v: any) => void;
}> = ({
    title, setTitle, childrenText, setChildrenText, variant, setVariant
}) => {
    const { theme } = useTheme();

    return (
        <Stack gap="1.5rem">
            <Input label="Title Prop" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter card title" />
            
            <Stack gap="4px">
                <label htmlFor="card-children-input">
                    <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Children Prop (Text)</Text>
                </label>
                <Textarea id="card-children-input" value={childrenText} onChange={(e) => setChildrenText(e.target.value)} rows={3} />
            </Stack>

            <Stack gap="4px">
                 <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Variant Prop</Text>
                <SegmentedControl
                    options={[{ label: 'Default', value: 'default' }, { label: 'Glass', value: 'glass' }]}
                    value={variant}
                    onChange={(val) => setVariant(val as 'default' | 'glass')}
                />
            </Stack>
        </Stack>
    );
};

const documentation = `# Card

A versatile container component that displays content in a distinct bordered box. It supports a default style and a \`glass\` variant for a blurred, transparent effect.

## Props

*   \`title\` (string, optional): The title to display at the top of the card.
*   \`children\` (React.ReactNode): The content to be rendered inside the card.
*   \`className\` (string, optional): Additional CSS class for custom styling.
*   \`variant\` (enum: 'default' | 'glass', optional, default: 'default'): The visual style of the card. 'glass' applies a blur effect.
*   \`onClick\` (function, optional): A callback function to execute when the card is clicked.

## Usage

\`\`\`tsx
<Card variant="glass" title="Glass Card">
  <p>Content with a blurred background effect.</p>
</Card>
\`\`\``;

const fullSourceCode = `import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface CardProps {
    title?: string
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'glass'
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void
    style?: React.CSSProperties
}

export const Card: React.FC<CardProps> = ({
    title,
    children,
    className = '',
    variant = 'default',
    onClick,
    style
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('card')

    const cardClass = createStyle({
        padding: theme.spacing.md,
        borderRadius: '6px',
        backgroundColor: theme.colors.backgroundSecondary,
        border: \`1px solid \${theme.colors.border}\`,
        height: '100%',
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: \`0 8px 24px rgba(0, 0, 0, 0.5)\`,
        },
        '&:focus-visible': onClick ? {
            outline: \`2px solid \${theme.colors.primary}\`,
            outlineOffset: '2px',
        } : {},
    })

    const titleClass = title && createStyle({
        fontSize: theme.typography.fontSizes.base,
        fontWeight: String(theme.typography.fontWeights.semibold),
        marginBottom: theme.spacing.md,
        color: theme.colors.text
    })

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            onClick(event);
        }
    };

    const interactiveProps = onClick ? {
        role: 'button',
        tabIndex: 0,
        onKeyDown: handleKeyDown,
    } : {};

    return (
        <div 
            className={\`\${cardClass} \${className}\`} 
            style={style}
            onClick={onClick ? (e) => onClick(e) : undefined}
            {...interactiveProps}
        >
            {title && <h3 className={titleClass}>{title}</h3>}
            {children}
        </div>
    )
}`;


export const CardDemo = () => {
    const [title, setTitle] = useState('Configurable Card');
    const [childrenText, setChildrenText] = useState('This is the content of the card. You can edit it using the controls in the Props panel.');
    const [variant, setVariant] = useState<'default' | 'glass'>('default');
    
    const code = `<Card title="${title}" variant="${variant}">
    <Text>${childrenText}</Text>
</Card>`;

    return (
        <DemoSection
            title="Card"
            description="A flexible content container. Use the controls to configure the card in real-time."
            initialCode={code}
            propControls={
                <CardConfigurator
                    title={title}
                    setTitle={setTitle}
                    childrenText={childrenText}
                    setChildrenText={setChildrenText}
                    variant={variant}
                    setVariant={setVariant}
                />
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};