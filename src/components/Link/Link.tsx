

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

    const combinedClassName = `${linkClass} ${className}`;

    if (to) {
        return (
            <RouterLink to={to} className={combinedClassName} {...props}>
                {children}
            </RouterLink>
        );
    }

    return (
        <a className={combinedClassName} {...props}>
            {children}
        </a>
    );
};