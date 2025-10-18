# Audio

A composable audio player built with the React Context API. It provides a set of components to build custom audio player interfaces.

## Components

*   **Audio**: The main context provider that manages audio state. It houses the hidden `<audio>` element.
*   **AudioFile**: A declarative way to specify the audio source (e.g., `<AudioFile src="..." type="audio/mpeg" />`).
*   **AudioTime**: Displays the current playback time.
*   **AudioDuration**: Displays the total duration of the track.
*   **AudioFilters**: A placeholder component to demonstrate UI composition for future audio effects.
*   **useAudio**: A hook to access the audio state (`isPlaying`, `currentTime`, `togglePlay`, etc.) from any child component.

## Usage

```tsx
import { 
    Audio, AudioFile, AudioTime, AudioDuration, useAudio, Button 
} from './src/components';

const CustomControls = () => {
    const { isPlaying, togglePlay } = useAudio();
    return <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
}

<Audio>
  <AudioFile src="path/to/audio.mp3" type="audio/mpeg" />
  <p>Track Title</p>
  <CustomControls />
  <div>
    <AudioTime /> / <AudioDuration />
  </div>
</Audio>
```
