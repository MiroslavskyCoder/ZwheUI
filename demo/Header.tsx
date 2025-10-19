import React, { useState } from 'react';
import { Header, Text, Stack, Button, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const HeaderConfigurator: React.FC<{
    height: string;
    setHeight: (h: string) => void;
}> = ({ height, setHeight }) => (
    <Input label="Height Prop (e.g., 60px)" value={height} onChange={e => setHeight(e.target.value)} />
);

const documentation = `# Header

A semantic container component for the top section of a page, typically containing branding, navigation, and primary actions. It uses sub-components for layout.

## Components

*   **Header**: The main container.
*   **Header.Left**: A wrapper for content aligned to the left (e.g., logo, title).
*   **Header.Right**: A wrapper for content aligned to the right (e.g., actions, user menu).

## Usage

\`\`\`tsx
import { Header, Text, Button } from './src/components';

<Header>
  <Header.Left>
    <Text as="h1" size="1.25rem" weight="600">My App</Text>
  </Header.Left>
  <Header.Right>
    <Button>Log In</Button>
  </Header.Right>
</Header>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Container } from '../Container/Container';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    height?: string;
}

const HeaderLeft: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('header-left');
    const class_ = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        justifySelf: 'start',
        '@media': {
            "(maxWidth: 'md')": {
                justifySelf: 'center',
            },
        },
    });

    return <div className={\`\${class_} \${className}\`}>{children}</div>;
};
HeaderLeft.displayName = 'Header.Left';

const HeaderRight: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('header-right');
    const class_ = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        justifySelf: 'end',
        '@media': {
            "(maxWidth: 'md')": {
                justifySelf: 'center',
            },
             "(maxWidth: 'sm')": {
                display: 'none',
            },
        },
    });

    return <div className={\`\${class_} \${className}\`}>{children}</div>;
};
HeaderRight.displayName = 'Header.Right';


export const Header: React.FC<HeaderProps> & {
    Left: typeof HeaderLeft;
    Right: typeof HeaderRight;
} = ({ children, className = '', height, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('header');

    const headerClass = createStyle({
        padding: height ? '0' : '10px 0',
        backgroundColor: theme.colors.backgroundSecondary,
        borderBottom: \`1px solid \${theme.colors.border}\`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: height,
        display: height ? 'flex' : 'block',
        alignItems: height ? 'center' : undefined,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
            backgroundColor: theme.colors.backgroundSecondary.replace(/, ?\\d+\\.?\\d*\\)$/, ', 0.5)'),
        },
        '@media': {
            "(maxWidth: 'sm')": {
                padding: height ? '0' : \`\${theme.spacing.sm} 0\`,
            }
        },
    });
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        padding: 0,
        width: height ? '100%' : undefined,
        '@media': {
            "(maxWidth: 'md')": {
                gridTemplateColumns: '1fr',
                gap: theme.spacing.sm,
            },
        },
    });

    return (
        <header className={\`\${headerClass} \${className}\`} {...props}>
            <Container className={containerClass}>
                {children}
            </Container>
        </header>
    );
};

Header.Left = HeaderLeft;
Header.Right = HeaderRight;`;

export const HeaderDemo = () => {
    const [height, setHeight] = useState('60px');

    return (
        <DemoSection
            title="Header"
            description="A semantic container for the top of a page layout. Use Header.Left and Header.Right to align content."
            livePreview={
                <Header height={height}>
                    <Header.Left>
                        <Text weight="600">My Application</Text>
                    </Header.Left>
                    <Header.Right>
                        <Button variant="secondary">Login</Button>
                    </Header.Right>
                </Header>
            }
            propControls={<HeaderConfigurator height={height} setHeight={setHeight} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
