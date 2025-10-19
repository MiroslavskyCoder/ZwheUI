
import React, { useRef, useEffect } from 'react';
import { useAudio } from './AudioContext';
import { useTheme } from '../../core';
import { useStyles } from '../../core';

export const AudioVisualizer: React.FC<{className?: string}> = ({className}) => {
    const { analyserNode, isPlaying } = useAudio();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // FIX: Provide an initial value of `undefined` to `useRef` to resolve "Expected 1 arguments, but got 0" error.
    const animationFrameId = useRef<number | undefined>(undefined);
    const { theme } = useTheme();
    const createStyle = useStyles('audio-visualizer');

    const canvasClass = createStyle({
        width: '100%',
        height: '100px',
        display: 'block',
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        
        // Always clear the canvas if the effect is cleaning up or not ready
        const cleanup = () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            if (context) {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            }
        };

        if (!canvas || !analyserNode || !isPlaying || !context) {
            cleanup();
            return;
        };
        
        analyserNode.fftSize = 256;
        const bufferLength = analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
            animationFrameId.current = requestAnimationFrame(draw);

            analyserNode.getByteFrequencyData(dataArray);

            context.clearRect(0, 0, canvas.width, canvas.height);
            
            const barWidth = (canvas.width / bufferLength) * 1.5;
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] / 2;
                
                context.fillStyle = theme.colors.primary;
                context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                
                x += barWidth + 2; // Add spacing between bars
            }
        };

        draw();

        return cleanup;

    }, [analyserNode, isPlaying, theme.colors.primary]);

    return <canvas ref={canvasRef} className={`${canvasClass} ${className}`} />;
};