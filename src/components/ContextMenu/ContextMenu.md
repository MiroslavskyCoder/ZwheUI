# ContextMenu

A floating menu that appears at the cursor's position, typically triggered by a right-click. It renders in a React Portal to escape the DOM stacking context.

## Props

*   `isOpen` (boolean, required): Controls the visibility of the menu.
*   `onClose` (function, required): A callback function to close the menu.
*   `position` (object, required): An object with `x` and `y` coordinates to position the menu.
*   `items` (array of `ContextMenuItem`, required): The list of items to display in the menu.

## `ContextMenuItem` Structure

An item can either be a clickable action or a visual separator, defined using a discriminated union type.

```ts
type ContextMenuItem =
    // An action item
    | {
          isSeparator?: false; // or omitted
          label: string;
          onClick?: () => void;
          disabled?: boolean;
      }
    // A separator
    | {
          isSeparator: true;
      };
```

## Usage

```tsx
import { ContextMenu } from './src/components';
import { useState } from 'react';

const MyComponent = () => {
    const [menu, setMenu] = useState({
        isOpen: false,
        position: { x: 0, y: 0 },
    });

    const handleContextMenu = (e) => {
        e.preventDefault();
        setMenu({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
    };

    const closeMenu = () => setMenu(prev => ({ ...prev, isOpen: false }));

    const menuItems = [
        { label: 'Copy', onClick: () => { alert('Copied!'); closeMenu(); } },
        { label: 'Paste', onClick: () => { alert('Pasted!'); closeMenu(); }, disabled: true },
        { isSeparator: true },
        { label: 'Delete', onClick: () => { alert('Deleted!'); closeMenu(); } },
    ];

    return (
        <div onContextMenu={handleContextMenu} style={{ padding: '2rem', border: '1px dashed grey' }}>
            Right-click here
            <ContextMenu 
                isOpen={menu.isOpen} 
                onClose={closeMenu}
                position={menu.position}
                items={menuItems}
            />
        </div>
    );
}
```
