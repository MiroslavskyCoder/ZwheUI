import React from 'react';
import { Layout, Text, Header, Footer } from '../src/components';
import { DemoSection } from './DemoSection';
import { useTheme } from '../src/core';

const documentation = `# Layout

A set of components for structuring the main layout of a page.

## Components

*   **Layout**: The main container. Can be configured with \`hasSider\` to create a side-navigation layout.
*   **Layout.Header**: A wrapper for the header section. Renders a \`<header>\` tag.
*   **Layout.Content**: A wrapper for the main content area. Renders a \`<main>\` tag.
*   **Layout.Footer**: A wrapper for the footer section. Renders a \`<footer>\` tag.
*   **Layout.Sider**: A wrapper for a sidebar. Renders an \`<aside>\` tag.

## Usage

\`\`\`tsx
import { Layout } from './src/components';

<Layout hasSider>
  <Layout.Sider style={{width: '200px'}}>Sider</Layout.Sider>
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
</Layout>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';

// Main Layout component
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    hasSider?: boolean;
}
const Layout: React.FC<LayoutProps> & {
    Header: React.FC<React.HTMLAttributes<HTMLElement>>;
    Content: React.FC<React.HTMLAttributes<HTMLElement>>;
    Footer: React.FC<React.HTMLAttributes<HTMLElement>>;
    Sider: React.FC<React.HTMLAttributes<HTMLElement>>;
} = ({ hasSider, className, children, ...props }) => {
    const createStyle = useStyles('layout');
    const layoutClass = createStyle({
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
    });

    const outerLayoutClass = createStyle({
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: '100vh',
    })

    return <div className={\`\${hasSider ? outerLayoutClass : layoutClass} \${className}\`} {...props}>{children}</div>;
};

// ... sub-components ...
`;

export const LayoutDemo = () => {
    const { theme } = useTheme();
    return (
        <DemoSection
            title="Layout"
            description="A set of components for structuring the main layout of a page."
            livePreview={
                <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: '8px', overflow: 'hidden', height: '400px', width: '100%' }}>
                    <Layout hasSider>
                        <Layout.Sider style={{ width: '150px', background: theme.colors.backgroundSecondary, padding: '1rem', display: 'grid', placeContent: 'center' }}>
                            <Text>Sider</Text>
                        </Layout.Sider>
                        <Layout>
                            <Layout.Header>
                                <Header height="60px"><Header.Left><Text style={{paddingLeft: '1rem'}}>Header</Text></Header.Left></Header>
                            </Layout.Header>
                            <Layout.Content style={{ padding: '1rem' }}>
                                <Text>Main Content</Text>
                            </Layout.Content>
                            <Layout.Footer>
                                <Footer style={{padding: '1rem'}}><Text size="sm" color="textSecondary">Footer</Text></Footer>
                            </Layout.Footer>
                        </Layout>
                    </Layout>
                </div>
            }
            propControls={<Text color="textSecondary">This is a presentational demo of the Layout component. See documentation for usage.</Text>}
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    )
};
