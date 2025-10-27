import React from 'react';

export const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <path d="M12 2a7 7 0 0 0-7 7c0 3.04 1.63 5.58 4 6.78V20h6v-4.22c2.37-1.2 4-3.74 4-6.78a7 7 0 0 0-7-7z" />
        <path d="M9 22h6" />
    </svg>
);
