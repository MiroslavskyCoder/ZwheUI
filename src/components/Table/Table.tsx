
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({ children, className, ...props }) => {
    const createStyle = useStyles('table');
    const tableClass = createStyle({
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
    });
    return <table className={`${tableClass} ${className}`} {...props}>{children}</table>;
};

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, className, ...props }) => {
    return <thead className={className} {...props}>{children}</thead>;
};

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, className, ...props }) => {
    return <tbody className={className} {...props}>{children}</tbody>;
};

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('table-row');
    const rowClass = createStyle({
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
    });
    return <tr className={`${rowClass} ${className}`} {...props}>{children}</tr>;
};

export const TableHead: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('table-head');
    const headClass = createStyle({
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.colors.border}`,
        color: theme.colors.textSecondary,
        fontWeight: '600',
        fontSize: '12px',
        textTransform: 'uppercase',
    });
    return <th className={`${headClass} ${className}`} {...props}>{children}</th>;
};

export const TableCell: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, className, ...props }) => {
     const { theme } = useTheme();
    const createStyle = useStyles('table-cell');
    const cellClass = createStyle({
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.colors.border}`,
    });
    return <td className={`${cellClass} ${className}`} {...props}>{children}</td>;
};
