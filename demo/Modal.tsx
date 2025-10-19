import React, { useState } from 'react';
import { Modal, Text, Stack, Button, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const ModalConfigurator: React.FC<{
    title: string;
    setTitle: (t: string) => void;
    setIsOpen: (o: boolean) => void;
}> = ({ title, setTitle, setIsOpen }) => (
    <Stack gap="1.5rem">
        <Input label="Title Prop" value={title} onChange={e => setTitle(e.target.value)} />
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </Stack>
);

const documentation = `# Modal

A dialog window that appears on top of the main content, disabling page interaction until it is dismissed. It renders in a portal attached to the document body.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the modal.
*   \`onClose\` (function, required): A callback function to close the modal. This is triggered by clicking the close button or the backdrop.
*   \`children\` (React.ReactNode, required): The content to be displayed inside the modal.
*   \`title\` (string, optional): A title to display in the modal's header.
*   \`className\` (string, optional): Additional CSS classes for the modal's content panel.

## Usage

\`\`\`tsx
import { Modal, Button, Text } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Basic Modal"
    >
      <Text>This is the content of the modal.</Text>
    </Modal>
</>
\`\`\``;

const sourceCode = `import React, { useRef, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useFade } from '../../core/hooks/useAnimation';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    className = ''
}) => {
    const { theme } = useTheme();
    const createStyle = useStyles('modal');
    const { isRendered, style: fadeStyle } = useFade(isOpen, 200);

    const modalRef = useRef<HTMLDivElement>(null);
    /* ... more internal logic for focus trapping and accessibility ... */

    if (!isRendered) return null;

    const containerClass = createStyle({ /* ... styles ... */ });
    const modalClass = createStyle({ /* ... styles ... */ });
    
    return (
        <div className={containerClass} style={fadeStyle} onClick={handleContainerClick}>
            <div
                ref={modalRef}
                className={\`\${modalClass} \${className}\`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                tabIndex={-1}
            >
                {title && <h2 id={titleId}>{title}</h2>}
                <button onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
}`;

export const ModalDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('Basic Modal');
    
    return (
        <>
            <DemoSection
                title="Modal"
                description="A modal dialog that appears on top of the main content, disabling page interaction until dismissed."
                livePreview={
                    <Text color="textSecondary">Use the 'Props' tab to configure and open the modal.</Text>
                }
                propControls={
                    <ModalConfigurator
                        title={title}
                        setTitle={setTitle}
                        setIsOpen={setIsOpen}
                    />
                }
                documentation={documentation}
                sourceCode={sourceCode}
            />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
                <Text>This is the content of the modal. You can put any React components here.</Text>
            </Modal>
        </>
    );
};
