import React from 'react';
import { useVideo } from './VideoContext';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button';
import { Slider } from '../Slider/Slider';
import { VideoTime } from './VideoTime';
import { VideoDuration } from './VideoDuration';
import { Text } from '../Text/Text';
import { Popover, PopoverTrigger, PopoverContent } from '../Popover/Popover';
import { Icon } from '../Icon/Icon';
import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeMuteIcon } from '../../icons';

export const VideoControls: React.FC<{ className?: string }> = ({ className }) => {
    const {
        isPlaying, togglePlay, currentTime, duration, seek,
        volume, setVolume, isMuted, toggleMute
    } = useVideo();
    const { theme } = useTheme();
    const createStyle = useStyles('video-controls');

    const containerClass = createStyle({
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto auto',
        alignItems: 'center',
        gap: theme.spacing.md,
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <Button variant="secondary" onClick={togglePlay} style={{ padding: '0.5rem' }}>
                <Icon as={isPlaying ? PauseIcon : PlayIcon} size={20} />
            </Button>
            <Stack direction="row" align="center" gap={theme.spacing.sm}>
                <Slider
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={seek}
                />
            </Stack>
             <Stack direction="row" gap="0.25rem" align="center">
                <VideoTime />
                <Text as="span" color={theme.colors.textSecondary}>/</Text>
                <VideoDuration />
            </Stack>
            <Popover>
                <PopoverTrigger>
                    <Button variant="secondary" onClick={toggleMute} style={{ padding: '0.5rem' }}>
                        <Icon as={isMuted || volume === 0 ? VolumeMuteIcon : VolumeUpIcon} size={20} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div style={{ padding: '0.5rem', width: '120px' }}>
                         <Slider
                            min={0}
                            max={100}
                            value={isMuted ? 0 : volume * 100}
                            onChange={(v) => setVolume(v / 100)}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};