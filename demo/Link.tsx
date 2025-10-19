import React, { useState } from 'react';
import { Link, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const LinkConfigurator: React.FC<{
    href: string;
    setHref: (h: string) => void;
    childrenText: string;
    setChildrenText: (t: string) => void;
}> = ({ href, setHref, childrenText, setChildrenText }) => (
    <Stack gap="1.5rem">
        <Input label="Href Prop" value={href} onChange={e => setHref(e.target.value)} />
        <Input label="Children Prop (Text)" value={childrenText} onChange={e => setChildrenText(e.target.value)} />
    </Stack>
);

const documentation = `# Link

A styled anchor (\`<a>\`) tag for navigation, consistent with the application's theme. It seamlessly integrates with \`react-router-dom\` for client-side routing.

## Props

*   \`to\` (string, optional): The path for client-side navigation. If this prop is provided, the component will render a \`react-router-dom\` \`Link\`.
*   \`href\` (string, optional): The URL for a standard anchor tag. This is used for external links or when not using a router.
*   All other standard \`<a>\` attributes are supported (e.g., \`target\`, \`onClick\`).
*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

### Standard External Link
\`\`\`tsx
import { Link } from './src/components';

<Link href="https://example.com" target="_blank">
  Visit Example
</Link>
\`\`\`

### Client-Side Routing Link
\`\`\`tsx
import { Link } from './src/components';

// This will render a <Link> from react-router-dom
<Link to="/profile">
  View Profile
</Link>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
}

export const Link: React.FC<LinkProps> = ({ children, className = '', to, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('link');

    const linkClass = createStyle({
        color: theme.colors.primary,
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: '#93c5fd', // Lighter blue
            textDecoration: 'underline',
        },
    });

    const combinedClassName = \`\${linkClass} \${className}\`;

    if (to) {
        return (
            <a href={to} className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    return (
        <a className={combinedClassName} {...props}>
            {children}
        </a>
    );
};`;

export const LinkDemo = () => {
    const [href, setHref] = useState('https://example.com');
    const [childrenText, setChildrenText] = useState('example.com');

    return (
        <DemoSection
            title="Link"
            description="A styled anchor tag for navigation. Supports standard `href` for external links and `to` for client-side routing."
            livePreview={
                <Text>
                    This is a standard external link to <Link href={href} target="_blank" rel="noopener noreferrer">{childrenText}</Link>.
                </Text>
            }
            propControls={<LinkConfigurator href={href} setHref={setHref} childrenText={childrenText} setChildrenText={setChildrenText} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};