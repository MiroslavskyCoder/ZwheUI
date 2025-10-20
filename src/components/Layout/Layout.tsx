import React from 'react';
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
        // When a sider is present, the inner layout should be vertical
        '&:has(aside)': {
            flexDirection: 'row',
        }
    });

    const outerLayoutClass = createStyle({
        display: 'flex',
        flexDirection: hasSider ? 'row' : 'column',
        width: '100%',
        minHeight: '100vh',
    })

    return <div className={`${hasSider ? outerLayoutClass : layoutClass} ${className}`} {...props}>{children}</div>;
};

// Header
const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const createStyle = useStyles('layout-header');
    const headerClass = createStyle({ flexShrink: 0 });
    return <header className={`${headerClass} ${className}`} {...props} />;
};
Header.displayName = 'Layout.Header';
Layout.Header = Header;

// Content
const Content: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const createStyle = useStyles('layout-content');
    const contentClass = createStyle({ flex: '1 1 auto', position: 'relative' });
    return <main className={`${contentClass} ${className}`} {...props} />;
};
Content.displayName = 'Layout.Content';
Layout.Content = Content;

// Footer
const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const createStyle = useStyles('layout-footer');
    const footerClass = createStyle({ flexShrink: 0 });
    return <footer className={`${footerClass} ${className}`} {...props} />;
};
Footer.displayName = 'Layout.Footer';
Layout.Footer = Footer;

// Sider
const Sider: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const createStyle = useStyles('layout-sider');
    const siderClass = createStyle({ flexShrink: 0 });
    return <aside className={`${siderClass} ${className}`} {...props} />;
};
Sider.displayName = 'Layout.Sider';
Layout.Sider = Sider;

export { Layout };
