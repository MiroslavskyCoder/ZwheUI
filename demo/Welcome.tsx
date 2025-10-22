import React from 'react';
import { Card, Center, Grid, Stack, Text, Icon } from '../src/components';
import { LayoutIcon, TypeIcon, DiamondIcon, ShareIcon, ImageIcon } from '../src/icons';
import { useTheme } from '../src/core';

interface WelcomeProps {
    onNavigate: (id: string) => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onNavigate }) => {
    const { theme } = useTheme();

    const featured = [
        { id: 'grid', label: 'Grid System', icon: LayoutIcon },
        { id: 'text', label: 'Typography', icon: TypeIcon },
        { id: 'button', label: 'Buttons', icon: DiamondIcon },
        { id: 'charts', label: 'Charts', icon: ShareIcon },
        { id: 'graphics-node-editor', label: 'Node Editor', icon: ShareIcon },
        { id: 'photo-editor', label: 'Photo Editor', icon: ImageIcon },
    ];
    
    return (
        <Center style={{ width: '100%', padding: '2rem' }}>
            <Stack gap="2rem" align="center" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <Stack gap="0.5rem">
                    <Text as="h1" size="3rem" weight="700" style={{ letterSpacing: '-0.05em' }}>
                        Welcome to ZwheUI
                    </Text>
                    <Text size="1.125rem" color={theme.colors.textSecondary}>
                        A showcase of a modern, reusable, and aesthetically pleasing React component library. 
                        Select a component from the sidebar to begin exploring.
                    </Text>
                </Stack>

                <Grid minItemWidth="200px" gap="1rem" style={{width: '100%'}}>
                    {featured.map(item => (
                        <Card key={item.id} onClick={() => onNavigate(item.id)}>
                            <Card.Body>
                                <Stack direction="row" gap="1rem" align="center">
                                    <Icon as={item.icon} size={20} color={theme.colors.primary} />
                                    <Text weight="500">{item.label}</Text>
                                </Stack>
                            </Card.Body>
                        </Card>
                    ))}
                </Grid>
                 <Text size="0.875rem" color={theme.colors.textSecondary} style={{ marginTop: '2rem' }}>
                    This entire showcase is built with the ZwheUI components themselves.
                 </Text>
            </Stack>
        </Center>
    );
};
