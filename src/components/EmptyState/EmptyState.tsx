import React from 'react';
import { Stack, Center, Text, Icon } from '..';
import { useTheme } from '../../core';

interface EmptyStateProps {
    icon?: React.ElementType;
    title: string;
    description: string;
    action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
    const { theme } = useTheme();
    return (
        <Center style={{ padding: '2rem', textAlign: 'center', minHeight: '250px' }}>
            <Stack gap="1rem" align="center">
                {icon && <Icon as={icon} size={48} color={theme.colors.textSecondary} />}
                <Stack gap="0.25rem">
                    <Text as="h3" size="lg" weight="600">{title}</Text>
                    <Text color={theme.colors.textSecondary}>{description}</Text>
                </Stack>
                {action}
            </Stack>
        </Center>
    );
};
