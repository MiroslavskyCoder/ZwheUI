import React from 'react';

export const GunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <path d="M18 6L14 6L13 3L9 3L8 6L2 6V12L4 12V18H10V12H16V15H18V12H22V6Z"/>
    </svg>
);
