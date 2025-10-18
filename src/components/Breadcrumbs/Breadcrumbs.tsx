
import React from 'react';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator = '/', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('breadcrumbs');

    const navClass = createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
    });
    
    const separatorClass = createStyle({
        color: theme.colors.textSecondary,
    });

    return (
        <nav aria-label="breadcrumb" className={`${navClass} ${className}`}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <Link href={item.href}>{item.label}</Link>
                    ) : (
                        <Text as="span" color={theme.colors.textSecondary}>{item.label}</Text>
                    )}
                    {index < items.length - 1 && (
                        <span className={separatorClass} aria-hidden="true">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};
