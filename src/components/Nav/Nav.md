# Nav

A flexible navigation component for building horizontal navigation bars.

## Components

*   **Nav**: The main `<nav>` wrapper.
*   **Nav.List**: A container for a list of navigation items.
*   **Nav.Item**: A single, clickable navigation link.

## Props

### Nav.Item
*   `to` (string, optional): The path for client-side navigation (uses `react-router-dom`).
*   `href` (string, optional): The URL for a standard link.
*   `isActive` (boolean, optional): Applies an active style to the item (e.g., an underline).
*   All other standard `<a>` attributes are supported.

## Usage

```tsx
import { Nav } from './src/components';
import { useState } from 'react';

const [active, setActive] = useState('profile');

const handleClick = (e, item) => {
    e.preventDefault();
    setActive(item);
}

<Nav>
  <Nav.List>
    <Nav.Item 
      href="#" 
      isActive={active === 'profile'}
      onClick={(e) => handleClick(e, 'profile')}
    >
      Profile
    </Nav.Item>
    <Nav.Item 
      href="#" 
      isActive={active === 'dashboard'}
      onClick={(e) => handleClick(e, 'dashboard')}
    >
      Dashboard
    </Nav.Item>
  </Nav.List>
</Nav>
```