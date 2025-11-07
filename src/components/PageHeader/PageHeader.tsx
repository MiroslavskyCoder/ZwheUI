import React from 'react';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Breadcrumbs, BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs';
import { Divider } from '../Divider/Divider';
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
                    <Text as="h1" size="1.875rem" weight="700" style={{ margin: 0 }}>{title}</Text>
                    {subtitle && <Text color={theme.colors.textSecondary} style={{ margin: 0 }}>{subtitle}</Text>}
                </Stack>
                {actions && <Stack direction="row" gap="1rem">{actions}</Stack>}
            </Stack>
            <Divider />
        </Stack>
    );
};