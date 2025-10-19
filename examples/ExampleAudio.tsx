
import React from 'react';
import { Audio, AudioFile, Text, Sofa, Stack, AudioView, AudioControls, AudioVisualizer } from '../src/components';

export const ExampleAudio = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Example: Audio Player</Text>
      <Text>A demonstration of a styled, composable audio player with custom controls and a real-time visualizer.</Text>
       <Audio>
            <AudioView crossOrigin="anonymous">
                <AudioFile src="https://cdn.pixabay.com/audio/2022/08/03/audio_51f6922b13.mp3" type="audio/mpeg" />
            </AudioView>
            <AudioVisualizer />
            <AudioControls />
       </Audio>
    </Stack>
  </Sofa>
);
