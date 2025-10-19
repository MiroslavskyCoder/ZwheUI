
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('list');
    const listClass = createStyle({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        backgroundColor: 'rgba(28, 28, 28, 0.5)',
        backdropFilter: 'blur(8px)',
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
        overflow: 'hidden',
    });
    return <ul className={`${listClass} ${className}`} {...props}>{children}</ul>;
};

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('list-item');
    const itemClass = createStyle({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '1fr auto',
        gap: theme.spacing.md,
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        color: theme.colors.text,
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }
    });
    return <li className={`${itemClass} ${className}`} {...props}>{children}</li>;
};

interface ListItemBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const ListItemBody: React.FC<ListItemBodyProps> = ({ children, className, ...props }) => {
    const createStyle = useStyles('list-item-body');
    const bodyClass = createStyle({
        minWidth: 0,
    });
    return <div className={`${bodyClass} ${className}`} {...props}>{children}</div>;
}

interface ListItemTextProps {
    primary: React.ReactNode;
    secondary?: React.ReactNode;
}
export const ListItemText: React.FC<ListItemTextProps> = ({ primary, secondary }) => {
    const { theme } = useTheme();
    return (
        <div>
            <Text weight="500">{primary}</Text>
            {secondary && <Text size="0.875rem" color={theme.colors.textSecondary}>{secondary}</Text>}
        </div>
    );
};
