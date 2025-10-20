# Carousel

A component for displaying a series of items in a scrollable, slideshow-like format. It's built with a composable API for maximum flexibility.

## Components

*   **Carousel**: The main context provider and wrapper.
*   **Carousel.Container**: The container for the individual slide items.
*   **Carousel.Previous**: The button to navigate to the previous slide.
*   **Carousel.Next**: The button to navigate to the next slide.
*   **Carousel.Dots**: A set of clickable dots for direct navigation to a specific slide.

## Usage

```tsx
import { Carousel, Image } from './src/components';

const images = [
  'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=400',
];

<Carousel>
    <Carousel.Container>
        {images.map(src => (
            <Image key={src} src={src} alt="Landscape" />
        ))}
    </Carousel.Container>
    <Carousel.Previous />
    <Carousel.Next />
    <Carousel.Dots />
</Carousel>
```
