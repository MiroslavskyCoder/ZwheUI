
import React from 'react';
import { useStyles, useTheme } from '../../core';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Avatar } from '../Avatar/Avatar';
import { hexToRgba } from '../../core/color/utils';

interface MessageProps {
    author: string;
    avatarFallback: string;
    avatarSrc?: string;
    timestamp: string;
    isMe?: boolean;
    children: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({ author, avatarFallback, avatarSrc, timestamp, isMe = false, children }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('message');
    
    const containerClass = createStyle({
        display: 'flex',
        gap: theme.spacing.md,
        flexDirection: isMe ? 'row-reverse' : 'row',
    });

    const messageBubbleClass = createStyle({
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        borderRadius: '12px',
        backgroundColor: isMe ? hexToRgba(theme.colors.primary, 0.4) : theme.colors.backgroundSecondary,
        maxWidth: '75%',
    });

    return (
        <div className={containerClass}>
            <Avatar src={avatarSrc} fallback={avatarFallback} size={32} style={{ flexShrink: 0, alignSelf: 'flex-end' }} />
            <Stack gap="0.25rem" align={isMe ? 'end' : 'start'}>
                <Stack direction={isMe ? 'row-reverse' : 'row'} align="baseline" gap="0.5rem">
                    <Text size="sm" weight="600">{author}</Text>
                    <Text size="xs" color={theme.colors.textSecondary}>{timestamp}</Text>
                </Stack>
                <div className={messageBubbleClass}>
                    <Text>{children}</Text>
                </div>
            </Stack>
        </div>
    );
};
