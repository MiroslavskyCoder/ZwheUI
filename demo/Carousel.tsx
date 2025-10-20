
import React from 'react';
import { Carousel, Image, Text } from '../src/components';
import { DemoSection } from './DemoSection';

const images = [
  'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
  'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
];

const documentation = `# Carousel

A component for displaying a series of items in a scrollable, slideshow-like format. It's built with a composable API for maximum flexibility.

## Components
*   **Carousel**: The main wrapper.
*   **Carousel.Container**: The container for the slides.
*   **Carousel.Previous**: The 'previous' button.
*   **Carousel.Next**: The 'next' button.
*   **Carousel.Dots**: The pagination dots.
`;

const sourceCode = `import React, { useState, Children } from 'react';
// ... more imports

// Main Wrapper
export const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // ... context setup ...
};

// Slides Container
const CarouselContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // ... sliding logic ...
};
Carousel.Container = CarouselContainer;

// Controls
const CarouselPrevious: React.FC = () => { /* ... */ };
Carousel.Previous = CarouselPrevious;
const CarouselNext: React.FC = () => { /* ... */ };
Carousel.Next = CarouselNext;
const CarouselDots: React.FC = () => { /* ... */ };
Carousel.Dots = CarouselDots;
`;

export const CarouselDemo = () => {
    return (
        <DemoSection
            title="Carousel"
            description="A slideshow component for cycling through elements."
            livePreview={
                <Carousel>
                    <Carousel.Container>
                        {images.map((src, index) => (
                            <Image key={index} src={src} alt={`Slide ${index + 1}`} fit="cover" />
                        ))}
                    </Carousel.Container>
                    <Carousel.Previous />
                    <Carousel.Next />
                    <Carousel.Dots />
                </Carousel>
            }
            propControls={<Text color="textSecondary">This is a presentational demo. See documentation for usage.</Text>}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};
