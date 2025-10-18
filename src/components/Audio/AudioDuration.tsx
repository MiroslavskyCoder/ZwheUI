import React from 'react';
import { useAudio } from './AudioContext';
import { Text } from '../Text/Text';

const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

export const AudioDuration: React.FC<{ className?: string }> = ({ className }) => {
    const { duration } = useAudio();
    return <Text as="span" className={className}>{formatTime(duration)}</Text>;
};
