import React from 'react';

export const BombIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <circle cx="12" cy="14" r="8" />
        <path d="M9 10V8h6v2" />
        <path d="M12 8V4l2 2" />
    </svg>
);
