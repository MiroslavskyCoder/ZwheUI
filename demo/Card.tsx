import React, { useState } from 'react';
import { Card, Sofa, Text, Stack, Input, SegmentedControl, Checkbox, Textarea, Error } from '../src/components';
import { useTheme } from '../src/core';

const CardConfigurator = () => {
    const { theme } = useTheme();

    // State for each prop
    const [title, setTitle] = useState('Configurable Card');
    const [childrenText, setChildrenText] = useState('This is the content of the card. You can edit it using the controls below.');
    const [className, setClassName] = useState('');
    const [variant, setVariant] = useState<'default' | 'glass'>('default');
    const [hasOnClick, setHasOnClick] = useState(true);
    const [styleString, setStyleString] = useState('{\n  "minHeight": "120px"\n}');
    const [styleError, setStyleError] = useState('');

    // Parse the style string
    let parsedStyle: React.CSSProperties = { minHeight: '120px' };
    try {
        parsedStyle = JSON.parse(styleString);
    } catch (e) {
        // Error is handled via the styleError state
    }

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

    const cardOnClick = hasOnClick ? () => alert('Card was clicked!') : undefined;

    return (
        <Stack gap="2rem">
            {/* Live Preview */}
            <Sofa title="Live Preview">
                <Card
                    title={title}
                    className={className}
                    variant={variant}
                    onClick={cardOnClick}
                    style={parsedStyle}
                >
                    <Text>{childrenText}</Text>
                </Card>
            </Sofa>

            {/* Controls */}
            <Sofa title="Configuration">
                <Stack gap="1.5rem">
                    <Input label="Title Prop" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter card title" />
                    
                    <Stack gap="4px">
                        {/* FIX: The `Text` component does not support `as="label"`. The recommended pattern is to wrap a `Text` component with `as="span"` inside a standard `<label>` element. */}
                        <label htmlFor="card-children-input">
                            <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Children Prop (Text)</Text>
                        </label>
                        <Textarea id="card-children-input" value={childrenText} onChange={(e) => setChildrenText(e.target.value)} rows={3} />
                    </Stack>

                    <Input label="ClassName Prop" value={className} onChange={(e) => setClassName(e.target.value)} placeholder="e.g., custom-class" />
                    
                    <Stack gap="4px">
                         {/* FIX: The `Text` component does not support `as="label"`. Changed to `as="span"` for displaying a label for a non-input component. */}
                         <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Variant Prop</Text>
                        <SegmentedControl
                            options={[{ label: 'Default', value: 'default' }, { label: 'Glass', value: 'glass' }]}
                            value={variant}
                            onChange={(val) => setVariant(val as 'default' | 'glass')}
                        />
                    </Stack>
                    
                    <Checkbox label="Enable onClick Prop (shows an alert)" checked={hasOnClick} onChange={(e) => setHasOnClick(e.target.checked)} />

                    <Stack gap="4px">
                        {/* FIX: The `Text` component does not support `as="label"`. The recommended pattern is to wrap a `Text` component with `as="span"` inside a standard `<label>` element. */}
                        <label htmlFor="card-style-input">
                            <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Style Prop (JSON Object)</Text>
                        </label>
                        <Textarea id="card-style-input" value={styleString} onChange={handleStyleChange} rows={4} style={{ fontFamily: 'monospace' }} />
                        <Error>{styleError}</Error>
                    </Stack>
                </Stack>
            </Sofa>
        </Stack>
    );
};


export const CardDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Card</Text>
      <Text>A flexible content container. Use the controls below to configure the card's properties in real-time.</Text>
      <CardConfigurator />
    </Stack>
  </Sofa>
);