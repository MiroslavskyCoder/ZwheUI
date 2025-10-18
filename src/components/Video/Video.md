# Video

A composable video player built with the React Context API. This architecture provides a set of components to build custom video player interfaces with granular control.

## Components

*   **Video**: The main context provider that manages video state.
*   **VideoView**: Renders the native `<video>` element and connects it to the context.
*   **VideoFile**: A declarative way to specify video sources (e.g., `<VideoFile src="..." type="video/mp4" />`).
*   **VideoTime**: Displays the current playback time.
*   **VideoDuration**: Displays the total duration of the video.
*   **VideoMetadata**: A component to display video details like dimensions.
*   **useVideo**: A hook to access the video state (`isPlaying`, `currentTime`, `togglePlay`, `videoRef`, etc.) from any child component.

## Usage

### Simple Player with Native Controls
```tsx
import { Video, VideoView } from './src/components';

<Video>
    <VideoView
        src="path/to/video.mp4"
        poster="path/to/poster.jpg"
        controls
    />
</Video>
```

### Player with Custom Controls
```tsx
import {
    Video, VideoView, VideoFile, VideoTime, VideoDuration, useVideo, Button
} from './src/components';

const CustomControls = () => {
    const { isPlaying, togglePlay } = useVideo();
    return (
        <div>
            <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
            <VideoTime /> / <VideoDuration />
        </div>
    );
}

<Video>
    <VideoView>
        <VideoFile src="path/to/video.mp4" type="video/mp4" />
    </VideoView>
    <CustomControls />
</Video>
```
