
import React, { useState, useCallback, useRef, useMemo } from 'react';
// FIX: import useGraphicsContext and fix other imports to prevent circular dependencies.
import { GraphicsContext, NodeData, ConnectionData, Position, useGraphicsContext } from './GraphicsContext';
import { Node } from './Node';
import { Connection } from './Connection';
import { useStyles, useTheme } from '../../core';
import { Button } from '../Button';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { DraftConnection } from './DraftConnection';
import { processGraph } from './graphProcessor';

interface GraphicsNodeEditorProps {
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
    style?: React.CSSProperties;
}

const GraphicsProvider: React.FC<{
    children: React.ReactNode;
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
}> = ({ children, initialNodes, initialConnections }) => {
    const [nodes, setNodes] = useState<NodeData[]>(initialNodes);
    const [connections, setConnections] = useState<ConnectionData[]>(initialConnections);
    const [pan, setPan] = useState<Position>({ x: 0, y: 0 });
    const connectingRef = useRef<{ nodeId: string; socketId: string; type: 'input' | 'output' } | null>(null);
    const [draftConnection, setDraftConnection] = useState<{ start: Position, end: Position } | null>(null);

    const getSocketPosition = useCallback((nodeId: string, socketId: string, type: 'input' | 'output') => {
        const element = document.querySelector(`[data-node-id="${nodeId}"] [data-socket-id="${socketId}"][data-socket-type="${type}"]`);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
    }, []);

    const startConnecting = useCallback((nodeId: string, socketId: string, type: 'input' | 'output', e: React.MouseEvent) => {
        connectingRef.current = { nodeId, socketId, type };
        setDraftConnection({ start: { x: e.clientX, y: e.clientY }, end: { x: e.clientX, y: e.clientY } });
    }, []);

    const stopConnecting = useCallback((nodeId: string, socketId: string, type: 'input' | 'output') => {
        if (connectingRef.current) {
            const start = connectingRef.current;
            const end = { nodeId, socketId, type };
            
            if (start.type !== end.type && start.nodeId !== end.nodeId) {
                const source = start.type === 'output' ? start : end;
                const target = start.type === 'input' ? start : end;
                
                // Prevent connecting to an already connected input
                const isTargetConnected = connections.some(c => c.targetNodeId === target.nodeId && c.targetSocketId === target.socketId);

                if (!isTargetConnected) {
                     setConnections(prev => [
                        ...prev,
                        {
                            sourceNodeId: source.nodeId,
                            sourceSocketId: source.socketId,
                            targetNodeId: target.nodeId,
                            targetSocketId: target.socketId,
                        }
                    ]);
                }
            }
        }
        connectingRef.current = null;
        setDraftConnection(null);
    }, [connections]);
    
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (connectingRef.current) {
            setDraftConnection(prev => prev ? { ...prev, end: { x: e.clientX, y: e.clientY } } : null);
        }
    }, []);

    const handleMouseUp = useCallback(() => {
        if (connectingRef.current) {
            connectingRef.current = null;
            setDraftConnection(null);
        }
    }, []);

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);


    const contextValue = {
        nodes,
        setNodes,
        connections,
        setConnections,
        pan,
        setPan,
        startConnecting,
        stopConnecting,
        isConnecting: !!connectingRef.current,
        draftConnection,
    };

    return <GraphicsContext.Provider value={contextValue}>{children}</GraphicsContext.Provider>;
};

export const GraphicsNodeEditor: React.FC<GraphicsNodeEditorProps> = ({ initialNodes, initialConnections, style }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-editor');

    const editorClass = createStyle({
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundImage: `radial-gradient(${theme.colors.border} 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        position: 'relative',
        overflow: 'hidden',
    });
    
    const canvasClass = createStyle({
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformOrigin: 'top left',
    });

    return (
        <GraphicsProvider initialNodes={initialNodes} initialConnections={initialConnections}>
            <EditorContent style={style} className={editorClass} canvasClass={canvasClass} />
        </GraphicsProvider>
    );
};

// Inner component to access context
const EditorContent: React.FC<{ style?: React.CSSProperties, className: string, canvasClass: string }> = ({ style, className, canvasClass }) => {
    const { nodes, setNodes, connections, pan, setPan } = useGraphicsContext();
    const editorRef = useRef<HTMLDivElement>(null);

    const [nodeOutputs, setNodeOutputs] = useState<Record<string, Record<string, any>>>({});

    const handleProcessGraph = useCallback(() => {
        const outputs = processGraph(nodes, connections);
        setNodeOutputs(outputs);
    }, [nodes, connections]);

    const handleUpdateNodeData = (nodeId: string, newData: Record<string, any>) => {
        setNodes(currentNodes =>
            currentNodes.map(n =>
                n.id === nodeId ? { ...n, data: { ...n.data, ...newData } } : n
            )
        );
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        if (!data || !editorRef.current) return;
        
        try {
            const { nodeId, offsetX, offsetY } = JSON.parse(data);
            const rect = editorRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - offsetX - pan.x;
            const y = e.clientY - rect.top - offsetY - pan.y;

            setNodes(prev => prev.map(node => node.id === nodeId ? { ...node, position: { x, y } } : node));
        } catch (error) {
            console.error("Error parsing drop data:", error);
        }
    };

    return (
        <div ref={editorRef} className={className} style={style} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
            <Stack direction="row" justify="space-between" align="center" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
                <Button onClick={handleProcessGraph}>Process Graph</Button>
            </Stack>
            <div className={canvasClass} style={{ transform: `translate(${pan.x}px, ${pan.y}px)` }}>
                <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                    <DraftConnection />
                    {connections.map((conn, i) => (
                        <Connection key={i} {...conn} />
                    ))}
                </svg>
                {nodes.map(node => {
                     const nodeInputs = useMemo(() => {
                        const inputs: Record<string, any> = {};
                        connections.forEach(conn => {
                            if (conn.targetNodeId === node.id) {
                                const sourceNodeOutput = nodeOutputs[conn.sourceNodeId];
                                if (sourceNodeOutput) {
                                    inputs[conn.targetSocketId] = sourceNodeOutput[conn.sourceSocketId];
                                }
                            }
                        });
                        node.inputs.forEach(inputSocket => {
                            const isConnected = connections.some(c => c.targetNodeId === node.id && c.targetSocketId === inputSocket.id);
                            if (!isConnected && inputSocket.value !== undefined) {
                                inputs[inputSocket.id] = inputSocket.value;
                            }
                        });
                        return inputs;
                    }, [node.id, node.inputs, connections, nodeOutputs]);

                    return (
                        <div key={node.id} data-node-id={node.id}>
                            <Node {...node}>
                                {node.component && <node.component data={node} inputs={nodeInputs} onUpdateData={(newData) => handleUpdateNodeData(node.id, newData)} />}
                            </Node>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};