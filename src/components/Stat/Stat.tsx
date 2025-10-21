import React from 'react';
import { Card } from '../Card/Card';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { useStyles, useTheme } from '../../core';
import { ArrowUpIcon, ArrowDownIcon } from '../../icons';

interface StatProps {
    label: string;
    value: string;
    icon?: React.ElementType;
    helpText?: string;
    indicator?: 'up' | 'down';
    change?: string;
}

export const Stat: React.FC<StatProps> = ({ label, value, icon, helpText, indicator, change }) => {
    const { theme } = useTheme();
    
    const changeColor = indicator === 'up' ? '#10b981' : indicator === 'down' ? '#ef4444' : theme.colors.textSecondary;

    return (
        <Card>
            <Card.Body>
                <Stack gap="0.5rem">
                    <Stack direction="row" justify="space-between" align="center">
                        <Text size="sm" color={theme.colors.textSecondary} weight="500">{label}</Text>
                        {icon && <Icon as={icon} size={24} color={theme.colors.textSecondary} />}
                    </Stack>
                    <Text as="p" size="2rem" weight="700">{value}</Text>
                    <Stack direction="row" align="center" gap="0.5rem">
                        {indicator && (
                            <Icon as={indicator === 'up' ? ArrowUpIcon : ArrowDownIcon} size={16} color={changeColor} />
                        )}
                        {change && <Text size="sm" weight="500" color={changeColor}>{change}</Text>}
                        {helpText && <Text size="sm" color={theme.colors.textSecondary}>{helpText}</Text>}
                    </Stack>
                </Stack>
            </Card.Body>
        </Card>
    );
};
