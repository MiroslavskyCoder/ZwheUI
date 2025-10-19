import React from 'react';
import { Footer, Text, Stack, Link } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Footer

A semantic container component for the bottom section of a page, typically containing copyright information, links, and other metadata.

## Props

*   \`children\` (React.ReactNode): The content to be rendered inside the footer.
*   All other standard \`<footer>\` attributes are supported.

## Usage

\`\`\`tsx
import { Footer, Text, Link } from './src/components';

<Footer>
  <Text size="14px">
    © {new Date().getFullYear()} ZwheUI. All Rights Reserved.
  </Text>
  <Link href="/privacy">Privacy Policy</Link>
</Footer>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('footer');

    const footerClass = createStyle({
        padding: \`\${theme.spacing.lg} \${theme.spacing.lg}\`,
        backgroundColor: theme.colors.backgroundSecondary,
        borderTop: \`1px solid \${theme.colors.border}\`,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginTop: 'auto', // Pushes footer to the bottom in a flex column layout
    });

    return (
        <footer className={\`\${footerClass} \${className}\`} {...props}>
            {children}
        </footer>
    );
};`;

export const FooterDemo = () => (
    <DemoSection
        title="Footer"
        description="A semantic container for the bottom of a page layout."
        livePreview={
            <Footer>
                <Stack gap="0.5rem">
                    <Text size="14px" color="inherit">© 2024 ZwheUI</Text>
                    <Link href="#">Terms of Service</Link>
                </Stack>
            </Footer>
        }
        propControls={
            <Text color="textSecondary">This is a standard implementation of the Footer component. No props are available to configure in this demo.</Text>
        }
        documentation={documentation}
        sourceCode={sourceCode}
    />
);
