import React from 'react';
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

    return <div className={`${class_} ${className}`}>{children}</div>;
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
                // Hide navigation on mobile for a cleaner look
                display: 'none',
            },
        },
    });

    return <div className={`${class_} ${className}`}>{children}</div>;
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
        backgroundColor: theme.colors.backgroundSecondary, // Fallback for older browsers
        borderBottom: `1px solid ${theme.colors.border}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: height,
        display: height ? 'flex' : 'block',
        alignItems: height ? 'center' : undefined,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
            // Use a more transparent background for the glass effect
            backgroundColor: theme.colors.backgroundSecondary.replace(/, ?\d+\.?\d*\)$/, ', 0.5)'),
        },
        '@media': {
            "(maxWidth: 'sm')": {
                padding: height ? '0' : `${theme.spacing.sm} 0`,
            }
        },
    });
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        padding: 0, // Remove container's default padding
        width: height ? '100%' : undefined,
        '@media': {
            "(maxWidth: 'md')": {
                gridTemplateColumns: '1fr',
                gap: theme.spacing.sm, // Reduced gap for mobile
            },
        },
    });

    return (
        <header className={`${headerClass} ${className}`} {...props}>
            <Container className={containerClass}>
                {children}
            </Container>
        </header>
    );
};

Header.Left = HeaderLeft;
Header.Right = HeaderRight;