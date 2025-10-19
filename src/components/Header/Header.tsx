import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Container } from '../Container/Container';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
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
} = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('header');

    const headerClass = createStyle({
        padding: `${theme.spacing.md} 0`, // Vertical padding here, horizontal padding is on the container
        backgroundColor: theme.colors.backgroundSecondary, // Fallback for older browsers
        borderBottom: `1px solid ${theme.colors.border}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
            // Use a more transparent background for the glass effect
            backgroundColor: theme.colors.backgroundSecondary.replace(/, ?\d+\.?\d*\)$/, ', 0.5)'),
        },
        '@media': {
            "(maxWidth: 'sm')": {
                padding: `${theme.spacing.sm} 0`,
            }
        },
    });
    
    const containerClass = createStyle({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        padding: 0, // Remove container's default padding
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