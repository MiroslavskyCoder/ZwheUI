import React, { useState } from 'react';
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper';
import { TooltipBubble } from './TooltipBubble';

interface TooltipProps {
    label: string;
    children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <PopperTrigger>
                    {children}
                </PopperTrigger>
                <PopperContent>
                    <TooltipBubble>{label}</TooltipBubble>
                </PopperContent>
            </div>
        </Popper>
    );
};