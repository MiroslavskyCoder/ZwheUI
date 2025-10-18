
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: React.FC<LinkProps> = ({ children, className, ...props }) => {
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

    return (
        <a className={`${linkClass} ${className}`} {...props}>
            {children}
        </a>
    );
};
