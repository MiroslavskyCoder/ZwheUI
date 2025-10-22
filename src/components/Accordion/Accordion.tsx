import React, { useState, createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface AccordionContextType {
    activeItem: string | null;
    setActiveItem: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('Accordion components must be used within an Accordion provider.');
    }
    return context;
};

export const Accordion: React.FC<{ children: React.ReactNode; defaultValue?: string; className?: string }> = ({ children, defaultValue, className }) => {
    const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);
    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem: React.FC<{ children: React.ReactNode; value: string; className?: string }> = ({ children, value, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-item');
    const itemClass = createStyle({
        borderBottom: `1px solid ${theme.colors.border}`,
        '&:last-child': {
            borderBottom: 'none',
        },
    });

    return <div className={`${itemClass} ${className}`}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { value }) : child)}</div>;
};

export const AccordionTrigger: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => {
    const { activeItem, setActiveItem } = useAccordion();
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-trigger');
    const isOpen = activeItem === value;

    const triggerClass = createStyle({
        width: '100%',
        padding: `${theme.spacing.md} 0`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: theme.colors.text,
        cursor: 'pointer',
        fontSize: '1rem',
        textAlign: 'left',
        '&::after': {
            content: '"▼"',
            fontSize: '10px',
            color: theme.colors.textSecondary,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'none',
        }
    });

    return (
        <button
            className={`${triggerClass} ${className}`}
            onClick={() => setActiveItem(isOpen ? null : value!)}
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${value}`}
        >
            {children}
        </button>
    );
};

export const AccordionContent: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => {
    const { activeItem } = useAccordion();
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-content');
    const isOpen = activeItem === value;
    
    const contentClass = createStyle({
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        maxHeight: isOpen ? '500px' : '0',
    });

    const innerClass = createStyle({
         paddingBottom: isOpen ? theme.spacing.md : '0',
         color: theme.colors.textSecondary,
    });

    return (
        <div id={`accordion-content-${value}`} className={`${contentClass} ${className}`} aria-hidden={!isOpen}>
            <div className={innerClass}>{children}</div>
        </div>
    );
};