import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../core/hooks/useInteractions';
import { useStyles } from '../../core';

export type ContextMenuItem =
    | {
          isSeparator?: false;
          label: string;
          onClick?: () => void;
          disabled?: boolean;
      }
    | {
          isSeparator: true;
      };

interface ContextMenuProps {
    isOpen: boolean;
    onClose: () => void;
    position: { x: number; y: number };
    items: ContextMenuItem[];
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ isOpen, onClose, position, items }) => {
    const menuRef = useClickOutside<HTMLDivElement>(onClose);
    const createStyle = useStyles('context-menu');

    // Styles inspired by user's Tailwind classes
    const containerClass = createStyle({
        position: 'fixed',
        backgroundColor: '#171717', // bg-neutral-900
        borderRadius: '6px', // rounded-md
        border: `1px solid #404040`, // border-neutral-700
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // shadow-lg
        minWidth: '180px',
        zIndex: 100,
        overflow: 'hidden',
        padding: '8px', // p-2
    });

    const itemClass = createStyle({
        display: 'block',
        width: '100%',
        padding: '8px 16px', // py-2 px-4
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        color: '#e5e5e5', // text-neutral-200
        transition: 'background-color 0.2s ease',
        borderRadius: '4px',
        fontSize: '14px', // text-sm
        '&:hover:not(:disabled)': {
            backgroundColor: '#262626', // hover:bg-neutral-800
        },
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        }
    });

    const dividerClass = createStyle({
        height: '1px',
        border: 'none',
        backgroundColor: '#404040', // border-neutral-700
        margin: '8px 0', // my-2
    });

    if (!isOpen) return null;
    
    return createPortal(
        <div
            ref={menuRef}
            className={containerClass}
            style={{ top: position.y, left: position.x }}
        >
            {items.map((item, index) => {
                if ('label' in item) {
                    const handleItemClick = () => {
                        item.onClick?.();
                        onClose(); // Close menu after item click
                    };
                    return (
                        <button
                            key={item.label}
                            className={itemClass}
                            onClick={handleItemClick}
                            disabled={item.disabled}
                        >
                            {item.label}
                        </button>
                    );
                } else {
                    return <hr key={`sep-${index}`} className={dividerClass} />;
                }
            })}
        </div>,
        document.body
    );
};