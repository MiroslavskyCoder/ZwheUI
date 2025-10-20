

import React, { useState, Children, isValidElement, cloneElement, useContext } from 'react';
import { useStyles, useTheme } from '../../core';
import { Flex } from '../Flex/Flex';
import { IconButton } from '../IconButton/IconButton';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';

interface CarouselContextType {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    totalSlides: number;
}
const CarouselContext = React.createContext<CarouselContextType | null>(null);
const useCarousel = () => {
    // FIX: useContext was not defined. It is now imported from React.
    const context = useContext(CarouselContext);
    if (!context) throw new Error('Carousel components must be used within a Carousel provider.');
    return context;
};

// Main Wrapper
export const Carousel: React.FC<{ children: React.ReactNode, className?: string }> & {
    Container?: React.FC<{ children: React.ReactNode }>;
    Previous?: React.FC;
    Next?: React.FC;
    Dots?: React.FC;
} = ({ children, className }) => {
    const validChildren = Children.toArray(children).filter(isValidElement);
    const [activeIndex, setActiveIndex] = useState(0);
    // FIX: Safely find the container and count its children to determine the number of slides.
    const containerChild = validChildren.find(c => (c.type as any).displayName === 'Carousel.Container');
    const totalSlides = containerChild ? Children.count((containerChild as React.ReactElement<any>).props.children) : 0;
    
    return (
        <CarouselContext.Provider value={{ activeIndex, setActiveIndex, totalSlides }}>
            <div className={className} style={{ position: 'relative' }}>
                {children}
            </div>
        </CarouselContext.Provider>
    );
};

// Slides Container
const CarouselContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { activeIndex } = useCarousel();
    const createStyle = useStyles('carousel-container');
    const containerClass = createStyle({
        overflow: 'hidden',
        borderRadius: '8px',
    });
    const innerClass = createStyle({
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${activeIndex * 100}%)`,
    });

    return (
        <div className={containerClass}>
            <div className={innerClass}>
                {Children.map(children, child => (
                    <div style={{ flex: '0 0 100%', minWidth: '100%' }}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
CarouselContainer.displayName = 'Carousel.Container';
// FIX: Attach sub-component to the main Carousel component.
Carousel.Container = CarouselContainer;

// Prev Button
const CarouselPrevious: React.FC = () => {
    const { activeIndex, setActiveIndex, totalSlides } = useCarousel();
    return (
        <IconButton
            icon={ChevronLeftIcon}
            aria-label="Previous slide"
            onClick={() => setActiveIndex((activeIndex - 1 + totalSlides) % totalSlides)}
            isRound
            style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', zIndex: 10 }}
        />
    );
};
CarouselPrevious.displayName = 'Carousel.Previous';
// FIX: Attach sub-component to the main Carousel component.
Carousel.Previous = CarouselPrevious;

// Next Button
const CarouselNext: React.FC = () => {
    const { activeIndex, setActiveIndex, totalSlides } = useCarousel();
    return (
        <IconButton
            icon={ChevronRightIcon}
            aria-label="Next slide"
            onClick={() => setActiveIndex((activeIndex + 1) % totalSlides)}
            isRound
            style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', zIndex: 10 }}
        />
    );
};
CarouselNext.displayName = 'Carousel.Next';
// FIX: Attach sub-component to the main Carousel component.
Carousel.Next = CarouselNext;

// Dots
const CarouselDots: React.FC = () => {
    const { activeIndex, setActiveIndex, totalSlides } = useCarousel();
    const createStyle = useStyles('carousel-dots');
    const dotClass = createStyle({
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        border: 'none',
        padding: 0,
        '&[data-active="true"]': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            transform: 'scale(1.2)'
        }
    });

    return (
        <Flex justify="center" gap="0.5rem" style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    className={dotClass}
                    data-active={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </Flex>
    );
};
CarouselDots.displayName = 'Carousel.Dots';
// FIX: Attach sub-component to the main Carousel component.
Carousel.Dots = CarouselDots;