import React, { useState, useCallback, useRef, useMemo } from 'react';
import { GraphicsContext, NodeData, ConnectionData, Position, useGraphicsContext } from './GraphicsContext';
import { Node } from './Node';
import { Connection } from './Connection';
import { useStyles, useTheme } from '../../core';
import { DraftConnection } from './DraftConnection';
import { processGraph } from './graphProcessor';
import { ContextMenu, ContextMenuItem } from '../ContextMenu/ContextMenu';

interface GraphicsProviderProps {
    children: React.ReactNode;
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
}

export const GraphicsProvider = ({ children, initialNodes, initialConnections }: GraphicsProviderProps) => {
    const [nodes, setNodes] = useState<NodeData[]>(initialNodes);
    const [connections, setConnections] = useState<ConnectionData[]>(initialConnections);
    const [pan, setPan] = useState<Position>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const editorRef = useRef<HTMLDivElement>(null);
    const connectingRef = useRef<{ nodeId: string; socketId: string; type: 'input' | 'output' } | null>(null);
    const [draftConnection, setDraftConnection] = useState<{ start: Position, end: Position } | null>(null);
    const [nodeOutputs, setNodeOutputs] = useState<Record<string, Record<string, any>>>({});

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
                     const newConnection: ConnectionData = {
                        id: `conn_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                        sourceNodeId: source.nodeId,
                        sourceSocketId: source.socketId,
                        targetNodeId: target.nodeId,
                        targetSocketId: target.socketId,
                        type: 'curved',
                     };
                     setConnections(prev => [...prev, newConnection]);
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

    const handleProcessGraph = useCallback(() => {
        const outputs = processGraph(nodes, connections);
        setNodeOutputs(outputs);
    }, [nodes, connections]);

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
        processGraph: handleProcessGraph,
        nodeOutputs,
    };

    return <GraphicsContext.Provider value={contextValue}>{children}</GraphicsContext.Provider>;
};

export const GraphicsNodeEditorView: React.FC<{ style?: React.CSSProperties; plugins?: React.FC[] }> = ({ style, plugins }) => {
    const { nodes, setNodes, connections, setConnections, pan, setPan, zoom, editorRef, nodeOutputs } = useGraphicsContext()!;
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-editor');
    const [isPanning, setIsPanning] = useState(false);
    const panState = useRef({ startPan: { x: 0, y: 0 }, startMouse: { x: 0, y: 0 } });

    const [contextMenu, setContextMenu] = useState<{
        isOpen: boolean;
        position: { x: number; y: number };
        connection: ConnectionData | null;
    }>({ isOpen: false, position: { x: 0, y: 0 }, connection: null });


    const editorClass = createStyle({
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundImage: `radial-gradient(${theme.colors.border} 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        position: 'relative',
        overflow: 'hidden',
        cursor: isPanning ? 'grabbing' : 'grab',
    });
    
    const nodeCanvasClass = createStyle({
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformOrigin: 'top left',
        pointerEvents: 'none', // Pass clicks through to the background
    });
    
    const svgOverlayClass = createStyle({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto', // Capture events for connections
    });

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 0 && e.target === e.currentTarget) {
            setIsPanning(true);
            panState.current = {
                startPan: { ...pan },
                startMouse: { x: e.clientX, y: e.clientY },
            };
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isPanning) {
            const dx = e.clientX - panState.current.startMouse.x;
            const dy = e.clientY - panState.current.startMouse.y;
            setPan({
                x: panState.current.startPan.x + dx,
                y: panState.current.startPan.y + dy,
            });
        }
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };

    const handleUpdateNodeData = (nodeId: string, newData: Record<string, any>) => {
        setNodes(currentNodes =>
            currentNodes.map(n =>
                n.id === nodeId ? { ...n, data: { ...n.data, ...newData } } : n
            )
        );
    };
    
    const handleConnectionContextMenu = (e: React.MouseEvent, connection: ConnectionData) => {
        e.preventDefault();
        setContextMenu({
            isOpen: true,
            position: { x: e.clientX, y: e.clientY },
            connection,
        });
    };

    const closeContextMenu = () => {
        setContextMenu(prev => ({ ...prev, isOpen: false, connection: null }));
    };

    const updateConnectionProp = (connectionId: string, props: Partial<ConnectionData>) => {
        setConnections(prev => prev.map(c => 
            c.id === connectionId ? { ...c, ...props } : c
        ));
        closeContextMenu();
    };

    const deleteConnection = (connectionId: string) => {
        setConnections(prev => prev.filter(c => c.id !== connectionId));
        closeContextMenu();
    };

    const toggleConnectionType = (connectionId: string) => {
        const conn = connections.find(c => c.id === connectionId);
        if (conn) {
            const newType = (conn.type === 'straight') ? 'curved' : 'straight';
            updateConnectionProp(connectionId, { type: newType });
        }
    };

    const contextMenuItems: ContextMenuItem[] = useMemo(() => {
        if (!contextMenu.connection) return [];
        const conn = contextMenu.connection;
        return [
            { label: 'Delete Connection', onClick: () => deleteConnection(conn.id) },
            { isSeparator: true },
            { label: 'Set Color to Accent', onClick: () => updateConnectionProp(conn.id, { color: theme.colors.accent }) },
            { label: 'Set Color to Secondary', onClick: () => updateConnectionProp(conn.id, { color: theme.colors.secondary }) },
            { label: 'Reset Color', onClick: () => updateConnectionProp(conn.id, { color: undefined }) },
            { isSeparator: true },
            { label: `Set Type to ${conn.type === 'straight' ? 'Curved' : 'Straight'}`, onClick: () => toggleConnectionType(conn.id) },
        ];
    }, [contextMenu.connection, theme.colors]);


    return (
        <div 
            ref={editorRef} 
            className={editorClass} 
            style={style} 
        >
            <svg 
                className={svgOverlayClass}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
                    {connections.map((conn) => (
                        <Connection key={conn.id} connection={conn} onContextMenu={handleConnectionContextMenu} />
                    ))}
                </g>
                <DraftConnection />
            </svg>
            <div className={nodeCanvasClass} style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}>
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
            
            {plugins && plugins.map((Plugin, i) => <Plugin key={i} />)}
            
            {contextMenu.isOpen && (
                <ContextMenu
                    isOpen={contextMenu.isOpen}
                    onClose={closeContextMenu}
                    position={contextMenu.position}
                    items={contextMenuItems}
                />
            )}
        </div>
    );
};