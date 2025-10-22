import React from 'react';
import { useStyles, useTheme } from '../../core';
import { Text } from '../Text/Text';

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
    cite?: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({ children, cite, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('blockquote');

    const quoteClass = createStyle({
        paddingLeft: theme.spacing.md,
        borderLeft: `4px solid ${theme.colors.border}`,
        color: theme.colors.textSecondary,
        margin: `${theme.spacing.md} 0`,
    });

    return (
        <blockquote className={`${quoteClass} ${className}`} {...props}>
            <Text as="p" color="inherit" style={{ fontStyle: 'italic' }}>
                {children}
            </Text>
            {cite && (
                <Text as="footer" size="sm" color="inherit" style={{ marginTop: theme.spacing.sm }}>
                    &mdash; {cite}
                </Text>
            )}
        </blockquote>
    );
};