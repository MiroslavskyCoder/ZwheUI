import React from 'react';
import { Audio, AudioFile, Text, Sofa, Stack } from '../src/components';

export const ExampleAudio = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Example: Audio Player</Text>
      <Text>A demonstration of the audio player using the browser's native controls by adding the `controls` prop directly to a hidden audio element managed by the provider.</Text>
       <audio 
            controls 
            src="https://cdn.pixabay.com/audio/2022/08/03/audio_51f6922b13.mp3" 
            style={{width: '100%'}}
        >
            Your browser does not support the audio element.
       </audio>
    </Stack>
  </Sofa>
);