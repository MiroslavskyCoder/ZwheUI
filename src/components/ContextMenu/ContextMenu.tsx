import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../core/hooks/useInteractions';
import { useStyles, useTheme } from '../../core';

// FIX: Changed to a discriminated union type to properly distinguish between action items and separators.
// A separator does not need a label, while an action item does.
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
    const { theme } = useTheme();
    const createStyle = useStyles('context-menu');
    const menuRef = useClickOutside<HTMLDivElement>(onClose);

    const containerClass = createStyle({
        position: 'fixed',
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '6px',
        border: `1px solid ${theme.colors.border}`,
        boxShadow: `0 4px 12px rgba(0,0,0,0.5)`,
        minWidth: '180px',
        zIndex: 100,
        overflow: 'hidden',
        padding: '4px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });

    const itemClass = createStyle({
        width: '100%',
        padding: '8px 12px',
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        borderRadius: '4px',
        fontSize: '14px',
        '&:hover:not(:disabled)': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: theme.colors.text,
        },
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        }
    });

    const dividerClass = createStyle({
        height: '1px',
        border: 'none',
        backgroundColor: theme.colors.border,
        margin: '4px 0',
    });

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={menuRef}
            className={containerClass}
            style={{ top: position.y, left: position.x }}
        >
            {items.map((item, index) => (
                item.isSeparator ? (
                    <hr key={`sep-${index}`} className={dividerClass} />
                ) : (
                    <button
                        key={item.label}
                        className={itemClass}
                        onClick={item.onClick}
                        disabled={item.disabled}
                    >
                        {item.label}
                    </button>
                )
            ))}
        </div>,
        document.body
    );
};