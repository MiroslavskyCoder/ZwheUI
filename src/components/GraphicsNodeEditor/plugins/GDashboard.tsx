import React from 'react';
import { useGraphicsContext } from '../GraphicsContext';
import { useStyles, useTheme } from '../../../core';
import { Stack, Text, Button, Icon, Switch, Card } from '../../..';
import { LayoutIcon, CommentsIcon } from '../../../icons';

export const GDashboard: React.FC = () => {
    const { theme } = useTheme();
    const { fastMake, isContentBlurred, setIsContentBlurred } = useGraphicsContext();
    const createStyle = useStyles('g-dashboard');
    
    const containerClass = createStyle({
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        zIndex: 10,
    });
    
    const buttonClass = createStyle({
        width: '40px',
        height: '40px',
        padding: '0',
    });

    const handleFastMake = () => {
        fastMake(
            [
                { type: 'Number Input', data: { value: 10 } },
                { type: 'Slider Input', data: { value: 20 } },
                { type: 'Add' },
                { type: 'Display' }
            ],
            { x: 100, y: 300 } // Starting position
        );
    };

    return (
        <div className={containerClass}>
            <Card>
                <Stack align="center" gap="1rem">
                    <Button variant="secondary" className={buttonClass} onClick={handleFastMake} aria-label="Fast Make Node Chain">
                        <Icon as={LayoutIcon} size={20} />
                    </Button>
                     <Button variant="secondary" className={buttonClass} aria-label="Comments">
                        <Icon as={CommentsIcon} size={20} />
                    </Button>
                </Stack>
            </Card>
        </div>
    );
};
