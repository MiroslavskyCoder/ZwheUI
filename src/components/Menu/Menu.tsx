import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { useClickOutside } from '../../core/hooks/useInteractions'

interface MenuContextType {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    activeItemIndex: number
    setActiveItemIndex: (index: number) => void
}

const MenuContext = createContext<MenuContextType | null>(null)

export interface MenuProps {
    children: React.ReactNode
    className?: string
}

export const Menu: React.FC<MenuProps> = ({ children, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeItemIndex, setActiveItemIndex] = useState(-1)
    
    const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

    const contextValue = {
        isOpen,
        setIsOpen,
        activeItemIndex,
        setActiveItemIndex
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

    const { isOpen, setIsOpen } = context

    return (
        <button
            {...props}
            className={className}
            onClick={() => setIsOpen(!isOpen)}
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

    const { isOpen } = context

    if (!isOpen) return null

    return (
        <div
            className={className}
            role="menu"
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

    const { setIsOpen, activeItemIndex, setActiveItemIndex } = context
    const itemRef = useRef<HTMLButtonElement>(null)
    const [isFocused, setIsFocused] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e)
        setIsOpen(false)
    }

    const handleMouseEnter = () => {
        if (itemRef.current) {
            const index = Array.from(itemRef.current.parentElement?.children || []).indexOf(itemRef.current)
            setActiveItemIndex(index)
            setIsFocused(true)
        }
    }

    const handleMouseLeave = () => {
        setIsFocused(false)
    }

    useEffect(() => {
        if (itemRef.current) {
        const index = Array.from(itemRef.current.parentElement?.children || [])
            .indexOf(itemRef.current)
        if (index === activeItemIndex) {
            setIsFocused(true)
            itemRef.current.focus()
        } else {
            setIsFocused(false)
        }
        }
    }, [activeItemIndex])

    return (
        <button
            {...props}
            ref={itemRef}
            className={className}
            role="menuitem"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-focused={isFocused}
            tabIndex={-1}
        >
            {children}
        </button>
    )
}