import React from 'react';
import { Stack, Text, Breadcrumbs, Divider, BreadcrumbItem } from '..';
import { useTheme } from '../../core';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs, actions }) => {
    const { theme } = useTheme();
    return (
        <Stack gap="1rem">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
            <Stack direction="row" justify="space-between" align="center">
                <Stack gap="0.25rem">
                    <Text as="h1" size="1.875rem" weight="700">{title}</Text>
                    {subtitle && <Text color={theme.colors.textSecondary}>{subtitle}</Text>}
                </Stack>
                {actions && <Stack direction="row" gap="1rem">{actions}</Stack>}
            </Stack>
            <Divider />
        </Stack>
    );
};
