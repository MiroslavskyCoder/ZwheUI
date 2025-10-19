import React, { useState, useEffect, useCallback } from 'react';
import { useGraphicsContext, NodeData } from '../GraphicsContext';
import { ContextMenu, ContextMenuItem } from '../../ContextMenu/ContextMenu';

export const GMenu: React.FC = () => {
    const { editorRef, createNode, pan, zoom, creatableNodeTypes } = useGraphicsContext();
    const [menu, setMenu] = useState<{ isOpen: boolean; position: { x: number; y: number } }>({ isOpen: false, position: { x: 0, y: 0 } });

    const handleContextMenu = useCallback((e: MouseEvent) => {
        const hasCreatableNodes = creatableNodeTypes && Object.keys(creatableNodeTypes).length > 0;
        const editor = editorRef.current;
        const target = e.target as HTMLElement;

        if (!editor || !hasCreatableNodes) return;

        // Check if the event target is within the editor bounds.
        if (editor.contains(target)) {
            // Check if the click was on a node or any of its children.
            // Nodes and connections have their own context menu handlers which stop propagation,
            // but this is a safe fallback.
            const clickedOnNode = target.closest('[data-node-id]');

            // If we've reached this handler and the click wasn't on a node,
            // we can safely assume it was on the background canvas.
            if (!clickedOnNode) {
                e.preventDefault();
                setMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
            }
        }
    }, [editorRef, creatableNodeTypes]);

    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;
        
        // The listener is attached to the editor container.
        editor.addEventListener('contextmenu', handleContextMenu);
        return () => {
            editor.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [editorRef, handleContextMenu]);

    const addNode = (nodeTemplate: Omit<NodeData, 'id' | 'position'>) => {
        const editor = editorRef.current;
        if (!editor) return;

        const rect = editor.getBoundingClientRect();
        // Convert mouse position to canvas coordinates
        const canvasX = (menu.position.x - rect.left - pan.x) / zoom;
        const canvasY = (menu.position.y - rect.top - pan.y) / zoom;
        
        createNode({
            ...nodeTemplate,
            position: { x: canvasX, y: canvasY },
        });

        setMenu({ isOpen: false, position: { x: 0, y: 0 } });
    };

    const menuItems: ContextMenuItem[] = creatableNodeTypes ? Object.entries(creatableNodeTypes).map(([label, template]) => ({
        label: `Add ${label}`,
        onClick: () => addNode(template),
    })) : [];

    if (menuItems.length === 0) {
        return null;
    }

    return (
        <ContextMenu
            isOpen={menu.isOpen}
            onClose={() => setMenu({ ...menu, isOpen: false })}
            position={menu.position}
            items={menuItems}
        />
    );
};
