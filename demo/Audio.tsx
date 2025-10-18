import React from 'react';
import { 
    Audio, AudioFile, AudioTime, AudioDuration, AudioFilters, useAudio,
    Sofa, Text, Stack, Button 
} from '../src/components';

const CustomAudioControls = () => {
    const { isPlaying, togglePlay } = useAudio();
    return (
         <Stack direction="row" justify="space-between" align="center" style={{marginTop: '1rem'}}>
            <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
            <Stack direction="row" gap="0.5rem" align="center">
                <AudioTime />
                <Text as="span" color="textSecondary">/</Text>
                <AudioDuration />
            </Stack>
        </Stack>
    )
}


export const AudioDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Audio Player</Text>
      <Text>A composable audio player built with a context provider and child components.</Text>
      <Audio>
        <AudioFile src="https://cdn.pixabay.com/audio/2022/08/03/audio_51f6922b13.mp3" type="audio/mpeg" />
        <Text weight="600">Uplifting Corporate</Text>
        <CustomAudioControls />
        <AudioFilters style={{marginTop: '1rem'}} />
      </Audio>
    </Stack>
  </Sofa>
);