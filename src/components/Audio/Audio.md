
# Audio

A composable audio player built with the React Context API and integrated with the Web Audio API for effects and visualization. This architecture provides a set of components to build custom audio player interfaces with granular control over playback and audio processing.

## Components & Hooks

*   **Audio**: The main context provider that manages audio state, including playback and Web Audio API nodes.
*   **AudioView**: Renders the native `<audio>` element (hidden by default) and connects it to the context.
*   **AudioFile**: A declarative way to specify audio sources (e.g., `<AudioFile src="..." type="audio/mp3" />`).
*   **AudioControls**: A control bar with play/pause and a seek slider.
*   **AudioTime**: Displays the current playback time.
*   **AudioDuration**: Displays the total duration of the audio.
*   **AudioFilters**: A UI component with sliders to control the built-in multi-band equalizer.
*   **AudioVisualizer**: A real-time FFT (Fast Fourier Transform) visualizer that draws the audio frequency spectrum on a canvas.
*   **useAudio**: A hook to access the audio state (`isPlaying`, `currentTime`, `eqBands`, `analyserNode`, etc.) from any child component.

## Usage

Compose the components inside the main `Audio` provider to build your player. For the Web Audio API to process audio from a different origin, the `<AudioView>` component must have the `crossOrigin="anonymous"` prop.

```tsx
import {
    Audio, 
    AudioView, 
    AudioFile, 
    AudioControls, 
    AudioFilters, 
    AudioVisualizer
} from './src/components';

<Audio>
    {/* The crossOrigin prop is required for the visualizer to work with external audio files */}
    <AudioView crossOrigin="anonymous">
        <AudioFile 
            src="https://example.com/track.mp3" 
            type="audio/mpeg" 
        />
    </AudioView>

    {/* Display the frequency visualizer */}
    <AudioVisualizer />
    
    {/* Add playback controls */}
    <AudioControls />

    {/* Add EQ effect controls */}
    <AudioFilters />
</Audio>
```
