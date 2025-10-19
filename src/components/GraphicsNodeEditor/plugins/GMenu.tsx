import React, { useState, useEffect, useCallback } from 'react';
import { useGraphicsContext, NodeData } from '../GraphicsContext';
import { ContextMenu, ContextMenuItem } from '../../ContextMenu/ContextMenu';
import { creatableNodeTypes as defaultCreatableNodeTypes } from '../nodeTypes';

interface GMenuProps {
    creatableNodeTypes?: Record<string, Omit<NodeData, 'id' | 'position'>>;
}

export const GMenu: React.FC<GMenuProps> = ({ creatableNodeTypes = defaultCreatableNodeTypes }) => {
    const { editorRef, createNode, pan, zoom } = useGraphicsContext();
    const [menu, setMenu] = useState<{ isOpen: boolean; position: { x: number; y: number } }>({ isOpen: false, position: { x: 0, y: 0 } });

    const handleContextMenu = useCallback((e: MouseEvent) => {
        const editor = editorRef.current;
        if (editor && e.target === editor.querySelector('svg')) {
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
        
        createNode({
            ...nodeTemplate,
            position: { x: canvasX, y: canvasY },
        });

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