
import React from 'react';
import { useStyles, useTheme } from '../../core';

export const Code: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('code');

    const codeClass = createStyle({
        fontFamily: 'monospace',
        fontSize: '0.875em',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '0.125em 0.3em',
        borderRadius: '4px',
        color: theme.colors.text,
    });

    return (
        <code className={`${codeClass} ${className}`} {...props}>
            {children}
        </code>
    );
};
