import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', maxWidth, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('container');

    const containerClass = createStyle({
        width: '100%',
        maxWidth: maxWidth || theme.maxWidths.container,
        margin: '0 auto',
        padding: `0 ${theme.spacing.lg}`,
    });

    return (
        <div className={`${containerClass} ${className}`} {...props}>
            {children}
        </div>
    );
};
