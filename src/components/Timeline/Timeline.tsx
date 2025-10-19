
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Timeline: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('timeline-list');
    const listClass = createStyle({
        listStyle: 'none',
        padding: 0,
        margin: 0,
    });
    return <ul className={`${listClass} ${className}`}>{children}</ul>;
};

export const TimelineItem: React.FC<{ children: React.ReactNode, isLast?: boolean }> = ({ children, isLast }) => {
    const createStyle = useStyles('timeline-item');
    const itemClass = createStyle({
        display: 'flex',
        position: 'relative',
        paddingBottom: isLast ? '0' : '2rem',
    });
    return <li className={itemClass}>{children}</li>;
};

export const TimelineConnector: React.FC = () => {
    const { theme } = useTheme();
    const createStyle = useStyles('timeline-connector');
    const connectorClass = createStyle({
        width: '2px',
        backgroundColor: theme.colors.border,
        position: 'absolute',
        top: '12px',
        bottom: '-12px',
        left: '11px',
    });
    return <div className={connectorClass} />;
};

export const TimelineDot: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('timeline-dot');
    const dotClass = createStyle({
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: theme.colors.primary,
        border: `3px solid ${theme.colors.background}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        flexShrink: 0,
        color: '#fff',
    });
    return <div className={`${dotClass} ${className}`}>{children}</div>;
};

export const TimelineContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const createStyle = useStyles('timeline-content');
    const contentClass = createStyle({
        marginLeft: '1.5rem',
    });
    return <div className={`${contentClass} ${className}`}>{children}</div>;
};