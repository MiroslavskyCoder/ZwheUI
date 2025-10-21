import React from 'react';

export const MagicWandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M15 4V2" />
        <path d="M15 10V8" />
        <path d="m12.5 6.5 1.5-1.5" />
        <path d="m12.5 11.5 1.5 1.5" />
        <path d="M18 13a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v2" />
        <path d="M19 17a2.5 2.5 0 0 1-5 0" />
        <path d="M22 17a2.5 2.5 0 0 0-5 0" />
        <path d="M5 22v-5" />
        <path d="M2 22v-5" />
    </svg>
);
