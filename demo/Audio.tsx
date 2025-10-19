

import React, { useState, useEffect } from 'react';
import {
    Audio, AudioView, AudioFile, AudioControls, AudioFilters, AudioVisualizer,
    Sofa, Text, Stack, FileUpload
} from '../src/components';

const defaultAudioSrc = null;

export const AudioDemo = () => {
    const [audioSrc, setAudioSrc] = useState<string | null>(defaultAudioSrc);
    const [fileType, setFileType] = useState<string>('audio/mpeg');

    const handleFileSelect = (file: File | null) => {
        if (file) {
            // Revoke the old object URL to avoid memory leaks if one exists
            if (audioSrc && audioSrc.startsWith('blob:')) {
                URL.revokeObjectURL(audioSrc);
            }
            setAudioSrc(URL.createObjectURL(file));
            setFileType(file.type);
        } else {
             if (audioSrc && audioSrc.startsWith('blob:')) {
                URL.revokeObjectURL(audioSrc);
            }
            setAudioSrc(null);
        }
    };

    // Clean up the object URL when the component unmounts or src changes
    useEffect(() => {
        return () => {
            if (audioSrc && audioSrc.startsWith('blob:')) {
                URL.revokeObjectURL(audioSrc);
            }
        };
    }, [audioSrc]);

    return (
      <Sofa>
        <Stack gap="1rem">
          <Text as="h2" size="1.5rem" weight="600">Audio Player with Effects</Text>
          <Text>A composable audio player with Web Audio API effects like EQ and a real-time FFT visualizer. Upload your own audio file to try it out.</Text>
          
          <FileUpload onFileSelect={handleFileSelect} />
          
          {!audioSrc && <Text size="sm" color="textSecondary" style={{textAlign: 'center', padding: '1rem'}}>No audio file loaded. Upload one to use the player.</Text>}
          
          {audioSrc && (
            <Audio>
                {/* Add a key to force re-mounting of the Audio component when the src changes */}
                <AudioView key={audioSrc} crossOrigin="anonymous">
                    <AudioFile src={audioSrc} type={fileType} />
                </AudioView>
                <AudioVisualizer />
                <AudioControls />
                <AudioFilters />
            </Audio>
          )}
        </Stack>
      </Sofa>
    );
};