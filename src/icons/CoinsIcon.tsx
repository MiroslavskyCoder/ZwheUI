import React from 'react';

export const CoinsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <circle cx="8" cy="8" r="6"></circle>
        <path d="M18.09 10.76A6 6 0 0 0 10.24 3M8 12.5A6 6 0 1 0 8 23a6 6 0 0 0 0-10.5z"></path>
        <path d="M14.24 16.76A6 6 0 0 0 16 9"></path>
    </svg>
);
