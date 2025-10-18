import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { useClickOutside } from '../../core/hooks/useInteractions'

interface MenuContextType {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    buttonRef: React.RefObject<HTMLButtonElement | null>
    itemsRef: React.RefObject<HTMLDivElement | null>
}

const MenuContext = createContext<MenuContextType | null>(null)

export interface MenuProps {
    children: React.ReactNode
    className?: string
}

export const Menu: React.FC<MenuProps> = ({ children, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false))
    const buttonRef = useRef<HTMLButtonElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);

    const contextValue = {
        isOpen,
        setIsOpen,
        buttonRef,
        itemsRef,
    }

    return (
        <MenuContext.Provider value={contextValue}>
            <div ref={menuRef} className={className}>
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const MenuButton: React.FC<MenuButtonProps> = ({ children, className = '', ...props }) => {
    const context = useContext(MenuContext)
    if (!context) throw new Error('MenuButton must be used within a Menu')

    const { isOpen, setIsOpen } = context;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
            e.preventDefault();
            setIsOpen(true);
        }
    };

    return (
        <button
            {...props}
            ref={context.buttonRef}
            className={className}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            data-active={isOpen}
            aria-expanded={isOpen}
            aria-haspopup="true"
        >
            {children}
        </button>
    )
}

export interface MenuItemsProps {
    children: React.ReactNode
    className?: string
}

export const MenuItems: React.FC<MenuItemsProps> = ({ children, className = '' }) => {
    const context = useContext(MenuContext)
    if (!context) throw new Error('MenuItems must be used within a Menu')

    const { isOpen, setIsOpen, buttonRef, itemsRef } = context

    // Set focus on the first item when the menu opens
    useEffect(() => {
        if (isOpen && itemsRef.current) {
            const items = Array.from(itemsRef.current.children) as HTMLElement[];
            const firstFocusableItem = items.find(
                item => item.getAttribute('role') === 'menuitem' && item.getAttribute('disabled') === null
            );
            // Use timeout to ensure focus is set after render and state updates.
            setTimeout(() => firstFocusableItem?.focus(), 0);
        }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!itemsRef.current) return;

        const items = Array.from(itemsRef.current.children) as HTMLElement[];
        const focusableItems = items.filter(
            item => item.getAttribute('role') === 'menuitem' && item.getAttribute('disabled') === null
        );

        if (focusableItems.length === 0) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            const currentFocusIndex = focusableItems.findIndex(item => item === document.activeElement);
            
            let nextIndex;
            if (e.key === 'ArrowDown') {
                nextIndex = currentFocusIndex >= 0 ? (currentFocusIndex + 1) % focusableItems.length : 0;
            } else { // ArrowUp
                nextIndex = currentFocusIndex > 0 ? (currentFocusIndex - 1) : focusableItems.length - 1;
            }
            focusableItems[nextIndex]?.focus();

        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (document.activeElement && focusableItems.includes(document.activeElement as HTMLElement)) {
                (document.activeElement as HTMLElement).click();
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setIsOpen(false);
            buttonRef.current?.focus();
        }
    }

    if (!isOpen) return null

    return (
        <div
            ref={itemsRef}
            className={className}
            role="menu"
            onKeyDown={handleKeyDown}
            data-active={isOpen}
        >
            {children}
        </div>
    )
}

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, className = '', onClick, ...props }) => {
    const context = useContext(MenuContext)
    if (!context) throw new Error('MenuItem must be used within a Menu')

    const { setIsOpen } = context

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e)
        setIsOpen(false)
    }

    return (
        <button
            {...props}
            className={className}
            role="menuitem"
            onClick={handleClick}
            tabIndex={-1}
        >
            {children}
        </button>
    )
}