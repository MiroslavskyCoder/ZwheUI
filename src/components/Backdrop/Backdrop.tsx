

import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useFade } from '../../core/hooks/useAnimation';

interface BackdropProps {
    isOpen: boolean;
    onClick?: () => void;
    className?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClick, className = '' }) => {
    const createStyle = useStyles('backdrop');
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    if (!isRendered) return null;

    const backdropClass = createStyle({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(16px)',
        zIndex: 40, // Should be below modals
    });

    return (
        <div 
            className={`${backdropClass} ${className}`} 
            style={fadeStyle}
            onClick={onClick}
        />
    );
};

export default Backdrop;