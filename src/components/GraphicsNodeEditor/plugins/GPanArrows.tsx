import React from 'react';
import { useGraphicsContext } from '../GraphicsContext';
import { IconButton } from '../../IconButton/IconButton';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons';

const ArrowUp = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>;
const ArrowDown = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;


export const GPanArrows: React.FC = () => {
    const { setPan } = useGraphicsContext();
    const panAmount = 50;

    const handlePan = (direction: 'left' | 'right' | 'up' | 'down') => {
        setPan(prev => {
            switch (direction) {
                case 'left': return { ...prev, x: prev.x + panAmount };
                case 'right': return { ...prev, x: prev.x - panAmount };
                case 'up': return { ...prev, y: prev.y + panAmount };
                case 'down': return { ...prev, y: prev.y - panAmount };
                default: return prev;
            }
        });
    };
    
    const baseStyle: React.CSSProperties = {
        position: 'absolute',
        zIndex: 10,
        transform: 'translate(-50%, -50%)',
    };

    return (
        <>
            <IconButton icon={ChevronLeftIcon} aria-label="Pan Left" onClick={() => handlePan('left')} style={{...baseStyle, left: '20px', top: '50%'}} />
            <IconButton icon={ChevronRightIcon} aria-label="Pan Right" onClick={() => handlePan('right')} style={{...baseStyle, right: '-10px', top: '50%'}} />
            <IconButton icon={ArrowUp} aria-label="Pan Up" onClick={() => handlePan('up')} style={{...baseStyle, top: '20px', left: '50%'}} />
            <IconButton icon={ArrowDown} aria-label="Pan Down" onClick={() => handlePan('down')} style={{...baseStyle, bottom: '0px', left: '50%'}} />
        </>
    );
};
