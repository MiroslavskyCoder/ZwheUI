import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme, Theme } from '../../core/theme/ThemeProvider';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: string;
    size?: keyof Theme['maxWidths'];
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', maxWidth, size, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('container');

    const containerClass = createStyle({ 
        maxWidth: (size ? theme.maxWidths[size] : undefined) || maxWidth || theme.maxWidths.container,
        margin: '0 auto',
        padding: `0 ${theme.spacing.lg}`,
        '@media': {
            "(maxWidth: 'sm')": {
                padding: `0 ${theme.spacing.md}`,
            }
        }
    });

    return (
        <div className={`${containerClass} ${className}`} {...props}>
            {children}
        </div>
    );
};