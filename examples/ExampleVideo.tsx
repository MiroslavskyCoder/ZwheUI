import React from 'react';
import { Video, VideoView, VideoFile, Sofa, Text, Stack } from '../src/components';

export const ExampleVideo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Example: Video Player</Text>
      <Text>A simple demonstration of the styled video player component using the browser's native controls.</Text>
      <Video>
        <VideoView
            src="https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4"
            poster="https://images.pexels.com/videos/3209828/free-video-3209828.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            controls
        />
      </Video>
    </Stack>
  </Sofa>
);
