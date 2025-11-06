import React from 'react';
import { useGraphicsContext } from '../GraphicsContext';
import { useStyles, useTheme } from '../../../core';
import { Stack, Text, Switch } from '../../..';
import { Icon } from '../../Icon/Icon';
import { PlusIcon } from '../../../icons';

export const GHeader: React.FC = () => {
    const { theme } = useTheme();
    const createStyle = useStyles('g-header');

    const containerClass = createStyle({
        position: 'absolute',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    });
    
    const headerClass = createStyle({
        padding: '0.25rem 1rem',
        borderRadius: '8px',
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    return (
        <div className={containerClass}>
            <div className={headerClass}>
                <Stack direction="row" align="center" gap="1rem">
                    <Text weight="600">Мастер Схема</Text>
                    <Stack direction="row" align="center" gap="0.5rem">
                         <Text as="span" style={{ height: '1.5rem', width: '1.5rem', display: 'grid', placeContent: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>...</Text>
                         <Text as="span" style={{ height: '1.5rem', width: '1.5rem', display: 'grid', placeContent: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                            <Icon as={PlusIcon} size={14}/>
                         </Text>
                    </Stack>
                </Stack>
            </div>
             <div className={headerClass}>
                 <Stack direction="row" align="center" gap="0.5rem">
                    <Text size="sm">Компактный режим</Text>
                    <Switch />
                 </Stack>
             </div>
        </div>
    );
};
