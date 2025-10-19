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
        width: '100%',
        maxWidth: (size ? theme.maxWidths[size] : undefined) || maxWidth || theme.maxWidths.container, 
        '@media (min-width: 1024px)': {
            width: '100%',
        },
        '@media (min-width: 768px) and (max-width: 1023px)': {
            width: '50%',
        },
        '@media (max-width: 767px)': {
            width: '50%',
        },
        margin: '0 auto',
    });

    return (
        <div className={`${containerClass} ${className}`} {...props}>
            {children}
        </div>
    );
};