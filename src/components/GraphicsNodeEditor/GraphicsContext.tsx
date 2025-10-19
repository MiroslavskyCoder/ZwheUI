
import React, { createContext, useContext } from 'react';

export interface Position {
    x: number;
    y: number;
}

export interface SocketData {
    id: string;
    label: string;
    value?: any; // Static value for an input socket if not connected
}

export interface NodeData {
    id: string;
    label: string;
    position: Position;
    inputs: SocketData[];
    outputs: SocketData[];
    component?: React.FC<{ 
        data: NodeData; 
        inputs: Record<string, any>; 
        onUpdateData: (newData: Record<string, any>) => void;
    }>;
    process?: (inputs: Record<string, any>, data: NodeData['data']) => Record<string, any>;
    data?: Record<string, any>;
}

export interface ConnectionData {
    sourceNodeId: string;
    sourceSocketId: string;
    targetNodeId: string;
    targetSocketId: string;
}

export interface GraphicsContextType {
    nodes: NodeData[];
    setNodes: React.Dispatch<React.SetStateAction<NodeData[]>>;
    connections: ConnectionData[];
    setConnections: React.Dispatch<React.SetStateAction<ConnectionData[]>>;
    
    pan: Position;
    setPan: React.Dispatch<React.SetStateAction<Position>>;

    startConnecting: (nodeId: string, socketId: string, type: 'input' | 'output', e: React.MouseEvent) => void;
    stopConnecting: (nodeId: string, socketId: string, type: 'input' | 'output') => void;
    isConnecting: boolean;
    draftConnection: { start: Position, end: Position } | null;
}

export const GraphicsContext = createContext<GraphicsContextType | null>(null);

export const useGraphicsContext = () => {
    const context = useContext(GraphicsContext);
    if (!context) {
        throw new Error('useGraphicsContext must be used within a GraphicsProvider');
    }
    return context;
};
