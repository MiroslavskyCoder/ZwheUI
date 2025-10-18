import React, { useState } from 'react';
import { FloatingActionButton } from '../FloatingActionButton/FloatingActionButton';
import { PlusIcon, TimesIcon } from '../../icons';
// FIX: Stack and Text are not exported from core. They are imported separately.
import { useStyles, useTheme } from '../../core';
import { useClickOutside } from '../../core/hooks/useInteractions';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

interface SpeedDialAction {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
}

interface SpeedDialProps {
    actions: SpeedDialAction[];
    position?: { bottom?: string; right?: string; top?: string; left?: string };
}

export const SpeedDial: React.FC<SpeedDialProps> = ({ actions, position = { bottom: '2rem', right: '2rem' } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const createStyle = useStyles('speed-dial');
    const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    const containerClass = createStyle({
        position: 'fixed',
        ...position,
        zIndex: 45,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: '1rem',
    });

    const actionClass = (index: number) => createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: `all 0.3s ease ${index * 0.05}s`,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
    });

    const labelClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        color: theme.colors.text,
        padding: '0.25rem 0.75rem',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        whiteSpace: 'nowrap',
    });

    return (
        <div ref={containerRef} className={containerClass}>
            <FloatingActionButton
                icon={isOpen ? TimesIcon : PlusIcon}
                label={isOpen ? "Close actions" : "Open actions"}
                onClick={() => setIsOpen(!isOpen)}
            />
            <Stack direction="column-reverse" align="end" gap="1.5rem">
                {actions.map((action, index) => (
                    <div key={action.label} className={actionClass(index)}>
                        <div className={labelClass}>
                            {/* FIX: Use theme value for font size instead of shorthand string. */}
                            <Text size={theme.typography.fontSizes.sm}>{action.label}</Text>
                        </div>
                        <FloatingActionButton
                            icon={action.icon}
                            label={action.label}
                            onClick={() => {
                                action.onClick();
                                setIsOpen(false);
                            }}
                            size="small"
                            // We use relative positioning here because the parent is fixed
                            position={{}}
                            style={{ position: 'relative' }}
                        />
                    </div>
                ))}
            </Stack>
        </div>
    );
};
