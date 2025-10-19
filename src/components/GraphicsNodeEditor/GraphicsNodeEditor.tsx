import React, { useState, useCallback, useRef, useMemo } from 'react';
import { GraphicsContext, NodeData, ConnectionData, Position } from './GraphicsContext';
import { Node } from './Node';
import { Connection } from './Connection';
import { useStyles, useTheme } from '../../core';
import { Button } from '../Button';
import { Stack } from '../Stack/Stack';
import { DraftConnection } from './DraftConnection';
import { processGraph } from './graphProcessor';

interface GraphicsNodeEditorProps {
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
    style?: React.CSSProperties;
    plugins?: React.FC[];
}

const GraphicsProvider: React.FC<{
    children: React.ReactNode;
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
}> = ({ children, initialNodes, initialConnections }) => {
    const [nodes, setNodes] = useState<NodeData[]>(initialNodes);
    const [connections, setConnections] = useState<ConnectionData[]>(initialConnections);
    const [pan, setPan] = useState<Position>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const editorRef = useRef<HTMLDivElement>(null);
    const connectingRef = useRef<{ nodeId: string; socketId: string; type: 'input' | 'output' } | null>(null);
    const [draftConnection, setDraftConnection] = useState<{ start: Position, end: Position } | null>(null);

    const startConnecting = useCallback((nodeId: string, socketId: string, type: 'input' | 'output', e: React.MouseEvent) => {
        connectingRef.current = { nodeId, socketId, type };
        const rect = editorRef.current?.getBoundingClientRect();
        if (rect) {
            const startPos = { 
                x: e.clientX - rect.left, 
                y: e.clientY - rect.top 
            };
            setDraftConnection({ start: startPos, end: startPos });
        }
    }, []);

    const stopConnecting = useCallback((nodeId: string, socketId: string, type: 'input' | 'output') => {
        if (connectingRef.current) {
            const start = connectingRef.current;
            const end = { nodeId, socketId, type };
            
            if (start.type !== end.type && start.nodeId !== end.nodeId) {
                const source = start.type === 'output' ? start : end;
                const target = start.type === 'input' ? start : end;
                
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
        if (connectingRef.current && editorRef.current) {
            const rect = editorRef.current.getBoundingClientRect();
            setDraftConnection(prev => prev ? { ...prev, end: { x: e.clientX - rect.left, y: e.clientY - rect.top } } : null);
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
        zoom,
        setZoom,
        editorRef,
        startConnecting,
        stopConnecting,
        isConnecting: !!connectingRef.current,
        draftConnection,
    };

    return <GraphicsContext.Provider value={contextValue}>{children}</GraphicsContext.Provider>;
};

export const GraphicsNodeEditor: React.FC<GraphicsNodeEditorProps> = ({ initialNodes, initialConnections, style, plugins }) => {
    return (
        <GraphicsProvider initialNodes={initialNodes} initialConnections={initialConnections}>
            <EditorContent style={style} plugins={plugins} />
        </GraphicsProvider>
    );
};

const EditorContent: React.FC<{ style?: React.CSSProperties; plugins?: React.FC[] }> = ({ style, plugins }) => {
    const { nodes, setNodes, connections, pan, setPan, zoom, editorRef } = React.useContext(GraphicsContext)!;
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-editor');
    const panState = useRef({ isPanning: false, startPan: { x: 0, y: 0 }, startMouse: { x: 0, y: 0 } });

    const [nodeOutputs, setNodeOutputs] = useState<Record<string, Record<string, any>>>({});

    const editorClass = createStyle({
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundImage: `radial-gradient(${theme.colors.border} 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        position: 'relative',
        overflow: 'hidden',
        cursor: panState.current.isPanning ? 'grabbing' : 'grab',
    });
    
    const canvasClass = createStyle({
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformOrigin: 'top left',
    });

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            panState.current = {
                isPanning: true,
                startPan: { ...pan },
                startMouse: { x: e.clientX, y: e.clientY },
            };
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (panState.current.isPanning) {
            const dx = e.clientX - panState.current.startMouse.x;
            const dy = e.clientY - panState.current.startMouse.y;
            setPan({
                x: panState.current.startPan.x + dx,
                y: panState.current.startPan.y + dy,
            });
        }
    };

    const handleMouseUp = () => {
        panState.current.isPanning = false;
    };

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

    return (
        <div 
            ref={editorRef} 
            className={editorClass} 
            style={style} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className={canvasClass} style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}>
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
                        <Node key={node.id} {...node}>
                            {node.component && <node.component data={node} inputs={nodeInputs} onUpdateData={(newData) => handleUpdateNodeData(node.id, newData)} />}
                        </Node>
                    );
                })}
            </div>

            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
                    {connections.map((conn, i) => (
                        <Connection key={i} {...conn} />
                    ))}
                </g>
                <DraftConnection />
            </svg>
            
            <Stack direction="row" justify="space-between" align="center" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
                <Button onClick={handleProcessGraph}>Process Graph</Button>
            </Stack>
            
            {plugins && plugins.map((Plugin, i) => <Plugin key={i} />)}
        </div>
    );
};