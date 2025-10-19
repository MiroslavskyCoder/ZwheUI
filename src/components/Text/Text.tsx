

import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

// FIX: To properly support a polymorphic `as` prop, the component's props are now generic.
// This allows passing attributes for any of the allowed tags (e.g., `p`, `h1`, or `pre`)
// without causing TypeScript errors due to incompatible HTML attribute types.
type TextProps<C extends React.ElementType> = {
    as?: C;
    size?: string;
    weight?: string | number;
    color?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'size' | 'weight' | 'color'>;

type AllowedTags = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre';

export const Text = <C extends AllowedTags = 'p'>({
    // FIX: Cast default value to 'C' to resolve type mismatch with generic.
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

    // FIX: Use React.createElement to bypass complex JSX type checking for polymorphic components.
    return React.createElement(Component, {
        className: `${textClass} ${className}`,
        style,
        ...props,
    });
};