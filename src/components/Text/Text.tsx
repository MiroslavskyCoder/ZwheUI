
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: string;
    weight?: string | number;
    color?: string;
}

export const Text: React.FC<TextProps> = ({
    as: Component = 'p',
    size,
    weight,
    color,
    className = '',
    style,
    ...props
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('text');

    const textClass = createStyle({
        fontSize: size || theme.typography.fontSizes.base,
        fontWeight: String(weight || theme.typography.fontWeights.normal),
        color: color || theme.colors.text,
        lineHeight: theme.typography.lineHeights.normal,
    });

    return <Component className={`${textClass} ${className}`} style={style} {...props} />;
};
