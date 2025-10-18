
import React from 'react';

interface ErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children, className = '', ...props }) => {
    if (!children) return null;
    const baseClasses = "mt-1 text-sm text-red-400";
    return <p className={`${baseClasses} ${className}`} {...props}>{children}</p>;
};
