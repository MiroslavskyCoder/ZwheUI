
import React from 'react';
import { useAudio } from './AudioContext';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button';
import { Slider } from '../Slider/Slider';
import { AudioTime } from './AudioTime';
import { AudioDuration } from './AudioDuration';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { PlayIcon, PauseIcon } from '../../icons';

export const AudioControls: React.FC<{ className?: string }> = ({ className }) => {
    const { isPlaying, togglePlay, currentTime, duration, seek } = useAudio();
    const { theme } = useTheme();
    const createStyle = useStyles('audio-controls');

    const containerClass = createStyle({
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: theme.spacing.md,
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <Button
                variant="secondary"
                onClick={togglePlay}
                style={{ padding: '0.5rem' }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                disabled={duration === 0}
            >
                <Icon as={isPlaying ? PauseIcon : PlayIcon} size={20} />
            </Button>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <AudioTime />
                <Slider
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={seek}
                    disabled={duration === 0}
                />
                <AudioDuration />
            </Stack>
        </div>
    );
};
