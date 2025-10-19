import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

interface SofaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export const Sofa: React.FC<SofaProps> = ({ children, className = '', title, description, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sofa');
    
    const sofaClass = createStyle({ 
        padding: '24px',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        transition: 'background-color 0.3s, border-color 0.3s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    return (
        <div className={`${sofaClass} ${className}`} {...props}>
            {(title || description) ? (
                <Stack gap="1rem">
                    {title && <Text as="h2" size="1.5rem" weight="600">{title}</Text>}
                    {description && <Text>{description}</Text>}
                    <div>{children}</div>
                </Stack>
            ) : (
                children
            )}
        </div>
    );
};