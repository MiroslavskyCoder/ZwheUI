import React from 'react';
import { useGraphicsContext } from '../GraphicsContext';
import { useStyles, useTheme } from '../../../core';
import { Stack, Text, IconButton } from '../../..';
// FIX: Replaced MinusIcon with MinusSquareIcon as MinusIcon does not exist.
import { PlusIcon, MinusSquareIcon, LockIcon, DownloadIcon, RedoIcon } from '../../../icons';

export const GFooter: React.FC = () => {
    const { theme } = useTheme();
    const { zoom, setZoom, pan, setPan, processGraph } = useGraphicsContext();
    const createStyle = useStyles('g-footer');

    const containerClass = createStyle({
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '0.25rem',
        borderRadius: '8px',
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        zIndex: 10,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(12px)',
        },
    });

    const handleZoom = (direction: 'in' | 'out') => {
        const factor = 1.2;
        const newZoom = direction === 'in' ? zoom * factor : zoom / factor;
        setZoom(newZoom);
    };

    return (
        <div className={containerClass}>
            <Stack direction="row" align="center" gap="0.5rem">
                {/* FIX: Use icon component for consistency. */}
                <IconButton icon={MinusSquareIcon} aria-label="Zoom out" onClick={() => handleZoom('out')} />
                <Text size="sm" style={{ minWidth: '40px', textAlign: 'center' }}>{Math.round(zoom * 100)}%</Text>
                {/* FIX: Use icon component for consistency. */}
                <IconButton icon={PlusIcon} aria-label="Zoom in" onClick={() => handleZoom('in')} />
                <IconButton icon={LockIcon} aria-label="Lock view" />
                <IconButton icon={() => <Text size="lg" weight="bold">⌖</Text>} aria-label="Center view" onClick={() => { setPan({x:0, y:0}); setZoom(1); }} />
                <IconButton icon={DownloadIcon} aria-label="Download" />
                <IconButton icon={RedoIcon} aria-label="Redo" />
            </Stack>
        </div>
    );
};
