import React, { createContext, useContext } from 'react';

export interface Position {
    x: number;
    y: number;
}

export interface SocketData {
    id: string;
    label: string;
    type: string; // e.g., 'number', 'image', 'any'
    value?: any; // Static value for an input socket if not connected
    color?: string; // Color for connections originating from this output socket
}

export interface NodeData {
    id: string;
    label: string;
    position: Position;
    inputs: SocketData[];
    outputs: SocketData[];
    size?: { width: number; height: number };
    component?: React.FC<{ 
        data: NodeData; 
        inputs: Record<string, any>; 
        onUpdateData: (newData: Record<string, any>) => void;
    }>;
    process?: (inputs: Record<string, any>, data: NodeData['data']) => Record<string, any>;
    data?: Record<string, any>;
}

export interface ConnectionData {
    id: string;
    sourceNodeId: string;
    sourceSocketId: string;
    targetNodeId: string;
    targetSocketId: string;
    color?: string;
    type?: 'curved' | 'straight';
}

export interface FastMakeNode {
    type: string;
    data?: Record<string, any>;
}

export interface GraphicsContextType {
    nodes: NodeData[];
    setNodes: React.Dispatch<React.SetStateAction<NodeData[]>>;
    connections: ConnectionData[];
    setConnections: React.Dispatch<React.SetStateAction<ConnectionData[]>>;
    
    pan: Position;
    setPan: React.Dispatch<React.SetStateAction<Position>>;
    zoom: number;
    setZoom: React.Dispatch<React.SetStateAction<number>>;

    editorRef: React.RefObject<HTMLDivElement | null>;

    startConnecting: (nodeId: string, socketId: string, type: 'input' | 'output', e: React.MouseEvent) => void;
    stopConnecting: (nodeId: string, socketId: string, type: 'input' | 'output') => void;
    isConnecting: boolean;
    draftConnection: { start: Position, end: Position } | null;

    processGraph: () => void;
    nodeOutputs: Record<string, Record<string, any>>;

    createNode: (node: Omit<NodeData, 'id'>) => void;
    getNodes: () => NodeData[];
    updateNode: (nodeId: string, data: Partial<Omit<NodeData, 'id'>>) => void;
    deleteNode: (nodeId: string) => void;
    autoConnect: (sourceNodeId: string, sourceSocketId: string) => void;

    socketRelativePositions: Record<string, Record<string, Position>>;
    registerSocketPositions: (nodeId: string, positions: Record<string, Position>) => void;
    
    creatableNodeTypes: Record<string, Omit<NodeData, 'id' | 'position'>>;
    newCreateNode: (label: string, nodeTemplate: Omit<NodeData, 'id' | 'position'>) => void;

    // New additions for plugins
    fastMake: (config: FastMakeNode[], startPosition: Position) => void;
    isContentBlurred: boolean;
    setIsContentBlurred: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GraphicsContext = createContext<GraphicsContextType | null>(null);

export const useGraphicsContext = () => {
    const context = useContext(GraphicsContext);
    if (!context) {
        throw new Error('useGraphicsContext must be used within a GraphicsProvider');
    }
    return context;
};