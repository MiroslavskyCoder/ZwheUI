import React from 'react';

export const ChatDotsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <line x1="8" y1="10" x2="8.01" y2="10"></line>
        <line x1="12" y1="10" x2="12.01" y2="10"></line>
        <line x1="16" y1="10" x2="16.01" y2="10"></line>
    </svg>
);