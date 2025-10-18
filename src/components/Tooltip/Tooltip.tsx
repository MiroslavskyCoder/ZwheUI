
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface TooltipProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, style, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('tooltip');

    const tooltipClass = createStyle({
        position: 'fixed',
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        backgroundColor: 'rgba(20, 20, 20, 0.8)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '6px',
        color: theme.colors.text,
        fontSize: theme.typography.fontSizes.sm,
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        pointerEvents: 'none',
        zIndex: 1000,
        transition: 'opacity 0.2s, transform 0.2s',
        whiteSpace: 'nowrap',
    });

    return (
        <div className={`${tooltipClass} ${className}`} style={style}>
            {children}
        </div>
    );
};
