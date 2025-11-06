import React from 'react';

export const TriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        {...props}
    >
        <path d="M1 21h22L12 2 1 21z" />
    </svg>
);