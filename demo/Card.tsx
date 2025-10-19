
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
    hasOnClick: boolean;
    setHasOnClick: (h: boolean) => void;
    styleString: string;
    setStyleString: (s: string) => void;
}> = ({
    title, setTitle, childrenText, setChildrenText, variant, setVariant, hasOnClick, setHasOnClick, styleString, setStyleString
}) => {
    const { theme } = useTheme();
    const [styleError, setStyleError] = useState('');

    const handleStyleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newStyleString = e.target.value;
        setStyleString(newStyleString);
        try {
            JSON.parse(newStyleString);
            setStyleError('');
        } catch (error) {
            setStyleError('Invalid JSON format for style object.');
        }
    };

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
            
            <Checkbox label="Enable onClick Prop (shows an alert)" checked={hasOnClick} onChange={(e) => setHasOnClick(e.target.checked)} />

            <Stack gap="4px">
                <label htmlFor="card-style-input">
                    <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Style Prop (JSON Object)</Text>
                </label>
                <Textarea id="card-style-input" value={styleString} onChange={handleStyleChange} rows={4} style={{ fontFamily: 'monospace' }} />
                <Error>{styleError}</Error>
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
import { Card } from './src/components/Card/Card';

// Default Card
<Card title="My Card">
  <p>This is the content of the card.</p>
</Card>

// Glass Variant Card
<Card variant="glass" title="Glass Card">
  <p>Content with a blurred background effect.</p>
</Card>

// Clickable Card
<Card title="Click Me" onClick={() => alert('Card clicked!')}>
  <p>This card will trigger an alert when clicked.</p>
</Card>
\`\`\`

## Features

*   Supports a title and arbitrary children.
*   Offers a \`glass\` variant with backdrop filter for a modern UI aesthetic.
*   Integrates with the theme for consistent styling.
*   Can be made interactive with an \`onClick\` handler.
*   Accessible: Clickable cards are focusable and can be activated with \`Enter\` or \`Space\` keys.`;

const sourceCode = `import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface CardProps {
    title?: string
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'glass'
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void
    // FIX: Add style prop to allow for inline styles.
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
        // Add a visible focus state for keyboard accessibility
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

    // Handle keyboard events for clickable cards
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault(); // Prevent space from scrolling
            onClick(event);
        }
    };

    // Add ARIA attributes and keyboard event listener if the card is clickable
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
    const [childrenText, setChildrenText] = useState('This is the content of the card. You can edit it using the controls in the Props tab.');
    const [variant, setVariant] = useState<'default' | 'glass'>('default');
    const [hasOnClick, setHasOnClick] = useState(true);
    const [styleString, setStyleString] = useState('{\n  "minHeight": "120px",\n  "width": "300px"\n}');

    let parsedStyle: React.CSSProperties = { minHeight: '120px', width: '300px' };
    try {
        parsedStyle = JSON.parse(styleString);
    } catch (e) {
        // Error is handled in the configurator
    }
    const cardOnClick = hasOnClick ? () => alert('Card was clicked!') : undefined;

    return (
        <DemoSection
            title="Card"
            description="A flexible content container. Use the controls in the 'Props' tab to configure the card in real-time."
            livePreview={
                <Card
                    title={title}
                    variant={variant}
                    onClick={cardOnClick}
                    style={parsedStyle}
                >
                    <Text>{childrenText}</Text>
                </Card>
            }
            propControls={
                <CardConfigurator
                    title={title}
                    setTitle={setTitle}
                    childrenText={childrenText}
                    setChildrenText={setChildrenText}
                    variant={variant}
                    setVariant={setVariant}
                    hasOnClick={hasOnClick}
                    setHasOnClick={setHasOnClick}
                    styleString={styleString}
                    setStyleString={setStyleString}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
