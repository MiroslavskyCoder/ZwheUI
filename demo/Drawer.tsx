import React, { useState } from 'react';
import { Drawer, Text, Stack, Button, Input, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';

const DrawerConfigurator: React.FC<{
    title: string;
    setTitle: (t: string) => void;
    position: 'left' | 'right';
    setPosition: (p: any) => void;
    setIsOpen: (o: boolean) => void;
}> = ({ title, setTitle, position, setPosition, setIsOpen }) => (
    <Stack gap="1.5rem">
        <Input label="Title Prop" value={title} onChange={e => setTitle(e.target.value)} />
        <Stack gap="0.5rem">
            <Text as="label" size="sm" weight="medium" color="textSecondary">Position Prop</Text>
            <SegmentedControl value={position} onChange={setPosition} options={[{label: 'Left', value: 'left'}, {label: 'Right', value: 'right'}]} />
        </Stack>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    </Stack>
);

const documentation = `# Drawer

A panel that slides in from the edge of the screen, typically used for navigation or settings. It renders in a portal attached to the document body.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the drawer.
*   \`onClose\` (function, required): A callback function to close the drawer.
*   \`children\` (React.ReactNode, required): The main content of the drawer.
*   \`title\` (string, optional): The title displayed in the drawer's header.
*   \`position\` (enum: 'left' | 'right', optional, default: 'right'): The edge from which the drawer slides in.
*   \`className\` (string, optional): Additional CSS classes for the drawer panel.

## Usage

\`\`\`tsx
import { Drawer, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    <Drawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Settings"
      position="left"
    >
      <p>Drawer content goes here.</p>
    </Drawer>
</>
\`\`\``;

const sourceCode = `import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSlide } from '../../core/hooks/useAnimation';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Backdrop } from '../Backdrop/Backdrop';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    position?: 'left' | 'right';
    className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, title, position = 'right', className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('drawer');
    const { isRendered, style: slideStyle } = useSlide(isOpen, { direction: position });
    const drawerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const titleId = useRef(\`drawer-title-\${Math.random().toString(36).substring(2, 9)}\`).current;

    useEffect(() => {
        if (isOpen) {
            const originalBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            triggerRef.current = document.activeElement as HTMLElement;

            const focusTimeout = setTimeout(() => {
                drawerRef.current?.focus();
            }, 100);

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }

                if (e.key === 'Tab') {
                    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                    );
                    if (!focusableElements || focusableElements.length === 0) {
                        e.preventDefault();
                        return;
                    };

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            
            document.addEventListener('keydown', handleKeyDown);

            return () => {
                document.body.style.overflow = originalBodyOverflow;
                clearTimeout(focusTimeout);
                document.removeEventListener('keydown', handleKeyDown);
                triggerRef.current?.focus();
            };
        }
    }, [isOpen, onClose]);
    
    if (!isRendered) return null;

    const drawerClass = createStyle({
        position: 'fixed',
        top: 0,
        bottom: 0,
        [position]: 0,
        width: '320px',
        maxWidth: '90vw',
        backgroundColor: theme.colors.backgroundSecondary,
        borderLeft: position === 'right' ? \`1px solid \${theme.colors.border}\` : 'none',
        borderRight: position === 'left' ? \`1px solid \${theme.colors.border}\` : 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
         '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
        '&:focus': {
            outline: 'none',
        }
    });
    
    const headerClass = createStyle({
        padding: theme.spacing.md,
        borderBottom: \`1px solid \${theme.colors.border}\`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
    });
    
    const contentClass = createStyle({
        padding: theme.spacing.md,
        overflowY: 'auto',
        flex: 1,
    });

    const closeButtonClass = createStyle({
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: theme.colors.textSecondary,
        padding: '4px',
        '&:hover': { color: theme.colors.text }
    });

    return createPortal(
        <>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <div 
                ref={drawerRef}
                className={\`\${drawerClass} \${className}\`} 
                style={slideStyle}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                <div className={headerClass}>
                    {title && <h2 id={titleId} style={{ fontSize: '1.125rem', fontWeight: 600, color: theme.colors.text }}>{title}</h2>}
                    <button className={closeButtonClass} onClick={onClose} aria-label="Close drawer">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                 <div className={contentClass}>
                    {children}
                 </div>
            </div>
        </>,
        document.body
    );
};`;

export const DrawerDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('Settings');
    const [position, setPosition] = useState<'left' | 'right'>('right');
    
    return (
        <>
            <DemoSection
                title="Drawer"
                description="A panel that slides in from the edge of the screen."
                livePreview={
                    <Text color="textSecondary">Use the 'Props' tab to configure and open the drawer.</Text>
                }
                propControls={
                    <DrawerConfigurator 
                        title={title} setTitle={setTitle}
                        position={position} setPosition={setPosition}
                        setIsOpen={setIsOpen}
                    />
                }
                documentation={documentation}
                sourceCode={sourceCode}
            />
            <Drawer 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                title={title}
                position={position}
            >
                <Stack gap="1rem">
                    <Text>This is the content of the drawer.</Text>
                    <Text>You can place forms, navigation, or any other content here.</Text>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </Stack>
            </Drawer>
        </>
    );
};
