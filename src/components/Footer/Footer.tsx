
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('footer');

    const footerClass = createStyle({
        padding: `${theme.spacing.lg} ${theme.spacing.lg}`,
        backgroundColor: theme.colors.backgroundSecondary,
        borderTop: `1px solid ${theme.colors.border}`,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginTop: 'auto', // Pushes footer to the bottom in a flex column layout
    });

    return (
        <footer className={`${footerClass} ${className}`} {...props}>
            {children}
        </footer>
    );
};
