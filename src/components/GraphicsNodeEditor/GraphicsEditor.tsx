import React from 'react';
import { GraphicsProvider, GraphicsNodeEditorView } from './GraphicsNodeEditor';
import { NodeData, ConnectionData } from './GraphicsContext';
import { GZoom } from './plugins/GZoom';
import { GMenu } from './plugins/GMenu';
import { GHeader } from './plugins/GHeader';
import { GFooter } from './plugins/GFooter';
import { GDashboard } from './plugins/GDashboard';
import { GPanArrows } from './plugins/GPanArrows';
import { GContentBlur } from './plugins/GContentBlur';

interface GraphicsEditorProps {
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
    creatableNodeTypes?: Record<string, Omit<NodeData, 'id' | 'position'>>;
    style?: React.CSSProperties;
}

export const GraphicsEditor: React.FC<GraphicsEditorProps> = ({
    initialNodes,
    initialConnections,
    creatableNodeTypes,
    style,
}) => {
    // Combine default plugins with any potential future custom plugins
    const defaultPlugins = [
        GZoom,
        GMenu,
        GHeader,
        GFooter,
        GDashboard,
        GPanArrows,
        GContentBlur,
    ];

    return (
        <GraphicsProvider
            initialNodes={initialNodes}
            initialConnections={initialConnections}
            creatableNodeTypes={creatableNodeTypes}
        >
            <GraphicsNodeEditorView
                style={style}
                plugins={defaultPlugins}
            />
        </GraphicsProvider>
    );
};
