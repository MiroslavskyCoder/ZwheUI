import React, { useState, useEffect, useCallback } from 'react';
import { useGraphicsContext, NodeData } from '../GraphicsContext';
import { ContextMenu, ContextMenuItem } from '../../ContextMenu/ContextMenu';
import { creatableNodeTypes } from '../nodeTypes';

export const GMenu: React.FC = () => {
    const { editorRef, setNodes, pan, zoom } = useGraphicsContext();
    const [menu, setMenu] = useState<{ isOpen: boolean; position: { x: number; y: number } }>({ isOpen: false, position: { x: 0, y: 0 } });

    const handleContextMenu = useCallback((e: MouseEvent) => {
        // Only open menu if right-clicking on the editor background
        if (e.target === editorRef.current) {
            e.preventDefault();
            setMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
        }
    }, [editorRef]);

    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;
        
        editor.addEventListener('contextmenu', handleContextMenu);
        return () => {
            editor.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [editorRef, handleContextMenu]);

    const addNode = (nodeTemplate: Omit<NodeData, 'id' | 'position'>) => {
        const editor = editorRef.current;
        if (!editor) return;

        const rect = editor.getBoundingClientRect();
        const canvasX = (menu.position.x - rect.left - pan.x) / zoom;
        const canvasY = (menu.position.y - rect.top - pan.y) / zoom;
        
        const newNode: NodeData = {
            ...nodeTemplate,
            id: `node_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            position: { x: canvasX, y: canvasY },
            // Ensure data object exists and is a copy, not a reference
            data: { ...(nodeTemplate.data || {}) },
        };

        setNodes(prev => [...prev, newNode]);
        setMenu({ isOpen: false, position: { x: 0, y: 0 } });
    };

    const menuItems: ContextMenuItem[] = Object.entries(creatableNodeTypes).map(([label, template]) => ({
        label: `Add ${label}`,
        onClick: () => addNode(template),
    }));

    return (
        <ContextMenu
            isOpen={menu.isOpen}
            onClose={() => setMenu({ ...menu, isOpen: false })}
            position={menu.position}
            items={menuItems}
        />
    );
};
