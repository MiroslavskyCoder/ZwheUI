import React from 'react';
import { useAudio } from './AudioContext';
import { Text } from '../Text/Text';

const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

export const AudioTime: React.FC<{ className?: string }> = ({ className }) => {
    const { currentTime } = useAudio();
    return <Text as="span" className={className}>{formatTime(currentTime)}</Text>;
};
