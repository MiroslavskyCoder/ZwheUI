import React, { useState } from 'react';
import { Breadcrumbs, Text, Stack, Input, Textarea, Error } from '../src/components';
import { DemoSection } from './DemoSection';

const initialItems = [
    { label: 'Home', to: '/' },
    { label: 'Components', to: '#' },
    { label: 'Breadcrumbs' },
];

const BreadcrumbsConfigurator: React.FC<{
    itemsString: string;
    setItemsString: (s: string) => void;
    separator: string;
    setSeparator: (s: string) => void;
    error: string;
}> = ({ itemsString, setItemsString, separator, setSeparator, error }) => (
    <Stack gap="1.5rem">
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Items Prop (JSON Array)</Text>
            <Textarea value={itemsString} onChange={e => setItemsString(e.target.value)} rows={6} style={{ fontFamily: 'monospace' }}/>
            {error && <Error>{error}</Error>}
        </Stack>
        <Input label="Separator Prop" value={separator} onChange={e => setSeparator(e.target.value)} />
    </Stack>
);

const documentation = `# Breadcrumbs

A navigational aid that shows the user's current location within the application's hierarchy.

## Props

*   \`items\` (array of objects, required): An array of breadcrumb items. Each object should have:
    *   \`label\` (string, required): The text to display.
    *   \`href\` (string, optional): The URL for the link. If omitted, the item will be rendered as plain text.
*   \`separator\` (React.ReactNode, optional, default: '/'): The character or component to display between items.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Breadcrumbs } from './src/components';

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
];

<Breadcrumbs items={breadcrumbItems} />
\`\`\``;

const sourceCode = `import React from 'react';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface BreadcrumbItem {
    label: string;
    href?: string;
    to?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator = '/', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('breadcrumbs');

    const navClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
    });
    
    const separatorClass = createStyle({
        color: theme.colors.textSecondary,
    });

    return (
        <nav aria-label="breadcrumb" className={\`\${navClass} \${className}\`}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href || item.to ? (
                        <Link href={item.href} to={item.to}>{item.label}</Link>
                    ) : (
                        <Text as="span" color={theme.colors.textSecondary}>{item.label}</Text>
                    )}
                    {index < items.length - 1 && (
                        <span className={separatorClass} aria-hidden="true">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};`;

export const BreadcrumbsDemo = () => {
    const [itemsString, setItemsString] = useState(JSON.stringify(initialItems, null, 2));
    const [separator, setSeparator] = useState('>');
    const [error, setError] = useState('');

    let items = initialItems;
    try {
        const parsed = JSON.parse(itemsString);
        if (Array.isArray(parsed)) {
            items = parsed;
            if (error) setError('');
        } else {
            if (!error) setError('Items must be a valid JSON array.');
        }
    } catch (e) {
        if (!error) setError('Invalid JSON format.');
    }


    return (
        <DemoSection
            title="Breadcrumbs"
            description="A navigational aid that shows the user's location within the app. Supports react-router `to` prop."
            livePreview={
                <Breadcrumbs items={items} separator={separator} />
            }
            propControls={
                <BreadcrumbsConfigurator 
                    itemsString={itemsString}
                    setItemsString={setItemsString}
                    separator={separator}
                    setSeparator={setSeparator}
                    error={error}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
