import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { GraphicsContext, NodeData, ConnectionData, Position, useGraphicsContext } from './GraphicsContext';
import { Node } from './Node';
import { Connection } from './Connection';
import { useStyles, useTheme } from '../../core';
import { DraftConnection } from './DraftConnection';
import { processGraph } from './graphProcessor';
import { ContextMenu, ContextMenuItem, Dialog, Input, useToast } from '..';

interface GraphicsProviderProps {
    children: React.ReactNode;
    initialNodes: NodeData[];
    initialConnections: ConnectionData[];
    creatableNodeTypes?: Record<string, Omit<NodeData, 'id' | 'position'>>;
}

export const GraphicsProvider = ({ children, initialNodes, initialConnections, creatableNodeTypes: initialCreatableNodeTypes = {} }: GraphicsProviderProps) => {
    const [nodes, setNodes] = useState<NodeData[]>(initialNodes);
    const [connections, setConnections] = useState<ConnectionData[]>(initialConnections);
    const [pan, setPan] = useState<Position>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const editorRef = useRef<HTMLDivElement>(null);
    const connectingRef = useRef<{ nodeId: string; socketId: string; type: 'input' | 'output' } | null>(null);
    const [draftConnection, setDraftConnection] = useState<{ start: Position, end: Position } | null>(null);
    const [nodeOutputs, setNodeOutputs] = useState<Record<string, Record<string, any>>>({});
    const [socketRelativePositions, setSocketRelativePositions] = useState<Record<string, Record<string, Position>>>({});
    const { addToast } = useToast();
    const [creatableNodeTypes, setCreatableNodeTypes] = useState(initialCreatableNodeTypes);

    const newCreateNode = useCallback((label: string, nodeTemplate: Omit<NodeData, 'id' | 'position'>) => {
        setCreatableNodeTypes(prev => ({ ...prev, [label]: nodeTemplate }));
    }, []);

    const nodesRef = useRef(nodes);
    useEffect(() => {
        nodesRef.current = nodes;
    }, [nodes]);
    
    const pendingSocketPositions = useRef<Record<string, Record<string, Position>>>({});
    const positionUpdateTimer = useRef<number | null>(null);

    useEffect(() => {
        // Cleanup timer on unmount
        return () => {
            if (positionUpdateTimer.current !== null) {
                clearTimeout(positionUpdateTimer.current);
            }
        };
    }, []);

    const registerSocketPositions = useCallback((nodeId: string, positions: Record<string, Position>) => {
        pendingSocketPositions.current[nodeId] = positions;

        if (positionUpdateTimer.current !== null) {
            clearTimeout(positionUpdateTimer.current);
        }

        positionUpdateTimer.current = window.setTimeout(() => {
            setSocketRelativePositions(prev => ({
                ...prev,
                ...pendingSocketPositions.current
            }));
            pendingSocketPositions.current = {};
            positionUpdateTimer.current = null;
        }, 0);
    }, []);

    const getNodes = useCallback(() => {
        return nodesRef.current;
    }, []);

    const createNode = useCallback((nodeData: Omit<NodeData, 'id'>) => {
        const newNode: NodeData = {
            ...nodeData,
            id: `node_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            // Ensure data is a copy to prevent reference issues
            data: { ...(nodeData.data || {}) },
        };
        setNodes(prev => [...prev, newNode]);
    }, [setNodes]);

    const updateNode = useCallback((nodeId: string, data: Partial<Omit<NodeData, 'id'>>) => {
        setNodes(prev => prev.map(n => (n.id === nodeId ? { ...n, ...data } : n)));
    }, [setNodes]);

    const deleteNode = useCallback((nodeId: string) => {
        setNodes(prev => prev.filter(n => n.id !== nodeId));
        setConnections(prev => prev.filter(c => c.sourceNodeId !== nodeId && c.targetNodeId !== nodeId));
    }, [setNodes, setConnections]);

    const autoConnect = useCallback((sourceNodeId: string, sourceSocketId: string) => {
        const sourceNode = nodes.find(n => n.id === sourceNodeId);
        if (!sourceNode) return;

        let bestTarget: {
            targetNodeId: string;
            targetSocketId: string;
            distance: number;
        } | null = null;

        nodes.forEach(targetNode => {
            if (targetNode.id === sourceNodeId) return;

            targetNode.inputs.forEach(inputSocket => {
                const isConnected = connections.some(c => c.targetNodeId === targetNode.id && c.targetSocketId === inputSocket.id);
                if (!isConnected) {
                    const distance = Math.sqrt(
                        Math.pow(targetNode.position.x - sourceNode.position.x, 2) +
                        Math.pow(targetNode.position.y - sourceNode.position.y, 2)
                    );

                    if (bestTarget === null || distance < bestTarget.distance) {
                        bestTarget = {
                            targetNodeId: targetNode.id,
                            targetSocketId: inputSocket.id,
                            distance,
                        };
                    }
                }
            });
        });

        if (bestTarget) {
            const newConnection: ConnectionData = {
                id: `conn_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                sourceNodeId,
                sourceSocketId,
                targetNodeId: bestTarget.targetNodeId,
                targetSocketId: bestTarget.targetSocketId,
                type: 'curved',
            };
            setConnections(prev => [...prev, newConnection]);
        }
    }, [nodes, connections, setConnections]);

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
                const sourceInfo = start.type === 'output' ? start : end;
                const targetInfo = start.type === 'input' ? start : end;

                const sourceNode = nodes.find(n => n.id === sourceInfo.nodeId);
                const targetNode = nodes.find(n => n.id === targetInfo.nodeId);

                if (sourceNode && targetNode) {
                    const sourceSocket = sourceNode.outputs.find(s => s.id === sourceInfo.socketId);
                    const targetSocket = targetNode.inputs.find(s => s.id === targetInfo.socketId);

                    if (sourceSocket && targetSocket) {
                        const sourceType = sourceSocket.type;
                        const targetType = targetSocket.type;
                        const areTypesCompatible = sourceType === 'any' || targetType === 'any' || sourceType === targetType;

                        if (!areTypesCompatible) {
                            addToast({
                                title: 'Connection Error',
                                description: `Cannot connect type '${sourceType}' to type '${targetType}'.`,
                                variant: 'error',
                            });
                        } else {
                            const isTargetConnected = connections.some(c => c.targetNodeId === targetInfo.nodeId && c.targetSocketId === targetInfo.socketId);
                            if (!isTargetConnected) {
                                const newConnection: ConnectionData = {
                                    id: `conn_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                                    sourceNodeId: sourceInfo.nodeId,
                                    sourceSocketId: sourceInfo.socketId,
                                    targetNodeId: targetInfo.nodeId,
                                    targetSocketId: targetInfo.socketId,
                                    type: 'curved',
                                };
                                setConnections(prev => [...prev, newConnection]);
                            } else {
                                 addToast({
                                    title: 'Connection Warning',
                                    description: `Input '${targetSocket.label}' is already connected.`,
                                    variant: 'warning',
                                });
                            }
                        }
                    }
                }
            }
        }
        connectingRef.current = null;
        setDraftConnection(null);
    }, [connections, nodes, addToast]);
    
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
        createNode,
        getNodes,
        updateNode,
        deleteNode,
        autoConnect,
        socketRelativePositions,
        registerSocketPositions,
        creatableNodeTypes,
        newCreateNode,
    };

    return <GraphicsContext.Provider value={contextValue}>{children}</GraphicsContext.Provider>;
};

const NodeRenderer: React.FC<{ node: NodeData; onContextMenu: (e: React.MouseEvent, nodeId: string) => void }> = ({ node, onContextMenu }) => {
    const { connections, nodeOutputs, setNodes } = useGraphicsContext();

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

    const handleUpdateNodeData = useCallback((newData: Record<string, any>) => {
        setNodes(currentNodes =>
            currentNodes.map(n =>
                n.id === node.id ? { ...n, data: { ...n.data, ...newData } } : n
            )
        );
    }, [node.id, setNodes]);

    return (
        <Node {...node} onContextMenu={onContextMenu}>
            {node.component && <node.component data={node} inputs={nodeInputs} onUpdateData={handleUpdateNodeData} />}
        </Node>
    );
};


export const GraphicsNodeEditorView: React.FC<{ style?: React.CSSProperties; plugins?: React.FC[] }> = ({ style, plugins }) => {
    const { 
        nodes, connections, setConnections, pan, setPan, zoom, editorRef,
        updateNode, deleteNode, autoConnect, socketRelativePositions
    } = useGraphicsContext()!;
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-editor');
    const [isPanning, setIsPanning] = useState(false);
    const panState = useRef({ startPan: { x: 0, y: 0 }, startMouse: { x: 0, y: 0 } });

    const [connectionContextMenu, setConnectionContextMenu] = useState<{
        isOpen: boolean;
        position: { x: number; y: number };
        connection: ConnectionData | null;
    }>({ isOpen: false, position: { x: 0, y: 0 }, connection: null });
    
    const [nodeContextMenu, setNodeContextMenu] = useState<{
        isOpen: boolean;
        position: Position;
        node: NodeData | null;
    }>({ isOpen: false, position: { x: 0, y: 0 }, node: null });

    const [renameDialog, setRenameDialog] = useState<{
        isOpen: boolean;
        nodeId: string | null;
        currentName: string;
    }>({ isOpen: false, nodeId: null, currentName: '' });
    const [newNodeName, setNewNodeName] = useState('');


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
    
    const handleConnectionContextMenu = (e: React.MouseEvent, connection: ConnectionData) => {
        e.preventDefault();
        e.stopPropagation();
        setConnectionContextMenu({
            isOpen: true,
            position: { x: e.clientX, y: e.clientY },
            connection,
        });
    };

    const closeConnectionContextMenu = () => {
        setConnectionContextMenu(prev => ({ ...prev, isOpen: false, connection: null }));
    };

    const updateConnectionProp = (connectionId: string, props: Partial<ConnectionData>) => {
        setConnections(prev => prev.map(c => 
            c.id === connectionId ? { ...c, ...props } : c
        ));
        closeConnectionContextMenu();
    };

    const deleteConnection = (connectionId: string) => {
        setConnections(prev => prev.filter(c => c.id !== connectionId));
        closeConnectionContextMenu();
    };

    const toggleConnectionType = (connectionId: string) => {
        const conn = connections.find(c => c.id === connectionId);
        if (conn) {
            const newType = (conn.type === 'straight') ? 'curved' : 'straight';
            updateConnectionProp(connectionId, { type: newType });
        }
    };
    
    const handleNodeContextMenu = (e: React.MouseEvent, nodeId: string) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
            setNodeContextMenu({
                isOpen: true,
                position: { x: e.clientX, y: e.clientY },
                node,
            });
        }
    };

    const closeNodeContextMenu = () => {
        setNodeContextMenu(prev => ({ ...prev, isOpen: false, node: null }));
    };

    const handleCloseRenameDialog = () => {
        setRenameDialog({ isOpen: false, nodeId: null, currentName: '' });
        setNewNodeName('');
    };

    const handleSaveNodeName = () => {
        if (renameDialog.nodeId && newNodeName.trim()) {
            updateNode(renameDialog.nodeId, { label: newNodeName.trim() });
        }
        handleCloseRenameDialog();
    };

    const connectionPoints = useMemo(() => {
        return connections.map(conn => {
            const sourceNode = nodes.find(n => n.id === conn.sourceNodeId);
            const targetNode = nodes.find(n => n.id === conn.targetNodeId);
            
            const sourceSocketRelatives = socketRelativePositions[conn.sourceNodeId];
            const targetSocketRelatives = socketRelativePositions[conn.targetNodeId];
    
            if (!sourceNode || !targetNode || !sourceSocketRelatives || !targetSocketRelatives) return null;
    
            const sourceSocketPos = sourceSocketRelatives[conn.sourceSocketId];
            const targetSocketPos = targetSocketRelatives[conn.targetSocketId];
    
            if (!sourceSocketPos || !targetSocketPos) return null;
    
            const startPos = {
                x: sourceNode.position.x + sourceSocketPos.x,
                y: sourceNode.position.y + sourceSocketPos.y,
            };
            const endPos = {
                x: targetNode.position.x + targetSocketPos.x,
                y: targetNode.position.y + targetSocketPos.y,
            };
    
            const sourceSocket = sourceNode.outputs.find(s => s.id === conn.sourceSocketId);
            const color = conn.color || sourceSocket?.color || theme.colors.secondary;
    
            return {
                id: conn.id,
                startPos,
                endPos,
                color,
                type: conn.type || 'curved',
                originalConnection: conn,
            };
        }).filter((p): p is NonNullable<typeof p> => p !== null);
    }, [nodes, connections, socketRelativePositions, theme.colors.secondary]);

    const connectionContextMenuItems: ContextMenuItem[] = useMemo(() => {
        if (!connectionContextMenu.connection) return [];
        const conn = connectionContextMenu.connection;
        return [
            { label: 'Delete Connection', onClick: () => deleteConnection(conn.id) },
            { isSeparator: true },
            { label: 'Set Color to Accent', onClick: () => updateConnectionProp(conn.id, { color: theme.colors.accent }) },
            { label: 'Set Color to Secondary', onClick: () => updateConnectionProp(conn.id, { color: theme.colors.secondary }) },
            { label: 'Reset Color', onClick: () => updateConnectionProp(conn.id, { color: undefined }) },
            { isSeparator: true },
            { label: `Set Type to ${conn.type === 'straight' ? 'Curved' : 'Straight'}`, onClick: () => toggleConnectionType(conn.id) },
        ];
    }, [connectionContextMenu.connection, theme.colors, connections, setConnections]);

    const nodeContextMenuItems: ContextMenuItem[] = useMemo(() => {
        if (!nodeContextMenu.node) return [];
        const node = nodeContextMenu.node;
        const colorCycle = [theme.colors.primary, theme.colors.accent, '#10b981', '#ef4444', theme.colors.secondary, '#9333ea'];

        const handleChangeOutputColor = (socketId: string) => {
            const newOutputs = node.outputs.map(output => {
                if (output.id === socketId) {
                    const currentColor = output.color || theme.colors.secondary;
                    const currentIndex = colorCycle.indexOf(currentColor);
                    const nextIndex = (currentIndex + 1) % colorCycle.length;
                    return { ...output, color: colorCycle[nextIndex] };
                }
                return output;
            });
            updateNode(node.id, { outputs: newOutputs });
            closeNodeContextMenu();
        };

        const items: ContextMenuItem[] = [
            {
                label: 'Rename Node',
                onClick: () => {
                    setNewNodeName(node.label);
                    setRenameDialog({ isOpen: true, nodeId: node.id, currentName: node.label });
                    closeNodeContextMenu();
                }
            },
            {
                label: 'Delete Node',
                onClick: () => {
                    deleteNode(node.id);
                    closeNodeContextMenu();
                }
            },
        ];

        if (node.outputs.length > 0) {
            items.push({ isSeparator: true });
            node.outputs.forEach(output => {
                items.push({
                    label: `Cycle '${output.label}' Color`,
                    onClick: () => handleChangeOutputColor(output.id)
                });
                items.push({
                    label: `Auto-connect '${output.label}'`,
                    onClick: () => {
                        autoConnect(node.id, output.id);
                        closeNodeContextMenu();
                    }
                });
            });
        }

        return items;

    }, [nodeContextMenu.node, theme.colors, updateNode, deleteNode, autoConnect]);


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
                    {connectionPoints.map((points) => (
                        <Connection 
                            key={points.id}
                            startPos={points.startPos}
                            endPos={points.endPos}
                            color={points.color}
                            type={points.type}
                            onContextMenu={(e) => handleConnectionContextMenu(e, points.originalConnection)}
                        />
                    ))}
                </g>
                <DraftConnection />
            </svg>
            <div className={nodeCanvasClass} style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}>
                {nodes.map(node => (
                    <NodeRenderer key={node.id} node={node} onContextMenu={handleNodeContextMenu} />
                ))}
            </div>
            
            {plugins && plugins.map((Plugin, i) => <Plugin key={i} />)}
            
            {connectionContextMenu.isOpen && (
                <ContextMenu
                    isOpen={connectionContextMenu.isOpen}
                    onClose={closeConnectionContextMenu}
                    position={connectionContextMenu.position}
                    items={connectionContextMenuItems}
                />
            )}
            {nodeContextMenu.isOpen && (
                <ContextMenu
                    isOpen={nodeContextMenu.isOpen}
                    onClose={closeNodeContextMenu}
                    position={nodeContextMenu.position}
                    items={nodeContextMenuItems}
                />
            )}
            {renameDialog.isOpen && (
                <Dialog
                    isOpen={renameDialog.isOpen}
                    onClose={handleCloseRenameDialog}
                    title={`Rename Node: "${renameDialog.currentName}"`}
                    actions={[
                        { label: 'Cancel', onClick: handleCloseRenameDialog, variant: 'secondary' },
                        { label: 'Save', onClick: handleSaveNodeName, variant: 'primary' }
                    ]}
                >
                    <Input
                        label="New Name"
                        value={newNodeName}
                        onChange={(e) => setNewNodeName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSaveNodeName();
                            }
                        }}
                        autoFocus
                    />
                </Dialog>
            )}
        </div>
    );
};