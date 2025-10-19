
import { NodeData, ConnectionData } from './GraphicsContext';

export const processGraph = (
    nodes: NodeData[],
    connections: ConnectionData[]
): Record<string, Record<string, any>> => {
    
    const outputs: Record<string, Record<string, any>> = {};
    const nodesToProcess = new Set(nodes.map(n => n.id));
    const maxIterations = nodes.length * 2; // Safety break for cycles
    let iterations = 0;

    // Build a map of what nodes connect to each input socket
    const inputConnections: Record<string, Record<string, { sourceNodeId: string, sourceSocketId: string }>> = {};
    connections.forEach(conn => {
        if (!inputConnections[conn.targetNodeId]) {
            inputConnections[conn.targetNodeId] = {};
        }
        inputConnections[conn.targetNodeId][conn.targetSocketId] = {
            sourceNodeId: conn.sourceNodeId,
            sourceSocketId: conn.sourceSocketId,
        };
    });

    while (nodesToProcess.size > 0 && iterations < maxIterations) {
        let madeProgress = false;

        nodesToProcess.forEach(nodeId => {
            const node = nodes.find(n => n.id === nodeId);
            if (!node) return;

            const nodeInputConnections = inputConnections[nodeId] || {};
            const inputSockets = node.inputs;

            let allInputsReady = true;
            const inputValues: Record<string, any> = {};

            for (const inputSocket of inputSockets) {
                const connection = nodeInputConnections[inputSocket.id];
                if (connection) { // Input is connected
                    const sourceNodeOutputs = outputs[connection.sourceNodeId];
                    if (sourceNodeOutputs && sourceNodeOutputs[connection.sourceSocketId] !== undefined) {
                        inputValues[inputSocket.id] = sourceNodeOutputs[connection.sourceSocketId];
                    } else {
                        allInputsReady = false;
                        break;
                    }
                } else { // Input is not connected, use static value if available
                    if (inputSocket.value !== undefined) {
                        inputValues[inputSocket.id] = inputSocket.value;
                    }
                }
            }

            if (allInputsReady) {
                if (node.process) {
                    try {
                        const result = node.process(inputValues, node.data);
                        outputs[nodeId] = result;
                    } catch (e) {
                         console.error(`Error processing node ${node.label} (${node.id}):`, e);
                         outputs[nodeId] = {}; // Mark as processed but with error
                    }
                } else {
                    outputs[nodeId] = {}; // Node has no process function, mark as processed
                }
                
                nodesToProcess.delete(nodeId);
                madeProgress = true;
            }
        });

        if (!madeProgress) {
            // Break if no progress was made in a full iteration, indicating a cycle or unresolved inputs
            break;
        }
        iterations++;
    }

    if (nodesToProcess.size > 0) {
        console.error("Could not fully process graph. Possible cycle detected or missing inputs for nodes:", Array.from(nodesToProcess));
    }

    return outputs;
};
