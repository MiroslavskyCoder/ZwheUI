import React, { useState } from 'react';
import { Nav, Text, Stack, Checkbox } from '../src/components';
import { useTheme } from '../src/core';
import { DemoSection } from './DemoSection';

const NavConfigurator: React.FC<{
    useContainer: boolean;
    setUseContainer: (u: boolean) => void;
}> = ({ useContainer, setUseContainer }) => (
    <Checkbox label="Use Container Prop" checked={useContainer} onChange={e => setUseContainer(e.target.checked)} />
);

const documentation = `# Nav

A flexible navigation component for building horizontal navigation bars.

## Components

*   **Nav**: The main \`<nav>\` wrapper.
*   **Nav.List**: A container for a list of navigation items.
*   **Nav.Item**: A single, clickable navigation link.

## Props

### Nav
*   \`container\` (boolean, optional, default: false): If true, the navigation content will be wrapped in a \`Container\` component to center it and constrain its width.

### Nav.Item
*   \`to\` (string, optional): The path for client-side navigation (uses \`react-router-dom\`).
*   \`href\` (string, optional): The URL for a standard link.
*   \`isActive\` (boolean, optional): Applies an active style to the item.
*   All other standard \`<a>\` attributes are supported.

## Usage

\`\`\`tsx
import { Nav } from './src/components';

<Nav container={true}>
  <Nav.List>
    <Nav.Item href="#">Home</Nav.Item>
    <Nav.Item href="#" isActive>About</Nav.Item>
  </Nav.List>
</Nav>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Link } from '../Link/Link';
import { Container } from '../Container/Container';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    height?: string;
}

const NavList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => { /* ... */ };
const NavItem: React.FC<NavItemProps> = ({ children, className, isActive, ...props }) => { /* ... */ };

export const Nav: React.FC<NavProps> & {
    List: typeof NavList;
    Item: typeof NavItem;
} = ({ children, className, container = false, height, ...props }) => {
    const createStyle = useStyles('nav');
    const navClass = createStyle({ /* ... */ });

    const content = container ? <Container>{children}</Container> : children;

    return (
        <nav className={\`\${navClass} \${className}\`} {...props}>
            {content}
        </nav>
    );
};

Nav.List = NavList;
Nav.Item = NavItem;`;

export const NavDemo = () => {
    const [active, setActive] = useState('home');
    const [useContainer, setUseContainer] = useState(false);
    const { theme } = useTheme();

    const handleClick = (e: React.MouseEvent, item: string) => {
        e.preventDefault();
        setActive(item);
    };

    return (
        <DemoSection
            title="Nav"
            description="A horizontal navigation component for links."
            livePreview={
                 <div style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}`, borderRadius: '8px', width: '100%' }}>
                    <Nav container={useContainer}>
                        <Nav.List>
                            <Nav.Item href="#" isActive={active === 'home'} onClick={(e) => handleClick(e, 'home')}>Home</Nav.Item>
                            <Nav.Item href="#" isActive={active === 'about'} onClick={(e) => handleClick(e, 'about')}>About</Nav.Item>
                            <Nav.Item href="#" isActive={active === 'contact'} onClick={(e) => handleClick(e, 'contact')}>Contact</Nav.Item>
                        </Nav.List>
                    </Nav>
                </div>
            }
            propControls={<NavConfigurator useContainer={useContainer} setUseContainer={setUseContainer} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
