import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// --- Types ---
export interface NodeData {
    id: string;
    label: string;
    position: { x: number; y: number };
    inputs: number;
    outputs: number;
}

export interface ConnectionData {
    id: string;
    fromNode: string;
    fromSocket: number;
    toNode: string;
    toSocket: number;
}

interface GraphicsState {
    nodes: Record<string, NodeData>;
    connections: ConnectionData[];
    pan: { x: number; y: number };
    zoom: number;
}

// --- Actions ---
type Action =
    | { type: 'MOVE_NODE'; payload: { id: string; position: { x: number; y: number } } }
    | { type: 'ADD_NODE'; payload: NodeData }
    | { type: 'ADD_CONNECTION'; payload: ConnectionData }
    | { type: 'SET_PAN_ZOOM'; payload: { pan: { x: number; y: number }; zoom: number } };

// --- Reducer ---
const graphicsReducer = (state: GraphicsState, action: Action): GraphicsState => {
    switch (action.type) {
        case 'MOVE_NODE':
            return {
                ...state,
                nodes: {
                    ...state.nodes,
                    [action.payload.id]: {
                        ...state.nodes[action.payload.id],
                        position: action.payload.position,
                    },
                },
            };
        case 'ADD_CONNECTION':
            return {
                ...state,
                connections: [...state.connections, action.payload],
            };
        case 'SET_PAN_ZOOM':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

// --- Context ---
interface GraphicsContextType {
    state: GraphicsState;
    dispatch: Dispatch<Action>;
}

const GraphicsContext = createContext<GraphicsContextType | null>(null);

export const useGraphics = () => {
    const context = useContext(GraphicsContext);
    if (!context) {
        throw new Error('useGraphics must be used within a GraphicsProvider');
    }
    return context;
};

// --- Provider ---
interface GraphicsProviderProps {
    children: React.ReactNode;
    initialState: GraphicsState;
}

export const GraphicsProvider: React.FC<GraphicsProviderProps> = ({ children, initialState }) => {
    const [state, dispatch] = useReducer(graphicsReducer, initialState);

    return (
        <GraphicsContext.Provider value={{ state, dispatch }}>
            {children}
        </GraphicsContext.Provider>
    );
};
