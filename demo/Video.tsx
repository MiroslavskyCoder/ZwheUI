import React from 'react';
import { 
    Video, VideoView, VideoFile, VideoMetadata, VideoControls,
    Sofa, Text, Stack
} from '../src/components';


export const VideoDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Video Player</Text>
      <Text>A composable video player. This example shows custom controls built from sub-components.</Text>
      <Video>
        <VideoView poster="https://images.pexels.com/videos/3209828/free-video-3209828.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <VideoFile src="https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4" type="video/mp4" />
        </VideoView>
        <VideoControls />
        <VideoMetadata style={{padding: '0 1rem 0.5rem'}}/>
      </Video>
    </Stack>
  </Sofa>
);