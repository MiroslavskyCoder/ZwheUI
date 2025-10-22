import React, { useState } from 'react';
import { ContextMenu, Text } from '../src/components';
import { DemoSection } from './DemoSection';
import { useTheme } from '../src/core';

const documentation = `# ContextMenu

A floating menu that appears at the cursor's position, typically triggered by a right-click.

## Props
*   \`isOpen\` (boolean, required)
*   \`onClose\` (function, required)
*   \`position\` ({ x: number, y: number }, required)
*   \`items\` (array of ContextMenuItem, required)
`;

const sourceCode = `import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../core/hooks/useInteractions';
import { useStyles, useTheme } from '../../core';

export type ContextMenuItem = { /* ... */ };

interface ContextMenuProps { /* ... */ }

export const ContextMenu: React.FC<ContextMenuProps> = ({ isOpen, onClose, position, items }) => {
    // ... logic
    if (!isOpen) return null;
    return createPortal(
        <div ref={menuRef} style={{ top: position.y, left: position.x }}>
            {/* ... item rendering ... */}
        </div>,
        document.body
    );
};`;

export const ContextMenuDemo = () => {
    const { theme } = useTheme();
    const [menu, setMenu] = useState({ isOpen: false, position: { x: 0, y: 0 } });

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
    };

    const closeMenu = () => setMenu(prev => ({ ...prev, isOpen: false }));

    const menuItems = [
        { label: 'Copy', onClick: () => { alert('Copied!'); closeMenu(); } },
        { label: 'Paste', onClick: () => { alert('Pasted!'); closeMenu(); }, disabled: true },
        { isSeparator: true as const },
        { label: 'Delete', onClick: () => { alert('Deleted!'); closeMenu(); } },
    ];

    return (
        <>
            <DemoSection
                title="Context Menu"
                description="A floating menu that appears on right-click."
                livePreview={
                    <div 
                        onContextMenu={handleContextMenu} 
                        style={{ padding: '2rem', border: `1px dashed ${theme.colors.border}`, borderRadius: '8px', textAlign: 'center' }}
                    >
                        <Text>Right-click in this box</Text>
                    </div>
                }
                propControls={<Text color="textSecondary">This is an interactive demo. The menu is controlled by the `onContextMenu` event in the preview.</Text>}
                documentation={documentation}
                fullSourceCode={sourceCode}
            />
            <ContextMenu 
                isOpen={menu.isOpen} 
                onClose={closeMenu}
                position={menu.position}
                items={menuItems}
            />
        </>
    );
};