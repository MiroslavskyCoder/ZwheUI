import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

type TextProps<C extends React.ElementType> = {
    as?: C;
    size?: string;
    weight?: string | number;
    color?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'size' | 'weight' | 'color'>;

type AllowedTags = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre' | 'label' | 'footer';

export const Text = <C extends AllowedTags = 'p'>({
    as: Component = 'p' as C,
    size,
    weight,
    color,
    className = '',
    style,
    ...props
}: TextProps<C>) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text');

    const textClass = createStyle({
        fontSize: size || theme.typography.fontSizes.base,
        fontWeight: String(weight || theme.typography.fontWeights.normal),
        color: color || theme.colors.text,
        lineHeight: theme.typography.lineHeights.normal,
    });

    return React.createElement(Component, {
        className: `${textClass} ${className}`,
        style,
        ...props,
    });
};