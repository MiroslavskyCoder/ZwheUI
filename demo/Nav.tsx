import React, { useState } from 'react';
import { Nav, Sofa, Text, Stack } from '../src/components';

export const NavDemo = () => {
    const [active, setActive] = useState('home');

    const handleClick = (e: React.MouseEvent, item: string) => {
        e.preventDefault();
        setActive(item);
    };

    return (
        <Sofa title="Nav" description="A horizontal navigation component for links.">
            <Nav>
                <Nav.List>
                    <Nav.Item href="#" isActive={active === 'home'} onClick={(e) => handleClick(e, 'home')}>Home</Nav.Item>
                    <Nav.Item href="#" isActive={active === 'about'} onClick={(e) => handleClick(e, 'about')}>About</Nav.Item>
                    <Nav.Item href="#" isActive={active === 'contact'} onClick={(e) => handleClick(e, 'contact')}>Contact</Nav.Item>
                </Nav.List>
            </Nav>
        </Sofa>
    );
};
