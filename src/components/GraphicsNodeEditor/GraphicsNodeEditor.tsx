import React from 'react';
import { GraphicsProvider, NodeData } from './GraphicsContext';
import { useStyles, useTheme } from '../../core';
import { Node } from './Node';
import { Connection } from './Connection';

interface GraphicsNodeEditorProps {
    nodes: Record<string, NodeData>;
    connections: any[];
}

const initialEditorState = {
    nodes: {},
    connections: [],
    pan: { x: 0, y: 0 },
    zoom: 1,
};

export const GraphicsNodeEditor: React.FC<GraphicsNodeEditorProps> = ({ nodes, connections }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-node-editor');

    const containerClass = createStyle({
        width: '100%',
        height: '500px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
    });

    const transformLayerClass = createStyle({
        width: '100%',
        height: '100%',
        position: 'absolute',
        transformOrigin: '0 0',
    });
    
    // NOTE: This is a simplified display-only version.
    // A full implementation would require complex state management for pan, zoom,
    // and interactions, which is handled in the context but the UI gestures are omitted for brevity.

    return (
        <GraphicsProvider initialState={{ ...initialEditorState, nodes, connections }}>
            <div className={containerClass}>
                <div className={transformLayerClass}>
                    <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                        {connections.map(conn => <Connection key={conn.id} connection={conn} />)}
                    </svg>

                    {Object.values(nodes).map(node => (
                        <Node key={node.id} node={node} />
                    ))}
                </div>
            </div>
        </GraphicsProvider>
    );
};
