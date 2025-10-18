import React from 'react';
import { Card } from '../Card/Card';
import { Text } from '../Text/Text';
import { NodeData } from './GraphicsContext';
import { useStyles, useTheme } from '../../core';

interface NodeProps {
    node: NodeData;
}

export const Node: React.FC<NodeProps> = ({ node }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('graphics-node');

    const nodeClass = createStyle({
        position: 'absolute',
        width: '200px',
        cursor: 'grab',
        userSelect: 'none',
        left: `${node.position.x}px`,
        top: `${node.position.y}px`,
    });

    const socketClass = createStyle({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: theme.colors.border,
        border: `2px solid ${theme.colors.secondary}`,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    });

    return (
        <div className={nodeClass}>
            <Card title={node.label}>
                {/* NOTE: Sockets are display-only in this simplified version. */}
                {[...Array(node.inputs)].map((_, i) => (
                    <div key={`in-${i}`} className={socketClass} style={{ left: '-6px' }} />
                ))}
                {[...Array(node.outputs)].map((_, i) => (
                    <div key={`out-${i}`} className={socketClass} style={{ right: '-6px' }} />
                ))}
                <Text size="sm">Node Content</Text>
            </Card>
        </div>
    );
};
