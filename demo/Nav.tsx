import React, { useState } from 'react';
import { Nav, Sofa, Text, Stack } from '../src/components';
import { useTheme } from '../src/core';

export const NavDemo = () => {
    const [active, setActive] = useState('home');
    const { theme } = useTheme();

    const handleClick = (e: React.MouseEvent, item: string) => {
        e.preventDefault();
        setActive(item);
    };

    return (
        <Sofa title="Nav" description="A horizontal navigation component for links.">
            <Stack gap="1.5rem">
                <Text weight="600">Default (Full-width)</Text>
                <div style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}`, borderRadius: '8px' }}>
                    <Nav>
                        <Nav.List>
                            <Nav.Item href="#" isActive={active === 'home'} onClick={(e) => handleClick(e, 'home')}>Home</Nav.Item>
                            <Nav.Item href="#" isActive={active === 'about'} onClick={(e) => handleClick(e, 'about')}>About</Nav.Item>
                            <Nav.Item href="#" isActive={active === 'contact'} onClick={(e) => handleClick(e, 'contact')}>Contact</Nav.Item>
                        </Nav.List>
                    </Nav>
                </div>
                
                <Text weight="600" style={{ marginTop: '1rem' }}>With `container` prop</Text>
                 <div style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}`, borderRadius: '8px' }}>
                    <Nav container={true}>
                        <Nav.List>
                            <Nav.Item href="#" isActive={active === 'home'} onClick={(e) => handleClick(e, 'home')}>Home</Nav.Item>
                            <Nav.Item href="#" isActive={active === 'about'} onClick={(e) => handleClick(e, 'about')}>About</Nav.Item>
                            <Nav.Item href="#" isActive={active === 'contact'} onClick={(e) => handleClick(e, 'contact')}>Contact</Nav.Item>
                        </Nav.List>
                    </Nav>
                </div>
            </Stack>
        </Sofa>
    );
};