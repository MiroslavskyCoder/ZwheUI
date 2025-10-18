
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface SofaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Sofa: React.FC<SofaProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('sofa');
    
    const sofaClass = createStyle({
        width: '100%',
        padding: '24px',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        transition: 'background-color 0.3s, border-color 0.3s',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    return <div className={`${sofaClass} ${className}`} {...props}>{children}</div>;
};